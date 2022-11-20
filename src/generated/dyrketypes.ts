import { useInfiniteQuery } from "@tanstack/react-query";
import { UseInfiniteQueryOptions } from "@tanstack/react-query";
import { ProfileFeedQuery, ProfileFeedQueryVariables, ProfileFeedDocument } from "./types";
import { Comment, Mirror, Post } from "./types";

export type Metric = "Followers" | "Publications" | "Comments" | "Mirrors" | "Collects" | "Likes";
export type Period = "Year" | "90 days" | "30 days" | "Week" | "Today";
export type DyrkePublication = Post & Mirror & Comment;

// Fetcher for infinite queries
function fetcher<TData, TVariables>(
  endpoint: string,
  requestInit: RequestInit,
  query: string,
  variables?: TVariables,
) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: "POST",
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}

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

export function infiniteFetcher<TData, TVariables>(
  endpoint: string,
  requestInit: RequestInit,
  query: string,
  variables?: TVariables,
) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: "POST",
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}

export const useInfiniteProfileFeedQuery = <TData = ProfileFeedQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  pageParamKey: keyof ProfileFeedQueryVariables,
  variables: ProfileFeedQueryVariables,
  options?: UseInfiniteQueryOptions<ProfileFeedQuery, TError, TData>,
) =>
  useInfiniteQuery<ProfileFeedQuery, TError, TData>(
    ["ProfileFeed.infinite", variables],
    (metaData) =>
      fetcher<ProfileFeedQuery, ProfileFeedQueryVariables>(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        ProfileFeedDocument,
        // El problema es esta línea: Resuelto, proponer PR a librería
        { ...variables, [pageParamKey]: metaData.pageParam || variables[pageParamKey] },
      )(),
    options,
  );
