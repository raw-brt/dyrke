import type { Profile } from "@generated/types";
import { getAvatar } from "../../../lib/getAvatar";
import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  profiles: Profile[];
  context?: string;
}

const ProfileCircles: FC<Props> = ({ profiles, context }) => {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <>
      {context && <span className="pr-1.5">{context}</span>}
      <div className="contents -space-x-2">
        {profiles.slice(0, 3)?.map((profile, i) => (
          <Link className="flex-none" key={`${profile.handle}_${i}`} to={`/u/${profile?.handle}`}>
            <img
              className="w-5 h-5 rounded-full border dark:border-gray-700/80"
              src={getAvatar(profile)}
              alt={profile?.handle}
            />
          </Link>
        ))}
      </div>
      {children}
    </>
  );

  const profileOne = profiles[0];
  const profileTwo = profiles[1];
  const profileThree = profiles[2];

  if (profiles?.length === 1) {
    return (
      <Wrapper>
        <Link to={`/u/${profileOne?.handle}`}>
          <span className="whitespace-nowrap">{profileOne?.name ?? profileOne?.handle}</span>
        </Link>
      </Wrapper>
    );
  }

  if (profiles?.length === 2) {
    return (
      <Wrapper>
        <Link to={`/u/${profileOne?.handle}`}>
          <span className="whitespace-nowrap">{profileOne?.name ?? profileOne?.handle} and </span>
        </Link>
        <Link to={`/u/${profileTwo?.handle}`}>
          <span className="whitespace-nowrap">{profileTwo?.name ?? profileTwo?.handle}</span>
        </Link>
      </Wrapper>
    );
  }

  if (profiles?.length >= 3) {
    const calculatedCount = profiles.length - 3;
    const isZero = calculatedCount === 0;

    return (
      <Wrapper>
        <Link to={`/u/${profileOne?.handle}`}>
          <span className="whitespace-nowrap">{profileOne?.name ?? profileOne?.handle}, </span>
        </Link>
        <span className="whitespace-nowrap">
          <Link to={`/u/${profileTwo?.handle}`}>{profileTwo?.name ?? profileTwo?.handle}</Link>
          {isZero ? " and " : ", "}
        </span>
        <Link to={`/u/${profileThree?.handle}`}>
          <span className="whitespace-nowrap">{profileThree?.name ?? profileThree?.handle} </span>
        </Link>
        {!isZero && (
          <span className="whitespace-nowrap">
            and {calculatedCount} {calculatedCount === 1 ? "other" : "others"}
          </span>
        )}
      </Wrapper>
    );
  }

  return null;
};

export default ProfileCircles;
