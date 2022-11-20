
import { DyrkePublication, DyrkeAttachment } from "@generated/dyrketypes";
import type { MediaSet } from "@generated/types";
import { getIPFSLink } from "@lib/getIPFSLink";
import clsx from "clsx";
import type { FC } from "react";
import { useState } from "react";
import { Button } from "../UI/Button";
import { ALLOWED_AUDIO_TYPES, ALLOWED_VIDEO_TYPES, ATTACHMENT } from "../../config/constants";

import { Video } from "./Video";
import { LightBox } from "../UI/LightBox";
import { LinkIcon, XMarkIcon } from "@heroicons/react/24/outline";

const getClass = (attachments: number, isNew = false) => {
  if (attachments === 1) {
    return {
      aspect: isNew ? "aspect-w-16 aspect-h-10" : "",
      row: "grid-cols-1 grid-rows-1"
    };
  } else if (attachments === 2) {
    return {
      aspect: "aspect-w-16 aspect-h-12",
      row: "grid-cols-2 grid-rows-1"
    };
  } else if (attachments > 2) {
    return {
      aspect: "aspect-w-16 aspect-h-12",
      row: "grid-cols-2 grid-rows-2"
    };
  }
};

interface Props {
  attachments: any;
  setAttachments?: any;
  isNew?: boolean;
  hideDelete?: boolean;
  publication?: DyrkePublication;
  txn?: any;
}

const Attachments: FC<Props> = ({
  attachments,
  setAttachments,
  isNew = false,
  hideDelete = false,
  publication,
  txn
}) => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const removeAttachment = (attachment: any) => {
    const arr = attachments;
    setAttachments(
      arr.filter(function (ele: any) {
        return ele != attachment;
      })
    );
  };

  const slicedAttachments = isNew
    ? attachments?.slice(0, 4)
    : attachments?.some((e: any) => ALLOWED_VIDEO_TYPES.includes(e.original.mimeType))
    ? attachments?.slice(0, 1)
    : attachments?.slice(0, 4);

  return slicedAttachments?.length !== 0 ? (
    <>
      <div className={clsx(getClass(slicedAttachments?.length)?.row, "grid grid-flow-col gap-2 pt-3")}>
        {slicedAttachments?.map((attachment: DyrkeAttachment & MediaSet) => {
          const type = isNew ? attachment.type : attachment.original.mimeType;
          const url = isNew ? getIPFSLink(attachment.item) : getIPFSLink(attachment.original.url);

          return (
            <div
              className={clsx(
                ALLOWED_VIDEO_TYPES.includes(type) || ALLOWED_AUDIO_TYPES.includes(type)
                  ? ""
                  : getClass(slicedAttachments?.length, isNew)?.aspect,
                {
                  "w-full": ALLOWED_AUDIO_TYPES.includes(type),
                  "w-2/3":
                    ALLOWED_VIDEO_TYPES.includes(type) ||
                    (slicedAttachments.length === 1 && !ALLOWED_AUDIO_TYPES.includes(type))
                },
                "relative"
              )}
              key={`${url}-${Math.random() * 10000}`}
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              {type === "image/svg+xml" ? (
                <Button
                  className="text-sm"
                  variant="primary"
                  icon={<LinkIcon className="h-4 w-4" />}
                  onClick={() => window.open(url, "_blank")}
                >
                  <span>Open Image in new tab</span>
                </Button>
              ) : ALLOWED_VIDEO_TYPES.includes(type) ? (
                <Video src={url} />
              ) : (
                <img
                  className="bg-gray-100 rounded-lg border cursor-pointer dark:bg-gray-800 dark:border-gray-700/80 max-w-1/2"
                  loading="lazy"
                  height={150}
                  width={150}
                  onClick={() => setExpandedImage(url)}
                  src={url}
                  alt={url}
                />
              )}
              {isNew && !hideDelete && (
                <div
                  className={clsx(ALLOWED_AUDIO_TYPES.includes(type) ? "absolute -top-2.5 -left-2" : "m-3")}
                >
                  <button
                    type="button"
                    className="p-1.5 bg-gray-900 rounded-full opacity-75"
                    onClick={() => removeAttachment(attachment)}
                  >
                    <XMarkIcon className="w-4 h-4 text-white" />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <LightBox show={!!expandedImage} url={expandedImage} onClose={() => setExpandedImage(null)} />
    </>
  ) : null;
};

export default Attachments;
