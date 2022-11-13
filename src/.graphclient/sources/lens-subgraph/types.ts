// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace LensSubgraphTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Account = {
  id: Scalars['ID'];
  /** Address */
  address: Scalars['Bytes'];
  /** Default Profile */
  defaultProfile?: Maybe<Profile>;
  /** List of Id profiles(String) */
  profilesIds: Array<Scalars['String']>;
  /** List of Profiles that own this account */
  profiles?: Maybe<Array<Profile>>;
  /** List of Followings Profiles */
  following: Array<Profile>;
  /** List of Following profiles */
  totalFollowings: Scalars['BigInt'];
};


export type AccountprofilesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Profile_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Profile_filter>;
};


export type AccountfollowingArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Profile_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Profile_filter>;
};

export type Account_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  defaultProfile?: InputMaybe<Scalars['String']>;
  defaultProfile_not?: InputMaybe<Scalars['String']>;
  defaultProfile_gt?: InputMaybe<Scalars['String']>;
  defaultProfile_lt?: InputMaybe<Scalars['String']>;
  defaultProfile_gte?: InputMaybe<Scalars['String']>;
  defaultProfile_lte?: InputMaybe<Scalars['String']>;
  defaultProfile_in?: InputMaybe<Array<Scalars['String']>>;
  defaultProfile_not_in?: InputMaybe<Array<Scalars['String']>>;
  defaultProfile_contains?: InputMaybe<Scalars['String']>;
  defaultProfile_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultProfile_not_contains?: InputMaybe<Scalars['String']>;
  defaultProfile_not_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultProfile_starts_with?: InputMaybe<Scalars['String']>;
  defaultProfile_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultProfile_not_starts_with?: InputMaybe<Scalars['String']>;
  defaultProfile_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultProfile_ends_with?: InputMaybe<Scalars['String']>;
  defaultProfile_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultProfile_not_ends_with?: InputMaybe<Scalars['String']>;
  defaultProfile_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultProfile_?: InputMaybe<Profile_filter>;
  profilesIds?: InputMaybe<Array<Scalars['String']>>;
  profilesIds_not?: InputMaybe<Array<Scalars['String']>>;
  profilesIds_contains?: InputMaybe<Array<Scalars['String']>>;
  profilesIds_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  profilesIds_not_contains?: InputMaybe<Array<Scalars['String']>>;
  profilesIds_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  profiles_?: InputMaybe<Profile_filter>;
  following?: InputMaybe<Array<Scalars['String']>>;
  following_not?: InputMaybe<Array<Scalars['String']>>;
  following_contains?: InputMaybe<Array<Scalars['String']>>;
  following_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  following_not_contains?: InputMaybe<Array<Scalars['String']>>;
  following_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  following_?: InputMaybe<Profile_filter>;
  totalFollowings?: InputMaybe<Scalars['BigInt']>;
  totalFollowings_not?: InputMaybe<Scalars['BigInt']>;
  totalFollowings_gt?: InputMaybe<Scalars['BigInt']>;
  totalFollowings_lt?: InputMaybe<Scalars['BigInt']>;
  totalFollowings_gte?: InputMaybe<Scalars['BigInt']>;
  totalFollowings_lte?: InputMaybe<Scalars['BigInt']>;
  totalFollowings_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFollowings_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Account_orderBy =
  | 'id'
  | 'address'
  | 'defaultProfile'
  | 'profilesIds'
  | 'profiles'
  | 'following'
  | 'totalFollowings';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Comment = Publication & {
  id: Scalars['ID'];
  /** Profile that created the post */
  fromProfile: Profile;
  /** Publication Id */
  pubId: Scalars['BigInt'];
  referenceModule: Scalars['Bytes'];
  referenceModuleReturnData?: Maybe<Scalars['Bytes']>;
  /** URI of the post content */
  contentURI: Scalars['String'];
  profileIdPointed: Scalars['BigInt'];
  pubIdPointed: Scalars['BigInt'];
  collectModule?: Maybe<Scalars['Bytes']>;
  collectModuleReturnData?: Maybe<Scalars['Bytes']>;
  /** Date of creation */
  timestamp: Scalars['BigInt'];
};

