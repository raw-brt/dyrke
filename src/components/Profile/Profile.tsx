import { FC, useState } from "react";
import { STATIC_ASSETS } from "src/config/constants";
import { useProfileStore } from "src/store/profiles";
import { GridItemFour, GridLayout } from "../UI/GridLayout";
import Cover from "./Cover";

type FeedType = "PUBLICATIONS" | "REPLIES" | "MEDIA";

export const Profile: FC = () => {
  const [feedType, setFeedType] = useState<FeedType>("PUBLICATIONS");

  // State & Dependencies
  const currentProfile = useProfileStore((state) => state.currentProfile);

  console.log(currentProfile)


  return (
    <>
      <Cover
        cover={
          currentProfile?.coverPicture?.__typename === "MediaSet"
            ? currentProfile?.coverPicture?.original?.url
            : `${STATIC_ASSETS}/patterns/2.svg`
        }
      />
      <GridLayout className="pt-6">
        <GridItemFour>

        </GridItemFour>
      </GridLayout>
    </>
  );
};