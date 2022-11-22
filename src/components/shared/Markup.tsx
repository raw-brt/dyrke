import trimify from "@lib/trimify";
import { Interweave } from "interweave";
import type { FC, MouseEvent } from "react";
import { HashtagMatcher } from "../Utils/Matchers/HashtagMatcher";
import { MDBoldMatcher } from "../Utils/Matchers/markdown/MDBoldMatcher";
import { MDCodeMatcher } from "../Utils/Matchers/markdown/MDCodeMatcher";
import { MDLinkMatcher } from "../Utils/Matchers/markdown/MDLinkMatcher";
import { MDQuoteMatcher } from "../Utils/Matchers/markdown/MDQuoteMatcher";
import { MDStrikeMatcher } from "../Utils/Matchers/markdown/MDStrikeMatcher";
import { MentionMatcher } from "../Utils/Matchers/MentionMatcher";
import { SpoilerMatcher } from "../Utils/Matchers/SpoilerMatcher";
import { UrlMatcher } from "../Utils/Matchers/UrlMatcher";

interface Props {
  children: string;
  className?: string;
}

const Markup: FC<Props> = ({ children, className = "" }) => {
  return (
    <Interweave
      index={Math.random() * 10000}
      className={className}
      content={trimify(children)}
      escapeHtml
      allowList={["b", "i", "a", "br", "code", "span"]}
      matchers={[
        new HashtagMatcher("hashtag"),
        new MentionMatcher("mention"),
        new MDBoldMatcher("mdBold"),
        new MDLinkMatcher("mdLink"),
        new MDStrikeMatcher("mdStrike"),
        new MDQuoteMatcher("mdQuote"),
        new MDCodeMatcher("mdCode"),
        new SpoilerMatcher("spoiler"),
        new UrlMatcher("url"),
      ]}
      onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
    />
  );
};

export default Markup;
