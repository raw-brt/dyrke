import type { FC } from "react"
import { Spinner } from "../UI/Spinner";

interface Props {
  message: string
}

export const Loader: FC<Props> = ({ message }) => {
  return (
    <div className="p-5 space-y-2 font-bold text-center">
      <Spinner size="md" className="mx-auto" />
      {message}
    </div>
  );
};