export type Comment_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  fromProfile?: InputMaybe<Scalars['String']>;
  fromProfile_not?: InputMaybe<Scalars['String']>;
  fromProfile_gt?: InputMaybe<Scalars['String']>;
  fromProfile_lt?: InputMaybe<Scalars['String']>;
  fromProfile_gte?: InputMaybe<Scalars['String']>;
  fromProfile_lte?: InputMaybe<Scalars['String']>;
  fromProfile_in?: InputMaybe<Array<Scalars['String']>>;
  fromProfile_not_in?: InputMaybe<Array<Scalars['String']>>;
  fromProfile_contains?: InputMaybe<Scalars['String']>;
  fromProfile_contains_nocase?: InputMaybe<Scalars['String']>;
  fromProfile_not_contains?: InputMaybe<Scalars['String']>;
  fromProfile_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fromProfile_starts_with?: InputMaybe<Scalars['String']>;
  fromProfile_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fromProfile_not_starts_with?: InputMaybe<Scalars['String']>;
  fromProfile_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fromProfile_ends_with?: InputMaybe<Scalars['String']>;
  fromProfile_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fromProfile_not_ends_with?: InputMaybe<Scalars['String']>;
  fromProfile_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fromProfile_?: InputMaybe<Profile_filter>;
  pubId?: InputMaybe<Scalars['BigInt']>;
  pubId_not?: InputMaybe<Scalars['BigInt']>;
  pubId_gt?: InputMaybe<Scalars['BigInt']>;
  pubId_lt?: InputMaybe<Scalars['BigInt']>;
  pubId_gte?: InputMaybe<Scalars['BigInt']>;
  pubId_lte?: InputMaybe<Scalars['BigInt']>;
  pubId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pubId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  referenceModule?: InputMaybe<Scalars['Bytes']>;
  referenceModule_not?: InputMaybe<Scalars['Bytes']>;
  referenceModule_in?: InputMaybe<Array<Scalars['Bytes']>>;
  referenceModule_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  referenceModule_contains?: InputMaybe<Scalars['Bytes']>;
  referenceModule_not_contains?: InputMaybe<Scalars['Bytes']>;
  referenceModuleReturnData?: InputMaybe<Scalars['Bytes']>;
  referenceModuleReturnData_not?: InputMaybe<Scalars['Bytes']>;
  referenceModuleReturnData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  referenceModuleReturnData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  referenceModuleReturnData_contains?: InputMaybe<Scalars['Bytes']>;
  referenceModuleReturnData_not_contains?: InputMaybe<Scalars['Bytes']>;
  contentURI?: InputMaybe<Scalars['String']>;
  contentURI_not?: InputMaybe<Scalars['String']>;
  contentURI_gt?: InputMaybe<Scalars['String']>;
  contentURI_lt?: InputMaybe<Scalars['String']>;
  contentURI_gte?: InputMaybe<Scalars['String']>;
  contentURI_lte?: InputMaybe<Scalars['String']>;
  contentURI_in?: InputMaybe<Array<Scalars['String']>>;
  contentURI_not_in?: InputMaybe<Array<Scalars['String']>>;
  contentURI_contains?: InputMaybe<Scalars['String']>;
  contentURI_contains_nocase?: InputMaybe<Scalars['String']>;
  contentURI_not_contains?: InputMaybe<Scalars['String']>;
  contentURI_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contentURI_starts_with?: InputMaybe<Scalars['String']>;
  contentURI_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contentURI_not_starts_with?: InputMaybe<Scalars['String']>;
  contentURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contentURI_ends_with?: InputMaybe<Scalars['String']>;
  contentURI_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contentURI_not_ends_with?: InputMaybe<Scalars['String']>;
  contentURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  profileIdPointed?: InputMaybe<Scalars['BigInt']>;
  profileIdPointed_not?: InputMaybe<Scalars['BigInt']>;
  profileIdPointed_gt?: InputMaybe<Scalars['BigInt']>;
  profileIdPointed_lt?: InputMaybe<Scalars['BigInt']>;
  profileIdPointed_gte?: InputMaybe<Scalars['BigInt']>;
  profileIdPointed_lte?: InputMaybe<Scalars['BigInt']>;
  profileIdPointed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  profileIdPointed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pubIdPointed?: InputMaybe<Scalars['BigInt']>;
  pubIdPointed_not?: InputMaybe<Scalars['BigInt']>;
  pubIdPointed_gt?: InputMaybe<Scalars['BigInt']>;
  pubIdPointed_lt?: InputMaybe<Scalars['BigInt']>;
  pubIdPointed_gte?: InputMaybe<Scalars['BigInt']>;
  pubIdPointed_lte?: InputMaybe<Scalars['BigInt']>;
  pubIdPointed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pubIdPointed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collectModule?: InputMaybe<Scalars['Bytes']>;
  collectModule_not?: InputMaybe<Scalars['Bytes']>;
  collectModule_in?: InputMaybe<Array<Scalars['Bytes']>>;
  collectModule_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  collectModule_contains?: InputMaybe<Scalars['Bytes']>;
  collectModule_not_contains?: InputMaybe<Scalars['Bytes']>;
  collectModuleReturnData?: InputMaybe<Scalars['Bytes']>;
  collectModuleReturnData_not?: InputMaybe<Scalars['Bytes']>;
  collectModuleReturnData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  collectModuleReturnData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  collectModuleReturnData_contains?: InputMaybe<Scalars['Bytes']>;
  collectModuleReturnData_not_contains?: InputMaybe<Scalars['Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Comment_orderBy =
  | 'id'
  | 'fromProfile'
  | 'pubId'
  | 'referenceModule'
  | 'referenceModuleReturnData'
  | 'contentURI'
  | 'profileIdPointed'
  | 'pubIdPointed'
  | 'collectModule'
  | 'collectModuleReturnData'
  | 'timestamp';

export type Creator = {
  id: Scalars['ID'];
  /** Address */
  address: Scalars['Bytes'];
  /** Account Address is whitelisted */
  isWhitelisted: Scalars['Boolean'];
  /** Date last modify Address */
  lastUpdated: Scalars['BigInt'];
};

export type Creator_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  isWhitelisted?: InputMaybe<Scalars['Boolean']>;
  isWhitelisted_not?: InputMaybe<Scalars['Boolean']>;
  isWhitelisted_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isWhitelisted_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  lastUpdated?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_not?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_gt?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_lt?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_gte?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_lte?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpdated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Creator_orderBy =
  | 'id'
  | 'address'
  | 'isWhitelisted'
  | 'lastUpdated';

export type Follow = {
  id: Scalars['ID'];
  /** Follower Account.  */
  fromAccount?: Maybe<Account>;
  fromProfileSTR?: Maybe<Scalars['String']>;
  /** Array of profiles that are followed */
  toProfile?: Maybe<Array<Profile>>;
  /** Date from when the follow initiated */
  timestamp: Scalars['BigInt'];
};


export type FollowtoProfileArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Profile_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Profile_filter>;
};

