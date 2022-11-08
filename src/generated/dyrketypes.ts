import type {
  Comment,
  Mirror,
  Post,
} from "./types";

export type DyrkePublication = Post & Mirror & Comment;

export interface DyrkeAttachment {
  item: string;
  type: string;
  altTag: string;
}

export interface OG {
  title: string;
  description: string;
  site: string;
  url: string;
  favicon: string;
  thumbnail: string;
  isSquare: boolean;
  html: string;
}