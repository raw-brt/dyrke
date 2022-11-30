import { getIPFSLink } from "@lib/getIPFSLink";
import type { FC } from "react";
import { STATIC_ASSETS } from "src/config/constants";
import { PicturelessIcon } from "./PicturelessIcon";

interface Item {
  wallet: {
    address: string;
    defaultProfile: {
      id: any;
      name?: string | null;
      bio?: string | null;
      isFollowedByMe: boolean;
      handle: any;
      ownedBy: any;
      attributes?: Array<{
        __typename?: "Attribute";
        displayType?: string | null;
        traitType?: string | null;
        key: string;
        value: string;
      }> | null;
      picture?:
        | {
            __typename?: "MediaSet";
            original: { __typename?: "Media"; url: any; mimeType?: any | null };
          }
        | {
            __typename?: "NftImage";
            contractAddress: any;
            tokenId: string;
            uri: any;
            verified: boolean;
          }
        | null;
      stats: {
        __typename?: "ProfileStats";
        totalFollowers: number;
        totalFollowing: number;
        totalPosts: number;
        totalComments: number;
        totalMirrors: number;
        totalPublications: number;
        totalCollects: number;
      };
    } | null;
  };
};

interface Page {
  followers: {
    items: Item[];
    pageInfo: {
      __typename?: "PaginatedResultInfo";
      prev?: any | null;
      next?: any | null;
      totalCount?: number | null;
    };
  };
};

interface Props {
  pages: Page[];
};

export const TableBody: FC<Props> = ({ pages }) => {
  console.log("pages", pages);
  return (
    <tbody className='divide-y divide-gray-700 bg-gray-800'>
      {pages.map((page: any) =>
        page.followers.items.map((item: any, index: number) => (
          <tr key={`${index}-${item?.wallet?.defaultProfile?.handle}`}>
            <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
              <div className='flex items-center'>
                <div className='h-10 w-10 flex-shrink-0'>
                  {
                    item?.wallet?.defaultProfile?.picture
                      ? (
                          <img 
                            className='h-10 w-10 rounded-full' 
                            src={
                              item?.wallet?.defaultProfile?.picture?.__typename === "MediaSet"
                                ? getIPFSLink(item?.wallet?.defaultProfile?.picture?.original?.url)
                                : item?.wallet?.defaultProfile?.picture?.uri
                            } 
                            alt={`${item?.wallet?.defaultProfile?.handle} picture` }
                          />
                        )
                      : <PicturelessIcon />  
                  }
                </div>
                <div className='ml-4'>
                  <div className='font-medium text-gray-100'>{item?.wallet?.defaultProfile?.name}</div>
                  <div className='text-primary-500 font-semibold'>
                    @{item?.wallet?.defaultProfile?.handle}
                  </div>
                </div>
              </div>
            </td>
            <td className='py-4 text-sm text-gray-500'>
              <div className='text-gray-100 truncate w-48'>{item?.wallet?.defaultProfile?.bio}</div>
            </td>
            <td className='whitespace-nowrap py-4 text-sm text-left text-gray-500'>
              <div className='text-gray-100'>
                {item?.wallet?.defaultProfile?.stats?.totalPublications}
              </div>
            </td>
            <td className='whitespace-nowrap py-4 text-sm text-left text-gray-100'>
              <div className='text-gray-100'>{item?.wallet?.defaultProfile?.stats?.totalFollowers}</div>
            </td>
            <td className='relative whitespace-nowrap py-4 text-left text-sm font-medium sm:pr-6'>
              <div className='text-gray-100'>{item?.wallet?.defaultProfile?.stats?.totalFollowing}</div>
            </td>
            <td className='relative whitespace-nowrap py-4 text-left text-sm font-medium sm:pr-6'>
              <div className='text-gray-100'>{item?.wallet?.defaultProfile?.stats?.totalComments}</div>
            </td>
            <td className='relative whitespace-nowrap py-4 text-left text-sm font-medium sm:pr-6'>
              <div className='text-gray-100'>{item?.wallet?.defaultProfile?.stats?.totalMirrors}</div>
            </td>
            <td className='relative whitespace-nowrap py-4 text-left text-sm font-medium sm:pr-6'>
              <div className='text-gray-100'>{item?.wallet?.defaultProfile?.stats?.totalCollects}</div>
            </td>
          </tr>
        )),
      )}
    </tbody>
  );
};
