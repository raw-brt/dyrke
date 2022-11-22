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
  const [mirrors, setMirrors] = useState<unknown[]>([]);
  const [comments, setComments] = useState<unknown[]>([]);

  // Get last elements ID for a given query to get pages of 1000 items
  const [lastUserId, setLastUserId] = useState("");
  const [lastPubId, setLastPubId] = useState(0);
  const [lastMirrorId, setLastMirrorId] = useState("");
  const [lastCommentId, setLastCommentId] = useState("");

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
      gte: periodInterval?.start, 
      lte: periodInterval?.end, 
      lastID: lastUserId 
    }),
    { 
      refetchOnWindowFocus: false,
      staleTime: 60000,
      onSuccess: (data) => {

        // If there are the max number of elements possible, keep fetching 
        if (data.follows.length === 1000) {
          setFollows([...follows as [any], data.follows]);
          setLastUserId(data.follows[999].id);
        } else {
          setFollows([...follows as [any], data.follows]);

          // Put manually in the cache the paginated result
          queryClient.setQueryData(
            ["GetFollowersByInterval", userId, periodInterval, lastUserId],
            follows.flat()
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
      gte: periodInterval?.start, 
      lte: periodInterval?.end, 
      lastPubId: lastPubId 
    }),
    { 
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        // If there are the max number of elements possible, keep fetching 
        if (data.posts.length === 1000) {
          setPosts([...posts as [any], data.posts]);
          setLastPubId(data.posts[999].pubId);
        } else {
          setPosts([...posts as [any], data.posts]);

          // Put manually in the cache the paginated result
          // queryClient.setQueryData(
          //   ["GetPostsByInterval", handle, periodInterval, lastPubId],
          //   posts.flat()
          // )
        }
      }
      // Set cache by hand with posts result
     },
  );  

  // Get comments
  const commentsByInterval = useQuery(
    ["GetCommentsByInterval", handle, periodInterval, lastCommentId],
    () => sdk.GetCommentsByInterval({ 
      id: userId, 
      gte: periodInterval?.start, 
      lte: periodInterval?.end, 
      lastID: lastCommentId 
    }),
    { 
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        // If there are the max number of elements possible, keep fetching 
        if (data.comments.length === 1000) {
          setComments([...comments as [any], data.comments]);
          setLastCommentId(data.comments[999].id);
        } else {
          setComments([...comments as [any], data.comments]);

          // Put manually in the cache the paginated result
          // queryClient.setQueryData(
          //   ["GetCommentsByInterval", handle, periodInterval, lastCommentId],
          //   comments.flat()
          // )
        }
      }
      // Set cache by hand with posts result
     },
  );

  // Get mirrors
  const mirrorsByInterval = useQuery(
    ["GetMirrorsByInterval", handle, periodInterval, lastMirrorId],
    () => sdk.GetMirrorsByInterval({ 
      id: userId, 
      gte: periodInterval?.start, 
      lte: periodInterval?.end, 
      lastID: lastMirrorId 
    }),
    { 
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        console.log("Data from comments query: ", data)
        // If there are the max number of elements possible, keep fetching 
        if (data.mirrors.length === 1000) {
          setMirrors([...mirrors as [any], data.mirrors]);
          setLastMirrorId(data.mirrors[999].id);
        } else {
          setMirrors([...mirrors as [any], data.mirrors]);

          // Put manually in the cache the paginated result
          // queryClient.setQueryData(
          //   ["GetMirrorsByInterval", handle, periodInterval, lastMirrorId],
          //   mirrors.flat()
          // )
        }
      }
      // Set cache by hand with posts result
     },
  );  

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
    },
    comments: {
      commentsByInterval,
      comments
    },
    mirrors: {
      mirrorsByInterval,
      mirrors
    }
  };
};