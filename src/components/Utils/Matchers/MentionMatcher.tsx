import { Matcher } from "interweave";
import { createElement } from "react";
import { Link } from "react-router-dom";
import { Slug } from "src/components/Shared/Slug";

export function Mention({ ...props }: any) {
  return (
    <Link to={`/u/${props.display.slice(1)}`} onClick={(event) => event.stopPropagation()}>
      <Slug slug={props.display} />
    </Link>
  );
}

export class MentionMatcher extends Matcher {
  replaceWith(match: string, props: any) {
    return createElement(Mention, props, match);
  }

  asTag(): string {
    return "a";
  }

  match(value: string) {
    return this.doMatch(value, /@[\w.]+/, (matches) => {
      return {
        display: matches[0]
      };
    });
  }
}