export type FollowNFTTransferred = {
  id: Scalars['ID'];
  profileId?: Maybe<Scalars['BigInt']>;
  followNFTID?: Maybe<Scalars['BigInt']>;
  from?: Maybe<Scalars['Bytes']>;
  to?: Maybe<Scalars['Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  data?: Maybe<Scalars['String']>;
};

export type FollowNFTTransferred_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  profileId?: InputMaybe<Scalars['BigInt']>;
  profileId_not?: InputMaybe<Scalars['BigInt']>;
  profileId_gt?: InputMaybe<Scalars['BigInt']>;
  profileId_lt?: InputMaybe<Scalars['BigInt']>;
  profileId_gte?: InputMaybe<Scalars['BigInt']>;
  profileId_lte?: InputMaybe<Scalars['BigInt']>;
  profileId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  profileId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  followNFTID?: InputMaybe<Scalars['BigInt']>;
  followNFTID_not?: InputMaybe<Scalars['BigInt']>;
  followNFTID_gt?: InputMaybe<Scalars['BigInt']>;
  followNFTID_lt?: InputMaybe<Scalars['BigInt']>;
  followNFTID_gte?: InputMaybe<Scalars['BigInt']>;
  followNFTID_lte?: InputMaybe<Scalars['BigInt']>;
  followNFTID_in?: InputMaybe<Array<Scalars['BigInt']>>;
  followNFTID_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  data?: InputMaybe<Scalars['String']>;
  data_not?: InputMaybe<Scalars['String']>;
  data_gt?: InputMaybe<Scalars['String']>;
  data_lt?: InputMaybe<Scalars['String']>;
  data_gte?: InputMaybe<Scalars['String']>;
  data_lte?: InputMaybe<Scalars['String']>;
  data_in?: InputMaybe<Array<Scalars['String']>>;
  data_not_in?: InputMaybe<Array<Scalars['String']>>;
  data_contains?: InputMaybe<Scalars['String']>;
  data_contains_nocase?: InputMaybe<Scalars['String']>;
  data_not_contains?: InputMaybe<Scalars['String']>;
  data_not_contains_nocase?: InputMaybe<Scalars['String']>;
  data_starts_with?: InputMaybe<Scalars['String']>;
  data_starts_with_nocase?: InputMaybe<Scalars['String']>;
  data_not_starts_with?: InputMaybe<Scalars['String']>;
  data_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  data_ends_with?: InputMaybe<Scalars['String']>;
  data_ends_with_nocase?: InputMaybe<Scalars['String']>;
  data_not_ends_with?: InputMaybe<Scalars['String']>;
  data_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type FollowNFTTransferred_orderBy =
  | 'id'
  | 'profileId'
  | 'followNFTID'
  | 'from'
  | 'to'
  | 'timestamp'
  | 'data';

export type Follow_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  fromAccount?: InputMaybe<Scalars['String']>;
  fromAccount_not?: InputMaybe<Scalars['String']>;
  fromAccount_gt?: InputMaybe<Scalars['String']>;
  fromAccount_lt?: InputMaybe<Scalars['String']>;
  fromAccount_gte?: InputMaybe<Scalars['String']>;
  fromAccount_lte?: InputMaybe<Scalars['String']>;
  fromAccount_in?: InputMaybe<Array<Scalars['String']>>;
  fromAccount_not_in?: InputMaybe<Array<Scalars['String']>>;
  fromAccount_contains?: InputMaybe<Scalars['String']>;
  fromAccount_contains_nocase?: InputMaybe<Scalars['String']>;
  fromAccount_not_contains?: InputMaybe<Scalars['String']>;
  fromAccount_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fromAccount_starts_with?: InputMaybe<Scalars['String']>;
  fromAccount_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fromAccount_not_starts_with?: InputMaybe<Scalars['String']>;
  fromAccount_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fromAccount_ends_with?: InputMaybe<Scalars['String']>;
  fromAccount_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fromAccount_not_ends_with?: InputMaybe<Scalars['String']>;
  fromAccount_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fromAccount_?: InputMaybe<Account_filter>;
  fromProfileSTR?: InputMaybe<Scalars['String']>;
  fromProfileSTR_not?: InputMaybe<Scalars['String']>;
  fromProfileSTR_gt?: InputMaybe<Scalars['String']>;
  fromProfileSTR_lt?: InputMaybe<Scalars['String']>;
  fromProfileSTR_gte?: InputMaybe<Scalars['String']>;
  fromProfileSTR_lte?: InputMaybe<Scalars['String']>;
  fromProfileSTR_in?: InputMaybe<Array<Scalars['String']>>;
  fromProfileSTR_not_in?: InputMaybe<Array<Scalars['String']>>;
  fromProfileSTR_contains?: InputMaybe<Scalars['String']>;
  fromProfileSTR_contains_nocase?: InputMaybe<Scalars['String']>;
  fromProfileSTR_not_contains?: InputMaybe<Scalars['String']>;
  fromProfileSTR_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fromProfileSTR_starts_with?: InputMaybe<Scalars['String']>;
  fromProfileSTR_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fromProfileSTR_not_starts_with?: InputMaybe<Scalars['String']>;
  fromProfileSTR_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fromProfileSTR_ends_with?: InputMaybe<Scalars['String']>;
  fromProfileSTR_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fromProfileSTR_not_ends_with?: InputMaybe<Scalars['String']>;
  fromProfileSTR_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  toProfile?: InputMaybe<Array<Scalars['String']>>;
  toProfile_not?: InputMaybe<Array<Scalars['String']>>;
  toProfile_contains?: InputMaybe<Array<Scalars['String']>>;
  toProfile_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  toProfile_not_contains?: InputMaybe<Array<Scalars['String']>>;
  toProfile_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  toProfile_?: InputMaybe<Profile_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Follow_orderBy =
  | 'id'
  | 'fromAccount'
  | 'fromProfileSTR'
  | 'toProfile'
  | 'timestamp';

export type Mirror = Publication & {
  id: Scalars['ID'];
  /** Profile that created the post */
  fromProfile: Profile;
  /** Publication Id */
  pubId: Scalars['BigInt'];
  referenceModule: Scalars['Bytes'];
  referenceModuleReturnData?: Maybe<Scalars['Bytes']>;
  profileIdPointed: Scalars['BigInt'];
  pubIdPointed: Scalars['BigInt'];
  /** Date of creation */
  timestamp: Scalars['BigInt'];
};

export type Mirror_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  fromProfile?: InputMaybe<Scalars['String']>;
  fromProfile_not?: InputMaybe<Scalars['String']>;
  fromProfile_gt?: InputMaybe<Scalars['String']>;
  fromProfile_lt?: InputMaybe<Scalars['String']>;
  fromProfile_gte?: InputMaybe<Scalars['String']>;
  fromProfile_lte?: InputMaybe<Scalars['String']>;
  fromProfile_in?: InputMaybe<Array<Scalars['String']>>;
  fromProfile_not_in?: InputMaybe<Array<Scalars['String']>>;
  fromProfile_contains?: InputMaybe<Scalars['String']>;
  fromProfile_contains_nocase?: InputMaybe<Scalars['String']>;
  fromProfile_not_contains?: InputMaybe<Scalars['String']>;
  fromProfile_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fromProfile_starts_with?: InputMaybe<Scalars['String']>;
  fromProfile_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fromProfile_not_starts_with?: InputMaybe<Scalars['String']>;
  fromProfile_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fromProfile_ends_with?: InputMaybe<Scalars['String']>;
  fromProfile_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fromProfile_not_ends_with?: InputMaybe<Scalars['String']>;
  fromProfile_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fromProfile_?: InputMaybe<Profile_filter>;
  pubId?: InputMaybe<Scalars['BigInt']>;
  pubId_not?: InputMaybe<Scalars['BigInt']>;
  pubId_gt?: InputMaybe<Scalars['BigInt']>;
  pubId_lt?: InputMaybe<Scalars['BigInt']>;
  pubId_gte?: InputMaybe<Scalars['BigInt']>;
  pubId_lte?: InputMaybe<Scalars['BigInt']>;
  pubId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pubId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  referenceModule?: InputMaybe<Scalars['Bytes']>;
  referenceModule_not?: InputMaybe<Scalars['Bytes']>;
  referenceModule_in?: InputMaybe<Array<Scalars['Bytes']>>;
  referenceModule_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  referenceModule_contains?: InputMaybe<Scalars['Bytes']>;
  referenceModule_not_contains?: InputMaybe<Scalars['Bytes']>;
  referenceModuleReturnData?: InputMaybe<Scalars['Bytes']>;
  referenceModuleReturnData_not?: InputMaybe<Scalars['Bytes']>;
  referenceModuleReturnData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  referenceModuleReturnData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  referenceModuleReturnData_contains?: InputMaybe<Scalars['Bytes']>;
  referenceModuleReturnData_not_contains?: InputMaybe<Scalars['Bytes']>;
  profileIdPointed?: InputMaybe<Scalars['BigInt']>;
  profileIdPointed_not?: InputMaybe<Scalars['BigInt']>;
  profileIdPointed_gt?: InputMaybe<Scalars['BigInt']>;
  profileIdPointed_lt?: InputMaybe<Scalars['BigInt']>;
  profileIdPointed_gte?: InputMaybe<Scalars['BigInt']>;
  profileIdPointed_lte?: InputMaybe<Scalars['BigInt']>;
  profileIdPointed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  profileIdPointed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pubIdPointed?: InputMaybe<Scalars['BigInt']>;
  pubIdPointed_not?: InputMaybe<Scalars['BigInt']>;
  pubIdPointed_gt?: InputMaybe<Scalars['BigInt']>;
  pubIdPointed_lt?: InputMaybe<Scalars['BigInt']>;
  pubIdPointed_gte?: InputMaybe<Scalars['BigInt']>;
  pubIdPointed_lte?: InputMaybe<Scalars['BigInt']>;
  pubIdPointed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pubIdPointed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Mirror_orderBy =
  | 'id'
  | 'fromProfile'
  | 'pubId'
  | 'referenceModule'
  | 'referenceModuleReturnData'
  | 'profileIdPointed'
  | 'pubIdPointed'
  | 'timestamp';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Post = Publication & {
  id: Scalars['ID'];
  /** Profile that created the post */
  fromProfile: Profile;
  /** Publication Id */
  pubId: Scalars['BigInt'];
  referenceModule: Scalars['Bytes'];
  referenceModuleReturnData?: Maybe<Scalars['Bytes']>;
  /** URI of the post content */
  contentURI: Scalars['String'];
  collectModule: Scalars['Bytes'];
  collectModuleReturnData?: Maybe<Scalars['Bytes']>;
  /** Date of creation */
  timestamp: Scalars['BigInt'];
};

export type Post_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  fromProfile?: InputMaybe<Scalars['String']>;
  fromProfile_not?: InputMaybe<Scalars['String']>;
  fromProfile_gt?: InputMaybe<Scalars['String']>;
  fromProfile_lt?: InputMaybe<Scalars['String']>;
  fromProfile_gte?: InputMaybe<Scalars['String']>;
  fromProfile_lte?: InputMaybe<Scalars['String']>;
  fromProfile_in?: InputMaybe<Array<Scalars['String']>>;
  fromProfile_not_in?: InputMaybe<Array<Scalars['String']>>;
  fromProfile_contains?: InputMaybe<Scalars['String']>;
  fromProfile_contains_nocase?: InputMaybe<Scalars['String']>;
  fromProfile_not_contains?: InputMaybe<Scalars['String']>;
  fromProfile_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fromProfile_starts_with?: InputMaybe<Scalars['String']>;
  fromProfile_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fromProfile_not_starts_with?: InputMaybe<Scalars['String']>;
  fromProfile_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fromProfile_ends_with?: InputMaybe<Scalars['String']>;
  fromProfile_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fromProfile_not_ends_with?: InputMaybe<Scalars['String']>;
  fromProfile_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fromProfile_?: InputMaybe<Profile_filter>;
  pubId?: InputMaybe<Scalars['BigInt']>;
  pubId_not?: InputMaybe<Scalars['BigInt']>;
  pubId_gt?: InputMaybe<Scalars['BigInt']>;
  pubId_lt?: InputMaybe<Scalars['BigInt']>;
  pubId_gte?: InputMaybe<Scalars['BigInt']>;
  pubId_lte?: InputMaybe<Scalars['BigInt']>;
  pubId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pubId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  referenceModule?: InputMaybe<Scalars['Bytes']>;
  referenceModule_not?: InputMaybe<Scalars['Bytes']>;
  referenceModule_in?: InputMaybe<Array<Scalars['Bytes']>>;
  referenceModule_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  referenceModule_contains?: InputMaybe<Scalars['Bytes']>;
  referenceModule_not_contains?: InputMaybe<Scalars['Bytes']>;
  referenceModuleReturnData?: InputMaybe<Scalars['Bytes']>;
  referenceModuleReturnData_not?: InputMaybe<Scalars['Bytes']>;
  referenceModuleReturnData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  referenceModuleReturnData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  referenceModuleReturnData_contains?: InputMaybe<Scalars['Bytes']>;
  referenceModuleReturnData_not_contains?: InputMaybe<Scalars['Bytes']>;
  contentURI?: InputMaybe<Scalars['String']>;
  contentURI_not?: InputMaybe<Scalars['String']>;
  contentURI_gt?: InputMaybe<Scalars['String']>;
  contentURI_lt?: InputMaybe<Scalars['String']>;
  contentURI_gte?: InputMaybe<Scalars['String']>;
  contentURI_lte?: InputMaybe<Scalars['String']>;
  contentURI_in?: InputMaybe<Array<Scalars['String']>>;
  contentURI_not_in?: InputMaybe<Array<Scalars['String']>>;
  contentURI_contains?: InputMaybe<Scalars['String']>;
  contentURI_contains_nocase?: InputMaybe<Scalars['String']>;
  contentURI_not_contains?: InputMaybe<Scalars['String']>;
  contentURI_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contentURI_starts_with?: InputMaybe<Scalars['String']>;
  contentURI_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contentURI_not_starts_with?: InputMaybe<Scalars['String']>;
  contentURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contentURI_ends_with?: InputMaybe<Scalars['String']>;
  contentURI_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contentURI_not_ends_with?: InputMaybe<Scalars['String']>;
  contentURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collectModule?: InputMaybe<Scalars['Bytes']>;
  collectModule_not?: InputMaybe<Scalars['Bytes']>;
  collectModule_in?: InputMaybe<Array<Scalars['Bytes']>>;
  collectModule_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  collectModule_contains?: InputMaybe<Scalars['Bytes']>;
  collectModule_not_contains?: InputMaybe<Scalars['Bytes']>;
  collectModuleReturnData?: InputMaybe<Scalars['Bytes']>;
  collectModuleReturnData_not?: InputMaybe<Scalars['Bytes']>;
  collectModuleReturnData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  collectModuleReturnData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  collectModuleReturnData_contains?: InputMaybe<Scalars['Bytes']>;
  collectModuleReturnData_not_contains?: InputMaybe<Scalars['Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Post_orderBy =
  | 'id'
  | 'fromProfile'
  | 'pubId'
  | 'referenceModule'
  | 'referenceModuleReturnData'
  | 'contentURI'
  | 'collectModule'
  | 'collectModuleReturnData'
  | 'timestamp';

export type Profile = {
  id: Scalars['ID'];
  /** Number of profile */
  profileId: Scalars['BigInt'];
  /** Address from the creator profile */
  creator: Creator;
  /** Address from the owner creator profile */
  owner: Account;
  /** User attempting to follow the profile should be issued a Follow NFT */
  followNFT?: Maybe<Scalars['Bytes']>;
  /** IPFS has the follow data */
  followNFTURI?: Maybe<Scalars['String']>;
  /** Nickname of the profile */
  handle?: Maybe<Scalars['String']>;
  /** URI image of the profile */
  imageURI?: Maybe<Scalars['String']>;
  /** Date created profile */
  createdAt?: Maybe<Scalars['BigInt']>;
  /** Follow Module Address */
  followModule?: Maybe<Scalars['Bytes']>;
  /** Follow Module Return Data */
  followModuleReturnData?: Maybe<Scalars['Bytes']>;
  /** Dispatcher address allowed to post, comment, mirror, set follow module and change the profile picture on behalf of the owner. */
  dispatcher?: Maybe<Scalars['Bytes']>;
  /** Last Date modify profile */
  lastUpdated: Scalars['BigInt'];
  /** Total mirrors */
  totalMirrors: Scalars['BigInt'];
  /** Total posts */
  totalPosts: Scalars['BigInt'];
  /** Total comments */
  totalComments: Scalars['BigInt'];
  /** Total Followers */
  totalFollowers: Scalars['BigInt'];
  /** Total Following From owner Account */
  totalFollowings: Scalars['BigInt'];
  /** List of followers Account */
  followers: Array<Account>;
  /** List of following Profiles */
  followings: Array<Profile>;
  /** List of comments */
  comments?: Maybe<Array<Comment>>;
  /** List of post */
  posts?: Maybe<Array<Post>>;
  /** List of Mirrors */
  mirrors?: Maybe<Array<Mirror>>;
};


export type ProfilefollowersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
};


export type ProfilefollowingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Profile_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Profile_filter>;
};


