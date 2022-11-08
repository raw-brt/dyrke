
import type { Profile } from "@generated/types";
import { CheckCircleIcon } from "@heroicons/react/solid";
import type { FC } from "react";
import { Tooltip } from "src/components/UI/Tooltip";
import { STATIC_ASSETS } from "src/config/constants";


interface Props {
  profile: Profile;
}

const Worldcoin: FC<Props> = ({ profile }) => {
  if (!profile?.onChainIdentity?.worldcoin?.isHuman) {
    return null;
  } else {
    return (
      <Tooltip
        content={
          <span className="flex items-center space-x-1">
            <span>Worldcoin verified</span>
            <CheckCircleIcon className="h-4 w-4" />
          </span>
        }
        placement="top"
      >
        <img
          className="drop-shadow-xl"
          height={75}
          width={75}
          src={`${STATIC_ASSETS}/badges/worldcoin.png`}
          alt="Sybil Badge"
        />
      </Tooltip>
    );
  }

};

export default Worldcoin;
