import type { FC } from "react";
import { PageHeader } from "@components/Shared/PageHeader";
import { useLocation } from "react-router-dom";
import { useProfileStore } from "src/store/profiles";

type Location = "Followers" | "Following";
type Props = { location: Location }

export const Audience: FC<Props> = ({ location }) => {
  const followers = useProfileStore((state) => state.currentProfile?.stats.totalFollowers);
  const following = useProfileStore((state) => state.currentProfile?.stats.totalFollowing);

  return (
    <>
      <PageHeader
        location={location}
        value={location === "Followers" ? followers : following}
        searchField={false}
      />
    </>
  );
};