export type ProfilecommentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Comment_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Comment_filter>;
};


export type ProfilepostsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Post_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Post_filter>;
};


export type ProfilemirrorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mirror_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mirror_filter>;
};

export type Profile_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  profileId?: InputMaybe<Scalars['BigInt']>;
  profileId_not?: InputMaybe<Scalars['BigInt']>;
  profileId_gt?: InputMaybe<Scalars['BigInt']>;
  profileId_lt?: InputMaybe<Scalars['BigInt']>;
  profileId_gte?: InputMaybe<Scalars['BigInt']>;
  profileId_lte?: InputMaybe<Scalars['BigInt']>;
  profileId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  profileId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creator?: InputMaybe<Scalars['String']>;
  creator_not?: InputMaybe<Scalars['String']>;
  creator_gt?: InputMaybe<Scalars['String']>;
  creator_lt?: InputMaybe<Scalars['String']>;
  creator_gte?: InputMaybe<Scalars['String']>;
  creator_lte?: InputMaybe<Scalars['String']>;
  creator_in?: InputMaybe<Array<Scalars['String']>>;
  creator_not_in?: InputMaybe<Array<Scalars['String']>>;
  creator_contains?: InputMaybe<Scalars['String']>;
  creator_contains_nocase?: InputMaybe<Scalars['String']>;
  creator_not_contains?: InputMaybe<Scalars['String']>;
  creator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  creator_starts_with?: InputMaybe<Scalars['String']>;
  creator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  creator_not_starts_with?: InputMaybe<Scalars['String']>;
  creator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  creator_ends_with?: InputMaybe<Scalars['String']>;
  creator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creator_not_ends_with?: InputMaybe<Scalars['String']>;
  creator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creator_?: InputMaybe<Creator_filter>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_filter>;
  followNFT?: InputMaybe<Scalars['Bytes']>;
  followNFT_not?: InputMaybe<Scalars['Bytes']>;
  followNFT_in?: InputMaybe<Array<Scalars['Bytes']>>;
  followNFT_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  followNFT_contains?: InputMaybe<Scalars['Bytes']>;
  followNFT_not_contains?: InputMaybe<Scalars['Bytes']>;
  followNFTURI?: InputMaybe<Scalars['String']>;
  followNFTURI_not?: InputMaybe<Scalars['String']>;
  followNFTURI_gt?: InputMaybe<Scalars['String']>;
  followNFTURI_lt?: InputMaybe<Scalars['String']>;
  followNFTURI_gte?: InputMaybe<Scalars['String']>;
  followNFTURI_lte?: InputMaybe<Scalars['String']>;
  followNFTURI_in?: InputMaybe<Array<Scalars['String']>>;
  followNFTURI_not_in?: InputMaybe<Array<Scalars['String']>>;
  followNFTURI_contains?: InputMaybe<Scalars['String']>;
  followNFTURI_contains_nocase?: InputMaybe<Scalars['String']>;
  followNFTURI_not_contains?: InputMaybe<Scalars['String']>;
  followNFTURI_not_contains_nocase?: InputMaybe<Scalars['String']>;
  followNFTURI_starts_with?: InputMaybe<Scalars['String']>;
  followNFTURI_starts_with_nocase?: InputMaybe<Scalars['String']>;
  followNFTURI_not_starts_with?: InputMaybe<Scalars['String']>;
  followNFTURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  followNFTURI_ends_with?: InputMaybe<Scalars['String']>;
  followNFTURI_ends_with_nocase?: InputMaybe<Scalars['String']>;
  followNFTURI_not_ends_with?: InputMaybe<Scalars['String']>;
  followNFTURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  handle_not?: InputMaybe<Scalars['String']>;
  handle_gt?: InputMaybe<Scalars['String']>;
  handle_lt?: InputMaybe<Scalars['String']>;
  handle_gte?: InputMaybe<Scalars['String']>;
  handle_lte?: InputMaybe<Scalars['String']>;
  handle_in?: InputMaybe<Array<Scalars['String']>>;
  handle_not_in?: InputMaybe<Array<Scalars['String']>>;
  handle_contains?: InputMaybe<Scalars['String']>;
  handle_contains_nocase?: InputMaybe<Scalars['String']>;
  handle_not_contains?: InputMaybe<Scalars['String']>;
  handle_not_contains_nocase?: InputMaybe<Scalars['String']>;
  handle_starts_with?: InputMaybe<Scalars['String']>;
  handle_starts_with_nocase?: InputMaybe<Scalars['String']>;
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  handle_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  handle_ends_with?: InputMaybe<Scalars['String']>;
  handle_ends_with_nocase?: InputMaybe<Scalars['String']>;
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  handle_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  imageURI?: InputMaybe<Scalars['String']>;
  imageURI_not?: InputMaybe<Scalars['String']>;
  imageURI_gt?: InputMaybe<Scalars['String']>;
  imageURI_lt?: InputMaybe<Scalars['String']>;
  imageURI_gte?: InputMaybe<Scalars['String']>;
  imageURI_lte?: InputMaybe<Scalars['String']>;
  imageURI_in?: InputMaybe<Array<Scalars['String']>>;
  imageURI_not_in?: InputMaybe<Array<Scalars['String']>>;
  imageURI_contains?: InputMaybe<Scalars['String']>;
  imageURI_contains_nocase?: InputMaybe<Scalars['String']>;
  imageURI_not_contains?: InputMaybe<Scalars['String']>;
  imageURI_not_contains_nocase?: InputMaybe<Scalars['String']>;
  imageURI_starts_with?: InputMaybe<Scalars['String']>;
  imageURI_starts_with_nocase?: InputMaybe<Scalars['String']>;
  imageURI_not_starts_with?: InputMaybe<Scalars['String']>;
  imageURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  imageURI_ends_with?: InputMaybe<Scalars['String']>;
  imageURI_ends_with_nocase?: InputMaybe<Scalars['String']>;
  imageURI_not_ends_with?: InputMaybe<Scalars['String']>;
  imageURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  followModule?: InputMaybe<Scalars['Bytes']>;
  followModule_not?: InputMaybe<Scalars['Bytes']>;
  followModule_in?: InputMaybe<Array<Scalars['Bytes']>>;
  followModule_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  followModule_contains?: InputMaybe<Scalars['Bytes']>;
  followModule_not_contains?: InputMaybe<Scalars['Bytes']>;
  followModuleReturnData?: InputMaybe<Scalars['Bytes']>;
  followModuleReturnData_not?: InputMaybe<Scalars['Bytes']>;
  followModuleReturnData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  followModuleReturnData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  followModuleReturnData_contains?: InputMaybe<Scalars['Bytes']>;
  followModuleReturnData_not_contains?: InputMaybe<Scalars['Bytes']>;
  dispatcher?: InputMaybe<Scalars['Bytes']>;
  dispatcher_not?: InputMaybe<Scalars['Bytes']>;
  dispatcher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  dispatcher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  dispatcher_contains?: InputMaybe<Scalars['Bytes']>;
  dispatcher_not_contains?: InputMaybe<Scalars['Bytes']>;
  lastUpdated?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_not?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_gt?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_lt?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_gte?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_lte?: InputMaybe<Scalars['BigInt']>;
  lastUpdated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpdated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalMirrors?: InputMaybe<Scalars['BigInt']>;
  totalMirrors_not?: InputMaybe<Scalars['BigInt']>;
  totalMirrors_gt?: InputMaybe<Scalars['BigInt']>;
  totalMirrors_lt?: InputMaybe<Scalars['BigInt']>;
  totalMirrors_gte?: InputMaybe<Scalars['BigInt']>;
  totalMirrors_lte?: InputMaybe<Scalars['BigInt']>;
  totalMirrors_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalMirrors_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPosts?: InputMaybe<Scalars['BigInt']>;
  totalPosts_not?: InputMaybe<Scalars['BigInt']>;
  totalPosts_gt?: InputMaybe<Scalars['BigInt']>;
  totalPosts_lt?: InputMaybe<Scalars['BigInt']>;
  totalPosts_gte?: InputMaybe<Scalars['BigInt']>;
  totalPosts_lte?: InputMaybe<Scalars['BigInt']>;
  totalPosts_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPosts_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalComments?: InputMaybe<Scalars['BigInt']>;
  totalComments_not?: InputMaybe<Scalars['BigInt']>;
  totalComments_gt?: InputMaybe<Scalars['BigInt']>;
  totalComments_lt?: InputMaybe<Scalars['BigInt']>;
  totalComments_gte?: InputMaybe<Scalars['BigInt']>;
  totalComments_lte?: InputMaybe<Scalars['BigInt']>;
  totalComments_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalComments_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFollowers?: InputMaybe<Scalars['BigInt']>;
  totalFollowers_not?: InputMaybe<Scalars['BigInt']>;
  totalFollowers_gt?: InputMaybe<Scalars['BigInt']>;
  totalFollowers_lt?: InputMaybe<Scalars['BigInt']>;
  totalFollowers_gte?: InputMaybe<Scalars['BigInt']>;
  totalFollowers_lte?: InputMaybe<Scalars['BigInt']>;
  totalFollowers_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFollowers_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFollowings?: InputMaybe<Scalars['BigInt']>;
  totalFollowings_not?: InputMaybe<Scalars['BigInt']>;
  totalFollowings_gt?: InputMaybe<Scalars['BigInt']>;
  totalFollowings_lt?: InputMaybe<Scalars['BigInt']>;
  totalFollowings_gte?: InputMaybe<Scalars['BigInt']>;
  totalFollowings_lte?: InputMaybe<Scalars['BigInt']>;
  totalFollowings_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFollowings_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  followers?: InputMaybe<Array<Scalars['String']>>;
  followers_not?: InputMaybe<Array<Scalars['String']>>;
  followers_contains?: InputMaybe<Array<Scalars['String']>>;
  followers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  followers_not_contains?: InputMaybe<Array<Scalars['String']>>;
  followers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  followers_?: InputMaybe<Account_filter>;
  followings?: InputMaybe<Array<Scalars['String']>>;
  followings_not?: InputMaybe<Array<Scalars['String']>>;
  followings_contains?: InputMaybe<Array<Scalars['String']>>;
  followings_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  followings_not_contains?: InputMaybe<Array<Scalars['String']>>;
  followings_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  followings_?: InputMaybe<Profile_filter>;
  comments_?: InputMaybe<Comment_filter>;
  posts_?: InputMaybe<Post_filter>;
  mirrors_?: InputMaybe<Mirror_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Profile_orderBy =
  | 'id'
  | 'profileId'
  | 'creator'
  | 'owner'
  | 'followNFT'
  | 'followNFTURI'
  | 'handle'
  | 'imageURI'
  | 'createdAt'
  | 'followModule'
  | 'followModuleReturnData'
  | 'dispatcher'
  | 'lastUpdated'
  | 'totalMirrors'
  | 'totalPosts'
  | 'totalComments'
  | 'totalFollowers'
  | 'totalFollowings'
  | 'followers'
  | 'followings'
  | 'comments'
  | 'posts'
  | 'mirrors';

