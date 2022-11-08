import { toast } from "react-hot-toast";
import { UNDER_DEVELOPMENT } from "./../config/constants";

export const showUnderDevelopmentTooltip = () => {
  toast(UNDER_DEVELOPMENT, { icon: "🛠️" })
};