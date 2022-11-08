import { UserMinusIcon } from "@heroicons/react/24/outline";
import { showUnderDevelopmentTooltip } from "@lib/underDevelopmentTooltip";
import type { FC } from "react";
import { Button } from "../UI/Button";


interface Props {
  showText?: boolean;
}

export const Unfollow: FC<Props> = ({ showText = true }) => {

  return (
    <Button
      className="text-sm !px-3 !py-1.5"
      outline
      onClick={() => showUnderDevelopmentTooltip()}
      variant="danger"
      aria-label="Unfollow"
      icon={<UserMinusIcon className="w-4 h-4" />}
    >
      {showText && "Unfollow"}
    </Button>
  );
};
