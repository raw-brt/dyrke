import { Wallet } from "@generated/types";
import { LinkIcon } from "@heroicons/react/24/outline";
import formatAddress from "@lib/formatAddress";
import { getStampFyiURL } from "@lib/getStampFyiURL";
import type { FC } from "react";
import { POLYGONSCAN_URL } from "src/config/constants";
import { Slug } from "./Slug";

interface Props {
  wallet: Wallet;
}

const WalletProfile: FC<Props> = ({ wallet }) => {
  return (
    <div className="flex justify-between items-center">
      <a
        href={`${POLYGONSCAN_URL}/address/${wallet?.address}`}
        className="flex items-center space-x-3"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          src={getStampFyiURL(wallet?.address)}
          className="w-10 h-10 bg-gray-200 rounded-full border"
          height={40}
          width={40}
          alt={wallet?.address}
        />
        <div>
          <div className="flex gap-1.5 items-center">
            <div>{formatAddress(wallet?.address)}</div>
            <LinkIcon className="w-4 h-4" />
          </div>
          <Slug className="text-sm" slug={formatAddress(wallet?.address)} />
        </div>
      </a>
    </div>
  );
};

export default WalletProfile;