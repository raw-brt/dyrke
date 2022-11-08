import { ERROR_MESSAGE } from "src/config/constants";
import toast from "react-hot-toast";


export const onError = (error: any) => {
  toast.error(error?.data?.message ?? error?.message ?? ERROR_MESSAGE);
};
