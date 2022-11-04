import type { FC } from "react"
import { useSwitchNetwork } from "wagmi";
import { Button } from "../UI/Button";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { CHAIN_ID } from "src/config/constants";
import toast from "react-hot-toast";

interface Props {
  className?: string
};

export const SwitchNetwork: FC<Props> = ({ className = "" }) => {
  const { switchNetwork } = useSwitchNetwork();

  return (
    <Button
      className={className}
      type="button"
      variant="warning"
      icon={<ArrowsRightLeftIcon className="w-4 h-4" />}
      onClick={() => switchNetwork ? switchNetwork(CHAIN_ID) : toast.error("Please, connect to Polygon network")}
    >
      Switch Network
    </Button>
  );
};