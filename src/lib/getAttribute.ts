import type { Maybe } from "@generated/types";

interface Attribute {
  key: string;
  value: string;
}

type Query = "app" | "twitter" | "location" | "website";

export const getAttribute = (attributes?: Maybe<Attribute[]>, query?: Query): string => {
  return attributes?.find((o) => o.key === query)?.value || "";
};
