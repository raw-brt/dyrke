import { Period } from "@generated/dyrketypes";
import { getPeriodInterval } from "@lib/getPeriodInterval";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getBuiltGraphSDK } from "src/.graphclient";
import { useProfileStore } from "src/store/profiles";

type PeriodInterval = { start: number, end: number }

const sdk = getBuiltGraphSDK();

export const usePerformanceMetrics= (period: Period) => {
  const queryClient = useQueryClient();

  // Build array of pages for the given queries
  const [follows, setFollows] = useState<unknown[]>([]);
  const [posts, setPosts] = useState<unknown[]>([]);

  // Get last elements ID for a given query to get pages of 1000 items
  const [lastUserId, setLastUserId] = useState("");
  const [lastPubId, setLastPubId] = useState(0);

  // Get period interval according to selected period by the user
  const [periodInterval, setPeriodInterval] = useState<PeriodInterval>(getPeriodInterval(period));

  // Store
  const userProfile = useProfileStore((state) => state.currentProfile);
  const userId = parseInt(userProfile?.id, 16).toString();
  const handle = userProfile?.handle;

  // Get followers query
  const followersByInterval = useQuery(
    ["GetFollowersByInterval", userId, periodInterval, lastUserId],
    () => sdk.GetFollowersByInterval({ 
      id: userId, 
      gt: periodInterval?.start, 
      lt: periodInterval?.end, 
      lastID: lastUserId 
    }),
    { 
      refetchOnWindowFocus: false,
      staleTime: 60000,
      onSuccess: (data) => {

        // If there are the max number of elements possible, keep fetching 
        if (data.follows.length === 1000) {
          console.log("Follows === 1000: ", data.follows)
          setFollows([...follows as [any], data.follows]);
          setLastUserId(data.follows[999].id);
        } else {
          console.log("Follows < 1000: ", data.follows)
          setFollows([...follows as [any], data.follows]);

          // Put manually in the cache the paginated result
          queryClient.setQueryData(
            ["GetFollowersByInterval", userId, periodInterval, lastUserId],
            follows
          )
        }
      }
     },
  );

  // Get publications
  const postsByInterval = useQuery(
    ["GetPostsByInterval", handle, periodInterval, lastPubId],
    () => sdk.GetPostsByInterval({ 
      handle: handle, 
      gt: periodInterval?.start, 
      lt: periodInterval?.end, 
      lastPubId: lastPubId 
    }),
    { 
      refetchOnWindowFocus: false,
      staleTime: 60000,
      onSuccess: (data) => {
        // If there are the max number of elements possible, keep fetching 
        if (data.posts.length === 1000) {
          setPosts([...posts as [any], data.posts]);
          setLastPubId(data.posts[999].pubId);
        } else {
          setPosts([...posts as [any], data.posts]);

          // Put manually in the cache the paginated result
          queryClient.setQueryData(
            ["GetPostsByInterval", handle, periodInterval, lastPubId],
            posts
          )
        }
      }

      // Set cache by hand with posts result
     },
  );  

  // Get mirrors

  // Get collects

  // Get upvotes?

  // If user selects another time interval, reset state.
  useEffect(() => {
    setPeriodInterval(getPeriodInterval(period));

    setPosts([]);
    setLastPubId(0);

    setFollows([]);
    setLastUserId("");

  }, [period]);

  return {
    followers: {
      followersByInterval,
      follows
    },
    posts: {
      postsByInterval,
      posts
    }
  };
};