// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { LensProtocolTypes } from './sources/lens-protocol/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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
  /** List of Profiles that own this account */
  profiles: Array<Profile>;
  /** List of Followings Profiles */
  following: Array<Profile>;
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
  profiles_?: InputMaybe<Profile_filter>;
  following?: InputMaybe<Array<Scalars['String']>>;
  following_not?: InputMaybe<Array<Scalars['String']>>;
  following_contains?: InputMaybe<Array<Scalars['String']>>;
  following_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  following_not_contains?: InputMaybe<Array<Scalars['String']>>;
  following_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  following_?: InputMaybe<Profile_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Account_orderBy =
  | 'id'
  | 'address'
  | 'profiles'
  | 'following';

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
  /** Follower Account. (Why not ProfileId ?) */
  fromProfile?: Maybe<Account>;
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

export type Follow_filter = {
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
  fromProfile_?: InputMaybe<Account_filter>;
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
  | 'fromProfile'
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
  /** List of comments */
  comments?: Maybe<Array<Comment>>;
  /** List of post */
  posts?: Maybe<Array<Post>>;
  /** List of Mirrors */
  mirrors?: Maybe<Array<Mirror>>;
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Account: ResolverTypeWrapper<Account>;
  Account_filter: Account_filter;
  Account_orderBy: Account_orderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Comment: ResolverTypeWrapper<Comment>;
  Comment_filter: Comment_filter;
  Comment_orderBy: Comment_orderBy;
  Creator: ResolverTypeWrapper<Creator>;
  Creator_filter: Creator_filter;
  Creator_orderBy: Creator_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Follow: ResolverTypeWrapper<Follow>;
  Follow_filter: Follow_filter;
  Follow_orderBy: Follow_orderBy;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mirror: ResolverTypeWrapper<Mirror>;
  Mirror_filter: Mirror_filter;
  Mirror_orderBy: Mirror_orderBy;
  OrderDirection: OrderDirection;
  Post: ResolverTypeWrapper<Post>;
  Post_filter: Post_filter;
  Post_orderBy: Post_orderBy;
  Profile: ResolverTypeWrapper<Profile>;
  Profile_filter: Profile_filter;
  Profile_orderBy: Profile_orderBy;
  Publication: ResolversTypes['Comment'] | ResolversTypes['Mirror'] | ResolversTypes['Post'];
  Publication_filter: Publication_filter;
  Publication_orderBy: Publication_orderBy;
  Query: ResolverTypeWrapper<{}>;
  Stat: ResolverTypeWrapper<Stat>;
  Stat_filter: Stat_filter;
  Stat_orderBy: Stat_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: Account;
  Account_filter: Account_filter;
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  Comment: Comment;
  Comment_filter: Comment_filter;
  Creator: Creator;
  Creator_filter: Creator_filter;
  Float: Scalars['Float'];
  Follow: Follow;
  Follow_filter: Follow_filter;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mirror: Mirror;
  Mirror_filter: Mirror_filter;
  Post: Post;
  Post_filter: Post_filter;
  Profile: Profile;
  Profile_filter: Profile_filter;
  Publication: ResolversParentTypes['Comment'] | ResolversParentTypes['Mirror'] | ResolversParentTypes['Post'];
  Publication_filter: Publication_filter;
  Query: {};
  Stat: Stat;
  Stat_filter: Stat_filter;
  String: Scalars['String'];
  Subscription: {};
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  profiles?: Resolver<Array<ResolversTypes['Profile']>, ParentType, ContextType, RequireFields<AccountprofilesArgs, 'skip' | 'first'>>;
  following?: Resolver<Array<ResolversTypes['Profile']>, ParentType, ContextType, RequireFields<AccountfollowingArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type CommentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fromProfile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>;
  pubId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  referenceModule?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  referenceModuleReturnData?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  contentURI?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileIdPointed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pubIdPointed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collectModule?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  collectModuleReturnData?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreatorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Creator'] = ResolversParentTypes['Creator']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  isWhitelisted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastUpdated?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FollowResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Follow'] = ResolversParentTypes['Follow']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fromProfile?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  toProfile?: Resolver<Maybe<Array<ResolversTypes['Profile']>>, ParentType, ContextType, RequireFields<FollowtoProfileArgs, 'skip' | 'first'>>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MirrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mirror'] = ResolversParentTypes['Mirror']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fromProfile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>;
  pubId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  referenceModule?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  referenceModuleReturnData?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  profileIdPointed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pubIdPointed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PostResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fromProfile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>;
  pubId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  referenceModule?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  referenceModuleReturnData?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  contentURI?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  collectModule?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  collectModuleReturnData?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProfileResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  creator?: Resolver<ResolversTypes['Creator'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  followNFT?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  followNFTURI?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  handle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageURI?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  followModule?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  followModuleReturnData?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  dispatcher?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  lastUpdated?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalMirrors?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalPosts?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalComments?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalFollowers?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<ResolversTypes['Comment']>>, ParentType, ContextType, RequireFields<ProfilecommentsArgs, 'skip' | 'first'>>;
  posts?: Resolver<Maybe<Array<ResolversTypes['Post']>>, ParentType, ContextType, RequireFields<ProfilepostsArgs, 'skip' | 'first'>>;
  mirrors?: Resolver<Maybe<Array<ResolversTypes['Mirror']>>, ParentType, ContextType, RequireFields<ProfilemirrorsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PublicationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Publication'] = ResolversParentTypes['Publication']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Comment' | 'Mirror' | 'Post', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fromProfile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>;
  pubId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  referenceModule?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  referenceModuleReturnData?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  stat?: Resolver<Maybe<ResolversTypes['Stat']>, ParentType, ContextType, RequireFields<QuerystatArgs, 'id' | 'subgraphError'>>;
  stats?: Resolver<Array<ResolversTypes['Stat']>, ParentType, ContextType, RequireFields<QuerystatsArgs, 'skip' | 'first' | 'subgraphError'>>;
  profile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType, RequireFields<QueryprofileArgs, 'id' | 'subgraphError'>>;
  profiles?: Resolver<Array<ResolversTypes['Profile']>, ParentType, ContextType, RequireFields<QueryprofilesArgs, 'skip' | 'first' | 'subgraphError'>>;
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountArgs, 'id' | 'subgraphError'>>;
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  creator?: Resolver<Maybe<ResolversTypes['Creator']>, ParentType, ContextType, RequireFields<QuerycreatorArgs, 'id' | 'subgraphError'>>;
  creators?: Resolver<Array<ResolversTypes['Creator']>, ParentType, ContextType, RequireFields<QuerycreatorsArgs, 'skip' | 'first' | 'subgraphError'>>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QuerypostArgs, 'id' | 'subgraphError'>>;
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QuerypostsArgs, 'skip' | 'first' | 'subgraphError'>>;
  mirror?: Resolver<Maybe<ResolversTypes['Mirror']>, ParentType, ContextType, RequireFields<QuerymirrorArgs, 'id' | 'subgraphError'>>;
  mirrors?: Resolver<Array<ResolversTypes['Mirror']>, ParentType, ContextType, RequireFields<QuerymirrorsArgs, 'skip' | 'first' | 'subgraphError'>>;
  comment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<QuerycommentArgs, 'id' | 'subgraphError'>>;
  comments?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<QuerycommentsArgs, 'skip' | 'first' | 'subgraphError'>>;
  follow?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType, RequireFields<QueryfollowArgs, 'id' | 'subgraphError'>>;
  follows?: Resolver<Array<ResolversTypes['Follow']>, ParentType, ContextType, RequireFields<QueryfollowsArgs, 'skip' | 'first' | 'subgraphError'>>;
  publication?: Resolver<Maybe<ResolversTypes['Publication']>, ParentType, ContextType, RequireFields<QuerypublicationArgs, 'id' | 'subgraphError'>>;
  publications?: Resolver<Array<ResolversTypes['Publication']>, ParentType, ContextType, RequireFields<QuerypublicationsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type StatResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Stat'] = ResolversParentTypes['Stat']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  totalProfiles?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalAccounts?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalPosts?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalComments?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalMirror?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalPublications?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lastCommentCreatedAt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  lastPostCreatedAt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  lastMirrorCreatedAt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  lastProfileCreated?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  stat?: SubscriptionResolver<Maybe<ResolversTypes['Stat']>, "stat", ParentType, ContextType, RequireFields<SubscriptionstatArgs, 'id' | 'subgraphError'>>;
  stats?: SubscriptionResolver<Array<ResolversTypes['Stat']>, "stats", ParentType, ContextType, RequireFields<SubscriptionstatsArgs, 'skip' | 'first' | 'subgraphError'>>;
  profile?: SubscriptionResolver<Maybe<ResolversTypes['Profile']>, "profile", ParentType, ContextType, RequireFields<SubscriptionprofileArgs, 'id' | 'subgraphError'>>;
  profiles?: SubscriptionResolver<Array<ResolversTypes['Profile']>, "profiles", ParentType, ContextType, RequireFields<SubscriptionprofilesArgs, 'skip' | 'first' | 'subgraphError'>>;
  account?: SubscriptionResolver<Maybe<ResolversTypes['Account']>, "account", ParentType, ContextType, RequireFields<SubscriptionaccountArgs, 'id' | 'subgraphError'>>;
  accounts?: SubscriptionResolver<Array<ResolversTypes['Account']>, "accounts", ParentType, ContextType, RequireFields<SubscriptionaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  creator?: SubscriptionResolver<Maybe<ResolversTypes['Creator']>, "creator", ParentType, ContextType, RequireFields<SubscriptioncreatorArgs, 'id' | 'subgraphError'>>;
  creators?: SubscriptionResolver<Array<ResolversTypes['Creator']>, "creators", ParentType, ContextType, RequireFields<SubscriptioncreatorsArgs, 'skip' | 'first' | 'subgraphError'>>;
  post?: SubscriptionResolver<Maybe<ResolversTypes['Post']>, "post", ParentType, ContextType, RequireFields<SubscriptionpostArgs, 'id' | 'subgraphError'>>;
  posts?: SubscriptionResolver<Array<ResolversTypes['Post']>, "posts", ParentType, ContextType, RequireFields<SubscriptionpostsArgs, 'skip' | 'first' | 'subgraphError'>>;
  mirror?: SubscriptionResolver<Maybe<ResolversTypes['Mirror']>, "mirror", ParentType, ContextType, RequireFields<SubscriptionmirrorArgs, 'id' | 'subgraphError'>>;
  mirrors?: SubscriptionResolver<Array<ResolversTypes['Mirror']>, "mirrors", ParentType, ContextType, RequireFields<SubscriptionmirrorsArgs, 'skip' | 'first' | 'subgraphError'>>;
  comment?: SubscriptionResolver<Maybe<ResolversTypes['Comment']>, "comment", ParentType, ContextType, RequireFields<SubscriptioncommentArgs, 'id' | 'subgraphError'>>;
  comments?: SubscriptionResolver<Array<ResolversTypes['Comment']>, "comments", ParentType, ContextType, RequireFields<SubscriptioncommentsArgs, 'skip' | 'first' | 'subgraphError'>>;
  follow?: SubscriptionResolver<Maybe<ResolversTypes['Follow']>, "follow", ParentType, ContextType, RequireFields<SubscriptionfollowArgs, 'id' | 'subgraphError'>>;
  follows?: SubscriptionResolver<Array<ResolversTypes['Follow']>, "follows", ParentType, ContextType, RequireFields<SubscriptionfollowsArgs, 'skip' | 'first' | 'subgraphError'>>;
  publication?: SubscriptionResolver<Maybe<ResolversTypes['Publication']>, "publication", ParentType, ContextType, RequireFields<SubscriptionpublicationArgs, 'id' | 'subgraphError'>>;
  publications?: SubscriptionResolver<Array<ResolversTypes['Publication']>, "publications", ParentType, ContextType, RequireFields<SubscriptionpublicationsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Comment?: CommentResolvers<ContextType>;
  Creator?: CreatorResolvers<ContextType>;
  Follow?: FollowResolvers<ContextType>;
  Mirror?: MirrorResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Profile?: ProfileResolvers<ContextType>;
  Publication?: PublicationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Stat?: StatResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = LensProtocolTypes.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/lens-protocol/introspectionSchema":
      return import("./sources/lens-protocol/introspectionSchema") as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const lensProtocolTransforms = [];
const additionalTypeDefs = [] as any[];
const lensProtocolHandler = new GraphqlHandler({
              name: "lens-protocol",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/raw-brt/lens-protocol"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("lens-protocol"),
              logger: logger.child("lens-protocol"),
              importFn,
            });
sources[0] = {
          name: 'lens-protocol',
          handler: lensProtocolHandler,
          transforms: lensProtocolTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: GetFollowersByIntervalDocument,
        get rawSDL() {
          return printWithCache(GetFollowersByIntervalDocument);
        },
        location: 'GetFollowersByIntervalDocument.graphql'
      },{
        document: GetPostsByIntervalDocument,
        get rawSDL() {
          return printWithCache(GetPostsByIntervalDocument);
        },
        location: 'GetPostsByIntervalDocument.graphql'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler(): MeshHTTPHandler<MeshContext> {
  return createMeshHTTPHandler<MeshContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type GetFollowersByIntervalQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  gt?: InputMaybe<Scalars['BigInt']>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lastID?: InputMaybe<Scalars['ID']>;
}>;


export type GetFollowersByIntervalQuery = { follows: Array<Pick<Follow, 'timestamp' | 'id'>> };

export type GetPostsByIntervalQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  handle?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lastPubId?: InputMaybe<Scalars['BigInt']>;
}>;


export type GetPostsByIntervalQuery = { posts: Array<Pick<Post, 'pubId' | 'timestamp'>> };


export const GetFollowersByIntervalDocument = gql`
    query GetFollowersByInterval($first: Int = 1000, $skip: Int = 0, $id: ID!, $gt: BigInt, $lt: BigInt, $lastID: ID = "") {
  follows(
    first: $first
    skip: $skip
    where: {toProfile_: {id: $id}, timestamp_gt: $gt, timestamp_lt: $lt, id_gt: $lastID}
    orderBy: id
    orderDirection: asc
  ) {
    timestamp
    id
  }
}
    ` as unknown as DocumentNode<GetFollowersByIntervalQuery, GetFollowersByIntervalQueryVariables>;
export const GetPostsByIntervalDocument = gql`
    query GetPostsByInterval($first: Int = 1000, $skip: Int = 0, $handle: String, $gt: BigInt, $lt: BigInt, $lastPubId: BigInt = 0) {
  posts(
    first: $first
    skip: $skip
    where: {fromProfile_: {handle: $handle}, timestamp_gt: $gt, timestamp_lt: $lt, pubId_gt: $lastPubId}
    orderBy: pubId
    orderDirection: asc
  ) {
    pubId
    timestamp
  }
}
    ` as unknown as DocumentNode<GetPostsByIntervalQuery, GetPostsByIntervalQueryVariables>;



export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    GetFollowersByInterval(variables: GetFollowersByIntervalQueryVariables, options?: C): Promise<GetFollowersByIntervalQuery> {
      return requester<GetFollowersByIntervalQuery, GetFollowersByIntervalQueryVariables>(GetFollowersByIntervalDocument, variables, options) as Promise<GetFollowersByIntervalQuery>;
    },
    GetPostsByInterval(variables?: GetPostsByIntervalQueryVariables, options?: C): Promise<GetPostsByIntervalQuery> {
      return requester<GetPostsByIntervalQuery, GetPostsByIntervalQueryVariables>(GetPostsByIntervalDocument, variables, options) as Promise<GetPostsByIntervalQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;