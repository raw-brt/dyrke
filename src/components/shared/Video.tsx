import "plyr-react/plyr.css";
import Plyr from "plyr-react";
import type { FC } from "react";

interface Props {
  src: string;
}

export const Video: FC<Props> = ({ src }) => {
  return (
    <div className="rounded-lg max-w-1/2">
      <Plyr
        source={{
          type: "video",
          sources: [{ src, provider: "html5" }],
          poster: src
        }}
        options={{
          controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "fullscreen"],
          ratio: "16:12"
        }}
      />
    </div>
  );
};
