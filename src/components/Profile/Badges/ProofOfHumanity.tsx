
import type { Profile } from "@generated/types";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import type { FC } from "react";
import { Tooltip } from "src/components/UI/Tooltip";
import { STATIC_ASSETS } from "src/config/constants";


interface Props {
  profile: Profile;
}

const ProofOfHumanity: FC<Props> = ({ profile }) => {
  if (!profile?.onChainIdentity?.proofOfHumanity) {
    return null;
  } else {
    return (
      <Tooltip
        content={
          <span className="flex items-center space-x-1">
            <span>Proof of Humanity verified</span>
            <CheckCircleIcon className="h-4 w-4" />
          </span>
        }
        placement="top"
      >
        <img
          className="drop-shadow-xl"
          height={75}
          width={75}
          src={`${STATIC_ASSETS}/badges/poh.png`}
          alt="Proof Of Humanity Badge"
        />
      </Tooltip>
    );
  }

};

export default ProofOfHumanity;
