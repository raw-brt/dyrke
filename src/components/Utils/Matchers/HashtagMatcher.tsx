/* eslint-disable no-prototype-builtins */
import { Matcher } from "interweave";
import { createElement } from "react";
import { Link } from "react-router-dom";
import { STATIC_ASSETS } from "src/config/constants";
import { hashflags } from "src/data/hashflags";


export function Hashtag({ ...props }: any) {
  const hashflag = props.display.slice(1).toLowerCase();
  const hasHashflag = hashflags.hasOwnProperty(hashflag);

  return (
    <span className="inline-flex items-center space-x-1">
      <span>
        <Link
          to={`/search?q=${props.display.slice(1)}&type=pubs&src=link_click`}
          onClick={(event) => event.stopPropagation()}
        >
          {props.display}
        </Link>
      </span>
      {hasHashflag && (
        <img
          className="h-4 w-4 !mr-0.5"
          height={16}
          width={16}
          src={`${STATIC_ASSETS}/hashflags/${hashflags[hashflag]}.png`}
          alt={hashflag}
        />
      )}
    </span>
  );
}

export class HashtagMatcher extends Matcher {
  replaceWith(match: string, props: any) {
    return createElement(Hashtag, props, match);
  }

  asTag(): string {
    return "a";
  }

  match(value: string) {
    return this.doMatch(value, /\B#(\w+)/, (matches) => {
      return {
        display: matches[0]
      };
    });
  }
}
