import { UserPlusIcon } from "@heroicons/react/24/outline";
import { showUnderDevelopmentTooltip } from "@lib/underDevelopmentTooltip";
import type { FC } from "react";
import { useProfileStore } from "src/store/profiles";
import { Button } from "../UI/Button";

interface Props {
  showText?: boolean;
}

export const Follow: FC<Props> = ({ showText = true }) => {

  return (
    <Button
      className="text-sm !px-3 !py-1.5"
      outline
      onClick={() => showUnderDevelopmentTooltip()}
      variant="success"
      aria-label="Follow"
      icon={<UserPlusIcon className="w-4 h-4" />}
    >
      {showText && "Follow"}
    </Button>
  );
};