export type Publication = {
  id: Scalars['ID'];
  /** Profile that created the publication */
  fromProfile: Profile;
  /** Publication Id */
  pubId: Scalars['BigInt'];
  referenceModule: Scalars['Bytes'];
  referenceModuleReturnData?: Maybe<Scalars['Bytes']>;
  /** Date of creation */
  timestamp: Scalars['BigInt'];
};

export type Publication_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  fromProfile?: InputMaybe<Scalars['String']>;
  fromProfile_not?: InputMaybe<Scalars['String']>;
  fromProfile_gt?: InputMaybe<Scalars['String']>;
  fromProfile_lt?: InputMaybe<Scalars['String']>;
  fromProfile_gte?: InputMaybe<Scalars['String']>;
  fromProfile_lte?: InputMaybe<Scalars['String']>;
  fromProfile_in?: InputMaybe<Array<Scalars['String']>>;
  fromProfile_not_in?: InputMaybe<Array<Scalars['String']>>;
  fromProfile_contains?: InputMaybe<Scalars['String']>;
  fromProfile_contains_nocase?: InputMaybe<Scalars['String']>;
  fromProfile_not_contains?: InputMaybe<Scalars['String']>;
  fromProfile_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fromProfile_starts_with?: InputMaybe<Scalars['String']>;
  fromProfile_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fromProfile_not_starts_with?: InputMaybe<Scalars['String']>;
  fromProfile_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fromProfile_ends_with?: InputMaybe<Scalars['String']>;
  fromProfile_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fromProfile_not_ends_with?: InputMaybe<Scalars['String']>;
  fromProfile_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fromProfile_?: InputMaybe<Profile_filter>;
  pubId?: InputMaybe<Scalars['BigInt']>;
  pubId_not?: InputMaybe<Scalars['BigInt']>;
  pubId_gt?: InputMaybe<Scalars['BigInt']>;
  pubId_lt?: InputMaybe<Scalars['BigInt']>;
  pubId_gte?: InputMaybe<Scalars['BigInt']>;
  pubId_lte?: InputMaybe<Scalars['BigInt']>;
  pubId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pubId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  referenceModule?: InputMaybe<Scalars['Bytes']>;
  referenceModule_not?: InputMaybe<Scalars['Bytes']>;
  referenceModule_in?: InputMaybe<Array<Scalars['Bytes']>>;
  referenceModule_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  referenceModule_contains?: InputMaybe<Scalars['Bytes']>;
  referenceModule_not_contains?: InputMaybe<Scalars['Bytes']>;
  referenceModuleReturnData?: InputMaybe<Scalars['Bytes']>;
  referenceModuleReturnData_not?: InputMaybe<Scalars['Bytes']>;
  referenceModuleReturnData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  referenceModuleReturnData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  referenceModuleReturnData_contains?: InputMaybe<Scalars['Bytes']>;
  referenceModuleReturnData_not_contains?: InputMaybe<Scalars['Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Publication_orderBy =
  | 'id'
  | 'fromProfile'
  | 'pubId'
  | 'referenceModule'
  | 'referenceModuleReturnData'
  | 'timestamp';

export type Query = {
  stat?: Maybe<Stat>;
  stats: Array<Stat>;
  profile?: Maybe<Profile>;
  profiles: Array<Profile>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  creator?: Maybe<Creator>;
  creators: Array<Creator>;
  post?: Maybe<Post>;
  posts: Array<Post>;
  mirror?: Maybe<Mirror>;
  mirrors: Array<Mirror>;
  comment?: Maybe<Comment>;
  comments: Array<Comment>;
  follow?: Maybe<Follow>;
  follows: Array<Follow>;
  followNFTTransferred?: Maybe<FollowNFTTransferred>;
  followNFTTransferreds: Array<FollowNFTTransferred>;
  publication?: Maybe<Publication>;
  publications: Array<Publication>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerystatArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystatsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Stat_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Stat_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprofileArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprofilesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Profile_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Profile_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycreatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycreatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Creator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Creator_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypostArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypostsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Post_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Post_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymirrorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymirrorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mirror_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mirror_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycommentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycommentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Comment_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Comment_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfollowArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfollowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Follow_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Follow_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfollowNFTTransferredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfollowNFTTransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FollowNFTTransferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FollowNFTTransferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypublicationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypublicationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Publication_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Publication_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Stat = {
  id: Scalars['ID'];
  /** Total profiles */
  totalProfiles: Scalars['BigInt'];
  /** Total accounts */
  totalAccounts: Scalars['BigInt'];
  /** Total Post */
  totalPosts: Scalars['BigInt'];
  /** Total Comments */
  totalComments: Scalars['BigInt'];
  /** Total Mirrors */
  totalMirror: Scalars['BigInt'];
  /** Total Publicactions */
  totalPublications: Scalars['BigInt'];
  /** Last Comment created */
  lastCommentCreatedAt?: Maybe<Scalars['BigInt']>;
  /** Last Post created */
  lastPostCreatedAt?: Maybe<Scalars['BigInt']>;
  /** Last Mirror created */
  lastMirrorCreatedAt?: Maybe<Scalars['BigInt']>;
  /** Last Profile created */
  lastProfileCreated?: Maybe<Scalars['BigInt']>;
};

export type Stat_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  totalProfiles?: InputMaybe<Scalars['BigInt']>;
  totalProfiles_not?: InputMaybe<Scalars['BigInt']>;
  totalProfiles_gt?: InputMaybe<Scalars['BigInt']>;
  totalProfiles_lt?: InputMaybe<Scalars['BigInt']>;
  totalProfiles_gte?: InputMaybe<Scalars['BigInt']>;
  totalProfiles_lte?: InputMaybe<Scalars['BigInt']>;
  totalProfiles_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalProfiles_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAccounts?: InputMaybe<Scalars['BigInt']>;
  totalAccounts_not?: InputMaybe<Scalars['BigInt']>;
  totalAccounts_gt?: InputMaybe<Scalars['BigInt']>;
  totalAccounts_lt?: InputMaybe<Scalars['BigInt']>;
  totalAccounts_gte?: InputMaybe<Scalars['BigInt']>;
  totalAccounts_lte?: InputMaybe<Scalars['BigInt']>;
  totalAccounts_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAccounts_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPosts?: InputMaybe<Scalars['BigInt']>;
  totalPosts_not?: InputMaybe<Scalars['BigInt']>;
  totalPosts_gt?: InputMaybe<Scalars['BigInt']>;
  totalPosts_lt?: InputMaybe<Scalars['BigInt']>;
  totalPosts_gte?: InputMaybe<Scalars['BigInt']>;
  totalPosts_lte?: InputMaybe<Scalars['BigInt']>;
  totalPosts_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPosts_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalComments?: InputMaybe<Scalars['BigInt']>;
  totalComments_not?: InputMaybe<Scalars['BigInt']>;
  totalComments_gt?: InputMaybe<Scalars['BigInt']>;
  totalComments_lt?: InputMaybe<Scalars['BigInt']>;
  totalComments_gte?: InputMaybe<Scalars['BigInt']>;
  totalComments_lte?: InputMaybe<Scalars['BigInt']>;
  totalComments_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalComments_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalMirror?: InputMaybe<Scalars['BigInt']>;
  totalMirror_not?: InputMaybe<Scalars['BigInt']>;
  totalMirror_gt?: InputMaybe<Scalars['BigInt']>;
  totalMirror_lt?: InputMaybe<Scalars['BigInt']>;
  totalMirror_gte?: InputMaybe<Scalars['BigInt']>;
  totalMirror_lte?: InputMaybe<Scalars['BigInt']>;
  totalMirror_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalMirror_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPublications?: InputMaybe<Scalars['BigInt']>;
  totalPublications_not?: InputMaybe<Scalars['BigInt']>;
  totalPublications_gt?: InputMaybe<Scalars['BigInt']>;
  totalPublications_lt?: InputMaybe<Scalars['BigInt']>;
  totalPublications_gte?: InputMaybe<Scalars['BigInt']>;
  totalPublications_lte?: InputMaybe<Scalars['BigInt']>;
  totalPublications_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPublications_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastCommentCreatedAt?: InputMaybe<Scalars['BigInt']>;
  lastCommentCreatedAt_not?: InputMaybe<Scalars['BigInt']>;
  lastCommentCreatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  lastCommentCreatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  lastCommentCreatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  lastCommentCreatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  lastCommentCreatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastCommentCreatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastPostCreatedAt?: InputMaybe<Scalars['BigInt']>;
  lastPostCreatedAt_not?: InputMaybe<Scalars['BigInt']>;
  lastPostCreatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  lastPostCreatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  lastPostCreatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  lastPostCreatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  lastPostCreatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastPostCreatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastMirrorCreatedAt?: InputMaybe<Scalars['BigInt']>;
  lastMirrorCreatedAt_not?: InputMaybe<Scalars['BigInt']>;
  lastMirrorCreatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  lastMirrorCreatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  lastMirrorCreatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  lastMirrorCreatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  lastMirrorCreatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastMirrorCreatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastProfileCreated?: InputMaybe<Scalars['BigInt']>;
  lastProfileCreated_not?: InputMaybe<Scalars['BigInt']>;
  lastProfileCreated_gt?: InputMaybe<Scalars['BigInt']>;
  lastProfileCreated_lt?: InputMaybe<Scalars['BigInt']>;
  lastProfileCreated_gte?: InputMaybe<Scalars['BigInt']>;
  lastProfileCreated_lte?: InputMaybe<Scalars['BigInt']>;
  lastProfileCreated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastProfileCreated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Stat_orderBy =
  | 'id'
  | 'totalProfiles'
  | 'totalAccounts'
  | 'totalPosts'
  | 'totalComments'
  | 'totalMirror'
  | 'totalPublications'
  | 'lastCommentCreatedAt'
  | 'lastPostCreatedAt'
  | 'lastMirrorCreatedAt'
  | 'lastProfileCreated';

export type Subscription = {
  stat?: Maybe<Stat>;
  stats: Array<Stat>;
  profile?: Maybe<Profile>;
  profiles: Array<Profile>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  creator?: Maybe<Creator>;
  creators: Array<Creator>;
  post?: Maybe<Post>;
  posts: Array<Post>;
  mirror?: Maybe<Mirror>;
  mirrors: Array<Mirror>;
  comment?: Maybe<Comment>;
  comments: Array<Comment>;
  follow?: Maybe<Follow>;
  follows: Array<Follow>;
  followNFTTransferred?: Maybe<FollowNFTTransferred>;
  followNFTTransferreds: Array<FollowNFTTransferred>;
  publication?: Maybe<Publication>;
  publications: Array<Publication>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionstatArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstatsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Stat_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Stat_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprofileArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprofilesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Profile_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Profile_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncreatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncreatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Creator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Creator_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpostArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpostsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Post_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Post_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmirrorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmirrorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mirror_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mirror_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncommentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncommentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Comment_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Comment_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfollowArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfollowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Follow_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Follow_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfollowNFTTransferredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfollowNFTTransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FollowNFTTransferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FollowNFTTransferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpublicationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpublicationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Publication_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Publication_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  stat: InContextSdkMethod<Query['stat'], QuerystatArgs, MeshContext>,
  /** null **/
  stats: InContextSdkMethod<Query['stats'], QuerystatsArgs, MeshContext>,
  /** null **/
  profile: InContextSdkMethod<Query['profile'], QueryprofileArgs, MeshContext>,
  /** null **/
  profiles: InContextSdkMethod<Query['profiles'], QueryprofilesArgs, MeshContext>,
  /** null **/
  account: InContextSdkMethod<Query['account'], QueryaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<Query['accounts'], QueryaccountsArgs, MeshContext>,
  /** null **/
  creator: InContextSdkMethod<Query['creator'], QuerycreatorArgs, MeshContext>,
  /** null **/
  creators: InContextSdkMethod<Query['creators'], QuerycreatorsArgs, MeshContext>,
  /** null **/
  post: InContextSdkMethod<Query['post'], QuerypostArgs, MeshContext>,
  /** null **/
  posts: InContextSdkMethod<Query['posts'], QuerypostsArgs, MeshContext>,
  /** null **/
  mirror: InContextSdkMethod<Query['mirror'], QuerymirrorArgs, MeshContext>,
  /** null **/
  mirrors: InContextSdkMethod<Query['mirrors'], QuerymirrorsArgs, MeshContext>,
  /** null **/
  comment: InContextSdkMethod<Query['comment'], QuerycommentArgs, MeshContext>,
  /** null **/
  comments: InContextSdkMethod<Query['comments'], QuerycommentsArgs, MeshContext>,
  /** null **/
  follow: InContextSdkMethod<Query['follow'], QueryfollowArgs, MeshContext>,
  /** null **/
  follows: InContextSdkMethod<Query['follows'], QueryfollowsArgs, MeshContext>,
  /** null **/
  followNFTTransferred: InContextSdkMethod<Query['followNFTTransferred'], QueryfollowNFTTransferredArgs, MeshContext>,
  /** null **/
  followNFTTransferreds: InContextSdkMethod<Query['followNFTTransferreds'], QueryfollowNFTTransferredsArgs, MeshContext>,
  /** null **/
  publication: InContextSdkMethod<Query['publication'], QuerypublicationArgs, MeshContext>,
  /** null **/
  publications: InContextSdkMethod<Query['publications'], QuerypublicationsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  stat: InContextSdkMethod<Subscription['stat'], SubscriptionstatArgs, MeshContext>,
  /** null **/
  stats: InContextSdkMethod<Subscription['stats'], SubscriptionstatsArgs, MeshContext>,
  /** null **/
  profile: InContextSdkMethod<Subscription['profile'], SubscriptionprofileArgs, MeshContext>,
  /** null **/
  profiles: InContextSdkMethod<Subscription['profiles'], SubscriptionprofilesArgs, MeshContext>,
  /** null **/
  account: InContextSdkMethod<Subscription['account'], SubscriptionaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<Subscription['accounts'], SubscriptionaccountsArgs, MeshContext>,
  /** null **/
  creator: InContextSdkMethod<Subscription['creator'], SubscriptioncreatorArgs, MeshContext>,
  /** null **/
  creators: InContextSdkMethod<Subscription['creators'], SubscriptioncreatorsArgs, MeshContext>,
  /** null **/
  post: InContextSdkMethod<Subscription['post'], SubscriptionpostArgs, MeshContext>,
  /** null **/
  posts: InContextSdkMethod<Subscription['posts'], SubscriptionpostsArgs, MeshContext>,
  /** null **/
  mirror: InContextSdkMethod<Subscription['mirror'], SubscriptionmirrorArgs, MeshContext>,
  /** null **/
  mirrors: InContextSdkMethod<Subscription['mirrors'], SubscriptionmirrorsArgs, MeshContext>,
  /** null **/
  comment: InContextSdkMethod<Subscription['comment'], SubscriptioncommentArgs, MeshContext>,
  /** null **/
  comments: InContextSdkMethod<Subscription['comments'], SubscriptioncommentsArgs, MeshContext>,
  /** null **/
  follow: InContextSdkMethod<Subscription['follow'], SubscriptionfollowArgs, MeshContext>,
  /** null **/
  follows: InContextSdkMethod<Subscription['follows'], SubscriptionfollowsArgs, MeshContext>,
  /** null **/
  followNFTTransferred: InContextSdkMethod<Subscription['followNFTTransferred'], SubscriptionfollowNFTTransferredArgs, MeshContext>,
  /** null **/
  followNFTTransferreds: InContextSdkMethod<Subscription['followNFTTransferreds'], SubscriptionfollowNFTTransferredsArgs, MeshContext>,
  /** null **/
  publication: InContextSdkMethod<Subscription['publication'], SubscriptionpublicationArgs, MeshContext>,
  /** null **/
  publications: InContextSdkMethod<Subscription['publications'], SubscriptionpublicationsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["lens-subgraph"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
