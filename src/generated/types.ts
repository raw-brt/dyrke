import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from "graphql";
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };

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
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BlockchainData: any;
  BroadcastId: any;
  ChainId: any;
  CollectModuleData: any;
  ContentEncryptionKey: any;
  ContractAddress: any;
  CreateHandle: any;
  Cursor: any;
  DateTime: any;
  EncryptedValueScalar: any;
  Ens: any;
  EthereumAddress: any;
  FollowModuleData: any;
  Handle: any;
  HandleClaimIdScalar: any;
  IfpsCid: any;
  InternalPublicationId: any;
  Jwt: any;
  LimitScalar: any;
  Locale: any;
  Markdown: any;
  MimeType: any;
  NftOwnershipId: any;
  Nonce: any;
  NotificationId: any;
  ProfileId: any;
  ProfileInterest: any;
  ProxyActionId: any;
  PublicationId: any;
  PublicationTag: any;
  PublicationUrl: any;
  ReactionId: any;
  ReferenceModuleData: any;
  Search: any;
  Signature: any;
  Sources: any;
  TimestampScalar: any;
  TokenId: any;
  TxHash: any;
  TxId: any;
  UnixTimestamp: any;
  Url: any;
  Void: any;
};

/** The access conditions for the publication */
export type AccessConditionInput = {
  /** AND condition */
  and?: InputMaybe<AndConditionInput>;
  /** Profile follow condition */
  collect?: InputMaybe<CollectConditionInput>;
  /** EOA ownership condition */
  eoa?: InputMaybe<EoaOwnershipInput>;
  /** Profile follow condition */
  follow?: InputMaybe<FollowConditionInput>;
  /** NFT ownership condition */
  nft?: InputMaybe<NftOwnershipInput>;
  /** OR condition */
  or?: InputMaybe<OrConditionInput>;
  /** Profile ownership condition */
  profile?: InputMaybe<ProfileOwnershipInput>;
  /** ERC20 token ownership condition */
  token?: InputMaybe<Erc20OwnershipInput>;
};

/** The access conditions for the publication */
export type AccessConditionOutput = {
  __typename?: "AccessConditionOutput";
  /** AND condition */
  and?: Maybe<AndConditionOutput>;
  /** Profile follow condition */
  collect?: Maybe<CollectConditionOutput>;
  /** EOA ownership condition */
  eoa?: Maybe<EoaOwnershipOutput>;
  /** Profile follow condition */
  follow?: Maybe<FollowConditionOutput>;
  /** NFT ownership condition */
  nft?: Maybe<NftOwnershipOutput>;
  /** OR condition */
  or?: Maybe<OrConditionOutput>;
  /** Profile ownership condition */
  profile?: Maybe<ProfileOwnershipOutput>;
  /** ERC20 token ownership condition */
  token?: Maybe<Erc20OwnershipOutput>;
};

export type AchRequest = {
  ethereumAddress: Scalars["EthereumAddress"];
  freeTextHandle?: InputMaybe<Scalars["Boolean"]>;
  handle?: InputMaybe<Scalars["CreateHandle"]>;
  overrideAlreadyClaimed: Scalars["Boolean"];
  overrideTradeMark: Scalars["Boolean"];
  secret: Scalars["String"];
};

/** The request object to add interests to a profile */
export type AddProfileInterestsRequest = {
  /** The profile interest to add */
  interests: Array<Scalars["ProfileInterest"]>;
  /** The profileId to add interests to */
  profileId: Scalars["ProfileId"];
};

export type AllPublicationsTagsRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  sort: TagSortCriteria;
  /** The App Id */
  source?: InputMaybe<Scalars["Sources"]>;
};

export type AndConditionInput = {
  /** The list of conditions to apply AND to. You can only use nested boolean conditions at the root level. */
  criteria: Array<AccessConditionInput>;
};

export type AndConditionOutput = {
  __typename?: "AndConditionOutput";
  /** The list of conditions to apply AND to. You can only use nested boolean conditions at the root level. */
  criteria: Array<AccessConditionOutput>;
};

export type ApprovedAllowanceAmount = {
  __typename?: "ApprovedAllowanceAmount";
  allowance: Scalars["String"];
  contractAddress: Scalars["ContractAddress"];
  currency: Scalars["ContractAddress"];
  module: Scalars["String"];
};

export type ApprovedModuleAllowanceAmountRequest = {
  collectModules?: InputMaybe<Array<CollectModules>>;
  /** The contract addresses for the module approved currencies you want to find information on about the user */
  currencies: Array<Scalars["ContractAddress"]>;
  followModules?: InputMaybe<Array<FollowModules>>;
  referenceModules?: InputMaybe<Array<ReferenceModules>>;
  unknownCollectModules?: InputMaybe<Array<Scalars["ContractAddress"]>>;
  unknownFollowModules?: InputMaybe<Array<Scalars["ContractAddress"]>>;
  unknownReferenceModules?: InputMaybe<Array<Scalars["ContractAddress"]>>;
};

/** The Profile */
export type Attribute = {
  __typename?: "Attribute";
  /** The display type */
  displayType?: Maybe<Scalars["String"]>;
  /** identifier of this attribute, we will update by this id  */
  key: Scalars["String"];
  /** The trait type - can be anything its the name it will render so include spaces */
  traitType?: Maybe<Scalars["String"]>;
  /** Value attribute */
  value: Scalars["String"];
};

/** The auth challenge result */
export type AuthChallengeResult = {
  __typename?: "AuthChallengeResult";
  /** The text to sign */
  text: Scalars["String"];
};

/** The authentication result */
export type AuthenticationResult = {
  __typename?: "AuthenticationResult";
  /** The access token */
  accessToken: Scalars["Jwt"];
  /** The refresh token */
  refreshToken: Scalars["Jwt"];
};

export type BroadcastRequest = {
  id: Scalars["BroadcastId"];
  signature: Scalars["Signature"];
};

export type BurnProfileRequest = {
  profileId: Scalars["ProfileId"];
};

export type CanCommentResponse = {
  __typename?: "CanCommentResponse";
  result: Scalars["Boolean"];
};

export type CanDecryptResponse = {
  __typename?: "CanDecryptResponse";
  reasons?: Maybe<DecryptFailReason>;
  result: Scalars["Boolean"];
};

export type CanMirrorResponse = {
  __typename?: "CanMirrorResponse";
  result: Scalars["Boolean"];
};

/** The challenge request */
export type ChallengeRequest = {
  /** The ethereum address you want to login with */
  address: Scalars["EthereumAddress"];
};

export type ClaimHandleRequest = {
  /** The follow module */
  followModule?: InputMaybe<FollowModuleParams>;
  freeTextHandle?: InputMaybe<Scalars["CreateHandle"]>;
  id?: InputMaybe<Scalars["HandleClaimIdScalar"]>;
};

/** The claim status */
export enum ClaimStatus {
  AlreadyClaimed = "ALREADY_CLAIMED",
  ClaimFailed = "CLAIM_FAILED",
  NotClaimed = "NOT_CLAIMED",
}

export type ClaimableHandles = {
  __typename?: "ClaimableHandles";
  canClaimFreeTextHandle: Scalars["Boolean"];
  reservedHandles: Array<ReservedClaimableHandle>;
};

/** Condition that signifies if address or profile has collected a publication */
export type CollectConditionInput = {
  /** The publication id that has to be collected to unlock content */
  publicationId?: InputMaybe<Scalars["ProfileId"]>;
  /** True if the content will be unlocked for this specific publication */
  thisPublication?: InputMaybe<Scalars["Boolean"]>;
};

/** Condition that signifies if address or profile has collected a publication */
export type CollectConditionOutput = {
  __typename?: "CollectConditionOutput";
  /** The publication id that has to be collected to unlock content */
  publicationId?: Maybe<Scalars["ProfileId"]>;
  /** True if the content will be unlocked for this specific publication */
  thisPublication?: Maybe<Scalars["Boolean"]>;
};

export type CollectModule =
  | FeeCollectModuleSettings
  | FreeCollectModuleSettings
  | LimitedFeeCollectModuleSettings
  | LimitedTimedFeeCollectModuleSettings
  | RevertCollectModuleSettings
  | TimedFeeCollectModuleSettings
  | UnknownCollectModuleSettings;

export type CollectModuleParams = {
  /** The collect fee collect module */
  feeCollectModule?: InputMaybe<FeeCollectModuleParams>;
  /** The collect empty collect module */
  freeCollectModule?: InputMaybe<FreeCollectModuleParams>;
  /** The collect limited fee collect module */
  limitedFeeCollectModule?: InputMaybe<LimitedFeeCollectModuleParams>;
  /** The collect limited timed fee collect module */
  limitedTimedFeeCollectModule?: InputMaybe<LimitedTimedFeeCollectModuleParams>;
  /** The collect revert collect module */
  revertCollectModule?: InputMaybe<Scalars["Boolean"]>;
  /** The collect timed fee collect module */
  timedFeeCollectModule?: InputMaybe<TimedFeeCollectModuleParams>;
  /** A unknown collect module */
  unknownCollectModule?: InputMaybe<UnknownCollectModuleParams>;
};

/** The collect module types */
export enum CollectModules {
  FeeCollectModule = "FeeCollectModule",
  FreeCollectModule = "FreeCollectModule",
  LimitedFeeCollectModule = "LimitedFeeCollectModule",
  LimitedTimedFeeCollectModule = "LimitedTimedFeeCollectModule",
  RevertCollectModule = "RevertCollectModule",
  TimedFeeCollectModule = "TimedFeeCollectModule",
  UnknownCollectModule = "UnknownCollectModule",
}

export type CollectProxyAction = {
  freeCollect?: InputMaybe<FreeCollectProxyAction>;
};

export type CollectedEvent = {
  __typename?: "CollectedEvent";
  profile: Profile;
  timestamp: Scalars["DateTime"];
};

/** The social comment */
export type Comment = {
  __typename?: "Comment";
  /** ID of the source */
  appId?: Maybe<Scalars["Sources"]>;
  canComment: CanCommentResponse;
  canDecrypt: CanDecryptResponse;
  canMirror: CanMirrorResponse;
  /** The collect module */
  collectModule: CollectModule;
  /** The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed */
  collectNftAddress?: Maybe<Scalars["ContractAddress"]>;
  /** Who collected it, this is used for timeline results and like this for better caching for the client */
  collectedBy?: Maybe<Wallet>;
  /** Which comment this points to if its null the pointer too deep so do another query to find it out */
  commentOn?: Maybe<Publication>;
  /** The date the post was created on */
  createdAt: Scalars["DateTime"];
  /** This will bring back the first comment of a comment and only be defined if using `publication` query and `commentOf` */
  firstComment?: Maybe<Comment>;
  hasCollectedByMe: Scalars["Boolean"];
  /** If the publication has been hidden if it has then the content and media is not available */
  hidden: Scalars["Boolean"];
  /** The internal publication id */
  id: Scalars["InternalPublicationId"];
  /** Indicates if the publication is gated behind some access criteria */
  isGated: Scalars["Boolean"];
  /** The top level post/mirror this comment lives on */
  mainPost: MainPostReference;
  /** The metadata for the post */
  metadata: MetadataOutput;
  mirrors: Array<Scalars["InternalPublicationId"]>;
  /** The on chain content uri could be `ipfs://` or `https` */
  onChainContentURI: Scalars["String"];
  /** The profile ref */
  profile: Profile;
  reaction?: Maybe<ReactionTypes>;
  /** The reference module */
  referenceModule?: Maybe<ReferenceModule>;
  /** The publication stats */
  stats: PublicationStats;
};

/** The social comment */
export type CommentCanCommentArgs = {
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};

/** The social comment */
export type CommentCanDecryptArgs = {
  address?: InputMaybe<Scalars["EthereumAddress"]>;
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};

/** The social comment */
export type CommentCanMirrorArgs = {
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};

/** The social comment */
export type CommentHasCollectedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars["Boolean"]>;
};

/** The social comment */
export type CommentMirrorsArgs = {
  by?: InputMaybe<Scalars["ProfileId"]>;
};

/** The social comment */
export type CommentReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>;
};

/** The gated publication access criteria contract types */
export enum ContractType {
  Erc20 = "ERC20",
  Erc721 = "ERC721",
  Erc1155 = "ERC1155",
}

/** The create burn eip 712 typed data */
export type CreateBurnEip712TypedData = {
  __typename?: "CreateBurnEIP712TypedData";
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateBurnEip712TypedDataTypes;
  /** The values */
  value: CreateBurnEip712TypedDataValue;
};

/** The create burn eip 712 typed data types */
export type CreateBurnEip712TypedDataTypes = {
  __typename?: "CreateBurnEIP712TypedDataTypes";
  BurnWithSig: Array<Eip712TypedDataField>;
};

/** The create burn eip 712 typed data value */
export type CreateBurnEip712TypedDataValue = {
  __typename?: "CreateBurnEIP712TypedDataValue";
  deadline: Scalars["UnixTimestamp"];
  nonce: Scalars["Nonce"];
  tokenId: Scalars["String"];
};

/** The broadcast item */
export type CreateBurnProfileBroadcastItemResult = {
  __typename?: "CreateBurnProfileBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: CreateBurnEip712TypedData;
};

/** The broadcast item */
export type CreateCollectBroadcastItemResult = {
  __typename?: "CreateCollectBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: CreateCollectEip712TypedData;
};

/** The collect eip 712 typed data */
export type CreateCollectEip712TypedData = {
  __typename?: "CreateCollectEIP712TypedData";
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateCollectEip712TypedDataTypes;
  /** The values */
  value: CreateCollectEip712TypedDataValue;
};

/** The collect eip 712 typed data types */
export type CreateCollectEip712TypedDataTypes = {
  __typename?: "CreateCollectEIP712TypedDataTypes";
  CollectWithSig: Array<Eip712TypedDataField>;
};

/** The collect eip 712 typed data value */
export type CreateCollectEip712TypedDataValue = {
  __typename?: "CreateCollectEIP712TypedDataValue";
  data: Scalars["BlockchainData"];
  deadline: Scalars["UnixTimestamp"];
  nonce: Scalars["Nonce"];
  profileId: Scalars["ProfileId"];
  pubId: Scalars["PublicationId"];
};

export type CreateCollectRequest = {
  publicationId: Scalars["InternalPublicationId"];
  /** The encoded data to collect with if using an unknown module */
  unknownModuleData?: InputMaybe<Scalars["BlockchainData"]>;
};

/** The broadcast item */
export type CreateCommentBroadcastItemResult = {
  __typename?: "CreateCommentBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: CreateCommentEip712TypedData;
};

/** The create comment eip 712 typed data */
export type CreateCommentEip712TypedData = {
  __typename?: "CreateCommentEIP712TypedData";
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateCommentEip712TypedDataTypes;
  /** The values */
  value: CreateCommentEip712TypedDataValue;
};

/** The create comment eip 712 typed data types */
export type CreateCommentEip712TypedDataTypes = {
  __typename?: "CreateCommentEIP712TypedDataTypes";
  CommentWithSig: Array<Eip712TypedDataField>;
};

/** The create comment eip 712 typed data value */
export type CreateCommentEip712TypedDataValue = {
  __typename?: "CreateCommentEIP712TypedDataValue";
  collectModule: Scalars["ContractAddress"];
  collectModuleInitData: Scalars["CollectModuleData"];
  contentURI: Scalars["PublicationUrl"];
  deadline: Scalars["UnixTimestamp"];
  nonce: Scalars["Nonce"];
  profileId: Scalars["ProfileId"];
  profileIdPointed: Scalars["ProfileId"];
  pubIdPointed: Scalars["PublicationId"];
  referenceModule: Scalars["ContractAddress"];
  referenceModuleData: Scalars["ReferenceModuleData"];
  referenceModuleInitData: Scalars["ReferenceModuleData"];
};

/** The broadcast item */
export type CreateFollowBroadcastItemResult = {
  __typename?: "CreateFollowBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: CreateFollowEip712TypedData;
};

/** The create follow eip 712 typed data */
export type CreateFollowEip712TypedData = {
  __typename?: "CreateFollowEIP712TypedData";
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateFollowEip712TypedDataTypes;
  /** The values */
  value: CreateFollowEip712TypedDataValue;
};

/** The create follow eip 712 typed data types */
export type CreateFollowEip712TypedDataTypes = {
  __typename?: "CreateFollowEIP712TypedDataTypes";
  FollowWithSig: Array<Eip712TypedDataField>;
};

/** The create follow eip 712 typed data value */
export type CreateFollowEip712TypedDataValue = {
  __typename?: "CreateFollowEIP712TypedDataValue";
  datas: Array<Scalars["BlockchainData"]>;
  deadline: Scalars["UnixTimestamp"];
  nonce: Scalars["Nonce"];
  profileIds: Array<Scalars["ProfileId"]>;
};

/** The broadcast item */
export type CreateMirrorBroadcastItemResult = {
  __typename?: "CreateMirrorBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: CreateMirrorEip712TypedData;
};

/** The mirror eip 712 typed data */
export type CreateMirrorEip712TypedData = {
  __typename?: "CreateMirrorEIP712TypedData";
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateMirrorEip712TypedDataTypes;
  /** The values */
  value: CreateMirrorEip712TypedDataValue;
};

/** The mirror eip 712 typed data types */
export type CreateMirrorEip712TypedDataTypes = {
  __typename?: "CreateMirrorEIP712TypedDataTypes";
  MirrorWithSig: Array<Eip712TypedDataField>;
};

/** The mirror eip 712 typed data value */
export type CreateMirrorEip712TypedDataValue = {
  __typename?: "CreateMirrorEIP712TypedDataValue";
  deadline: Scalars["UnixTimestamp"];
  nonce: Scalars["Nonce"];
  profileId: Scalars["ProfileId"];
  profileIdPointed: Scalars["ProfileId"];
  pubIdPointed: Scalars["PublicationId"];
  referenceModule: Scalars["ContractAddress"];
  referenceModuleData: Scalars["ReferenceModuleData"];
  referenceModuleInitData: Scalars["ReferenceModuleData"];
};

export type CreateMirrorRequest = {
  /** Profile id */
  profileId: Scalars["ProfileId"];
  /** Publication id of what you want to mirror on remember if this is a comment it will be that as the id */
  publicationId: Scalars["InternalPublicationId"];
  /** The reference module info */
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

/** The broadcast item */
export type CreatePostBroadcastItemResult = {
  __typename?: "CreatePostBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: CreatePostEip712TypedData;
};

/** The create post eip 712 typed data */
export type CreatePostEip712TypedData = {
  __typename?: "CreatePostEIP712TypedData";
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreatePostEip712TypedDataTypes;
  /** The values */
  value: CreatePostEip712TypedDataValue;
};

/** The create post eip 712 typed data types */
export type CreatePostEip712TypedDataTypes = {
  __typename?: "CreatePostEIP712TypedDataTypes";
  PostWithSig: Array<Eip712TypedDataField>;
};

/** The create post eip 712 typed data value */
export type CreatePostEip712TypedDataValue = {
  __typename?: "CreatePostEIP712TypedDataValue";
  collectModule: Scalars["ContractAddress"];
  collectModuleInitData: Scalars["CollectModuleData"];
  contentURI: Scalars["PublicationUrl"];
  deadline: Scalars["UnixTimestamp"];
  nonce: Scalars["Nonce"];
  profileId: Scalars["ProfileId"];
  referenceModule: Scalars["ContractAddress"];
  referenceModuleInitData: Scalars["ReferenceModuleData"];
};

export type CreateProfileRequest = {
  /** The follow module */
  followModule?: InputMaybe<FollowModuleParams>;
  /** The follow NFT URI is the NFT metadata your followers will mint when they follow you. This can be updated at all times. If you do not pass in anything it will create a super cool changing NFT which will show the last publication of your profile as the NFT which looks awesome! This means people do not have to worry about writing this logic but still have the ability to customise it for their followers */
  followNFTURI?: InputMaybe<Scalars["Url"]>;
  handle: Scalars["CreateHandle"];
  /** The profile picture uri */
  profilePictureUri?: InputMaybe<Scalars["Url"]>;
};

export type CreatePublicCommentRequest = {
  /** The collect module */
  collectModule: CollectModuleParams;
  /** The metadata uploaded somewhere passing in the url to reach it */
  contentURI: Scalars["Url"];
  /** The criteria to access the publication data */
  gated?: InputMaybe<GatedPublicationParamsInput>;
  /** Profile id */
  profileId: Scalars["ProfileId"];
  /** Publication id of what your comments on remember if this is a comment you commented on it will be that as the id */
  publicationId: Scalars["InternalPublicationId"];
  /** The reference module */
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

export type CreatePublicPostRequest = {
  /** The collect module */
  collectModule: CollectModuleParams;
  /** The metadata uploaded somewhere passing in the url to reach it */
  contentURI: Scalars["Url"];
  /** The criteria to access the publication data */
  gated?: InputMaybe<GatedPublicationParamsInput>;
  /** Profile id */
  profileId: Scalars["ProfileId"];
  /** The reference module */
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

export type CreatePublicSetProfileMetadataUriRequest = {
  /** The metadata uploaded somewhere passing in the url to reach it */
  metadata: Scalars["Url"];
  /** Profile id */
  profileId: Scalars["ProfileId"];
};

export type CreateSetDefaultProfileRequest = {
  /** Profile id */
  profileId: Scalars["ProfileId"];
};

/** The broadcast item */
export type CreateSetDispatcherBroadcastItemResult = {
  __typename?: "CreateSetDispatcherBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: CreateSetDispatcherEip712TypedData;
};

/** The set dispatcher eip 712 typed data */
export type CreateSetDispatcherEip712TypedData = {
  __typename?: "CreateSetDispatcherEIP712TypedData";
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetDispatcherEip712TypedDataTypes;
  /** The values */
  value: CreateSetDispatcherEip712TypedDataValue;
};

/** The set dispatcher eip 712 typed data types */
export type CreateSetDispatcherEip712TypedDataTypes = {
  __typename?: "CreateSetDispatcherEIP712TypedDataTypes";
  SetDispatcherWithSig: Array<Eip712TypedDataField>;
};

/** The set dispatcher eip 712 typed data value */
export type CreateSetDispatcherEip712TypedDataValue = {
  __typename?: "CreateSetDispatcherEIP712TypedDataValue";
  deadline: Scalars["UnixTimestamp"];
  dispatcher: Scalars["EthereumAddress"];
  nonce: Scalars["Nonce"];
  profileId: Scalars["ProfileId"];
};

/** The broadcast item */
export type CreateSetFollowModuleBroadcastItemResult = {
  __typename?: "CreateSetFollowModuleBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: CreateSetFollowModuleEip712TypedData;
};

/** The set follow module eip 712 typed data */
export type CreateSetFollowModuleEip712TypedData = {
  __typename?: "CreateSetFollowModuleEIP712TypedData";
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetFollowModuleEip712TypedDataTypes;
  /** The values */
  value: CreateSetFollowModuleEip712TypedDataValue;
};

/** The set follow module eip 712 typed data types */
export type CreateSetFollowModuleEip712TypedDataTypes = {
  __typename?: "CreateSetFollowModuleEIP712TypedDataTypes";
  SetFollowModuleWithSig: Array<Eip712TypedDataField>;
};

/** The set follow module eip 712 typed data value */
export type CreateSetFollowModuleEip712TypedDataValue = {
  __typename?: "CreateSetFollowModuleEIP712TypedDataValue";
  deadline: Scalars["UnixTimestamp"];
  followModule: Scalars["ContractAddress"];
  followModuleInitData: Scalars["FollowModuleData"];
  nonce: Scalars["Nonce"];
  profileId: Scalars["ProfileId"];
};

export type CreateSetFollowModuleRequest = {
  /** The follow module info */
  followModule: FollowModuleParams;
  profileId: Scalars["ProfileId"];
};

/** The broadcast item */
export type CreateSetFollowNftUriBroadcastItemResult = {
  __typename?: "CreateSetFollowNFTUriBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: CreateSetFollowNftUriEip712TypedData;
};

/** The set follow nft uri eip 712 typed data */
export type CreateSetFollowNftUriEip712TypedData = {
  __typename?: "CreateSetFollowNFTUriEIP712TypedData";
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetFollowNftUriEip712TypedDataTypes;
  /** The values */
  value: CreateSetFollowNftUriEip712TypedDataValue;
};

/** The set follow nft uri eip 712 typed data types */
export type CreateSetFollowNftUriEip712TypedDataTypes = {
  __typename?: "CreateSetFollowNFTUriEIP712TypedDataTypes";
  SetFollowNFTURIWithSig: Array<Eip712TypedDataField>;
};

/** The set follow nft uri eip 712 typed data value */
export type CreateSetFollowNftUriEip712TypedDataValue = {
  __typename?: "CreateSetFollowNFTUriEIP712TypedDataValue";
  deadline: Scalars["UnixTimestamp"];
  followNFTURI: Scalars["Url"];
  nonce: Scalars["Nonce"];
  profileId: Scalars["ProfileId"];
};

export type CreateSetFollowNftUriRequest = {
  /** The follow NFT URI is the NFT metadata your followers will mint when they follow you. This can be updated at all times. If you do not pass in anything it will create a super cool changing NFT which will show the last publication of your profile as the NFT which looks awesome! This means people do not have to worry about writing this logic but still have the ability to customise it for their followers */
  followNFTURI?: InputMaybe<Scalars["Url"]>;
  profileId: Scalars["ProfileId"];
};

/** The broadcast item */
export type CreateSetProfileImageUriBroadcastItemResult = {
  __typename?: "CreateSetProfileImageUriBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: CreateSetProfileImageUriEip712TypedData;
};

/** The set profile uri eip 712 typed data */
export type CreateSetProfileImageUriEip712TypedData = {
  __typename?: "CreateSetProfileImageUriEIP712TypedData";
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetProfileImageUriEip712TypedDataTypes;
  /** The values */
  value: CreateSetProfileImageUriEip712TypedDataValue;
};

/** The set profile image uri eip 712 typed data types */
export type CreateSetProfileImageUriEip712TypedDataTypes = {
  __typename?: "CreateSetProfileImageUriEIP712TypedDataTypes";
  SetProfileImageURIWithSig: Array<Eip712TypedDataField>;
};

/** The set profile uri eip 712 typed data value */
export type CreateSetProfileImageUriEip712TypedDataValue = {
  __typename?: "CreateSetProfileImageUriEIP712TypedDataValue";
  deadline: Scalars["UnixTimestamp"];
  imageURI: Scalars["Url"];
  nonce: Scalars["Nonce"];
  profileId: Scalars["ProfileId"];
};

/** The broadcast item */
export type CreateSetProfileMetadataUriBroadcastItemResult = {
  __typename?: "CreateSetProfileMetadataURIBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: CreateSetProfileMetadataUrieip712TypedData;
};

/** The set follow nft uri eip 712 typed data */
export type CreateSetProfileMetadataUrieip712TypedData = {
  __typename?: "CreateSetProfileMetadataURIEIP712TypedData";
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetProfileMetadataUrieip712TypedDataTypes;
  /** The values */
  value: CreateSetProfileMetadataUrieip712TypedDataValue;
};

/** The set follow nft uri eip 712 typed data types */
export type CreateSetProfileMetadataUrieip712TypedDataTypes = {
  __typename?: "CreateSetProfileMetadataURIEIP712TypedDataTypes";
  SetProfileMetadataURIWithSig: Array<Eip712TypedDataField>;
};

/** The set follow nft uri eip 712 typed data value */
export type CreateSetProfileMetadataUrieip712TypedDataValue = {
  __typename?: "CreateSetProfileMetadataURIEIP712TypedDataValue";
  deadline: Scalars["UnixTimestamp"];
  metadata: Scalars["Url"];
  nonce: Scalars["Nonce"];
  profileId: Scalars["ProfileId"];
};

/** The broadcast item */
export type CreateToggleFollowBroadcastItemResult = {
  __typename?: "CreateToggleFollowBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: CreateToggleFollowEip712TypedData;
};

/** The create toggle follows eip 712 typed data */
export type CreateToggleFollowEip712TypedData = {
  __typename?: "CreateToggleFollowEIP712TypedData";
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateToggleFollowEip712TypedDataTypes;
  /** The values */
  value: CreateToggleFollowEip712TypedDataValue;
};

/** The create toggle follows eip 712 typed data types */
export type CreateToggleFollowEip712TypedDataTypes = {
  __typename?: "CreateToggleFollowEIP712TypedDataTypes";
  ToggleFollowWithSig: Array<Eip712TypedDataField>;
};

/** The create toggle follow eip 712 typed data value */
export type CreateToggleFollowEip712TypedDataValue = {
  __typename?: "CreateToggleFollowEIP712TypedDataValue";
  deadline: Scalars["UnixTimestamp"];
  enables: Array<Scalars["Boolean"]>;
  nonce: Scalars["Nonce"];
  profileIds: Array<Scalars["ProfileId"]>;
};

export type CreateToggleFollowRequest = {
  enables: Array<Scalars["Boolean"]>;
  profileIds: Array<Scalars["ProfileId"]>;
};

/** The broadcast item */
export type CreateUnfollowBroadcastItemResult = {
  __typename?: "CreateUnfollowBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: CreateBurnEip712TypedData;
};

/** The custom filters types */
export enum CustomFiltersTypes {
  Gardeners = "GARDENERS",
}

/** The reason why a profile cannot decrypt a publication */
export enum DecryptFailReason {
  CollectNotFinalisedOnChain = "COLLECT_NOT_FINALISED_ON_CHAIN",
  DoesNotFollowProfile = "DOES_NOT_FOLLOW_PROFILE",
  DoesNotOwnNft = "DOES_NOT_OWN_NFT",
  DoesNotOwnProfile = "DOES_NOT_OWN_PROFILE",
  FollowNotFinalisedOnChain = "FOLLOW_NOT_FINALISED_ON_CHAIN",
  HasNotCollectedPublication = "HAS_NOT_COLLECTED_PUBLICATION",
  MissingEncryptionParams = "MISSING_ENCRYPTION_PARAMS",
  ProfileDoesNotExist = "PROFILE_DOES_NOT_EXIST",
  UnauthorizedAddress = "UNAUTHORIZED_ADDRESS",
  UnauthorizedBalance = "UNAUTHORIZED_BALANCE",
}

export type DefaultProfileRequest = {
  ethereumAddress: Scalars["EthereumAddress"];
};

export type DegreesOfSeparationReferenceModuleParams = {
  /** Applied to comments */
  commentsRestricted: Scalars["Boolean"];
  /** Degrees of separation */
  degreesOfSeparation: Scalars["Int"];
  /** Applied to mirrors */
  mirrorsRestricted: Scalars["Boolean"];
};

export type DegreesOfSeparationReferenceModuleSettings = {
  __typename?: "DegreesOfSeparationReferenceModuleSettings";
  /** Applied to comments */
  commentsRestricted: Scalars["Boolean"];
  contractAddress: Scalars["ContractAddress"];
  /** Degrees of separation */
  degreesOfSeparation: Scalars["Int"];
  /** Applied to mirrors */
  mirrorsRestricted: Scalars["Boolean"];
  /** The reference modules enum */
  type: ReferenceModules;
};

/** The dispatcher */
export type Dispatcher = {
  __typename?: "Dispatcher";
  /** The dispatcher address */
  address: Scalars["EthereumAddress"];
  /** If the dispatcher can use the relay */
  canUseRelay: Scalars["Boolean"];
};

export type DoesFollow = {
  /** The follower address remember wallets follow profiles */
  followerAddress: Scalars["EthereumAddress"];
  /** The profile id */
  profileId: Scalars["ProfileId"];
};

export type DoesFollowRequest = {
  /** The follower infos */
  followInfos: Array<DoesFollow>;
};

/** The does follow response */
export type DoesFollowResponse = {
  __typename?: "DoesFollowResponse";
  /** The follower address remember wallets follow profiles */
  followerAddress: Scalars["EthereumAddress"];
  /** If the user does follow */
  follows: Scalars["Boolean"];
  /** Is finalised on-chain */
  isFinalisedOnChain: Scalars["Boolean"];
  /** The profile id */
  profileId: Scalars["ProfileId"];
};

/** The eip 712 typed data domain */
export type Eip712TypedDataDomain = {
  __typename?: "EIP712TypedDataDomain";
  /** The chainId */
  chainId: Scalars["ChainId"];
  /** The name of the typed data domain */
  name: Scalars["String"];
  /** The verifying contract */
  verifyingContract: Scalars["ContractAddress"];
  /** The version */
  version: Scalars["String"];
};

/** The eip 712 typed data field */
export type Eip712TypedDataField = {
  __typename?: "EIP712TypedDataField";
  /** The name of the typed data field */
  name: Scalars["String"];
  /** The type of the typed data field */
  type: Scalars["String"];
};

export type ElectedMirror = {
  __typename?: "ElectedMirror";
  mirrorId: Scalars["InternalPublicationId"];
  profile: Profile;
  timestamp: Scalars["DateTime"];
};

export type EnabledModule = {
  __typename?: "EnabledModule";
  contractAddress: Scalars["ContractAddress"];
  inputParams: Array<ModuleInfo>;
  moduleName: Scalars["String"];
  redeemParams: Array<ModuleInfo>;
  returnDataParms: Array<ModuleInfo>;
};

/** The enabled modules */
export type EnabledModules = {
  __typename?: "EnabledModules";
  collectModules: Array<EnabledModule>;
  followModules: Array<EnabledModule>;
  referenceModules: Array<EnabledModule>;
};

/** The encrypted fields */
export type EncryptedFieldsOutput = {
  __typename?: "EncryptedFieldsOutput";
  /** The encrypted animation_url field */
  animation_url?: Maybe<Scalars["EncryptedValueScalar"]>;
  /** The encrypted content field */
  content?: Maybe<Scalars["EncryptedValueScalar"]>;
  /** The encrypted external_url field */
  external_url?: Maybe<Scalars["EncryptedValueScalar"]>;
  /** The encrypted image field */
  image?: Maybe<Scalars["EncryptedValueScalar"]>;
  /** The encrypted media field */
  media?: Maybe<Array<EncryptedMediaSet>>;
};

/** The Encrypted Media url and metadata */
export type EncryptedMedia = {
  __typename?: "EncryptedMedia";
  /** The encrypted alt tags for accessibility */
  altTag?: Maybe<Scalars["EncryptedValueScalar"]>;
  /** The encrypted cover for any video or audio you attached */
  cover?: Maybe<Scalars["EncryptedValueScalar"]>;
  /** Height - will always be null on the public API */
  height?: Maybe<Scalars["Int"]>;
  /** The image/audio/video mime type for the publication */
  mimeType?: Maybe<Scalars["MimeType"]>;
  /** Size - will always be null on the public API */
  size?: Maybe<Scalars["Int"]>;
  /** The encrypted value for the URL */
  url: Scalars["Url"];
  /** Width - will always be null on the public API */
  width?: Maybe<Scalars["Int"]>;
};

/** The encrypted media set */
export type EncryptedMediaSet = {
  __typename?: "EncryptedMediaSet";
  /**
   * Medium media - will always be null on the public API
   * @deprecated should not be used will always be null
   */
  medium?: Maybe<EncryptedMedia>;
  /** Original media */
  original: EncryptedMedia;
  /**
   * Small media - will always be null on the public API
   * @deprecated should not be used will always be null
   */
  small?: Maybe<EncryptedMedia>;
};

/** The metadata encryption params */
export type EncryptionParamsOutput = {
  __typename?: "EncryptionParamsOutput";
  /** The access conditions */
  accessCondition: AccessConditionOutput;
  /** The encrypted fields */
  encryptedFields: EncryptedFieldsOutput;
  /** The encryption provider */
  encryptionProvider: EncryptionProvider;
  /** The provider-specific encryption params */
  providerSpecificParams: ProviderSpecificParamsOutput;
};

/** The gated publication encryption provider */
export enum EncryptionProvider {
  LitProtocol = "LIT_PROTOCOL",
}

export type EnsOnChainIdentity = {
  __typename?: "EnsOnChainIdentity";
  /** The default ens mapped to this address */
  name?: Maybe<Scalars["Ens"]>;
};

export type EoaOwnershipInput = {
  /** The address that will have access to the content */
  address: Scalars["EthereumAddress"];
};

export type EoaOwnershipOutput = {
  __typename?: "EoaOwnershipOutput";
  /** The address that will have access to the content */
  address: Scalars["EthereumAddress"];
};

/** The erc20 type */
export type Erc20 = {
  __typename?: "Erc20";
  /** The erc20 address */
  address: Scalars["ContractAddress"];
  /** Decimal places for the token */
  decimals: Scalars["Int"];
  /** Name of the symbol */
  name: Scalars["String"];
  /** Symbol for the token */
  symbol: Scalars["String"];
};

export type Erc20Amount = {
  __typename?: "Erc20Amount";
  /** The erc20 token info */
  asset: Erc20;
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars["String"];
};

export type Erc20OwnershipInput = {
  /** The amount of tokens required to access the content */
  amount: Scalars["String"];
  /** The amount of tokens required to access the content */
  chainID: Scalars["ChainId"];
  /** The operator to use when comparing the amount of tokens */
  condition: ScalarOperator;
  /** The ERC20 token's ethereum address */
  contractAddress: Scalars["ContractAddress"];
  /** The amount of decimals of the ERC20 contract */
  decimals: Scalars["Float"];
};

export type Erc20OwnershipOutput = {
  __typename?: "Erc20OwnershipOutput";
  /** The amount of tokens required to access the content */
  amount: Scalars["String"];
  /** The amount of tokens required to access the content */
  chainID: Scalars["ChainId"];
  /** The operator to use when comparing the amount of tokens */
  condition: ScalarOperator;
  /** The ERC20 token's ethereum address */
  contractAddress: Scalars["ContractAddress"];
  /** The amount of decimals of the ERC20 contract */
  decimals: Scalars["Float"];
};

/** The paginated publication result */
export type ExploreProfileResult = {
  __typename?: "ExploreProfileResult";
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

export type ExploreProfilesRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  sortCriteria: ProfileSortCriteria;
  timestamp?: InputMaybe<Scalars["TimestampScalar"]>;
};

export type ExplorePublicationRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  /** If you wish to exclude any results for profile ids */
  excludeProfileIds?: InputMaybe<Array<Scalars["ProfileId"]>>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** If you want the randomizer off (default on) */
  noRandomize?: InputMaybe<Scalars["Boolean"]>;
  /** The publication types you want to query */
  publicationTypes?: InputMaybe<Array<PublicationTypes>>;
  sortCriteria: PublicationSortCriteria;
  /** The App Id */
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
  timestamp?: InputMaybe<Scalars["TimestampScalar"]>;
};

/** The paginated publication result */
export type ExplorePublicationResult = {
  __typename?: "ExplorePublicationResult";
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

export type FeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** Follower only */
  followerOnly: Scalars["Boolean"];
  /** The collect module recipient address */
  recipient: Scalars["EthereumAddress"];
  /** The collect module referral fee */
  referralFee: Scalars["Float"];
};

export type FeeCollectModuleSettings = {
  __typename?: "FeeCollectModuleSettings";
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  contractAddress: Scalars["ContractAddress"];
  /** Follower only */
  followerOnly: Scalars["Boolean"];
  /** The collect module recipient address */
  recipient: Scalars["EthereumAddress"];
  /** The collect module referral fee */
  referralFee: Scalars["Float"];
  /** The collect modules enum */
  type: CollectModules;
};

export type FeeFollowModuleParams = {
  /** The follow module amount info */
  amount: ModuleFeeAmountParams;
  /** The follow module recipient address */
  recipient: Scalars["EthereumAddress"];
};

export type FeeFollowModuleRedeemParams = {
  /** The expected amount to pay */
  amount: ModuleFeeAmountParams;
};

export type FeeFollowModuleSettings = {
  __typename?: "FeeFollowModuleSettings";
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  contractAddress: Scalars["ContractAddress"];
  /** The collect module recipient address */
  recipient: Scalars["EthereumAddress"];
  /** The follow modules enum */
  type: FollowModules;
};

/** The feed event item filter types */
export enum FeedEventItemType {
  CollectComment = "COLLECT_COMMENT",
  CollectPost = "COLLECT_POST",
  Comment = "COMMENT",
  Mirror = "MIRROR",
  Post = "POST",
  ReactionComment = "REACTION_COMMENT",
  ReactionPost = "REACTION_POST",
}

export type FeedHighlightsRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** The profile id */
  profileId: Scalars["ProfileId"];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
};

export type FeedItem = {
  __typename?: "FeedItem";
  /** Sorted by most recent first. Resolves defaultProfile and if null omits the wallet collect event from the list. */
  collects: Array<CollectedEvent>;
  /** Sorted by most recent first. Up to page size - 1 comments. */
  comments?: Maybe<Array<Comment>>;
  /** The elected mirror will be the first Mirror publication within the page results set */
  electedMirror?: Maybe<ElectedMirror>;
  /** Sorted by most recent first. Up to page size - 1 mirrors */
  mirrors: Array<MirrorEvent>;
  /** Sorted by most recent first. Up to page size - 1 reactions */
  reactions: Array<ReactionEvent>;
  root: FeedItemRoot;
};

export type FeedItemRoot = Comment | Post;

export type FeedRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  /** Filter your feed to whatever you wish */
  feedEventItemTypes?: InputMaybe<Array<FeedEventItemType>>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** The profile id */
  profileId: Scalars["ProfileId"];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
};

export type Follow = {
  followModule?: InputMaybe<FollowModuleRedeemParams>;
  profile: Scalars["ProfileId"];
};

export type FollowConditionInput = {
  /** The profile id of the gated profile */
  profileId: Scalars["ProfileId"];
};

export type FollowConditionOutput = {
  __typename?: "FollowConditionOutput";
  /** The profile id of the gated profile */
  profileId: Scalars["ProfileId"];
};

export type FollowModule =
  | FeeFollowModuleSettings
  | ProfileFollowModuleSettings
  | RevertFollowModuleSettings
  | UnknownFollowModuleSettings;

export type FollowModuleParams = {
  /** The follower fee follower module */
  feeFollowModule?: InputMaybe<FeeFollowModuleParams>;
  /** The empty follow module */
  freeFollowModule?: InputMaybe<Scalars["Boolean"]>;
  /** The profile follow module */
  profileFollowModule?: InputMaybe<Scalars["Boolean"]>;
  /** The revert follow module */
  revertFollowModule?: InputMaybe<Scalars["Boolean"]>;
  /** A unknown follow module */
  unknownFollowModule?: InputMaybe<UnknownFollowModuleParams>;
};

export type FollowModuleRedeemParams = {
  /** The follower fee follower module */
  feeFollowModule?: InputMaybe<FeeFollowModuleRedeemParams>;
  /** The profile follower module */
  profileFollowModule?: InputMaybe<ProfileFollowModuleRedeemParams>;
  /** A unknown follow module */
  unknownFollowModule?: InputMaybe<UnknownFollowModuleRedeemParams>;
};

/** The follow module types */
export enum FollowModules {
  FeeFollowModule = "FeeFollowModule",
  ProfileFollowModule = "ProfileFollowModule",
  RevertFollowModule = "RevertFollowModule",
  UnknownFollowModule = "UnknownFollowModule",
}

export type FollowOnlyReferenceModuleSettings = {
  __typename?: "FollowOnlyReferenceModuleSettings";
  contractAddress: Scalars["ContractAddress"];
  /** The reference modules enum */
  type: ReferenceModules;
};

export type FollowProxyAction = {
  freeFollow?: InputMaybe<FreeFollowProxyAction>;
};

export type FollowRequest = {
  follow: Array<Follow>;
};

export type FollowRevenueResult = {
  __typename?: "FollowRevenueResult";
  revenues: Array<RevenueAggregate>;
};

export type Follower = {
  __typename?: "Follower";
  totalAmountOfTimesFollowed: Scalars["Int"];
  wallet: Wallet;
};

export type FollowerNftOwnedTokenIds = {
  __typename?: "FollowerNftOwnedTokenIds";
  followerNftAddress: Scalars["ContractAddress"];
  tokensIds: Array<Scalars["String"]>;
};

export type FollowerNftOwnedTokenIdsRequest = {
  address: Scalars["EthereumAddress"];
  profileId: Scalars["ProfileId"];
};

export type FollowersRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  profileId: Scalars["ProfileId"];
};

export type Following = {
  __typename?: "Following";
  profile: Profile;
  totalAmountOfTimesFollowing: Scalars["Int"];
};

export type FollowingRequest = {
  address: Scalars["EthereumAddress"];
  cursor?: InputMaybe<Scalars["Cursor"]>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
};

export type FraudReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingFraudSubreason;
};

export type FreeCollectModuleParams = {
  /** Follower only */
  followerOnly: Scalars["Boolean"];
};

export type FreeCollectModuleSettings = {
  __typename?: "FreeCollectModuleSettings";
  contractAddress: Scalars["ContractAddress"];
  /** Follower only */
  followerOnly: Scalars["Boolean"];
  /** The collect modules enum */
  type: CollectModules;
};

export type FreeCollectProxyAction = {
  publicationId: Scalars["InternalPublicationId"];
};

export type FreeFollowProxyAction = {
  profileId: Scalars["ProfileId"];
};

/** The access conditions for the publication */
export type GatedPublicationParamsInput = {
  /** AND condition */
  and?: InputMaybe<AndConditionInput>;
  /** Profile follow condition */
  collect?: InputMaybe<CollectConditionInput>;
  /** The LIT Protocol encrypted symmetric key */
  encryptedSymmetricKey: Scalars["ContentEncryptionKey"];
  /** EOA ownership condition */
  eoa?: InputMaybe<EoaOwnershipInput>;
  /** Profile follow condition */
  follow?: InputMaybe<FollowConditionInput>;
  /** NFT ownership condition */
  nft?: InputMaybe<NftOwnershipInput>;
  /** OR condition */
  or?: InputMaybe<OrConditionInput>;
  /** Profile ownership condition */
  profile?: InputMaybe<ProfileOwnershipInput>;
  /** ERC20 token ownership condition */
  token?: InputMaybe<Erc20OwnershipInput>;
};

export type GenerateModuleCurrencyApproval = {
  __typename?: "GenerateModuleCurrencyApproval";
  data: Scalars["BlockchainData"];
  from: Scalars["EthereumAddress"];
  to: Scalars["ContractAddress"];
};

export type GenerateModuleCurrencyApprovalDataRequest = {
  collectModule?: InputMaybe<CollectModules>;
  currency: Scalars["ContractAddress"];
  followModule?: InputMaybe<FollowModules>;
  referenceModule?: InputMaybe<ReferenceModules>;
  unknownCollectModule?: InputMaybe<Scalars["ContractAddress"]>;
  unknownFollowModule?: InputMaybe<Scalars["ContractAddress"]>;
  unknownReferenceModule?: InputMaybe<Scalars["ContractAddress"]>;
  /** Floating point number as string (e.g. 42.009837). The server will move its decimal places for you */
  value: Scalars["String"];
};

export type GetPublicationMetadataStatusRequest = {
  publicationId?: InputMaybe<Scalars["InternalPublicationId"]>;
  txHash?: InputMaybe<Scalars["TxHash"]>;
  txId?: InputMaybe<Scalars["TxId"]>;
};

export type GlobalProtocolStats = {
  __typename?: "GlobalProtocolStats";
  totalBurntProfiles: Scalars["Int"];
  totalCollects: Scalars["Int"];
  totalComments: Scalars["Int"];
  totalFollows: Scalars["Int"];
  totalMirrors: Scalars["Int"];
  totalPosts: Scalars["Int"];
  totalProfiles: Scalars["Int"];
  totalRevenue: Array<Erc20Amount>;
};

export type GlobalProtocolStatsRequest = {
  /** Unix time from timestamp - if not supplied it will go from 0 timestamp */
  fromTimestamp?: InputMaybe<Scalars["UnixTimestamp"]>;
  /** The App Id */
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
  /** Unix time to timestamp - if not supplied it go to the present timestamp */
  toTimestamp?: InputMaybe<Scalars["UnixTimestamp"]>;
};

export type HasTxHashBeenIndexedRequest = {
  /** Tx hash.. if your using the broadcaster you should use txId due to gas price upgrades */
  txHash?: InputMaybe<Scalars["TxHash"]>;
  /** Tx id.. if your using the broadcaster you should always use this field */
  txId?: InputMaybe<Scalars["TxId"]>;
};

export type HidePublicationRequest = {
  /** Publication id */
  publicationId: Scalars["InternalPublicationId"];
};

export type IllegalReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingIllegalSubreason;
};

export type InternalPublicationsFilterRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  /** must be DD/MM/YYYY */
  fromDate: Scalars["String"];
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  /** The shared secret */
  secret: Scalars["String"];
  /** The App Id */
  source: Scalars["Sources"];
  /** must be DD/MM/YYYY */
  toDate: Scalars["String"];
};

export type LimitedFeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** The collect module limit */
  collectLimit: Scalars["String"];
  /** Follower only */
  followerOnly: Scalars["Boolean"];
  /** The collect module recipient address */
  recipient: Scalars["EthereumAddress"];
  /** The collect module referral fee */
  referralFee: Scalars["Float"];
};

export type LimitedFeeCollectModuleSettings = {
  __typename?: "LimitedFeeCollectModuleSettings";
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  /** The collect module limit */
  collectLimit: Scalars["String"];
  contractAddress: Scalars["ContractAddress"];
  /** Follower only */
  followerOnly: Scalars["Boolean"];
  /** The collect module recipient address */
  recipient: Scalars["EthereumAddress"];
  /** The collect module referral fee */
  referralFee: Scalars["Float"];
  /** The collect modules enum */
  type: CollectModules;
};

export type LimitedTimedFeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** The collect module limit */
  collectLimit: Scalars["String"];
  /** Follower only */
  followerOnly: Scalars["Boolean"];
  /** The collect module recipient address */
  recipient: Scalars["EthereumAddress"];
  /** The collect module referral fee */
  referralFee: Scalars["Float"];
};

export type LimitedTimedFeeCollectModuleSettings = {
  __typename?: "LimitedTimedFeeCollectModuleSettings";
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  /** The collect module limit */
  collectLimit: Scalars["String"];
  contractAddress: Scalars["ContractAddress"];
  /** The collect module end timestamp */
  endTimestamp: Scalars["DateTime"];
  /** Follower only */
  followerOnly: Scalars["Boolean"];
  /** The collect module recipient address */
  recipient: Scalars["EthereumAddress"];
  /** The collect module referral fee */
  referralFee: Scalars["Float"];
  /** The collect modules enum */
  type: CollectModules;
};

export type Log = {
  __typename?: "Log";
  address: Scalars["ContractAddress"];
  blockHash: Scalars["String"];
  blockNumber: Scalars["Int"];
  data: Scalars["String"];
  logIndex: Scalars["Int"];
  removed: Scalars["Boolean"];
  topics: Array<Scalars["String"]>;
  transactionHash: Scalars["TxHash"];
  transactionIndex: Scalars["Int"];
};

export type MainPostReference = Mirror | Post;

/** The Media url */
export type Media = {
  __typename?: "Media";
  /** The alt tags for accessibility */
  altTag?: Maybe<Scalars["String"]>;
  /** The cover for any video or audio you attached */
  cover?: Maybe<Scalars["Url"]>;
  /** Height - will always be null on the public API */
  height?: Maybe<Scalars["Int"]>;
  /** The image/audio/video mime type for the publication */
  mimeType?: Maybe<Scalars["MimeType"]>;
  /** Size - will always be null on the public API */
  size?: Maybe<Scalars["Int"]>;
  /** The token image nft */
  url: Scalars["Url"];
  /** Width - will always be null on the public API */
  width?: Maybe<Scalars["Int"]>;
};

/** Media object output */
export type MediaOutput = {
  __typename?: "MediaOutput";
  /** The alt tags for accessibility */
  altTag?: Maybe<Scalars["String"]>;
  /** The cover for any video or audio you attached */
  cover?: Maybe<Scalars["Url"]>;
  item: Scalars["Url"];
  source?: Maybe<PublicationMediaSource>;
  /** This is the mime type of media */
  type?: Maybe<Scalars["MimeType"]>;
};

/** The Media Set */
export type MediaSet = {
  __typename?: "MediaSet";
  /**
   * Medium media - will always be null on the public API
   * @deprecated should not be used will always be null
   */
  medium?: Maybe<Media>;
  /** Original media */
  original: Media;
  /**
   * Small media - will always be null on the public API
   * @deprecated should not be used will always be null
   */
  small?: Maybe<Media>;
};

export type MentionPublication = Comment | Post;

/** The metadata attribute input */
export type MetadataAttributeInput = {
  /** The display type */
  displayType?: InputMaybe<PublicationMetadataDisplayTypes>;
  /** The trait type - can be anything its the name it will render so include spaces */
  traitType: Scalars["String"];
  /** The value */
  value: Scalars["String"];
};

/** The metadata attribute output */
export type MetadataAttributeOutput = {
  __typename?: "MetadataAttributeOutput";
  /** The display type */
  displayType?: Maybe<PublicationMetadataDisplayTypes>;
  /** The trait type - can be anything its the name it will render so include spaces */
  traitType?: Maybe<Scalars["String"]>;
  /** The value */
  value?: Maybe<Scalars["String"]>;
};

/** The metadata output */
export type MetadataOutput = {
  __typename?: "MetadataOutput";
  /** The main focus of the publication */
  animatedUrl?: Maybe<Scalars["Url"]>;
  /** The attributes */
  attributes: Array<MetadataAttributeOutput>;
  /** This is the metadata content for the publication, should be markdown */
  content?: Maybe<Scalars["Markdown"]>;
  /** The content warning for the publication */
  contentWarning?: Maybe<PublicationContentWarning>;
  /** The image cover for video/music publications */
  cover?: Maybe<MediaSet>;
  /** This is the metadata description */
  description?: Maybe<Scalars["Markdown"]>;
  /** The publication's encryption params in case it's encrypted */
  encryptionParams?: Maybe<EncryptionParamsOutput>;
  /** This is the image attached to the metadata and the property used to show the NFT! */
  image?: Maybe<Scalars["Url"]>;
  /** The locale of the publication,  */
  locale?: Maybe<Scalars["Locale"]>;
  /** The main focus of the publication */
  mainContentFocus: PublicationMainFocus;
  /** The images/audios/videos for the publication */
  media: Array<MediaSet>;
  /** The metadata name */
  name?: Maybe<Scalars["String"]>;
  /** The tags for the publication */
  tags: Array<Scalars["String"]>;
};

/** The social mirror */
export type Mirror = {
  __typename?: "Mirror";
  /** ID of the source */
  appId?: Maybe<Scalars["Sources"]>;
  canComment: CanCommentResponse;
  canDecrypt: CanDecryptResponse;
  canMirror: CanMirrorResponse;
  /** The collect module */
  collectModule: CollectModule;
  /** The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed */
  collectNftAddress?: Maybe<Scalars["ContractAddress"]>;
  /** The date the post was created on */
  createdAt: Scalars["DateTime"];
  hasCollectedByMe: Scalars["Boolean"];
  /** If the publication has been hidden if it has then the content and media is not available */
  hidden: Scalars["Boolean"];
  /** The internal publication id */
  id: Scalars["InternalPublicationId"];
  /** Indicates if the publication is gated behind some access criteria */
  isGated: Scalars["Boolean"];
  /** The metadata for the post */
  metadata: MetadataOutput;
  /** The mirror publication */
  mirrorOf: MirrorablePublication;
  /** The on chain content uri could be `ipfs://` or `https` */
  onChainContentURI: Scalars["String"];
  /** The profile ref */
  profile: Profile;
  reaction?: Maybe<ReactionTypes>;
  /** The reference module */
  referenceModule?: Maybe<ReferenceModule>;
  /** The publication stats */
  stats: PublicationStats;
};

/** The social mirror */
export type MirrorCanCommentArgs = {
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};

/** The social mirror */
export type MirrorCanDecryptArgs = {
  address?: InputMaybe<Scalars["EthereumAddress"]>;
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};

/** The social mirror */
export type MirrorCanMirrorArgs = {
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};

/** The social mirror */
export type MirrorHasCollectedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars["Boolean"]>;
};

/** The social mirror */
export type MirrorReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>;
};

export type MirrorEvent = {
  __typename?: "MirrorEvent";
  profile: Profile;
  timestamp: Scalars["DateTime"];
};

export type MirrorablePublication = Comment | Post;

export type ModuleFeeAmount = {
  __typename?: "ModuleFeeAmount";
  /** The erc20 token info */
  asset: Erc20;
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars["String"];
};

export type ModuleFeeAmountParams = {
  /** The currency address */
  currency: Scalars["ContractAddress"];
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars["String"];
};

export type ModuleInfo = {
  __typename?: "ModuleInfo";
  name: Scalars["String"];
  type: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  ach?: Maybe<Scalars["Void"]>;
  /** Adds profile interests to the given profile */
  addProfileInterests?: Maybe<Scalars["Void"]>;
  addReaction?: Maybe<Scalars["Void"]>;
  authenticate: AuthenticationResult;
  broadcast: RelayResult;
  claim: RelayResult;
  createAttachMediaData: PublicMediaResults;
  createBurnProfileTypedData: CreateBurnProfileBroadcastItemResult;
  createCollectTypedData: CreateCollectBroadcastItemResult;
  createCommentTypedData: CreateCommentBroadcastItemResult;
  createCommentViaDispatcher: RelayResult;
  createFollowTypedData: CreateFollowBroadcastItemResult;
  createMirrorTypedData: CreateMirrorBroadcastItemResult;
  createMirrorViaDispatcher: RelayResult;
  createPostTypedData: CreatePostBroadcastItemResult;
  createPostViaDispatcher: RelayResult;
  createProfile: RelayResult;
  createSetDefaultProfileTypedData: SetDefaultProfileBroadcastItemResult;
  createSetDispatcherTypedData: CreateSetDispatcherBroadcastItemResult;
  createSetFollowModuleTypedData: CreateSetFollowModuleBroadcastItemResult;
  createSetFollowNFTUriTypedData: CreateSetFollowNftUriBroadcastItemResult;
  createSetProfileImageURITypedData: CreateSetProfileImageUriBroadcastItemResult;
  createSetProfileImageURIViaDispatcher: RelayResult;
  createSetProfileMetadataTypedData: CreateSetProfileMetadataUriBroadcastItemResult;
  createSetProfileMetadataViaDispatcher: RelayResult;
  createToggleFollowTypedData: CreateToggleFollowBroadcastItemResult;
  createUnfollowTypedData: CreateUnfollowBroadcastItemResult;
  hidePublication?: Maybe<Scalars["Void"]>;
  proxyAction: Scalars["ProxyActionId"];
  refresh: AuthenticationResult;
  /** Removes profile interests from the given profile */
  removeProfileInterests?: Maybe<Scalars["Void"]>;
  removeReaction?: Maybe<Scalars["Void"]>;
  reportPublication?: Maybe<Scalars["Void"]>;
};

export type MutationAchArgs = {
  request: AchRequest;
};

export type MutationAddProfileInterestsArgs = {
  request: AddProfileInterestsRequest;
};

export type MutationAddReactionArgs = {
  request: ReactionRequest;
};

export type MutationAuthenticateArgs = {
  request: SignedAuthChallenge;
};

export type MutationBroadcastArgs = {
  request: BroadcastRequest;
};

export type MutationClaimArgs = {
  request: ClaimHandleRequest;
};

export type MutationCreateAttachMediaDataArgs = {
  request: PublicMediaRequest;
};

export type MutationCreateBurnProfileTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: BurnProfileRequest;
};

export type MutationCreateCollectTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateCollectRequest;
};

export type MutationCreateCommentTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicCommentRequest;
};

export type MutationCreateCommentViaDispatcherArgs = {
  request: CreatePublicCommentRequest;
};

export type MutationCreateFollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: FollowRequest;
};

export type MutationCreateMirrorTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateMirrorRequest;
};

export type MutationCreateMirrorViaDispatcherArgs = {
  request: CreateMirrorRequest;
};

export type MutationCreatePostTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicPostRequest;
};

export type MutationCreatePostViaDispatcherArgs = {
  request: CreatePublicPostRequest;
};

export type MutationCreateProfileArgs = {
  request: CreateProfileRequest;
};

export type MutationCreateSetDefaultProfileTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetDefaultProfileRequest;
};

export type MutationCreateSetDispatcherTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: SetDispatcherRequest;
};

export type MutationCreateSetFollowModuleTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetFollowModuleRequest;
};

export type MutationCreateSetFollowNftUriTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetFollowNftUriRequest;
};

export type MutationCreateSetProfileImageUriTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: UpdateProfileImageRequest;
};

export type MutationCreateSetProfileImageUriViaDispatcherArgs = {
  request: UpdateProfileImageRequest;
};

export type MutationCreateSetProfileMetadataTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicSetProfileMetadataUriRequest;
};

export type MutationCreateSetProfileMetadataViaDispatcherArgs = {
  request: CreatePublicSetProfileMetadataUriRequest;
};

export type MutationCreateToggleFollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateToggleFollowRequest;
};

export type MutationCreateUnfollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: UnfollowRequest;
};

export type MutationHidePublicationArgs = {
  request: HidePublicationRequest;
};

export type MutationProxyActionArgs = {
  request: ProxyActionRequest;
};

export type MutationRefreshArgs = {
  request: RefreshRequest;
};

export type MutationRemoveProfileInterestsArgs = {
  request: RemoveProfileInterestsRequest;
};

export type MutationRemoveReactionArgs = {
  request: ReactionRequest;
};

export type MutationReportPublicationArgs = {
  request: ReportPublicationRequest;
};

export type MutualFollowersProfilesQueryRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  /** The profile id your viewing */
  viewingProfileId: Scalars["ProfileId"];
  /** The profile id you want the result to come back as your viewing from */
  yourProfileId: Scalars["ProfileId"];
};

/** The nft type */
export type Nft = {
  __typename?: "NFT";
  /** aka "1"  */
  chainId: Scalars["ChainId"];
  /** aka "CryptoKitties"  */
  collectionName: Scalars["String"];
  /** aka "https://api.criptokitt..."  */
  contentURI: Scalars["String"];
  /** aka 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e  */
  contractAddress: Scalars["ContractAddress"];
  /** aka us CryptoKitties */
  contractName: Scalars["String"];
  /** aka "Hey cutie! I m Beard Coffee. ....  */
  description: Scalars["String"];
  /** aka "ERC721"  */
  ercType: Scalars["String"];
  /** aka "Beard Coffee"  */
  name: Scalars["String"];
  /** aka "{ uri:"https://ipfs....", metaType:"image/png" }"  */
  originalContent: NftContent;
  /** aka { address: 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e, amount:"2" }  */
  owners: Array<Owner>;
  /** aka RARI */
  symbol: Scalars["String"];
  /** aka "13"  */
  tokenId: Scalars["String"];
};

/** The NFT content uri */
export type NftContent = {
  __typename?: "NFTContent";
  /** The animated url */
  animatedUrl?: Maybe<Scalars["String"]>;
  /** The meta type content */
  metaType: Scalars["String"];
  /** The token uri  nft */
  uri: Scalars["String"];
};

export type NftData = {
  /** Id of the nft ownership challenge */
  id: Scalars["NftOwnershipId"];
  /** The signature */
  signature: Scalars["Signature"];
};

export type NfTsRequest = {
  /** Chain Ids */
  chainIds: Array<Scalars["ChainId"]>;
  /** Filter by contract address */
  contractAddress?: InputMaybe<Scalars["ContractAddress"]>;
  cursor?: InputMaybe<Scalars["Cursor"]>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  /** Filter by owner address */
  ownerAddress: Scalars["EthereumAddress"];
};

/** Paginated nft results */
export type NfTsResult = {
  __typename?: "NFTsResult";
  items: Array<Nft>;
  pageInfo: PaginatedResultInfo;
};

export type NewCollectNotification = {
  __typename?: "NewCollectNotification";
  collectedPublication: Publication;
  createdAt: Scalars["DateTime"];
  notificationId: Scalars["NotificationId"];
  wallet: Wallet;
};

export type NewCommentNotification = {
  __typename?: "NewCommentNotification";
  comment: Comment;
  createdAt: Scalars["DateTime"];
  notificationId: Scalars["NotificationId"];
  /** The profile */
  profile: Profile;
};

export type NewFollowerNotification = {
  __typename?: "NewFollowerNotification";
  createdAt: Scalars["DateTime"];
  isFollowedByMe: Scalars["Boolean"];
  notificationId: Scalars["NotificationId"];
  wallet: Wallet;
};

export type NewMentionNotification = {
  __typename?: "NewMentionNotification";
  createdAt: Scalars["DateTime"];
  mentionPublication: MentionPublication;
  notificationId: Scalars["NotificationId"];
};

export type NewMirrorNotification = {
  __typename?: "NewMirrorNotification";
  createdAt: Scalars["DateTime"];
  notificationId: Scalars["NotificationId"];
  /** The profile */
  profile: Profile;
  publication: MirrorablePublication;
};

export type NewReactionNotification = {
  __typename?: "NewReactionNotification";
  createdAt: Scalars["DateTime"];
  notificationId: Scalars["NotificationId"];
  /** The profile */
  profile: Profile;
  publication: Publication;
  reaction: ReactionTypes;
};

/** The NFT image */
export type NftImage = {
  __typename?: "NftImage";
  /** The token image nft */
  chainId: Scalars["Int"];
  /** The contract address */
  contractAddress: Scalars["ContractAddress"];
  /** The token id of the nft */
  tokenId: Scalars["String"];
  /** The token image nft */
  uri: Scalars["Url"];
  /** If the NFT is verified */
  verified: Scalars["Boolean"];
};

export type NftOwnershipChallenge = {
  /** Chain Id */
  chainId: Scalars["ChainId"];
  /** ContractAddress for nft */
  contractAddress: Scalars["ContractAddress"];
  /** Token id for NFT */
  tokenId: Scalars["String"];
};

export type NftOwnershipChallengeRequest = {
  /** The wallet address which owns the NFT */
  ethereumAddress: Scalars["EthereumAddress"];
  nfts: Array<NftOwnershipChallenge>;
};

/** NFT ownership challenge result */
export type NftOwnershipChallengeResult = {
  __typename?: "NftOwnershipChallengeResult";
  /** Id of the nft ownership challenge */
  id: Scalars["NftOwnershipId"];
  text: Scalars["String"];
  /** Timeout of the validation */
  timeout: Scalars["TimestampScalar"];
};

export type NftOwnershipInput = {
  /** The NFT chain id */
  chainID: Scalars["ChainId"];
  /** The NFT collection's ethereum address */
  contractAddress: Scalars["ContractAddress"];
  /** The unlocker contract type */
  contractType: ContractType;
  /** The optional token ID(s) to check for ownership */
  tokenIds?: InputMaybe<Scalars["TokenId"]>;
};

export type NftOwnershipOutput = {
  __typename?: "NftOwnershipOutput";
  /** The NFT chain id */
  chainID: Scalars["ChainId"];
  /** The NFT collection's ethereum address */
  contractAddress: Scalars["ContractAddress"];
  /** The unlocker contract type */
  contractType: ContractType;
  /** The optional token ID(s) to check for ownership */
  tokenIds?: Maybe<Scalars["TokenId"]>;
};

export type Notification =
  | NewCollectNotification
  | NewCommentNotification
  | NewFollowerNotification
  | NewMentionNotification
  | NewMirrorNotification
  | NewReactionNotification;

export type NotificationRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** The profile id */
  notificationTypes?: InputMaybe<Array<NotificationTypes>>;
  /** The profile id */
  profileId: Scalars["ProfileId"];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
};

/** The notification filter types */
export enum NotificationTypes {
  CollectedComment = "COLLECTED_COMMENT",
  CollectedPost = "COLLECTED_POST",
  CommentedComment = "COMMENTED_COMMENT",
  CommentedPost = "COMMENTED_POST",
  Followed = "FOLLOWED",
  MentionComment = "MENTION_COMMENT",
  MentionPost = "MENTION_POST",
  MirroredComment = "MIRRORED_COMMENT",
  MirroredPost = "MIRRORED_POST",
  ReactionComment = "REACTION_COMMENT",
  ReactionPost = "REACTION_POST",
}

export type OnChainIdentity = {
  __typename?: "OnChainIdentity";
  /** The ens information */
  ens?: Maybe<EnsOnChainIdentity>;
  /** The POH status */
  proofOfHumanity: Scalars["Boolean"];
  /** The sybil dot org information */
  sybilDotOrg: SybilDotOrgIdentity;
  /** The worldcoin identity */
  worldcoin: WorldcoinIdentity;
};

export type OrConditionInput = {
  /** The list of conditions to apply OR to. You can only use nested boolean conditions at the root level. */
  criteria: Array<AccessConditionInput>;
};

export type OrConditionOutput = {
  __typename?: "OrConditionOutput";
  /** The list of conditions to apply OR to. You can only use nested boolean conditions at the root level. */
  criteria: Array<AccessConditionOutput>;
};

/** The nft type */
export type Owner = {
  __typename?: "Owner";
  /** aka 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e  */
  address: Scalars["EthereumAddress"];
  /** number of tokens owner */
  amount: Scalars["Float"];
};

/** The paginated wallet result */
export type PaginatedAllPublicationsTagsResult = {
  __typename?: "PaginatedAllPublicationsTagsResult";
  items: Array<TagResult>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated feed result */
export type PaginatedFeedResult = {
  __typename?: "PaginatedFeedResult";
  items: Array<FeedItem>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated followers result */
export type PaginatedFollowersResult = {
  __typename?: "PaginatedFollowersResult";
  items: Array<Follower>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedFollowingResult = {
  __typename?: "PaginatedFollowingResult";
  items: Array<Following>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated notification result */
export type PaginatedNotificationResult = {
  __typename?: "PaginatedNotificationResult";
  items: Array<Notification>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated wallet result */
export type PaginatedProfilePublicationsForSaleResult = {
  __typename?: "PaginatedProfilePublicationsForSaleResult";
  items: Array<PublicationForSale>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated profile result */
export type PaginatedProfileResult = {
  __typename?: "PaginatedProfileResult";
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated publication result */
export type PaginatedPublicationResult = {
  __typename?: "PaginatedPublicationResult";
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated result info */
export type PaginatedResultInfo = {
  __typename?: "PaginatedResultInfo";
  /** Cursor to query next results */
  next?: Maybe<Scalars["Cursor"]>;
  /** Cursor to query the actual results */
  prev?: Maybe<Scalars["Cursor"]>;
  /** The total number of entities the pagination iterates over. If null it means it can not work it out due to dynamic or aggregated query e.g. For a query that requests all nfts with more than 10 likes, this field gives the total amount of nfts with more than 10 likes, not the total amount of nfts */
  totalCount?: Maybe<Scalars["Int"]>;
};

/** The paginated timeline result */
export type PaginatedTimelineResult = {
  __typename?: "PaginatedTimelineResult";
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated wallet result */
export type PaginatedWhoCollectedResult = {
  __typename?: "PaginatedWhoCollectedResult";
  items: Array<Wallet>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedWhoReactedResult = {
  __typename?: "PaginatedWhoReactedResult";
  items: Array<WhoReactedResult>;
  pageInfo: PaginatedResultInfo;
};

export type PendingApprovalFollowsRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
};

/** The paginated follow result */
export type PendingApproveFollowsResult = {
  __typename?: "PendingApproveFollowsResult";
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

/** The social post */
export type Post = {
  __typename?: "Post";
  /** ID of the source */
  appId?: Maybe<Scalars["Sources"]>;
  canComment: CanCommentResponse;
  canDecrypt: CanDecryptResponse;
  canMirror: CanMirrorResponse;
  /** The collect module */
  collectModule: CollectModule;
  /** The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed */
  collectNftAddress?: Maybe<Scalars["ContractAddress"]>;
  /**
   * Who collected it, this is used for timeline results and like this for better caching for the client
   * @deprecated use `feed` query, timeline query will be killed on the 15th November. This includes this field.
   */
  collectedBy?: Maybe<Wallet>;
  /** The date the post was created on */
  createdAt: Scalars["DateTime"];
  hasCollectedByMe: Scalars["Boolean"];
  /** If the publication has been hidden if it has then the content and media is not available */
  hidden: Scalars["Boolean"];
  /** The internal publication id */
  id: Scalars["InternalPublicationId"];
  /** Indicates if the publication is gated behind some access criteria */
  isGated: Scalars["Boolean"];
  /** The metadata for the post */
  metadata: MetadataOutput;
  mirrors: Array<Scalars["InternalPublicationId"]>;
  /** The on chain content uri could be `ipfs://` or `https` */
  onChainContentURI: Scalars["String"];
  /** The profile ref */
  profile: Profile;
  reaction?: Maybe<ReactionTypes>;
  /** The reference module */
  referenceModule?: Maybe<ReferenceModule>;
  /** The publication stats */
  stats: PublicationStats;
};

/** The social post */
export type PostCanCommentArgs = {
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};

/** The social post */
export type PostCanDecryptArgs = {
  address?: InputMaybe<Scalars["EthereumAddress"]>;
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};

/** The social post */
export type PostCanMirrorArgs = {
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};

/** The social post */
export type PostHasCollectedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars["Boolean"]>;
};

/** The social post */
export type PostMirrorsArgs = {
  by?: InputMaybe<Scalars["ProfileId"]>;
};

/** The social post */
export type PostReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>;
};

/** The Profile */
export type Profile = {
  __typename?: "Profile";
  /** Optionals param to add extra attributes on the metadata */
  attributes?: Maybe<Array<Attribute>>;
  /** Bio of the profile */
  bio?: Maybe<Scalars["String"]>;
  /** The cover picture for the profile */
  coverPicture?: Maybe<ProfileMedia>;
  /** The dispatcher */
  dispatcher?: Maybe<Dispatcher>;
  /** The follow module */
  followModule?: Maybe<FollowModule>;
  /** Follow nft address */
  followNftAddress?: Maybe<Scalars["ContractAddress"]>;
  /** The profile handle */
  handle: Scalars["Handle"];
  /** The profile id */
  id: Scalars["ProfileId"];
  /** The profile interests */
  interests?: Maybe<Array<Scalars["ProfileInterest"]>>;
  /** Is the profile default */
  isDefault: Scalars["Boolean"];
  isFollowedByMe: Scalars["Boolean"];
  isFollowing: Scalars["Boolean"];
  /** Metadata url */
  metadata?: Maybe<Scalars["Url"]>;
  /** Name of the profile */
  name?: Maybe<Scalars["String"]>;
  /** The on chain identity */
  onChainIdentity: OnChainIdentity;
  /** Who owns the profile */
  ownedBy: Scalars["EthereumAddress"];
  /** The picture for the profile */
  picture?: Maybe<ProfileMedia>;
  /** Profile stats */
  stats: ProfileStats;
};

/** The Profile */
export type ProfileIsFollowedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars["Boolean"]>;
};

/** The Profile */
export type ProfileIsFollowingArgs = {
  who?: InputMaybe<Scalars["ProfileId"]>;
};

export type ProfileFollowModuleBeenRedeemedRequest = {
  followProfileId: Scalars["ProfileId"];
  redeemingProfileId: Scalars["ProfileId"];
};

export type ProfileFollowModuleRedeemParams = {
  /** The profile id to use to follow this profile */
  profileId: Scalars["ProfileId"];
};

export type ProfileFollowModuleSettings = {
  __typename?: "ProfileFollowModuleSettings";
  contractAddress: Scalars["ContractAddress"];
  /** The follow module enum */
  type: FollowModules;
};

export type ProfileFollowRevenueQueryRequest = {
  /** The profile id */
  profileId: Scalars["ProfileId"];
};

export type ProfileMedia = MediaSet | NftImage;

export type ProfileOnChainIdentityRequest = {
  profileIds: Array<Scalars["ProfileId"]>;
};

/** Condition that signifies if address has access to profile */
export type ProfileOwnershipInput = {
  /** The profile id */
  profileId: Scalars["ProfileId"];
};

/** Condition that signifies if address has access to profile */
export type ProfileOwnershipOutput = {
  __typename?: "ProfileOwnershipOutput";
  /** The profile id */
  profileId: Scalars["ProfileId"];
};

export type ProfilePublicationRevenueQueryRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** The profile id */
  profileId: Scalars["ProfileId"];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
  /** The revenue types */
  types?: InputMaybe<Array<PublicationTypes>>;
};

/** The paginated revenue result */
export type ProfilePublicationRevenueResult = {
  __typename?: "ProfilePublicationRevenueResult";
  items: Array<PublicationRevenue>;
  pageInfo: PaginatedResultInfo;
};

export type ProfilePublicationsForSaleRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** Profile id */
  profileId: Scalars["ProfileId"];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
};

export type ProfileQueryRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  /** The handles for the profile */
  handles?: InputMaybe<Array<Scalars["Handle"]>>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  /** The ethereum addresses */
  ownedBy?: InputMaybe<Array<Scalars["EthereumAddress"]>>;
  /** The profile ids */
  profileIds?: InputMaybe<Array<Scalars["ProfileId"]>>;
  /** The mirrored publication id */
  whoMirroredPublicationId?: InputMaybe<Scalars["InternalPublicationId"]>;
};

/** Profile search results */
export type ProfileSearchResult = {
  __typename?: "ProfileSearchResult";
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
  type: SearchRequestTypes;
};

/** profile sort criteria */
export enum ProfileSortCriteria {
  CreatedOn = "CREATED_ON",
  LatestCreated = "LATEST_CREATED",
  MostCollects = "MOST_COLLECTS",
  MostComments = "MOST_COMMENTS",
  MostFollowers = "MOST_FOLLOWERS",
  MostMirrors = "MOST_MIRRORS",
  MostPosts = "MOST_POSTS",
  MostPublication = "MOST_PUBLICATION",
}

/** The Profile Stats */
export type ProfileStats = {
  __typename?: "ProfileStats";
  commentsTotal: Scalars["Int"];
  id: Scalars["ProfileId"];
  mirrorsTotal: Scalars["Int"];
  postsTotal: Scalars["Int"];
  publicationsTotal: Scalars["Int"];
  /** Total collects count */
  totalCollects: Scalars["Int"];
  /** Total comment count */
  totalComments: Scalars["Int"];
  /** Total follower count */
  totalFollowers: Scalars["Int"];
  /** Total following count (remember the wallet follows not profile so will be same for every profile they own) */
  totalFollowing: Scalars["Int"];
  /** Total mirror count */
  totalMirrors: Scalars["Int"];
  /** Total post count */
  totalPosts: Scalars["Int"];
  /** Total publication count */
  totalPublications: Scalars["Int"];
};

/** The Profile Stats */
export type ProfileStatsCommentsTotalArgs = {
  forSources: Array<Scalars["Sources"]>;
};

/** The Profile Stats */
export type ProfileStatsMirrorsTotalArgs = {
  forSources: Array<Scalars["Sources"]>;
};

/** The Profile Stats */
export type ProfileStatsPostsTotalArgs = {
  forSources: Array<Scalars["Sources"]>;
};

/** The Profile Stats */
export type ProfileStatsPublicationsTotalArgs = {
  forSources: Array<Scalars["Sources"]>;
};

/** The provider-specific encryption params */
export type ProviderSpecificParamsOutput = {
  __typename?: "ProviderSpecificParamsOutput";
  /** The encryption key */
  encryptionKey: Scalars["ContentEncryptionKey"];
};

export type ProxyActionError = {
  __typename?: "ProxyActionError";
  lastKnownTxId?: Maybe<Scalars["TxId"]>;
  reason: Scalars["String"];
};

export type ProxyActionQueued = {
  __typename?: "ProxyActionQueued";
  queuedAt: Scalars["DateTime"];
};

export type ProxyActionRequest = {
  collect?: InputMaybe<CollectProxyAction>;
  follow?: InputMaybe<FollowProxyAction>;
};

export type ProxyActionStatusResult = {
  __typename?: "ProxyActionStatusResult";
  status: ProxyActionStatusTypes;
  txHash: Scalars["TxHash"];
  txId: Scalars["TxId"];
};

export type ProxyActionStatusResultUnion =
  | ProxyActionError
  | ProxyActionQueued
  | ProxyActionStatusResult;

/** The proxy action status */
export enum ProxyActionStatusTypes {
  Complete = "COMPLETE",
  Minting = "MINTING",
  Transferring = "TRANSFERRING",
}

export type PublicMediaRequest = {
  /** The alt tags for accessibility */
  altTag?: InputMaybe<Scalars["String"]>;
  /** The cover for any video or audio you attached */
  cover?: InputMaybe<Scalars["Url"]>;
  /** Pre calculated cid of the file to push */
  itemCid: Scalars["IfpsCid"];
  /** This is the mime type of media */
  type?: InputMaybe<Scalars["MimeType"]>;
};

/** The response to upload the attached file */
export type PublicMediaResults = {
  __typename?: "PublicMediaResults";
  /** ipfs uri to add on the metadata */
  media: MediaOutput;
  /** Signed url to push the file */
  signedUrl: Scalars["String"];
};

export type Publication = Comment | Mirror | Post;

/** The publication content warning */
export enum PublicationContentWarning {
  Nsfw = "NSFW",
  Sensitive = "SENSITIVE",
  Spoiler = "SPOILER",
}

export type PublicationForSale = Comment | Post;

/** The publication main focus */
export enum PublicationMainFocus {
  Article = "ARTICLE",
  Audio = "AUDIO",
  Embed = "EMBED",
  Image = "IMAGE",
  Link = "LINK",
  TextOnly = "TEXT_ONLY",
  Video = "VIDEO",
}

/** The source of the media */
export enum PublicationMediaSource {
  Lens = "LENS",
}

/** Publication metadata content waring filters */
export type PublicationMetadataContentWarningFilter = {
  /** By default all content warnings will be hidden you can include them in your query by adding them to this array. */
  includeOneOf?: InputMaybe<Array<PublicationContentWarning>>;
};

/** The publication metadata display types */
export enum PublicationMetadataDisplayTypes {
  Date = "date",
  Number = "number",
  String = "string",
}

/** Publication metadata filters */
export type PublicationMetadataFilters = {
  contentWarning?: InputMaybe<PublicationMetadataContentWarningFilter>;
  /** IOS 639-1 language code aka en or it and ISO 3166-1 alpha-2 region code aka US or IT aka en-US or it-IT. You can just filter on language if you wish. */
  locale?: InputMaybe<Scalars["Locale"]>;
  mainContentFocus?: InputMaybe<Array<PublicationMainFocus>>;
  tags?: InputMaybe<PublicationMetadataTagsFilter>;
};

/** The metadata attribute input */
export type PublicationMetadataMediaInput = {
  /** The alt tags for accessibility */
  altTag?: InputMaybe<Scalars["String"]>;
  /** The cover for any video or audio you attached */
  cover?: InputMaybe<Scalars["Url"]>;
  item: Scalars["Url"];
  source?: InputMaybe<PublicationMediaSource>;
  /** This is the mime type of media */
  type?: InputMaybe<Scalars["MimeType"]>;
};

export type PublicationMetadataStatus = {
  __typename?: "PublicationMetadataStatus";
  /** If metadata validation failed it will put a reason why here */
  reason?: Maybe<Scalars["String"]>;
  status: PublicationMetadataStatusType;
};

/** publication metadata status type */
export enum PublicationMetadataStatusType {
  MetadataValidationFailed = "METADATA_VALIDATION_FAILED",
  NotFound = "NOT_FOUND",
  Pending = "PENDING",
  Success = "SUCCESS",
}

/** Publication metadata tag filter */
export type PublicationMetadataTagsFilter = {
  /** Needs to only match all */
  all?: InputMaybe<Array<Scalars["String"]>>;
  /** Needs to only match one of */
  oneOf?: InputMaybe<Array<Scalars["String"]>>;
};

export type PublicationMetadataV1Input = {
  /**
   * A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV,
   *       and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.
   *       Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas,
   *       WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.
   */
  animation_url?: InputMaybe<Scalars["Url"]>;
  /**  This is the appId the content belongs to */
  appId?: InputMaybe<Scalars["Sources"]>;
  /**  These are the attributes for the item, which will show up on the OpenSea and others NFT trading websites on the item. */
  attributes: Array<MetadataAttributeInput>;
  /** The content of a publication. If this is blank `media` must be defined or its out of spec */
  content?: InputMaybe<Scalars["Markdown"]>;
  /** A human-readable description of the item. */
  description?: InputMaybe<Scalars["Markdown"]>;
  /**
   * This is the URL that will appear below the asset's image on OpenSea and others etc
   *       and will allow users to leave OpenSea and view the item on the site.
   */
  external_url?: InputMaybe<Scalars["Url"]>;
  /** legacy to support OpenSea will store any NFT image here. */
  image?: InputMaybe<Scalars["Url"]>;
  /** This is the mime type of the image. This is used if your uploading more advanced cover images as sometimes ipfs does not emit the content header so this solves that */
  imageMimeType?: InputMaybe<Scalars["MimeType"]>;
  /**  This is lens supported attached media items to the publication */
  media?: InputMaybe<Array<PublicationMetadataMediaInput>>;
  /** The metadata id can be anything but if your uploading to ipfs you will want it to be random.. using uuid could be an option! */
  metadata_id: Scalars["String"];
  /** Name of the item. */
  name: Scalars["String"];
  /** Signed metadata to validate the owner */
  signatureContext?: InputMaybe<PublicationSignatureContextInput>;
  /** The metadata version. (1.0.0 | 2.0.0) */
  version: Scalars["String"];
};

export type PublicationMetadataV2Input = {
  /**
   * A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV,
   *       and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.
   *       Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas,
   *       WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.
   */
  animation_url?: InputMaybe<Scalars["Url"]>;
  /**  This is the appId the content belongs to */
  appId?: InputMaybe<Scalars["Sources"]>;
  /**  These are the attributes for the item, which will show up on the OpenSea and others NFT trading websites on the item. */
  attributes: Array<MetadataAttributeInput>;
  /** The content of a publication. If this is blank `media` must be defined or its out of spec */
  content?: InputMaybe<Scalars["Markdown"]>;
  /** Ability to add a content warning */
  contentWarning?: InputMaybe<PublicationContentWarning>;
  /** A human-readable description of the item. */
  description?: InputMaybe<Scalars["Markdown"]>;
  /**
   * This is the URL that will appear below the asset's image on OpenSea and others etc
   *       and will allow users to leave OpenSea and view the item on the site.
   */
  external_url?: InputMaybe<Scalars["Url"]>;
  /** legacy to support OpenSea will store any NFT image here. */
  image?: InputMaybe<Scalars["Url"]>;
  /** This is the mime type of the image. This is used if your uploading more advanced cover images as sometimes ipfs does not emit the content header so this solves that */
  imageMimeType?: InputMaybe<Scalars["MimeType"]>;
  /** IOS 639-1 language code aka en or it and ISO 3166-1 alpha-2 region code aka US or IT aka en-US or it-IT */
  locale: Scalars["Locale"];
  /** Main content focus that for this publication */
  mainContentFocus: PublicationMainFocus;
  /**  This is lens supported attached media items to the publication */
  media?: InputMaybe<Array<PublicationMetadataMediaInput>>;
  /** The metadata id can be anything but if your uploading to ipfs you will want it to be random.. using uuid could be an option! */
  metadata_id: Scalars["String"];
  /** Name of the item. */
  name: Scalars["String"];
  /** Signed metadata to validate the owner */
  signatureContext?: InputMaybe<PublicationSignatureContextInput>;
  /** Ability to tag your publication */
  tags?: InputMaybe<Array<Scalars["String"]>>;
  /** The metadata version. (1.0.0 | 2.0.0) */
  version: Scalars["String"];
};

export type PublicationQueryRequest = {
  /** The publication id */
  publicationId?: InputMaybe<Scalars["InternalPublicationId"]>;
  /** The tx hash */
  txHash?: InputMaybe<Scalars["TxHash"]>;
};

/** Publication reporting fraud subreason */
export enum PublicationReportingFraudSubreason {
  Impersonation = "IMPERSONATION",
  Scam = "SCAM",
}

/** Publication reporting illegal subreason */
export enum PublicationReportingIllegalSubreason {
  AnimalAbuse = "ANIMAL_ABUSE",
  DirectThreat = "DIRECT_THREAT",
  HumanAbuse = "HUMAN_ABUSE",
  ThreatIndividual = "THREAT_INDIVIDUAL",
  Violence = "VIOLENCE",
}

/** Publication reporting reason */
export enum PublicationReportingReason {
  Fraud = "FRAUD",
  Illegal = "ILLEGAL",
  Sensitive = "SENSITIVE",
  Spam = "SPAM",
}

/** Publication reporting sensitive subreason */
export enum PublicationReportingSensitiveSubreason {
  Nsfw = "NSFW",
  Offensive = "OFFENSIVE",
}

/** Publication reporting spam subreason */
export enum PublicationReportingSpamSubreason {
  FakeEngagement = "FAKE_ENGAGEMENT",
  ManipulationAlgo = "MANIPULATION_ALGO",
  Misleading = "MISLEADING",
  MisuseHashtags = "MISUSE_HASHTAGS",
  Repetitive = "REPETITIVE",
  SomethingElse = "SOMETHING_ELSE",
  Unrelated = "UNRELATED",
}

/** The social comment */
export type PublicationRevenue = {
  __typename?: "PublicationRevenue";
  publication: Publication;
  revenue: RevenueAggregate;
};

export type PublicationRevenueQueryRequest = {
  /** The publication id */
  publicationId: Scalars["InternalPublicationId"];
};

/** Publication search results */
export type PublicationSearchResult = {
  __typename?: "PublicationSearchResult";
  items: Array<PublicationSearchResultItem>;
  pageInfo: PaginatedResultInfo;
  type: SearchRequestTypes;
};

export type PublicationSearchResultItem = Comment | Post;

export type PublicationSignatureContextInput = {
  signature: Scalars["String"];
};

/** Publication sort criteria */
export enum PublicationSortCriteria {
  CuratedProfiles = "CURATED_PROFILES",
  Latest = "LATEST",
  TopCollected = "TOP_COLLECTED",
  TopCommented = "TOP_COMMENTED",
  TopMirrored = "TOP_MIRRORED",
}

/** The publication stats */
export type PublicationStats = {
  __typename?: "PublicationStats";
  commentsTotal: Scalars["Int"];
  /** The publication id */
  id: Scalars["InternalPublicationId"];
  /** The total amount of collects */
  totalAmountOfCollects: Scalars["Int"];
  /** The total amount of comments */
  totalAmountOfComments: Scalars["Int"];
  /** The total amount of mirrors */
  totalAmountOfMirrors: Scalars["Int"];
  /** The total amount of upvotes */
  totalDownvotes: Scalars["Int"];
  /** The total amount of downvotes */
  totalUpvotes: Scalars["Int"];
};

/** The publication stats */
export type PublicationStatsCommentsTotalArgs = {
  forSources: Array<Scalars["Sources"]>;
};

/** The publication types */
export enum PublicationTypes {
  Comment = "COMMENT",
  Mirror = "MIRROR",
  Post = "POST",
}

export type PublicationValidateMetadataResult = {
  __typename?: "PublicationValidateMetadataResult";
  /** If `valid` is false it will put a reason why here */
  reason?: Maybe<Scalars["String"]>;
  valid: Scalars["Boolean"];
};

export type PublicationsQueryRequest = {
  /** The ethereum address */
  collectedBy?: InputMaybe<Scalars["EthereumAddress"]>;
  /** The publication id you wish to get comments for */
  commentsOf?: InputMaybe<Scalars["InternalPublicationId"]>;
  cursor?: InputMaybe<Scalars["Cursor"]>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** Profile id */
  profileId?: InputMaybe<Scalars["ProfileId"]>;
  /** Profile ids */
  profileIds?: InputMaybe<Array<Scalars["ProfileId"]>>;
  /** The publication id */
  publicationIds?: InputMaybe<Array<Scalars["InternalPublicationId"]>>;
  /** The publication types you want to query */
  publicationTypes?: InputMaybe<Array<PublicationTypes>>;
  /** The App Id */
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
};

export type Query = {
  __typename?: "Query";
  allPublicationsTags: PaginatedAllPublicationsTagsResult;
  approvedModuleAllowanceAmount: Array<ApprovedAllowanceAmount>;
  challenge: AuthChallengeResult;
  claimableHandles: ClaimableHandles;
  claimableStatus: ClaimStatus;
  defaultProfile?: Maybe<Profile>;
  doesFollow: Array<DoesFollowResponse>;
  enabledModuleCurrencies: Array<Erc20>;
  enabledModules: EnabledModules;
  exploreProfiles: ExploreProfileResult;
  explorePublications: ExplorePublicationResult;
  feed: PaginatedFeedResult;
  feedHighlights: PaginatedTimelineResult;
  followerNftOwnedTokenIds?: Maybe<FollowerNftOwnedTokenIds>;
  followers: PaginatedFollowersResult;
  following: PaginatedFollowingResult;
  generateModuleCurrencyApprovalData: GenerateModuleCurrencyApproval;
  globalProtocolStats: GlobalProtocolStats;
  hasTxHashBeenIndexed: TransactionResult;
  internalPublicationFilter: PaginatedPublicationResult;
  mutualFollowersProfiles: PaginatedProfileResult;
  nftOwnershipChallenge: NftOwnershipChallengeResult;
  nfts: NfTsResult;
  notifications: PaginatedNotificationResult;
  pendingApprovalFollows: PendingApproveFollowsResult;
  ping: Scalars["String"];
  profile?: Maybe<Profile>;
  profileFollowModuleBeenRedeemed: Scalars["Boolean"];
  profileFollowRevenue: FollowRevenueResult;
  /** Get the list of profile interests */
  profileInterests: Array<Scalars["ProfileInterest"]>;
  profileOnChainIdentity: Array<OnChainIdentity>;
  profilePublicationRevenue: ProfilePublicationRevenueResult;
  profilePublicationsForSale: PaginatedProfilePublicationsForSaleResult;
  profiles: PaginatedProfileResult;
  proxyActionStatus: ProxyActionStatusResultUnion;
  publication?: Maybe<Publication>;
  publicationMetadataStatus: PublicationMetadataStatus;
  publicationRevenue?: Maybe<PublicationRevenue>;
  publications: PaginatedPublicationResult;
  recommendedProfiles: Array<Profile>;
  rel?: Maybe<Scalars["Void"]>;
  search: SearchResult;
  /** @deprecated You should be using feed, this will not be supported after 15th November 2021, please migrate. */
  timeline: PaginatedTimelineResult;
  txIdToTxHash: Scalars["TxHash"];
  unknownEnabledModules: EnabledModules;
  userSigNonces: UserSigNonces;
  validatePublicationMetadata: PublicationValidateMetadataResult;
  verify: Scalars["Boolean"];
  whoCollectedPublication: PaginatedWhoCollectedResult;
  whoReactedPublication: PaginatedWhoReactedResult;
};

export type QueryAllPublicationsTagsArgs = {
  request: AllPublicationsTagsRequest;
};

export type QueryApprovedModuleAllowanceAmountArgs = {
  request: ApprovedModuleAllowanceAmountRequest;
};

export type QueryChallengeArgs = {
  request: ChallengeRequest;
};

export type QueryDefaultProfileArgs = {
  request: DefaultProfileRequest;
};

export type QueryDoesFollowArgs = {
  request: DoesFollowRequest;
};

export type QueryExploreProfilesArgs = {
  request: ExploreProfilesRequest;
};

export type QueryExplorePublicationsArgs = {
  request: ExplorePublicationRequest;
};

export type QueryFeedArgs = {
  request: FeedRequest;
};

export type QueryFeedHighlightsArgs = {
  request: FeedHighlightsRequest;
};

export type QueryFollowerNftOwnedTokenIdsArgs = {
  request: FollowerNftOwnedTokenIdsRequest;
};

export type QueryFollowersArgs = {
  request: FollowersRequest;
};

export type QueryFollowingArgs = {
  request: FollowingRequest;
};

export type QueryGenerateModuleCurrencyApprovalDataArgs = {
  request: GenerateModuleCurrencyApprovalDataRequest;
};

export type QueryGlobalProtocolStatsArgs = {
  request?: InputMaybe<GlobalProtocolStatsRequest>;
};

export type QueryHasTxHashBeenIndexedArgs = {
  request: HasTxHashBeenIndexedRequest;
};

export type QueryInternalPublicationFilterArgs = {
  request: InternalPublicationsFilterRequest;
};

export type QueryMutualFollowersProfilesArgs = {
  request: MutualFollowersProfilesQueryRequest;
};

export type QueryNftOwnershipChallengeArgs = {
  request: NftOwnershipChallengeRequest;
};

export type QueryNftsArgs = {
  request: NfTsRequest;
};

export type QueryNotificationsArgs = {
  request: NotificationRequest;
};

export type QueryPendingApprovalFollowsArgs = {
  request: PendingApprovalFollowsRequest;
};

export type QueryProfileArgs = {
  request: SingleProfileQueryRequest;
};

export type QueryProfileFollowModuleBeenRedeemedArgs = {
  request: ProfileFollowModuleBeenRedeemedRequest;
};

export type QueryProfileFollowRevenueArgs = {
  request: ProfileFollowRevenueQueryRequest;
};

export type QueryProfileOnChainIdentityArgs = {
  request: ProfileOnChainIdentityRequest;
};

export type QueryProfilePublicationRevenueArgs = {
  request: ProfilePublicationRevenueQueryRequest;
};

export type QueryProfilePublicationsForSaleArgs = {
  request: ProfilePublicationsForSaleRequest;
};

export type QueryProfilesArgs = {
  request: ProfileQueryRequest;
};

export type QueryProxyActionStatusArgs = {
  proxyActionId: Scalars["ProxyActionId"];
};

export type QueryPublicationArgs = {
  request: PublicationQueryRequest;
};

export type QueryPublicationMetadataStatusArgs = {
  request: GetPublicationMetadataStatusRequest;
};

export type QueryPublicationRevenueArgs = {
  request: PublicationRevenueQueryRequest;
};

export type QueryPublicationsArgs = {
  request: PublicationsQueryRequest;
};

export type QueryRecommendedProfilesArgs = {
  options?: InputMaybe<RecommendedProfileOptions>;
};

export type QueryRelArgs = {
  request: RelRequest;
};

export type QuerySearchArgs = {
  request: SearchQueryRequest;
};

export type QueryTimelineArgs = {
  request: TimelineRequest;
};

export type QueryTxIdToTxHashArgs = {
  txId: Scalars["TxId"];
};

export type QueryValidatePublicationMetadataArgs = {
  request: ValidatePublicationMetadataRequest;
};

export type QueryVerifyArgs = {
  request: VerifyRequest;
};

export type QueryWhoCollectedPublicationArgs = {
  request: WhoCollectedPublicationRequest;
};

export type QueryWhoReactedPublicationArgs = {
  request: WhoReactedPublicationRequest;
};

export type ReactionEvent = {
  __typename?: "ReactionEvent";
  profile: Profile;
  reaction: ReactionTypes;
  timestamp: Scalars["DateTime"];
};

export type ReactionFieldResolverRequest = {
  /** Profile id */
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};

export type ReactionRequest = {
  /** Profile id to perform the action */
  profileId: Scalars["ProfileId"];
  /** The internal publication id */
  publicationId: Scalars["InternalPublicationId"];
  /** The reaction */
  reaction: ReactionTypes;
};

/** Reaction types */
export enum ReactionTypes {
  Downvote = "DOWNVOTE",
  Upvote = "UPVOTE",
}

export type RecommendedProfileOptions = {
  /** If you wish to turn ML off */
  disableML?: InputMaybe<Scalars["Boolean"]>;
  /** If you wish to shuffle the results */
  shuffle?: InputMaybe<Scalars["Boolean"]>;
};

export type ReferenceModule =
  | DegreesOfSeparationReferenceModuleSettings
  | FollowOnlyReferenceModuleSettings
  | UnknownReferenceModuleSettings;

export type ReferenceModuleParams = {
  /** The degrees of seperation reference module */
  degreesOfSeparationReferenceModule?: InputMaybe<DegreesOfSeparationReferenceModuleParams>;
  /** The follower only reference module */
  followerOnlyReferenceModule?: InputMaybe<Scalars["Boolean"]>;
  /** A unknown reference module */
  unknownReferenceModule?: InputMaybe<UnknownReferenceModuleParams>;
};

/** The reference module types */
export enum ReferenceModules {
  DegreesOfSeparationReferenceModule = "DegreesOfSeparationReferenceModule",
  FollowerOnlyReferenceModule = "FollowerOnlyReferenceModule",
  UnknownReferenceModule = "UnknownReferenceModule",
}

/** The refresh request */
export type RefreshRequest = {
  /** The refresh token */
  refreshToken: Scalars["Jwt"];
};

export type RelRequest = {
  ethereumAddress: Scalars["EthereumAddress"];
  secret: Scalars["String"];
};

export type RelayError = {
  __typename?: "RelayError";
  reason: RelayErrorReasons;
};

/** Relay error reason */
export enum RelayErrorReasons {
  Expired = "EXPIRED",
  HandleTaken = "HANDLE_TAKEN",
  NotAllowed = "NOT_ALLOWED",
  Rejected = "REJECTED",
  WrongWalletSigned = "WRONG_WALLET_SIGNED",
}

export type RelayResult = RelayError | RelayerResult;

/** The relayer result */
export type RelayerResult = {
  __typename?: "RelayerResult";
  /** The tx hash - you should use the `txId` as your identifier as gas prices can be upgraded meaning txHash will change */
  txHash: Scalars["TxHash"];
  /** The tx id */
  txId: Scalars["TxId"];
};

/** The request object to remove interests from a profile */
export type RemoveProfileInterestsRequest = {
  /** The profile interest to add */
  interests: Array<Scalars["ProfileInterest"]>;
  /** The profileId to add interests to */
  profileId: Scalars["ProfileId"];
};

export type ReportPublicationRequest = {
  additionalComments?: InputMaybe<Scalars["String"]>;
  publicationId: Scalars["InternalPublicationId"];
  reason: ReportingReasonInputParams;
};

export type ReportingReasonInputParams = {
  fraudReason?: InputMaybe<FraudReasonInputParams>;
  illegalReason?: InputMaybe<IllegalReasonInputParams>;
  sensitiveReason?: InputMaybe<SensitiveReasonInputParams>;
  spamReason?: InputMaybe<SpamReasonInputParams>;
};

export type ReservedClaimableHandle = {
  __typename?: "ReservedClaimableHandle";
  expiry: Scalars["DateTime"];
  handle: Scalars["Handle"];
  id: Scalars["HandleClaimIdScalar"];
  source: Scalars["String"];
};

export type RevenueAggregate = {
  __typename?: "RevenueAggregate";
  total: Erc20Amount;
};

export type RevertCollectModuleSettings = {
  __typename?: "RevertCollectModuleSettings";
  contractAddress: Scalars["ContractAddress"];
  /** The collect modules enum */
  type: CollectModules;
};

export type RevertFollowModuleSettings = {
  __typename?: "RevertFollowModuleSettings";
  contractAddress: Scalars["ContractAddress"];
  /** The follow module enum */
  type: FollowModules;
};

/** The gated publication access criteria scalar operators */
export enum ScalarOperator {
  Equal = "EQUAL",
  GreaterThan = "GREATER_THAN",
  GreaterThanOrEqual = "GREATER_THAN_OR_EQUAL",
  LessThan = "LESS_THAN",
  LessThanOrEqual = "LESS_THAN_OR_EQUAL",
  NotEqual = "NOT_EQUAL",
}

export type SearchQueryRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  /** The search term */
  query: Scalars["Search"];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
  type: SearchRequestTypes;
};

/** Search request types */
export enum SearchRequestTypes {
  Profile = "PROFILE",
  Publication = "PUBLICATION",
}

export type SearchResult = ProfileSearchResult | PublicationSearchResult;

export type SensitiveReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingSensitiveSubreason;
};

/** The broadcast item */
export type SetDefaultProfileBroadcastItemResult = {
  __typename?: "SetDefaultProfileBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: SetDefaultProfileEip712TypedData;
};

/** The default profile eip 712 typed data */
export type SetDefaultProfileEip712TypedData = {
  __typename?: "SetDefaultProfileEIP712TypedData";
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: SetDefaultProfileEip712TypedDataTypes;
  /** The values */
  value: SetDefaultProfileEip712TypedDataValue;
};

/** The default profile eip 712 typed data types */
export type SetDefaultProfileEip712TypedDataTypes = {
  __typename?: "SetDefaultProfileEIP712TypedDataTypes";
  SetDefaultProfileWithSig: Array<Eip712TypedDataField>;
};

/** The default profile eip 712 typed data value */
export type SetDefaultProfileEip712TypedDataValue = {
  __typename?: "SetDefaultProfileEIP712TypedDataValue";
  deadline: Scalars["UnixTimestamp"];
  nonce: Scalars["Nonce"];
  profileId: Scalars["ProfileId"];
  wallet: Scalars["EthereumAddress"];
};

export type SetDispatcherRequest = {
  /** The dispatcher address - they can post, comment, mirror, set follow module, change your profile picture on your behalf, if left as none it will use the built in dispatcher address. */
  dispatcher?: InputMaybe<Scalars["EthereumAddress"]>;
  /** If you want to enable or disable it */
  enable?: InputMaybe<Scalars["Boolean"]>;
  /** The profile id */
  profileId: Scalars["ProfileId"];
};

/** The signed auth challenge */
export type SignedAuthChallenge = {
  /** The ethereum address you signed the signature with */
  address: Scalars["EthereumAddress"];
  /** The signature */
  signature: Scalars["Signature"];
};

export type SingleProfileQueryRequest = {
  /** The handle for the profile */
  handle?: InputMaybe<Scalars["Handle"]>;
  /** The profile id */
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};

export type SpamReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingSpamSubreason;
};

export type SybilDotOrgIdentity = {
  __typename?: "SybilDotOrgIdentity";
  source: SybilDotOrgIdentitySource;
  /** The sybil dot org status */
  verified: Scalars["Boolean"];
};

export type SybilDotOrgIdentitySource = {
  __typename?: "SybilDotOrgIdentitySource";
  twitter: SybilDotOrgTwitterIdentity;
};

export type SybilDotOrgTwitterIdentity = {
  __typename?: "SybilDotOrgTwitterIdentity";
  handle?: Maybe<Scalars["String"]>;
};

/** The social comment */
export type TagResult = {
  __typename?: "TagResult";
  /** The tag */
  tag: Scalars["PublicationTag"];
  /** The total amount of publication tagged */
  total: Scalars["Int"];
};

/** The publications tags sort criteria */
export enum TagSortCriteria {
  Alphabetical = "ALPHABETICAL",
  MostPopular = "MOST_POPULAR",
}

export type TimedFeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** Follower only */
  followerOnly: Scalars["Boolean"];
  /** The collect module recipient address */
  recipient: Scalars["EthereumAddress"];
  /** The collect module referral fee */
  referralFee: Scalars["Float"];
};

export type TimedFeeCollectModuleSettings = {
  __typename?: "TimedFeeCollectModuleSettings";
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  contractAddress: Scalars["ContractAddress"];
  /** The collect module end timestamp */
  endTimestamp: Scalars["DateTime"];
  /** Follower only */
  followerOnly: Scalars["Boolean"];
  /** The collect module recipient address */
  recipient: Scalars["EthereumAddress"];
  /** The collect module referral fee */
  referralFee: Scalars["Float"];
  /** The collect modules enum */
  type: CollectModules;
};

export type TimelineRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** The profile id */
  profileId: Scalars["ProfileId"];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
  /** The timeline types you wish to include, if nothing passed in will bring back all */
  timelineTypes?: InputMaybe<Array<TimelineType>>;
};

/** Timeline types */
export enum TimelineType {
  CollectComment = "COLLECT_COMMENT",
  CollectPost = "COLLECT_POST",
  Comment = "COMMENT",
  Mirror = "MIRROR",
  Post = "POST",
}

export type TransactionError = {
  __typename?: "TransactionError";
  reason: TransactionErrorReasons;
  txReceipt?: Maybe<TransactionReceipt>;
};

/** Transaction error reason */
export enum TransactionErrorReasons {
  Reverted = "REVERTED",
}

export type TransactionIndexedResult = {
  __typename?: "TransactionIndexedResult";
  indexed: Scalars["Boolean"];
  /** Publications can be indexed but the ipfs link for example not findable for x time. This allows you to work that out for publications. If its not a publication tx then it always be null. */
  metadataStatus?: Maybe<PublicationMetadataStatus>;
  txHash: Scalars["TxHash"];
  txReceipt?: Maybe<TransactionReceipt>;
};

export type TransactionReceipt = {
  __typename?: "TransactionReceipt";
  blockHash: Scalars["String"];
  blockNumber: Scalars["Int"];
  byzantium: Scalars["Boolean"];
  confirmations: Scalars["Int"];
  contractAddress?: Maybe<Scalars["ContractAddress"]>;
  cumulativeGasUsed: Scalars["String"];
  effectiveGasPrice: Scalars["String"];
  from: Scalars["EthereumAddress"];
  gasUsed: Scalars["String"];
  logs: Array<Log>;
  logsBloom: Scalars["String"];
  root?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["Int"]>;
  to?: Maybe<Scalars["EthereumAddress"]>;
  transactionHash: Scalars["TxHash"];
  transactionIndex: Scalars["Int"];
  type: Scalars["Int"];
};

export type TransactionResult = TransactionError | TransactionIndexedResult;

export type TypedDataOptions = {
  /** If you wish to override the nonce for the sig if you want to do some clever stuff in the client */
  overrideSigNonce: Scalars["Nonce"];
};

export type UnfollowRequest = {
  profile: Scalars["ProfileId"];
};

export type UnknownCollectModuleParams = {
  contractAddress: Scalars["ContractAddress"];
  /** The encoded data to submit with the module */
  data: Scalars["BlockchainData"];
};

export type UnknownCollectModuleSettings = {
  __typename?: "UnknownCollectModuleSettings";
  /** The data used to setup the module which you can decode with your known ABI  */
  collectModuleReturnData: Scalars["CollectModuleData"];
  contractAddress: Scalars["ContractAddress"];
  /** The collect modules enum */
  type: CollectModules;
};

export type UnknownFollowModuleParams = {
  contractAddress: Scalars["ContractAddress"];
  /** The encoded data to submit with the module */
  data: Scalars["BlockchainData"];
};

export type UnknownFollowModuleRedeemParams = {
  /** The encoded data to submit with the module */
  data: Scalars["BlockchainData"];
};

export type UnknownFollowModuleSettings = {
  __typename?: "UnknownFollowModuleSettings";
  contractAddress: Scalars["ContractAddress"];
  /** The data used to setup the module which you can decode with your known ABI  */
  followModuleReturnData: Scalars["FollowModuleData"];
  /** The follow modules enum */
  type: FollowModules;
};

export type UnknownReferenceModuleParams = {
  contractAddress: Scalars["ContractAddress"];
  /** The encoded data to submit with the module */
  data: Scalars["BlockchainData"];
};

export type UnknownReferenceModuleSettings = {
  __typename?: "UnknownReferenceModuleSettings";
  contractAddress: Scalars["ContractAddress"];
  /** The data used to setup the module which you can decode with your known ABI  */
  referenceModuleReturnData: Scalars["ReferenceModuleData"];
  /** The reference modules enum */
  type: ReferenceModules;
};

export type UpdateProfileImageRequest = {
  /** The nft data */
  nftData?: InputMaybe<NftData>;
  profileId: Scalars["ProfileId"];
  /** The url to the image if offline */
  url?: InputMaybe<Scalars["Url"]>;
};

export type UserSigNonces = {
  __typename?: "UserSigNonces";
  lensHubOnChainSigNonce: Scalars["Nonce"];
  peripheryOnChainSigNonce: Scalars["Nonce"];
};

export type ValidatePublicationMetadataRequest = {
  metadatav1?: InputMaybe<PublicationMetadataV1Input>;
  metadatav2?: InputMaybe<PublicationMetadataV2Input>;
};

/** The access request */
export type VerifyRequest = {
  /** The access token */
  accessToken: Scalars["Jwt"];
};

export type Wallet = {
  __typename?: "Wallet";
  address: Scalars["EthereumAddress"];
  /** The default profile for the wallet for now it is just their first profile, this will be the default profile they picked soon enough */
  defaultProfile?: Maybe<Profile>;
};

export type WhoCollectedPublicationRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  /** Internal publication id */
  publicationId: Scalars["InternalPublicationId"];
};

export type WhoReactedPublicationRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  /** Internal publication id */
  publicationId: Scalars["InternalPublicationId"];
};

/** The Profile */
export type WhoReactedResult = {
  __typename?: "WhoReactedResult";
  profile: Profile;
  /** The reaction */
  reaction: ReactionTypes;
  /** The reaction */
  reactionAt: Scalars["DateTime"];
  /** The reaction id */
  reactionId: Scalars["ReactionId"];
};

export type WorldcoinIdentity = {
  __typename?: "WorldcoinIdentity";
  /** If the profile has verified as a user */
  isHuman: Scalars["Boolean"];
};

type CollectModuleFields_FeeCollectModuleSettings_Fragment = {
  __typename?: "FeeCollectModuleSettings";
  type: CollectModules;
  recipient: any;
  referralFee: number;
  contractAddress: any;
  followerOnly: boolean;
  amount: {
    __typename?: "ModuleFeeAmount";
    value: string;
    asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
  };
};

type CollectModuleFields_FreeCollectModuleSettings_Fragment = {
  __typename?: "FreeCollectModuleSettings";
  type: CollectModules;
  contractAddress: any;
  followerOnly: boolean;
};

type CollectModuleFields_LimitedFeeCollectModuleSettings_Fragment = {
  __typename?: "LimitedFeeCollectModuleSettings";
  type: CollectModules;
  collectLimit: string;
  recipient: any;
  referralFee: number;
  contractAddress: any;
  followerOnly: boolean;
  amount: {
    __typename?: "ModuleFeeAmount";
    value: string;
    asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
  };
};

type CollectModuleFields_LimitedTimedFeeCollectModuleSettings_Fragment = {
  __typename?: "LimitedTimedFeeCollectModuleSettings";
  type: CollectModules;
  collectLimit: string;
  recipient: any;
  endTimestamp: any;
  referralFee: number;
  contractAddress: any;
  followerOnly: boolean;
  amount: {
    __typename?: "ModuleFeeAmount";
    value: string;
    asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
  };
};

type CollectModuleFields_RevertCollectModuleSettings_Fragment = {
  __typename?: "RevertCollectModuleSettings";
};

type CollectModuleFields_TimedFeeCollectModuleSettings_Fragment = {
  __typename?: "TimedFeeCollectModuleSettings";
  type: CollectModules;
  recipient: any;
  endTimestamp: any;
  referralFee: number;
  contractAddress: any;
  followerOnly: boolean;
  amount: {
    __typename?: "ModuleFeeAmount";
    value: string;
    asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
  };
};

type CollectModuleFields_UnknownCollectModuleSettings_Fragment = {
  __typename?: "UnknownCollectModuleSettings";
};

export type CollectModuleFieldsFragment =
  | CollectModuleFields_FeeCollectModuleSettings_Fragment
  | CollectModuleFields_FreeCollectModuleSettings_Fragment
  | CollectModuleFields_LimitedFeeCollectModuleSettings_Fragment
  | CollectModuleFields_LimitedTimedFeeCollectModuleSettings_Fragment
  | CollectModuleFields_RevertCollectModuleSettings_Fragment
  | CollectModuleFields_TimedFeeCollectModuleSettings_Fragment
  | CollectModuleFields_UnknownCollectModuleSettings_Fragment;

export type CommentFieldsFragment = {
  __typename: "Comment";
  id: any;
  reaction?: ReactionTypes | null;
  mirrors: Array<any>;
  hasCollectedByMe: boolean;
  hidden: boolean;
  createdAt: any;
  appId?: any | null;
  profile: {
    __typename?: "Profile";
    id: any;
    name?: string | null;
    handle: any;
    bio?: string | null;
    ownedBy: any;
    attributes?: Array<{ __typename?: "Attribute"; key: string; value: string }> | null;
    picture?:
      | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
      | { __typename?: "NftImage"; uri: any }
      | null;
    followModule?:
      | { __typename: "FeeFollowModuleSettings" }
      | { __typename: "ProfileFollowModuleSettings" }
      | { __typename: "RevertFollowModuleSettings" }
      | { __typename: "UnknownFollowModuleSettings" }
      | null;
  };
  canComment: { __typename?: "CanCommentResponse"; result: boolean };
  canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
  collectedBy?: {
    __typename?: "Wallet";
    address: any;
    defaultProfile?: {
      __typename?: "Profile";
      id: any;
      name?: string | null;
      handle: any;
      bio?: string | null;
      ownedBy: any;
      attributes?: Array<{ __typename?: "Attribute"; key: string; value: string }> | null;
      picture?:
        | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
        | { __typename?: "NftImage"; uri: any }
        | null;
      followModule?:
        | { __typename: "FeeFollowModuleSettings" }
        | { __typename: "ProfileFollowModuleSettings" }
        | { __typename: "RevertFollowModuleSettings" }
        | { __typename: "UnknownFollowModuleSettings" }
        | null;
    } | null;
  } | null;
  collectModule:
    | {
        __typename?: "FeeCollectModuleSettings";
        type: CollectModules;
        recipient: any;
        referralFee: number;
        contractAddress: any;
        followerOnly: boolean;
        amount: {
          __typename?: "ModuleFeeAmount";
          value: string;
          asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
        };
      }
    | {
        __typename?: "FreeCollectModuleSettings";
        type: CollectModules;
        contractAddress: any;
        followerOnly: boolean;
      }
    | {
        __typename?: "LimitedFeeCollectModuleSettings";
        type: CollectModules;
        collectLimit: string;
        recipient: any;
        referralFee: number;
        contractAddress: any;
        followerOnly: boolean;
        amount: {
          __typename?: "ModuleFeeAmount";
          value: string;
          asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
        };
      }
    | {
        __typename?: "LimitedTimedFeeCollectModuleSettings";
        type: CollectModules;
        collectLimit: string;
        recipient: any;
        endTimestamp: any;
        referralFee: number;
        contractAddress: any;
        followerOnly: boolean;
        amount: {
          __typename?: "ModuleFeeAmount";
          value: string;
          asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
        };
      }
    | { __typename?: "RevertCollectModuleSettings" }
    | {
        __typename?: "TimedFeeCollectModuleSettings";
        type: CollectModules;
        recipient: any;
        endTimestamp: any;
        referralFee: number;
        contractAddress: any;
        followerOnly: boolean;
        amount: {
          __typename?: "ModuleFeeAmount";
          value: string;
          asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
        };
      }
    | { __typename?: "UnknownCollectModuleSettings" };
  stats: {
    __typename?: "PublicationStats";
    totalUpvotes: number;
    totalAmountOfMirrors: number;
    totalAmountOfCollects: number;
    totalAmountOfComments: number;
  };
  metadata: {
    __typename?: "MetadataOutput";
    name?: string | null;
    description?: any | null;
    content?: any | null;
    image?: any | null;
    attributes: Array<{
      __typename?: "MetadataAttributeOutput";
      traitType?: string | null;
      value?: string | null;
    }>;
    cover?: { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } } | null;
    media: Array<{
      __typename?: "MediaSet";
      original: { __typename?: "Media"; url: any; mimeType?: any | null };
    }>;
  };
  commentOn?:
    | {
        __typename?: "Comment";
        id: any;
        reaction?: ReactionTypes | null;
        mirrors: Array<any>;
        hasCollectedByMe: boolean;
        hidden: boolean;
        createdAt: any;
        profile: {
          __typename?: "Profile";
          id: any;
          name?: string | null;
          handle: any;
          bio?: string | null;
          ownedBy: any;
          attributes?: Array<{ __typename?: "Attribute"; key: string; value: string }> | null;
          picture?:
            | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
            | { __typename?: "NftImage"; uri: any }
            | null;
          followModule?:
            | { __typename: "FeeFollowModuleSettings" }
            | { __typename: "ProfileFollowModuleSettings" }
            | { __typename: "RevertFollowModuleSettings" }
            | { __typename: "UnknownFollowModuleSettings" }
            | null;
        };
        canComment: { __typename?: "CanCommentResponse"; result: boolean };
        canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
        collectedBy?: {
          __typename?: "Wallet";
          address: any;
          defaultProfile?: { __typename?: "Profile"; handle: any } | null;
        } | null;
        collectModule:
          | {
              __typename?: "FeeCollectModuleSettings";
              type: CollectModules;
              recipient: any;
              referralFee: number;
              contractAddress: any;
              followerOnly: boolean;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
              };
            }
          | {
              __typename?: "FreeCollectModuleSettings";
              type: CollectModules;
              contractAddress: any;
              followerOnly: boolean;
            }
          | {
              __typename?: "LimitedFeeCollectModuleSettings";
              type: CollectModules;
              collectLimit: string;
              recipient: any;
              referralFee: number;
              contractAddress: any;
              followerOnly: boolean;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
              };
            }
          | {
              __typename?: "LimitedTimedFeeCollectModuleSettings";
              type: CollectModules;
              collectLimit: string;
              recipient: any;
              endTimestamp: any;
              referralFee: number;
              contractAddress: any;
              followerOnly: boolean;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
              };
            }
          | { __typename?: "RevertCollectModuleSettings" }
          | {
              __typename?: "TimedFeeCollectModuleSettings";
              type: CollectModules;
              recipient: any;
              endTimestamp: any;
              referralFee: number;
              contractAddress: any;
              followerOnly: boolean;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
              };
            }
          | { __typename?: "UnknownCollectModuleSettings" };
        metadata: {
          __typename?: "MetadataOutput";
          name?: string | null;
          description?: any | null;
          content?: any | null;
          image?: any | null;
          attributes: Array<{
            __typename?: "MetadataAttributeOutput";
            traitType?: string | null;
            value?: string | null;
          }>;
          cover?: { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } } | null;
          media: Array<{
            __typename?: "MediaSet";
            original: { __typename?: "Media"; url: any; mimeType?: any | null };
          }>;
        };
        stats: {
          __typename?: "PublicationStats";
          totalUpvotes: number;
          totalAmountOfMirrors: number;
          totalAmountOfCollects: number;
          totalAmountOfComments: number;
        };
        mainPost:
          | {
              __typename: "Mirror";
              id: any;
              reaction?: ReactionTypes | null;
              hidden: boolean;
              createdAt: any;
              appId?: any | null;
              profile: {
                __typename?: "Profile";
                id: any;
                name?: string | null;
                handle: any;
                bio?: string | null;
                ownedBy: any;
                attributes?: Array<{ __typename?: "Attribute"; key: string; value: string }> | null;
                picture?:
                  | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
                  | { __typename?: "NftImage"; uri: any }
                  | null;
                followModule?:
                  | { __typename: "FeeFollowModuleSettings" }
                  | { __typename: "ProfileFollowModuleSettings" }
                  | { __typename: "RevertFollowModuleSettings" }
                  | { __typename: "UnknownFollowModuleSettings" }
                  | null;
              };
              canComment: { __typename?: "CanCommentResponse"; result: boolean };
              canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
              collectModule:
                | {
                    __typename?: "FeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    contractAddress: any;
                    followerOnly: boolean;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | {
                    __typename?: "FreeCollectModuleSettings";
                    type: CollectModules;
                    contractAddress: any;
                    followerOnly: boolean;
                  }
                | {
                    __typename?: "LimitedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    contractAddress: any;
                    followerOnly: boolean;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | {
                    __typename?: "LimitedTimedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    endTimestamp: any;
                    referralFee: number;
                    contractAddress: any;
                    followerOnly: boolean;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | { __typename?: "RevertCollectModuleSettings" }
                | {
                    __typename?: "TimedFeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    endTimestamp: any;
                    referralFee: number;
                    contractAddress: any;
                    followerOnly: boolean;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | { __typename?: "UnknownCollectModuleSettings" };
              stats: {
                __typename?: "PublicationStats";
                totalUpvotes: number;
                totalAmountOfMirrors: number;
                totalAmountOfCollects: number;
                totalAmountOfComments: number;
              };
              metadata: {
                __typename?: "MetadataOutput";
                name?: string | null;
                description?: any | null;
                content?: any | null;
                image?: any | null;
                attributes: Array<{
                  __typename?: "MetadataAttributeOutput";
                  traitType?: string | null;
                  value?: string | null;
                }>;
                cover?: {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                } | null;
                media: Array<{
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any; mimeType?: any | null };
                }>;
              };
              mirrorOf:
                | {
                    __typename?: "Comment";
                    id: any;
                    reaction?: ReactionTypes | null;
                    mirrors: Array<any>;
                    createdAt: any;
                    profile: {
                      __typename?: "Profile";
                      id: any;
                      name?: string | null;
                      handle: any;
                      bio?: string | null;
                      ownedBy: any;
                      attributes?: Array<{
                        __typename?: "Attribute";
                        key: string;
                        value: string;
                      }> | null;
                      picture?:
                        | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
                        | { __typename?: "NftImage"; uri: any }
                        | null;
                      followModule?:
                        | { __typename: "FeeFollowModuleSettings" }
                        | { __typename: "ProfileFollowModuleSettings" }
                        | { __typename: "RevertFollowModuleSettings" }
                        | { __typename: "UnknownFollowModuleSettings" }
                        | null;
                    };
                    canComment: { __typename?: "CanCommentResponse"; result: boolean };
                    canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
                    stats: {
                      __typename?: "PublicationStats";
                      totalUpvotes: number;
                      totalAmountOfMirrors: number;
                      totalAmountOfCollects: number;
                      totalAmountOfComments: number;
                    };
                  }
                | {
                    __typename: "Post";
                    id: any;
                    reaction?: ReactionTypes | null;
                    mirrors: Array<any>;
                    hasCollectedByMe: boolean;
                    hidden: boolean;
                    createdAt: any;
                    appId?: any | null;
                    profile: {
                      __typename?: "Profile";
                      id: any;
                      name?: string | null;
                      handle: any;
                      bio?: string | null;
                      ownedBy: any;
                      attributes?: Array<{
                        __typename?: "Attribute";
                        key: string;
                        value: string;
                      }> | null;
                      picture?:
                        | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
                        | { __typename?: "NftImage"; uri: any }
                        | null;
                      followModule?:
                        | { __typename: "FeeFollowModuleSettings" }
                        | { __typename: "ProfileFollowModuleSettings" }
                        | { __typename: "RevertFollowModuleSettings" }
                        | { __typename: "UnknownFollowModuleSettings" }
                        | null;
                    };
                    canComment: { __typename?: "CanCommentResponse"; result: boolean };
                    canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
                    collectedBy?: {
                      __typename?: "Wallet";
                      address: any;
                      defaultProfile?: {
                        __typename?: "Profile";
                        id: any;
                        name?: string | null;
                        handle: any;
                        bio?: string | null;
                        ownedBy: any;
                        attributes?: Array<{
                          __typename?: "Attribute";
                          key: string;
                          value: string;
                        }> | null;
                        picture?:
                          | {
                              __typename?: "MediaSet";
                              original: { __typename?: "Media"; url: any };
                            }
                          | { __typename?: "NftImage"; uri: any }
                          | null;
                        followModule?:
                          | { __typename: "FeeFollowModuleSettings" }
                          | { __typename: "ProfileFollowModuleSettings" }
                          | { __typename: "RevertFollowModuleSettings" }
                          | { __typename: "UnknownFollowModuleSettings" }
                          | null;
                      } | null;
                    } | null;
                    collectModule:
                      | {
                          __typename?: "FeeCollectModuleSettings";
                          type: CollectModules;
                          recipient: any;
                          referralFee: number;
                          contractAddress: any;
                          followerOnly: boolean;
                          amount: {
                            __typename?: "ModuleFeeAmount";
                            value: string;
                            asset: {
                              __typename?: "Erc20";
                              symbol: string;
                              decimals: number;
                              address: any;
                            };
                          };
                        }
                      | {
                          __typename?: "FreeCollectModuleSettings";
                          type: CollectModules;
                          contractAddress: any;
                          followerOnly: boolean;
                        }
                      | {
                          __typename?: "LimitedFeeCollectModuleSettings";
                          type: CollectModules;
                          collectLimit: string;
                          recipient: any;
                          referralFee: number;
                          contractAddress: any;
                          followerOnly: boolean;
                          amount: {
                            __typename?: "ModuleFeeAmount";
                            value: string;
                            asset: {
                              __typename?: "Erc20";
                              symbol: string;
                              decimals: number;
                              address: any;
                            };
                          };
                        }
                      | {
                          __typename?: "LimitedTimedFeeCollectModuleSettings";
                          type: CollectModules;
                          collectLimit: string;
                          recipient: any;
                          endTimestamp: any;
                          referralFee: number;
                          contractAddress: any;
                          followerOnly: boolean;
                          amount: {
                            __typename?: "ModuleFeeAmount";
                            value: string;
                            asset: {
                              __typename?: "Erc20";
                              symbol: string;
                              decimals: number;
                              address: any;
                            };
                          };
                        }
                      | { __typename?: "RevertCollectModuleSettings" }
                      | {
                          __typename?: "TimedFeeCollectModuleSettings";
                          type: CollectModules;
                          recipient: any;
                          endTimestamp: any;
                          referralFee: number;
                          contractAddress: any;
                          followerOnly: boolean;
                          amount: {
                            __typename?: "ModuleFeeAmount";
                            value: string;
                            asset: {
                              __typename?: "Erc20";
                              symbol: string;
                              decimals: number;
                              address: any;
                            };
                          };
                        }
                      | { __typename?: "UnknownCollectModuleSettings" };
                    stats: {
                      __typename?: "PublicationStats";
                      totalUpvotes: number;
                      totalAmountOfMirrors: number;
                      totalAmountOfCollects: number;
                      totalAmountOfComments: number;
                    };
                    metadata: {
                      __typename?: "MetadataOutput";
                      name?: string | null;
                      description?: any | null;
                      content?: any | null;
                      image?: any | null;
                      attributes: Array<{
                        __typename?: "MetadataAttributeOutput";
                        traitType?: string | null;
                        value?: string | null;
                      }>;
                      cover?: {
                        __typename?: "MediaSet";
                        original: { __typename?: "Media"; url: any };
                      } | null;
                      media: Array<{
                        __typename?: "MediaSet";
                        original: { __typename?: "Media"; url: any; mimeType?: any | null };
                      }>;
                    };
                  };
            }
          | {
              __typename: "Post";
              id: any;
              reaction?: ReactionTypes | null;
              mirrors: Array<any>;
              hasCollectedByMe: boolean;
              hidden: boolean;
              createdAt: any;
              appId?: any | null;
              profile: {
                __typename?: "Profile";
                id: any;
                name?: string | null;
                handle: any;
                bio?: string | null;
                ownedBy: any;
                attributes?: Array<{ __typename?: "Attribute"; key: string; value: string }> | null;
                picture?:
                  | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
                  | { __typename?: "NftImage"; uri: any }
                  | null;
                followModule?:
                  | { __typename: "FeeFollowModuleSettings" }
                  | { __typename: "ProfileFollowModuleSettings" }
                  | { __typename: "RevertFollowModuleSettings" }
                  | { __typename: "UnknownFollowModuleSettings" }
                  | null;
              };
              canComment: { __typename?: "CanCommentResponse"; result: boolean };
              canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
              collectedBy?: {
                __typename?: "Wallet";
                address: any;
                defaultProfile?: {
                  __typename?: "Profile";
                  id: any;
                  name?: string | null;
                  handle: any;
                  bio?: string | null;
                  ownedBy: any;
                  attributes?: Array<{
                    __typename?: "Attribute";
                    key: string;
                    value: string;
                  }> | null;
                  picture?:
                    | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
                    | { __typename?: "NftImage"; uri: any }
                    | null;
                  followModule?:
                    | { __typename: "FeeFollowModuleSettings" }
                    | { __typename: "ProfileFollowModuleSettings" }
                    | { __typename: "RevertFollowModuleSettings" }
                    | { __typename: "UnknownFollowModuleSettings" }
                    | null;
                } | null;
              } | null;
              collectModule:
                | {
                    __typename?: "FeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    contractAddress: any;
                    followerOnly: boolean;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | {
                    __typename?: "FreeCollectModuleSettings";
                    type: CollectModules;
                    contractAddress: any;
                    followerOnly: boolean;
                  }
                | {
                    __typename?: "LimitedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    contractAddress: any;
                    followerOnly: boolean;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | {
                    __typename?: "LimitedTimedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    endTimestamp: any;
                    referralFee: number;
                    contractAddress: any;
                    followerOnly: boolean;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | { __typename?: "RevertCollectModuleSettings" }
                | {
                    __typename?: "TimedFeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    endTimestamp: any;
                    referralFee: number;
                    contractAddress: any;
                    followerOnly: boolean;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | { __typename?: "UnknownCollectModuleSettings" };
              stats: {
                __typename?: "PublicationStats";
                totalUpvotes: number;
                totalAmountOfMirrors: number;
                totalAmountOfCollects: number;
                totalAmountOfComments: number;
              };
              metadata: {
                __typename?: "MetadataOutput";
                name?: string | null;
                description?: any | null;
                content?: any | null;
                image?: any | null;
                attributes: Array<{
                  __typename?: "MetadataAttributeOutput";
                  traitType?: string | null;
                  value?: string | null;
                }>;
                cover?: {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                } | null;
                media: Array<{
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any; mimeType?: any | null };
                }>;
              };
            };
      }
    | {
        __typename: "Mirror";
        id: any;
        reaction?: ReactionTypes | null;
        hidden: boolean;
        createdAt: any;
        appId?: any | null;
        profile: {
          __typename?: "Profile";
          id: any;
          name?: string | null;
          handle: any;
          bio?: string | null;
          ownedBy: any;
          attributes?: Array<{ __typename?: "Attribute"; key: string; value: string }> | null;
          picture?:
            | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
            | { __typename?: "NftImage"; uri: any }
            | null;
          followModule?:
            | { __typename: "FeeFollowModuleSettings" }
            | { __typename: "ProfileFollowModuleSettings" }
            | { __typename: "RevertFollowModuleSettings" }
            | { __typename: "UnknownFollowModuleSettings" }
            | null;
        };
        canComment: { __typename?: "CanCommentResponse"; result: boolean };
        canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
        collectModule:
          | {
              __typename?: "FeeCollectModuleSettings";
              type: CollectModules;
              recipient: any;
              referralFee: number;
              contractAddress: any;
              followerOnly: boolean;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
              };
            }
          | {
              __typename?: "FreeCollectModuleSettings";
              type: CollectModules;
              contractAddress: any;
              followerOnly: boolean;
            }
          | {
              __typename?: "LimitedFeeCollectModuleSettings";
              type: CollectModules;
              collectLimit: string;
              recipient: any;
              referralFee: number;
              contractAddress: any;
              followerOnly: boolean;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
              };
            }
          | {
              __typename?: "LimitedTimedFeeCollectModuleSettings";
              type: CollectModules;
              collectLimit: string;
              recipient: any;
              endTimestamp: any;
              referralFee: number;
              contractAddress: any;
              followerOnly: boolean;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
              };
            }
          | { __typename?: "RevertCollectModuleSettings" }
          | {
              __typename?: "TimedFeeCollectModuleSettings";
              type: CollectModules;
              recipient: any;
              endTimestamp: any;
              referralFee: number;
              contractAddress: any;
              followerOnly: boolean;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
              };
            }
          | { __typename?: "UnknownCollectModuleSettings" };
        stats: {
          __typename?: "PublicationStats";
          totalUpvotes: number;
          totalAmountOfMirrors: number;
          totalAmountOfCollects: number;
          totalAmountOfComments: number;
        };
        metadata: {
          __typename?: "MetadataOutput";
          name?: string | null;
          description?: any | null;
          content?: any | null;
          image?: any | null;
          attributes: Array<{
            __typename?: "MetadataAttributeOutput";
            traitType?: string | null;
            value?: string | null;
          }>;
          cover?: { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } } | null;
          media: Array<{
            __typename?: "MediaSet";
            original: { __typename?: "Media"; url: any; mimeType?: any | null };
          }>;
        };
        mirrorOf:
          | {
              __typename?: "Comment";
              id: any;
              reaction?: ReactionTypes | null;
              mirrors: Array<any>;
              createdAt: any;
              profile: {
                __typename?: "Profile";
                id: any;
                name?: string | null;
                handle: any;
                bio?: string | null;
                ownedBy: any;
                attributes?: Array<{ __typename?: "Attribute"; key: string; value: string }> | null;
                picture?:
                  | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
                  | { __typename?: "NftImage"; uri: any }
                  | null;
                followModule?:
                  | { __typename: "FeeFollowModuleSettings" }
                  | { __typename: "ProfileFollowModuleSettings" }
                  | { __typename: "RevertFollowModuleSettings" }
                  | { __typename: "UnknownFollowModuleSettings" }
                  | null;
              };
              canComment: { __typename?: "CanCommentResponse"; result: boolean };
              canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
              stats: {
                __typename?: "PublicationStats";
                totalUpvotes: number;
                totalAmountOfMirrors: number;
                totalAmountOfCollects: number;
                totalAmountOfComments: number;
              };
            }
          | {
              __typename: "Post";
              id: any;
              reaction?: ReactionTypes | null;
              mirrors: Array<any>;
              hasCollectedByMe: boolean;
              hidden: boolean;
              createdAt: any;
              appId?: any | null;
              profile: {
                __typename?: "Profile";
                id: any;
                name?: string | null;
                handle: any;
                bio?: string | null;
                ownedBy: any;
                attributes?: Array<{ __typename?: "Attribute"; key: string; value: string }> | null;
                picture?:
                  | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
                  | { __typename?: "NftImage"; uri: any }
                  | null;
                followModule?:
                  | { __typename: "FeeFollowModuleSettings" }
                  | { __typename: "ProfileFollowModuleSettings" }
                  | { __typename: "RevertFollowModuleSettings" }
                  | { __typename: "UnknownFollowModuleSettings" }
                  | null;
              };
              canComment: { __typename?: "CanCommentResponse"; result: boolean };
              canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
              collectedBy?: {
                __typename?: "Wallet";
                address: any;
                defaultProfile?: {
                  __typename?: "Profile";
                  id: any;
                  name?: string | null;
                  handle: any;
                  bio?: string | null;
                  ownedBy: any;
                  attributes?: Array<{
                    __typename?: "Attribute";
                    key: string;
                    value: string;
                  }> | null;
                  picture?:
                    | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
                    | { __typename?: "NftImage"; uri: any }
                    | null;
                  followModule?:
                    | { __typename: "FeeFollowModuleSettings" }
                    | { __typename: "ProfileFollowModuleSettings" }
                    | { __typename: "RevertFollowModuleSettings" }
                    | { __typename: "UnknownFollowModuleSettings" }
                    | null;
                } | null;
              } | null;
              collectModule:
                | {
                    __typename?: "FeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    contractAddress: any;
                    followerOnly: boolean;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | {
                    __typename?: "FreeCollectModuleSettings";
                    type: CollectModules;
                    contractAddress: any;
                    followerOnly: boolean;
                  }
                | {
                    __typename?: "LimitedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    contractAddress: any;
                    followerOnly: boolean;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | {
                    __typename?: "LimitedTimedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    endTimestamp: any;
                    referralFee: number;
                    contractAddress: any;
                    followerOnly: boolean;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | { __typename?: "RevertCollectModuleSettings" }
                | {
                    __typename?: "TimedFeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    endTimestamp: any;
                    referralFee: number;
                    contractAddress: any;
                    followerOnly: boolean;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | { __typename?: "UnknownCollectModuleSettings" };
              stats: {
                __typename?: "PublicationStats";
                totalUpvotes: number;
                totalAmountOfMirrors: number;
                totalAmountOfCollects: number;
                totalAmountOfComments: number;
              };
              metadata: {
                __typename?: "MetadataOutput";
                name?: string | null;
                description?: any | null;
                content?: any | null;
                image?: any | null;
                attributes: Array<{
                  __typename?: "MetadataAttributeOutput";
                  traitType?: string | null;
                  value?: string | null;
                }>;
                cover?: {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                } | null;
                media: Array<{
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any; mimeType?: any | null };
                }>;
              };
            };
      }
    | {
        __typename: "Post";
        id: any;
        reaction?: ReactionTypes | null;
        mirrors: Array<any>;
        hasCollectedByMe: boolean;
        hidden: boolean;
        createdAt: any;
        appId?: any | null;
        profile: {
          __typename?: "Profile";
          id: any;
          name?: string | null;
          handle: any;
          bio?: string | null;
          ownedBy: any;
          attributes?: Array<{ __typename?: "Attribute"; key: string; value: string }> | null;
          picture?:
            | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
            | { __typename?: "NftImage"; uri: any }
            | null;
          followModule?:
            | { __typename: "FeeFollowModuleSettings" }
            | { __typename: "ProfileFollowModuleSettings" }
            | { __typename: "RevertFollowModuleSettings" }
            | { __typename: "UnknownFollowModuleSettings" }
            | null;
        };
        canComment: { __typename?: "CanCommentResponse"; result: boolean };
        canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
        collectedBy?: {
          __typename?: "Wallet";
          address: any;
          defaultProfile?: {
            __typename?: "Profile";
            id: any;
            name?: string | null;
            handle: any;
            bio?: string | null;
            ownedBy: any;
            attributes?: Array<{ __typename?: "Attribute"; key: string; value: string }> | null;
            picture?:
              | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
              | { __typename?: "NftImage"; uri: any }
              | null;
            followModule?:
              | { __typename: "FeeFollowModuleSettings" }
              | { __typename: "ProfileFollowModuleSettings" }
              | { __typename: "RevertFollowModuleSettings" }
              | { __typename: "UnknownFollowModuleSettings" }
              | null;
          } | null;
        } | null;
        collectModule:
          | {
              __typename?: "FeeCollectModuleSettings";
              type: CollectModules;
              recipient: any;
              referralFee: number;
              contractAddress: any;
              followerOnly: boolean;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
              };
            }
          | {
              __typename?: "FreeCollectModuleSettings";
              type: CollectModules;
              contractAddress: any;
              followerOnly: boolean;
            }
          | {
              __typename?: "LimitedFeeCollectModuleSettings";
              type: CollectModules;
              collectLimit: string;
              recipient: any;
              referralFee: number;
              contractAddress: any;
              followerOnly: boolean;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
              };
            }
          | {
              __typename?: "LimitedTimedFeeCollectModuleSettings";
              type: CollectModules;
              collectLimit: string;
              recipient: any;
              endTimestamp: any;
              referralFee: number;
              contractAddress: any;
              followerOnly: boolean;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
              };
            }
          | { __typename?: "RevertCollectModuleSettings" }
          | {
              __typename?: "TimedFeeCollectModuleSettings";
              type: CollectModules;
              recipient: any;
              endTimestamp: any;
              referralFee: number;
              contractAddress: any;
              followerOnly: boolean;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
              };
            }
          | { __typename?: "UnknownCollectModuleSettings" };
        stats: {
          __typename?: "PublicationStats";
          totalUpvotes: number;
          totalAmountOfMirrors: number;
          totalAmountOfCollects: number;
          totalAmountOfComments: number;
        };
        metadata: {
          __typename?: "MetadataOutput";
          name?: string | null;
          description?: any | null;
          content?: any | null;
          image?: any | null;
          attributes: Array<{
            __typename?: "MetadataAttributeOutput";
            traitType?: string | null;
            value?: string | null;
          }>;
          cover?: { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } } | null;
          media: Array<{
            __typename?: "MediaSet";
            original: { __typename?: "Media"; url: any; mimeType?: any | null };
          }>;
        };
      }
    | null;
};

export type MetadataFieldsFragment = {
  __typename?: "MetadataOutput";
  name?: string | null;
  description?: any | null;
  content?: any | null;
  image?: any | null;
  attributes: Array<{
    __typename?: "MetadataAttributeOutput";
    traitType?: string | null;
    value?: string | null;
  }>;
  cover?: { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } } | null;
  media: Array<{
    __typename?: "MediaSet";
    original: { __typename?: "Media"; url: any; mimeType?: any | null };
  }>;
};

export type MirrorFieldsFragment = {
  __typename: "Mirror";
  id: any;
  reaction?: ReactionTypes | null;
  hidden: boolean;
  createdAt: any;
  appId?: any | null;
  profile: {
    __typename?: "Profile";
    id: any;
    name?: string | null;
    handle: any;
    bio?: string | null;
    ownedBy: any;
    attributes?: Array<{ __typename?: "Attribute"; key: string; value: string }> | null;
    picture?:
      | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
      | { __typename?: "NftImage"; uri: any }
      | null;
    followModule?:
      | { __typename: "FeeFollowModuleSettings" }
      | { __typename: "ProfileFollowModuleSettings" }
      | { __typename: "RevertFollowModuleSettings" }
      | { __typename: "UnknownFollowModuleSettings" }
      | null;
  };
  canComment: { __typename?: "CanCommentResponse"; result: boolean };
  canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
  collectModule:
    | {
        __typename?: "FeeCollectModuleSettings";
        type: CollectModules;
        recipient: any;
        referralFee: number;
        contractAddress: any;
        followerOnly: boolean;
        amount: {
          __typename?: "ModuleFeeAmount";
          value: string;
          asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
        };
      }
    | {
        __typename?: "FreeCollectModuleSettings";
        type: CollectModules;
        contractAddress: any;
        followerOnly: boolean;
      }
    | {
        __typename?: "LimitedFeeCollectModuleSettings";
        type: CollectModules;
        collectLimit: string;
        recipient: any;
        referralFee: number;
        contractAddress: any;
        followerOnly: boolean;
        amount: {
          __typename?: "ModuleFeeAmount";
          value: string;
          asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
        };
      }
    | {
        __typename?: "LimitedTimedFeeCollectModuleSettings";
        type: CollectModules;
        collectLimit: string;
        recipient: any;
        endTimestamp: any;
        referralFee: number;
        contractAddress: any;
        followerOnly: boolean;
        amount: {
          __typename?: "ModuleFeeAmount";
          value: string;
          asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
        };
      }
    | { __typename?: "RevertCollectModuleSettings" }
    | {
        __typename?: "TimedFeeCollectModuleSettings";
        type: CollectModules;
        recipient: any;
        endTimestamp: any;
        referralFee: number;
        contractAddress: any;
        followerOnly: boolean;
        amount: {
          __typename?: "ModuleFeeAmount";
          value: string;
          asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
        };
      }
    | { __typename?: "UnknownCollectModuleSettings" };
  stats: {
    __typename?: "PublicationStats";
    totalUpvotes: number;
    totalAmountOfMirrors: number;
    totalAmountOfCollects: number;
    totalAmountOfComments: number;
  };
  metadata: {
    __typename?: "MetadataOutput";
    name?: string | null;
    description?: any | null;
    content?: any | null;
    image?: any | null;
    attributes: Array<{
      __typename?: "MetadataAttributeOutput";
      traitType?: string | null;
      value?: string | null;
    }>;
    cover?: { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } } | null;
    media: Array<{
      __typename?: "MediaSet";
      original: { __typename?: "Media"; url: any; mimeType?: any | null };
    }>;
  };
  mirrorOf:
    | {
        __typename?: "Comment";
        id: any;
        reaction?: ReactionTypes | null;
        mirrors: Array<any>;
        createdAt: any;
        profile: {
          __typename?: "Profile";
          id: any;
          name?: string | null;
          handle: any;
          bio?: string | null;
          ownedBy: any;
          attributes?: Array<{ __typename?: "Attribute"; key: string; value: string }> | null;
          picture?:
            | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
            | { __typename?: "NftImage"; uri: any }
            | null;
          followModule?:
            | { __typename: "FeeFollowModuleSettings" }
            | { __typename: "ProfileFollowModuleSettings" }
            | { __typename: "RevertFollowModuleSettings" }
            | { __typename: "UnknownFollowModuleSettings" }
            | null;
        };
        canComment: { __typename?: "CanCommentResponse"; result: boolean };
        canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
        stats: {
          __typename?: "PublicationStats";
          totalUpvotes: number;
          totalAmountOfMirrors: number;
          totalAmountOfCollects: number;
          totalAmountOfComments: number;
        };
      }
    | {
        __typename: "Post";
        id: any;
        reaction?: ReactionTypes | null;
        mirrors: Array<any>;
        hasCollectedByMe: boolean;
        hidden: boolean;
        createdAt: any;
        appId?: any | null;
        profile: {
          __typename?: "Profile";
          id: any;
          name?: string | null;
          handle: any;
          bio?: string | null;
          ownedBy: any;
          attributes?: Array<{ __typename?: "Attribute"; key: string; value: string }> | null;
          picture?:
            | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
            | { __typename?: "NftImage"; uri: any }
            | null;
          followModule?:
            | { __typename: "FeeFollowModuleSettings" }
            | { __typename: "ProfileFollowModuleSettings" }
            | { __typename: "RevertFollowModuleSettings" }
            | { __typename: "UnknownFollowModuleSettings" }
            | null;
        };
        canComment: { __typename?: "CanCommentResponse"; result: boolean };
        canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
        collectedBy?: {
          __typename?: "Wallet";
          address: any;
          defaultProfile?: {
            __typename?: "Profile";
            id: any;
            name?: string | null;
            handle: any;
            bio?: string | null;
            ownedBy: any;
            attributes?: Array<{ __typename?: "Attribute"; key: string; value: string }> | null;
            picture?:
              | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
              | { __typename?: "NftImage"; uri: any }
              | null;
            followModule?:
              | { __typename: "FeeFollowModuleSettings" }
              | { __typename: "ProfileFollowModuleSettings" }
              | { __typename: "RevertFollowModuleSettings" }
              | { __typename: "UnknownFollowModuleSettings" }
              | null;
          } | null;
        } | null;
        collectModule:
          | {
              __typename?: "FeeCollectModuleSettings";
              type: CollectModules;
              recipient: any;
              referralFee: number;
              contractAddress: any;
              followerOnly: boolean;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
              };
            }
          | {
              __typename?: "FreeCollectModuleSettings";
              type: CollectModules;
              contractAddress: any;
              followerOnly: boolean;
            }
          | {
              __typename?: "LimitedFeeCollectModuleSettings";
              type: CollectModules;
              collectLimit: string;
              recipient: any;
              referralFee: number;
              contractAddress: any;
              followerOnly: boolean;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
              };
            }
          | {
              __typename?: "LimitedTimedFeeCollectModuleSettings";
              type: CollectModules;
              collectLimit: string;
              recipient: any;
              endTimestamp: any;
              referralFee: number;
              contractAddress: any;
              followerOnly: boolean;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
              };
            }
          | { __typename?: "RevertCollectModuleSettings" }
          | {
              __typename?: "TimedFeeCollectModuleSettings";
              type: CollectModules;
              recipient: any;
              endTimestamp: any;
              referralFee: number;
              contractAddress: any;
              followerOnly: boolean;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
              };
            }
          | { __typename?: "UnknownCollectModuleSettings" };
        stats: {
          __typename?: "PublicationStats";
          totalUpvotes: number;
          totalAmountOfMirrors: number;
          totalAmountOfCollects: number;
          totalAmountOfComments: number;
        };
        metadata: {
          __typename?: "MetadataOutput";
          name?: string | null;
          description?: any | null;
          content?: any | null;
          image?: any | null;
          attributes: Array<{
            __typename?: "MetadataAttributeOutput";
            traitType?: string | null;
            value?: string | null;
          }>;
          cover?: { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } } | null;
          media: Array<{
            __typename?: "MediaSet";
            original: { __typename?: "Media"; url: any; mimeType?: any | null };
          }>;
        };
      };
};

export type PostFieldsFragment = {
  __typename: "Post";
  id: any;
  reaction?: ReactionTypes | null;
  mirrors: Array<any>;
  hasCollectedByMe: boolean;
  hidden: boolean;
  createdAt: any;
  appId?: any | null;
  profile: {
    __typename?: "Profile";
    id: any;
    name?: string | null;
    handle: any;
    bio?: string | null;
    ownedBy: any;
    attributes?: Array<{ __typename?: "Attribute"; key: string; value: string }> | null;
    picture?:
      | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
      | { __typename?: "NftImage"; uri: any }
      | null;
    followModule?:
      | { __typename: "FeeFollowModuleSettings" }
      | { __typename: "ProfileFollowModuleSettings" }
      | { __typename: "RevertFollowModuleSettings" }
      | { __typename: "UnknownFollowModuleSettings" }
      | null;
  };
  canComment: { __typename?: "CanCommentResponse"; result: boolean };
  canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
  collectedBy?: {
    __typename?: "Wallet";
    address: any;
    defaultProfile?: {
      __typename?: "Profile";
      id: any;
      name?: string | null;
      handle: any;
      bio?: string | null;
      ownedBy: any;
      attributes?: Array<{ __typename?: "Attribute"; key: string; value: string }> | null;
      picture?:
        | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
        | { __typename?: "NftImage"; uri: any }
        | null;
      followModule?:
        | { __typename: "FeeFollowModuleSettings" }
        | { __typename: "ProfileFollowModuleSettings" }
        | { __typename: "RevertFollowModuleSettings" }
        | { __typename: "UnknownFollowModuleSettings" }
        | null;
    } | null;
  } | null;
  collectModule:
    | {
        __typename?: "FeeCollectModuleSettings";
        type: CollectModules;
        recipient: any;
        referralFee: number;
        contractAddress: any;
        followerOnly: boolean;
        amount: {
          __typename?: "ModuleFeeAmount";
          value: string;
          asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
        };
      }
    | {
        __typename?: "FreeCollectModuleSettings";
        type: CollectModules;
        contractAddress: any;
        followerOnly: boolean;
      }
    | {
        __typename?: "LimitedFeeCollectModuleSettings";
        type: CollectModules;
        collectLimit: string;
        recipient: any;
        referralFee: number;
        contractAddress: any;
        followerOnly: boolean;
        amount: {
          __typename?: "ModuleFeeAmount";
          value: string;
          asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
        };
      }
    | {
        __typename?: "LimitedTimedFeeCollectModuleSettings";
        type: CollectModules;
        collectLimit: string;
        recipient: any;
        endTimestamp: any;
        referralFee: number;
        contractAddress: any;
        followerOnly: boolean;
        amount: {
          __typename?: "ModuleFeeAmount";
          value: string;
          asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
        };
      }
    | { __typename?: "RevertCollectModuleSettings" }
    | {
        __typename?: "TimedFeeCollectModuleSettings";
        type: CollectModules;
        recipient: any;
        endTimestamp: any;
        referralFee: number;
        contractAddress: any;
        followerOnly: boolean;
        amount: {
          __typename?: "ModuleFeeAmount";
          value: string;
          asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
        };
      }
    | { __typename?: "UnknownCollectModuleSettings" };
  stats: {
    __typename?: "PublicationStats";
    totalUpvotes: number;
    totalAmountOfMirrors: number;
    totalAmountOfCollects: number;
    totalAmountOfComments: number;
  };
  metadata: {
    __typename?: "MetadataOutput";
    name?: string | null;
    description?: any | null;
    content?: any | null;
    image?: any | null;
    attributes: Array<{
      __typename?: "MetadataAttributeOutput";
      traitType?: string | null;
      value?: string | null;
    }>;
    cover?: { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } } | null;
    media: Array<{
      __typename?: "MediaSet";
      original: { __typename?: "Media"; url: any; mimeType?: any | null };
    }>;
  };
};

export type ProfileFieldsFragment = {
  __typename?: "Profile";
  id: any;
  name?: string | null;
  handle: any;
  bio?: string | null;
  ownedBy: any;
  attributes?: Array<{ __typename?: "Attribute"; key: string; value: string }> | null;
  picture?:
    | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
    | { __typename?: "NftImage"; uri: any }
    | null;
  followModule?:
    | { __typename: "FeeFollowModuleSettings" }
    | { __typename: "ProfileFollowModuleSettings" }
    | { __typename: "RevertFollowModuleSettings" }
    | { __typename: "UnknownFollowModuleSettings" }
    | null;
};

export type StatsFieldsFragment = {
  __typename?: "PublicationStats";
  totalUpvotes: number;
  totalAmountOfMirrors: number;
  totalAmountOfCollects: number;
  totalAmountOfComments: number;
};

export type AuthenticateMutationVariables = Exact<{
  request: SignedAuthChallenge;
}>;

export type AuthenticateMutation = {
  __typename?: "Mutation";
  authenticate: { __typename?: "AuthenticationResult"; accessToken: any; refreshToken: any };
};

export type ChallengeQueryVariables = Exact<{
  request: ChallengeRequest;
}>;

export type ChallengeQuery = {
  __typename?: "Query";
  challenge: { __typename?: "AuthChallengeResult"; text: string };
};

export type FollowersQueryVariables = Exact<{
  request: FollowersRequest;
}>;

export type FollowersQuery = {
  __typename?: "Query";
  followers: {
    __typename?: "PaginatedFollowersResult";
    items: Array<{
      __typename?: "Follower";
      totalAmountOfTimesFollowed: number;
      wallet: {
        __typename?: "Wallet";
        address: any;
        defaultProfile?: {
          __typename?: "Profile";
          id: any;
          name?: string | null;
          bio?: string | null;
          isFollowedByMe: boolean;
          followNftAddress?: any | null;
          metadata?: any | null;
          isDefault: boolean;
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
          coverPicture?:
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
          dispatcher?: { __typename?: "Dispatcher"; address: any; canUseRelay: boolean } | null;
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
          followModule?:
            | {
                __typename?: "FeeFollowModuleSettings";
                type: FollowModules;
                contractAddress: any;
                recipient: any;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | { __typename?: "ProfileFollowModuleSettings"; type: FollowModules }
            | { __typename?: "RevertFollowModuleSettings"; type: FollowModules }
            | { __typename?: "UnknownFollowModuleSettings" }
            | null;
        } | null;
      };
    }>;
    pageInfo: {
      __typename?: "PaginatedResultInfo";
      prev?: any | null;
      next?: any | null;
      totalCount?: number | null;
    };
  };
};

export type FollowingQueryVariables = Exact<{
  request: FollowingRequest;
}>;

export type FollowingQuery = {
  __typename?: "Query";
  following: {
    __typename?: "PaginatedFollowingResult";
    items: Array<{
      __typename?: "Following";
      totalAmountOfTimesFollowing: number;
      profile: {
        __typename?: "Profile";
        isFollowedByMe: boolean;
        id: any;
        name?: string | null;
        handle: any;
        bio?: string | null;
        ownedBy: any;
        attributes?: Array<{ __typename?: "Attribute"; key: string; value: string }> | null;
        picture?:
          | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
          | { __typename?: "NftImage"; uri: any }
          | null;
        followModule?:
          | { __typename: "FeeFollowModuleSettings" }
          | { __typename: "ProfileFollowModuleSettings" }
          | { __typename: "RevertFollowModuleSettings" }
          | { __typename: "UnknownFollowModuleSettings" }
          | null;
      };
    }>;
    pageInfo: { __typename?: "PaginatedResultInfo"; next?: any | null; totalCount?: number | null };
  };
};

export type ProfileQueryVariables = Exact<{
  request: SingleProfileQueryRequest;
  who?: InputMaybe<Scalars["ProfileId"]>;
}>;

export type ProfileQuery = {
  __typename?: "Query";
  profile?: {
    __typename: "Profile";
    id: any;
    handle: any;
    ownedBy: any;
    name?: string | null;
    bio?: string | null;
    metadata?: any | null;
    followNftAddress?: any | null;
    isFollowedByMe: boolean;
    isFollowing: boolean;
    attributes?: Array<{ __typename?: "Attribute"; key: string; value: string }> | null;
    dispatcher?: { __typename?: "Dispatcher"; canUseRelay: boolean } | null;
    onChainIdentity: {
      __typename?: "OnChainIdentity";
      proofOfHumanity: boolean;
      sybilDotOrg: {
        __typename?: "SybilDotOrgIdentity";
        verified: boolean;
        source: {
          __typename?: "SybilDotOrgIdentitySource";
          twitter: { __typename?: "SybilDotOrgTwitterIdentity"; handle?: string | null };
        };
      };
      ens?: { __typename?: "EnsOnChainIdentity"; name?: any | null } | null;
      worldcoin: { __typename?: "WorldcoinIdentity"; isHuman: boolean };
    };
    stats: {
      __typename?: "ProfileStats";
      totalFollowers: number;
      totalFollowing: number;
      totalPosts: number;
      totalComments: number;
      totalMirrors: number;
    };
    picture?:
      | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
      | { __typename?: "NftImage"; uri: any }
      | null;
    coverPicture?:
      | { __typename: "MediaSet"; original: { __typename?: "Media"; url: any } }
      | { __typename: "NftImage" }
      | null;
    followModule?:
      | { __typename: "FeeFollowModuleSettings" }
      | { __typename: "ProfileFollowModuleSettings" }
      | { __typename: "RevertFollowModuleSettings" }
      | { __typename: "UnknownFollowModuleSettings" }
      | null;
  } | null;
};

export type ProfileFeedQueryVariables = Exact<{
  request: PublicationsQueryRequest;
  reactionRequest?: InputMaybe<ReactionFieldResolverRequest>;
  profileId?: InputMaybe<Scalars["ProfileId"]>;
}>;

export type ProfileFeedQuery = {
  __typename?: "Query";
  publications: {
    __typename?: "PaginatedPublicationResult";
    items: Array<
      | {
          __typename: "Comment";
          id: any;
          reaction?: ReactionTypes | null;
          mirrors: Array<any>;
          hasCollectedByMe: boolean;
          hidden: boolean;
          createdAt: any;
          appId?: any | null;
          profile: {
            __typename?: "Profile";
            id: any;
            name?: string | null;
            handle: any;
            bio?: string | null;
            ownedBy: any;
            attributes?: Array<{ __typename?: "Attribute"; key: string; value: string }> | null;
            picture?:
              | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
              | { __typename?: "NftImage"; uri: any }
              | null;
            followModule?:
              | { __typename: "FeeFollowModuleSettings" }
              | { __typename: "ProfileFollowModuleSettings" }
              | { __typename: "RevertFollowModuleSettings" }
              | { __typename: "UnknownFollowModuleSettings" }
              | null;
          };
          canComment: { __typename?: "CanCommentResponse"; result: boolean };
          canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
          collectedBy?: {
            __typename?: "Wallet";
            address: any;
            defaultProfile?: {
              __typename?: "Profile";
              id: any;
              name?: string | null;
              handle: any;
              bio?: string | null;
              ownedBy: any;
              attributes?: Array<{ __typename?: "Attribute"; key: string; value: string }> | null;
              picture?:
                | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
                | { __typename?: "NftImage"; uri: any }
                | null;
              followModule?:
                | { __typename: "FeeFollowModuleSettings" }
                | { __typename: "ProfileFollowModuleSettings" }
                | { __typename: "RevertFollowModuleSettings" }
                | { __typename: "UnknownFollowModuleSettings" }
                | null;
            } | null;
          } | null;
          collectModule:
            | {
                __typename?: "FeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                contractAddress: any;
                followerOnly: boolean;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
                };
              }
            | {
                __typename?: "FreeCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                followerOnly: boolean;
              }
            | {
                __typename?: "LimitedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                contractAddress: any;
                followerOnly: boolean;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
                };
              }
            | {
                __typename?: "LimitedTimedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                endTimestamp: any;
                referralFee: number;
                contractAddress: any;
                followerOnly: boolean;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
                };
              }
            | { __typename?: "RevertCollectModuleSettings" }
            | {
                __typename?: "TimedFeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                endTimestamp: any;
                referralFee: number;
                contractAddress: any;
                followerOnly: boolean;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
                };
              }
            | { __typename?: "UnknownCollectModuleSettings" };
          stats: {
            __typename?: "PublicationStats";
            totalUpvotes: number;
            totalAmountOfMirrors: number;
            totalAmountOfCollects: number;
            totalAmountOfComments: number;
          };
          metadata: {
            __typename?: "MetadataOutput";
            name?: string | null;
            description?: any | null;
            content?: any | null;
            image?: any | null;
            attributes: Array<{
              __typename?: "MetadataAttributeOutput";
              traitType?: string | null;
              value?: string | null;
            }>;
            cover?: {
              __typename?: "MediaSet";
              original: { __typename?: "Media"; url: any };
            } | null;
            media: Array<{
              __typename?: "MediaSet";
              original: { __typename?: "Media"; url: any; mimeType?: any | null };
            }>;
          };
          commentOn?:
            | {
                __typename?: "Comment";
                id: any;
                reaction?: ReactionTypes | null;
                mirrors: Array<any>;
                hasCollectedByMe: boolean;
                hidden: boolean;
                createdAt: any;
                profile: {
                  __typename?: "Profile";
                  id: any;
                  name?: string | null;
                  handle: any;
                  bio?: string | null;
                  ownedBy: any;
                  attributes?: Array<{
                    __typename?: "Attribute";
                    key: string;
                    value: string;
                  }> | null;
                  picture?:
                    | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
                    | { __typename?: "NftImage"; uri: any }
                    | null;
                  followModule?:
                    | { __typename: "FeeFollowModuleSettings" }
                    | { __typename: "ProfileFollowModuleSettings" }
                    | { __typename: "RevertFollowModuleSettings" }
                    | { __typename: "UnknownFollowModuleSettings" }
                    | null;
                };
                canComment: { __typename?: "CanCommentResponse"; result: boolean };
                canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
                collectedBy?: {
                  __typename?: "Wallet";
                  address: any;
                  defaultProfile?: { __typename?: "Profile"; handle: any } | null;
                } | null;
                collectModule:
                  | {
                      __typename?: "FeeCollectModuleSettings";
                      type: CollectModules;
                      recipient: any;
                      referralFee: number;
                      contractAddress: any;
                      followerOnly: boolean;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | {
                      __typename?: "FreeCollectModuleSettings";
                      type: CollectModules;
                      contractAddress: any;
                      followerOnly: boolean;
                    }
                  | {
                      __typename?: "LimitedFeeCollectModuleSettings";
                      type: CollectModules;
                      collectLimit: string;
                      recipient: any;
                      referralFee: number;
                      contractAddress: any;
                      followerOnly: boolean;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | {
                      __typename?: "LimitedTimedFeeCollectModuleSettings";
                      type: CollectModules;
                      collectLimit: string;
                      recipient: any;
                      endTimestamp: any;
                      referralFee: number;
                      contractAddress: any;
                      followerOnly: boolean;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | { __typename?: "RevertCollectModuleSettings" }
                  | {
                      __typename?: "TimedFeeCollectModuleSettings";
                      type: CollectModules;
                      recipient: any;
                      endTimestamp: any;
                      referralFee: number;
                      contractAddress: any;
                      followerOnly: boolean;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | { __typename?: "UnknownCollectModuleSettings" };
                metadata: {
                  __typename?: "MetadataOutput";
                  name?: string | null;
                  description?: any | null;
                  content?: any | null;
                  image?: any | null;
                  attributes: Array<{
                    __typename?: "MetadataAttributeOutput";
                    traitType?: string | null;
                    value?: string | null;
                  }>;
                  cover?: {
                    __typename?: "MediaSet";
                    original: { __typename?: "Media"; url: any };
                  } | null;
                  media: Array<{
                    __typename?: "MediaSet";
                    original: { __typename?: "Media"; url: any; mimeType?: any | null };
                  }>;
                };
                stats: {
                  __typename?: "PublicationStats";
                  totalUpvotes: number;
                  totalAmountOfMirrors: number;
                  totalAmountOfCollects: number;
                  totalAmountOfComments: number;
                };
                mainPost:
                  | {
                      __typename: "Mirror";
                      id: any;
                      reaction?: ReactionTypes | null;
                      hidden: boolean;
                      createdAt: any;
                      appId?: any | null;
                      profile: {
                        __typename?: "Profile";
                        id: any;
                        name?: string | null;
                        handle: any;
                        bio?: string | null;
                        ownedBy: any;
                        attributes?: Array<{
                          __typename?: "Attribute";
                          key: string;
                          value: string;
                        }> | null;
                        picture?:
                          | {
                              __typename?: "MediaSet";
                              original: { __typename?: "Media"; url: any };
                            }
                          | { __typename?: "NftImage"; uri: any }
                          | null;
                        followModule?:
                          | { __typename: "FeeFollowModuleSettings" }
                          | { __typename: "ProfileFollowModuleSettings" }
                          | { __typename: "RevertFollowModuleSettings" }
                          | { __typename: "UnknownFollowModuleSettings" }
                          | null;
                      };
                      canComment: { __typename?: "CanCommentResponse"; result: boolean };
                      canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
                      collectModule:
                        | {
                            __typename?: "FeeCollectModuleSettings";
                            type: CollectModules;
                            recipient: any;
                            referralFee: number;
                            contractAddress: any;
                            followerOnly: boolean;
                            amount: {
                              __typename?: "ModuleFeeAmount";
                              value: string;
                              asset: {
                                __typename?: "Erc20";
                                symbol: string;
                                decimals: number;
                                address: any;
                              };
                            };
                          }
                        | {
                            __typename?: "FreeCollectModuleSettings";
                            type: CollectModules;
                            contractAddress: any;
                            followerOnly: boolean;
                          }
                        | {
                            __typename?: "LimitedFeeCollectModuleSettings";
                            type: CollectModules;
                            collectLimit: string;
                            recipient: any;
                            referralFee: number;
                            contractAddress: any;
                            followerOnly: boolean;
                            amount: {
                              __typename?: "ModuleFeeAmount";
                              value: string;
                              asset: {
                                __typename?: "Erc20";
                                symbol: string;
                                decimals: number;
                                address: any;
                              };
                            };
                          }
                        | {
                            __typename?: "LimitedTimedFeeCollectModuleSettings";
                            type: CollectModules;
                            collectLimit: string;
                            recipient: any;
                            endTimestamp: any;
                            referralFee: number;
                            contractAddress: any;
                            followerOnly: boolean;
                            amount: {
                              __typename?: "ModuleFeeAmount";
                              value: string;
                              asset: {
                                __typename?: "Erc20";
                                symbol: string;
                                decimals: number;
                                address: any;
                              };
                            };
                          }
                        | { __typename?: "RevertCollectModuleSettings" }
                        | {
                            __typename?: "TimedFeeCollectModuleSettings";
                            type: CollectModules;
                            recipient: any;
                            endTimestamp: any;
                            referralFee: number;
                            contractAddress: any;
                            followerOnly: boolean;
                            amount: {
                              __typename?: "ModuleFeeAmount";
                              value: string;
                              asset: {
                                __typename?: "Erc20";
                                symbol: string;
                                decimals: number;
                                address: any;
                              };
                            };
                          }
                        | { __typename?: "UnknownCollectModuleSettings" };
                      stats: {
                        __typename?: "PublicationStats";
                        totalUpvotes: number;
                        totalAmountOfMirrors: number;
                        totalAmountOfCollects: number;
                        totalAmountOfComments: number;
                      };
                      metadata: {
                        __typename?: "MetadataOutput";
                        name?: string | null;
                        description?: any | null;
                        content?: any | null;
                        image?: any | null;
                        attributes: Array<{
                          __typename?: "MetadataAttributeOutput";
                          traitType?: string | null;
                          value?: string | null;
                        }>;
                        cover?: {
                          __typename?: "MediaSet";
                          original: { __typename?: "Media"; url: any };
                        } | null;
                        media: Array<{
                          __typename?: "MediaSet";
                          original: { __typename?: "Media"; url: any; mimeType?: any | null };
                        }>;
                      };
                      mirrorOf:
                        | {
                            __typename?: "Comment";
                            id: any;
                            reaction?: ReactionTypes | null;
                            mirrors: Array<any>;
                            createdAt: any;
                            profile: {
                              __typename?: "Profile";
                              id: any;
                              name?: string | null;
                              handle: any;
                              bio?: string | null;
                              ownedBy: any;
                              attributes?: Array<{
                                __typename?: "Attribute";
                                key: string;
                                value: string;
                              }> | null;
                              picture?:
                                | {
                                    __typename?: "MediaSet";
                                    original: { __typename?: "Media"; url: any };
                                  }
                                | { __typename?: "NftImage"; uri: any }
                                | null;
                              followModule?:
                                | { __typename: "FeeFollowModuleSettings" }
                                | { __typename: "ProfileFollowModuleSettings" }
                                | { __typename: "RevertFollowModuleSettings" }
                                | { __typename: "UnknownFollowModuleSettings" }
                                | null;
                            };
                            canComment: { __typename?: "CanCommentResponse"; result: boolean };
                            canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
                            stats: {
                              __typename?: "PublicationStats";
                              totalUpvotes: number;
                              totalAmountOfMirrors: number;
                              totalAmountOfCollects: number;
                              totalAmountOfComments: number;
                            };
                          }
                        | {
                            __typename: "Post";
                            id: any;
                            reaction?: ReactionTypes | null;
                            mirrors: Array<any>;
                            hasCollectedByMe: boolean;
                            hidden: boolean;
                            createdAt: any;
                            appId?: any | null;
                            profile: {
                              __typename?: "Profile";
                              id: any;
                              name?: string | null;
                              handle: any;
                              bio?: string | null;
                              ownedBy: any;
                              attributes?: Array<{
                                __typename?: "Attribute";
                                key: string;
                                value: string;
                              }> | null;
                              picture?:
                                | {
                                    __typename?: "MediaSet";
                                    original: { __typename?: "Media"; url: any };
                                  }
                                | { __typename?: "NftImage"; uri: any }
                                | null;
                              followModule?:
                                | { __typename: "FeeFollowModuleSettings" }
                                | { __typename: "ProfileFollowModuleSettings" }
                                | { __typename: "RevertFollowModuleSettings" }
                                | { __typename: "UnknownFollowModuleSettings" }
                                | null;
                            };
                            canComment: { __typename?: "CanCommentResponse"; result: boolean };
                            canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
                            collectedBy?: {
                              __typename?: "Wallet";
                              address: any;
                              defaultProfile?: {
                                __typename?: "Profile";
                                id: any;
                                name?: string | null;
                                handle: any;
                                bio?: string | null;
                                ownedBy: any;
                                attributes?: Array<{
                                  __typename?: "Attribute";
                                  key: string;
                                  value: string;
                                }> | null;
                                picture?:
                                  | {
                                      __typename?: "MediaSet";
                                      original: { __typename?: "Media"; url: any };
                                    }
                                  | { __typename?: "NftImage"; uri: any }
                                  | null;
                                followModule?:
                                  | { __typename: "FeeFollowModuleSettings" }
                                  | { __typename: "ProfileFollowModuleSettings" }
                                  | { __typename: "RevertFollowModuleSettings" }
                                  | { __typename: "UnknownFollowModuleSettings" }
                                  | null;
                              } | null;
                            } | null;
                            collectModule:
                              | {
                                  __typename?: "FeeCollectModuleSettings";
                                  type: CollectModules;
                                  recipient: any;
                                  referralFee: number;
                                  contractAddress: any;
                                  followerOnly: boolean;
                                  amount: {
                                    __typename?: "ModuleFeeAmount";
                                    value: string;
                                    asset: {
                                      __typename?: "Erc20";
                                      symbol: string;
                                      decimals: number;
                                      address: any;
                                    };
                                  };
                                }
                              | {
                                  __typename?: "FreeCollectModuleSettings";
                                  type: CollectModules;
                                  contractAddress: any;
                                  followerOnly: boolean;
                                }
                              | {
                                  __typename?: "LimitedFeeCollectModuleSettings";
                                  type: CollectModules;
                                  collectLimit: string;
                                  recipient: any;
                                  referralFee: number;
                                  contractAddress: any;
                                  followerOnly: boolean;
                                  amount: {
                                    __typename?: "ModuleFeeAmount";
                                    value: string;
                                    asset: {
                                      __typename?: "Erc20";
                                      symbol: string;
                                      decimals: number;
                                      address: any;
                                    };
                                  };
                                }
                              | {
                                  __typename?: "LimitedTimedFeeCollectModuleSettings";
                                  type: CollectModules;
                                  collectLimit: string;
                                  recipient: any;
                                  endTimestamp: any;
                                  referralFee: number;
                                  contractAddress: any;
                                  followerOnly: boolean;
                                  amount: {
                                    __typename?: "ModuleFeeAmount";
                                    value: string;
                                    asset: {
                                      __typename?: "Erc20";
                                      symbol: string;
                                      decimals: number;
                                      address: any;
                                    };
                                  };
                                }
                              | { __typename?: "RevertCollectModuleSettings" }
                              | {
                                  __typename?: "TimedFeeCollectModuleSettings";
                                  type: CollectModules;
                                  recipient: any;
                                  endTimestamp: any;
                                  referralFee: number;
                                  contractAddress: any;
                                  followerOnly: boolean;
                                  amount: {
                                    __typename?: "ModuleFeeAmount";
                                    value: string;
                                    asset: {
                                      __typename?: "Erc20";
                                      symbol: string;
                                      decimals: number;
                                      address: any;
                                    };
                                  };
                                }
                              | { __typename?: "UnknownCollectModuleSettings" };
                            stats: {
                              __typename?: "PublicationStats";
                              totalUpvotes: number;
                              totalAmountOfMirrors: number;
                              totalAmountOfCollects: number;
                              totalAmountOfComments: number;
                            };
                            metadata: {
                              __typename?: "MetadataOutput";
                              name?: string | null;
                              description?: any | null;
                              content?: any | null;
                              image?: any | null;
                              attributes: Array<{
                                __typename?: "MetadataAttributeOutput";
                                traitType?: string | null;
                                value?: string | null;
                              }>;
                              cover?: {
                                __typename?: "MediaSet";
                                original: { __typename?: "Media"; url: any };
                              } | null;
                              media: Array<{
                                __typename?: "MediaSet";
                                original: { __typename?: "Media"; url: any; mimeType?: any | null };
                              }>;
                            };
                          };
                    }
                  | {
                      __typename: "Post";
                      id: any;
                      reaction?: ReactionTypes | null;
                      mirrors: Array<any>;
                      hasCollectedByMe: boolean;
                      hidden: boolean;
                      createdAt: any;
                      appId?: any | null;
                      profile: {
                        __typename?: "Profile";
                        id: any;
                        name?: string | null;
                        handle: any;
                        bio?: string | null;
                        ownedBy: any;
                        attributes?: Array<{
                          __typename?: "Attribute";
                          key: string;
                          value: string;
                        }> | null;
                        picture?:
                          | {
                              __typename?: "MediaSet";
                              original: { __typename?: "Media"; url: any };
                            }
                          | { __typename?: "NftImage"; uri: any }
                          | null;
                        followModule?:
                          | { __typename: "FeeFollowModuleSettings" }
                          | { __typename: "ProfileFollowModuleSettings" }
                          | { __typename: "RevertFollowModuleSettings" }
                          | { __typename: "UnknownFollowModuleSettings" }
                          | null;
                      };
                      canComment: { __typename?: "CanCommentResponse"; result: boolean };
                      canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
                      collectedBy?: {
                        __typename?: "Wallet";
                        address: any;
                        defaultProfile?: {
                          __typename?: "Profile";
                          id: any;
                          name?: string | null;
                          handle: any;
                          bio?: string | null;
                          ownedBy: any;
                          attributes?: Array<{
                            __typename?: "Attribute";
                            key: string;
                            value: string;
                          }> | null;
                          picture?:
                            | {
                                __typename?: "MediaSet";
                                original: { __typename?: "Media"; url: any };
                              }
                            | { __typename?: "NftImage"; uri: any }
                            | null;
                          followModule?:
                            | { __typename: "FeeFollowModuleSettings" }
                            | { __typename: "ProfileFollowModuleSettings" }
                            | { __typename: "RevertFollowModuleSettings" }
                            | { __typename: "UnknownFollowModuleSettings" }
                            | null;
                        } | null;
                      } | null;
                      collectModule:
                        | {
                            __typename?: "FeeCollectModuleSettings";
                            type: CollectModules;
                            recipient: any;
                            referralFee: number;
                            contractAddress: any;
                            followerOnly: boolean;
                            amount: {
                              __typename?: "ModuleFeeAmount";
                              value: string;
                              asset: {
                                __typename?: "Erc20";
                                symbol: string;
                                decimals: number;
                                address: any;
                              };
                            };
                          }
                        | {
                            __typename?: "FreeCollectModuleSettings";
                            type: CollectModules;
                            contractAddress: any;
                            followerOnly: boolean;
                          }
                        | {
                            __typename?: "LimitedFeeCollectModuleSettings";
                            type: CollectModules;
                            collectLimit: string;
                            recipient: any;
                            referralFee: number;
                            contractAddress: any;
                            followerOnly: boolean;
                            amount: {
                              __typename?: "ModuleFeeAmount";
                              value: string;
                              asset: {
                                __typename?: "Erc20";
                                symbol: string;
                                decimals: number;
                                address: any;
                              };
                            };
                          }
                        | {
                            __typename?: "LimitedTimedFeeCollectModuleSettings";
                            type: CollectModules;
                            collectLimit: string;
                            recipient: any;
                            endTimestamp: any;
                            referralFee: number;
                            contractAddress: any;
                            followerOnly: boolean;
                            amount: {
                              __typename?: "ModuleFeeAmount";
                              value: string;
                              asset: {
                                __typename?: "Erc20";
                                symbol: string;
                                decimals: number;
                                address: any;
                              };
                            };
                          }
                        | { __typename?: "RevertCollectModuleSettings" }
                        | {
                            __typename?: "TimedFeeCollectModuleSettings";
                            type: CollectModules;
                            recipient: any;
                            endTimestamp: any;
                            referralFee: number;
                            contractAddress: any;
                            followerOnly: boolean;
                            amount: {
                              __typename?: "ModuleFeeAmount";
                              value: string;
                              asset: {
                                __typename?: "Erc20";
                                symbol: string;
                                decimals: number;
                                address: any;
                              };
                            };
                          }
                        | { __typename?: "UnknownCollectModuleSettings" };
                      stats: {
                        __typename?: "PublicationStats";
                        totalUpvotes: number;
                        totalAmountOfMirrors: number;
                        totalAmountOfCollects: number;
                        totalAmountOfComments: number;
                      };
                      metadata: {
                        __typename?: "MetadataOutput";
                        name?: string | null;
                        description?: any | null;
                        content?: any | null;
                        image?: any | null;
                        attributes: Array<{
                          __typename?: "MetadataAttributeOutput";
                          traitType?: string | null;
                          value?: string | null;
                        }>;
                        cover?: {
                          __typename?: "MediaSet";
                          original: { __typename?: "Media"; url: any };
                        } | null;
                        media: Array<{
                          __typename?: "MediaSet";
                          original: { __typename?: "Media"; url: any; mimeType?: any | null };
                        }>;
                      };
                    };
              }
            | {
                __typename: "Mirror";
                id: any;
                reaction?: ReactionTypes | null;
                hidden: boolean;
                createdAt: any;
                appId?: any | null;
                profile: {
                  __typename?: "Profile";
                  id: any;
                  name?: string | null;
                  handle: any;
                  bio?: string | null;
                  ownedBy: any;
                  attributes?: Array<{
                    __typename?: "Attribute";
                    key: string;
                    value: string;
                  }> | null;
                  picture?:
                    | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
                    | { __typename?: "NftImage"; uri: any }
                    | null;
                  followModule?:
                    | { __typename: "FeeFollowModuleSettings" }
                    | { __typename: "ProfileFollowModuleSettings" }
                    | { __typename: "RevertFollowModuleSettings" }
                    | { __typename: "UnknownFollowModuleSettings" }
                    | null;
                };
                canComment: { __typename?: "CanCommentResponse"; result: boolean };
                canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
                collectModule:
                  | {
                      __typename?: "FeeCollectModuleSettings";
                      type: CollectModules;
                      recipient: any;
                      referralFee: number;
                      contractAddress: any;
                      followerOnly: boolean;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | {
                      __typename?: "FreeCollectModuleSettings";
                      type: CollectModules;
                      contractAddress: any;
                      followerOnly: boolean;
                    }
                  | {
                      __typename?: "LimitedFeeCollectModuleSettings";
                      type: CollectModules;
                      collectLimit: string;
                      recipient: any;
                      referralFee: number;
                      contractAddress: any;
                      followerOnly: boolean;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | {
                      __typename?: "LimitedTimedFeeCollectModuleSettings";
                      type: CollectModules;
                      collectLimit: string;
                      recipient: any;
                      endTimestamp: any;
                      referralFee: number;
                      contractAddress: any;
                      followerOnly: boolean;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | { __typename?: "RevertCollectModuleSettings" }
                  | {
                      __typename?: "TimedFeeCollectModuleSettings";
                      type: CollectModules;
                      recipient: any;
                      endTimestamp: any;
                      referralFee: number;
                      contractAddress: any;
                      followerOnly: boolean;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | { __typename?: "UnknownCollectModuleSettings" };
                stats: {
                  __typename?: "PublicationStats";
                  totalUpvotes: number;
                  totalAmountOfMirrors: number;
                  totalAmountOfCollects: number;
                  totalAmountOfComments: number;
                };
                metadata: {
                  __typename?: "MetadataOutput";
                  name?: string | null;
                  description?: any | null;
                  content?: any | null;
                  image?: any | null;
                  attributes: Array<{
                    __typename?: "MetadataAttributeOutput";
                    traitType?: string | null;
                    value?: string | null;
                  }>;
                  cover?: {
                    __typename?: "MediaSet";
                    original: { __typename?: "Media"; url: any };
                  } | null;
                  media: Array<{
                    __typename?: "MediaSet";
                    original: { __typename?: "Media"; url: any; mimeType?: any | null };
                  }>;
                };
                mirrorOf:
                  | {
                      __typename?: "Comment";
                      id: any;
                      reaction?: ReactionTypes | null;
                      mirrors: Array<any>;
                      createdAt: any;
                      profile: {
                        __typename?: "Profile";
                        id: any;
                        name?: string | null;
                        handle: any;
                        bio?: string | null;
                        ownedBy: any;
                        attributes?: Array<{
                          __typename?: "Attribute";
                          key: string;
                          value: string;
                        }> | null;
                        picture?:
                          | {
                              __typename?: "MediaSet";
                              original: { __typename?: "Media"; url: any };
                            }
                          | { __typename?: "NftImage"; uri: any }
                          | null;
                        followModule?:
                          | { __typename: "FeeFollowModuleSettings" }
                          | { __typename: "ProfileFollowModuleSettings" }
                          | { __typename: "RevertFollowModuleSettings" }
                          | { __typename: "UnknownFollowModuleSettings" }
                          | null;
                      };
                      canComment: { __typename?: "CanCommentResponse"; result: boolean };
                      canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
                      stats: {
                        __typename?: "PublicationStats";
                        totalUpvotes: number;
                        totalAmountOfMirrors: number;
                        totalAmountOfCollects: number;
                        totalAmountOfComments: number;
                      };
                    }
                  | {
                      __typename: "Post";
                      id: any;
                      reaction?: ReactionTypes | null;
                      mirrors: Array<any>;
                      hasCollectedByMe: boolean;
                      hidden: boolean;
                      createdAt: any;
                      appId?: any | null;
                      profile: {
                        __typename?: "Profile";
                        id: any;
                        name?: string | null;
                        handle: any;
                        bio?: string | null;
                        ownedBy: any;
                        attributes?: Array<{
                          __typename?: "Attribute";
                          key: string;
                          value: string;
                        }> | null;
                        picture?:
                          | {
                              __typename?: "MediaSet";
                              original: { __typename?: "Media"; url: any };
                            }
                          | { __typename?: "NftImage"; uri: any }
                          | null;
                        followModule?:
                          | { __typename: "FeeFollowModuleSettings" }
                          | { __typename: "ProfileFollowModuleSettings" }
                          | { __typename: "RevertFollowModuleSettings" }
                          | { __typename: "UnknownFollowModuleSettings" }
                          | null;
                      };
                      canComment: { __typename?: "CanCommentResponse"; result: boolean };
                      canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
                      collectedBy?: {
                        __typename?: "Wallet";
                        address: any;
                        defaultProfile?: {
                          __typename?: "Profile";
                          id: any;
                          name?: string | null;
                          handle: any;
                          bio?: string | null;
                          ownedBy: any;
                          attributes?: Array<{
                            __typename?: "Attribute";
                            key: string;
                            value: string;
                          }> | null;
                          picture?:
                            | {
                                __typename?: "MediaSet";
                                original: { __typename?: "Media"; url: any };
                              }
                            | { __typename?: "NftImage"; uri: any }
                            | null;
                          followModule?:
                            | { __typename: "FeeFollowModuleSettings" }
                            | { __typename: "ProfileFollowModuleSettings" }
                            | { __typename: "RevertFollowModuleSettings" }
                            | { __typename: "UnknownFollowModuleSettings" }
                            | null;
                        } | null;
                      } | null;
                      collectModule:
                        | {
                            __typename?: "FeeCollectModuleSettings";
                            type: CollectModules;
                            recipient: any;
                            referralFee: number;
                            contractAddress: any;
                            followerOnly: boolean;
                            amount: {
                              __typename?: "ModuleFeeAmount";
                              value: string;
                              asset: {
                                __typename?: "Erc20";
                                symbol: string;
                                decimals: number;
                                address: any;
                              };
                            };
                          }
                        | {
                            __typename?: "FreeCollectModuleSettings";
                            type: CollectModules;
                            contractAddress: any;
                            followerOnly: boolean;
                          }
                        | {
                            __typename?: "LimitedFeeCollectModuleSettings";
                            type: CollectModules;
                            collectLimit: string;
                            recipient: any;
                            referralFee: number;
                            contractAddress: any;
                            followerOnly: boolean;
                            amount: {
                              __typename?: "ModuleFeeAmount";
                              value: string;
                              asset: {
                                __typename?: "Erc20";
                                symbol: string;
                                decimals: number;
                                address: any;
                              };
                            };
                          }
                        | {
                            __typename?: "LimitedTimedFeeCollectModuleSettings";
                            type: CollectModules;
                            collectLimit: string;
                            recipient: any;
                            endTimestamp: any;
                            referralFee: number;
                            contractAddress: any;
                            followerOnly: boolean;
                            amount: {
                              __typename?: "ModuleFeeAmount";
                              value: string;
                              asset: {
                                __typename?: "Erc20";
                                symbol: string;
                                decimals: number;
                                address: any;
                              };
                            };
                          }
                        | { __typename?: "RevertCollectModuleSettings" }
                        | {
                            __typename?: "TimedFeeCollectModuleSettings";
                            type: CollectModules;
                            recipient: any;
                            endTimestamp: any;
                            referralFee: number;
                            contractAddress: any;
                            followerOnly: boolean;
                            amount: {
                              __typename?: "ModuleFeeAmount";
                              value: string;
                              asset: {
                                __typename?: "Erc20";
                                symbol: string;
                                decimals: number;
                                address: any;
                              };
                            };
                          }
                        | { __typename?: "UnknownCollectModuleSettings" };
                      stats: {
                        __typename?: "PublicationStats";
                        totalUpvotes: number;
                        totalAmountOfMirrors: number;
                        totalAmountOfCollects: number;
                        totalAmountOfComments: number;
                      };
                      metadata: {
                        __typename?: "MetadataOutput";
                        name?: string | null;
                        description?: any | null;
                        content?: any | null;
                        image?: any | null;
                        attributes: Array<{
                          __typename?: "MetadataAttributeOutput";
                          traitType?: string | null;
                          value?: string | null;
                        }>;
                        cover?: {
                          __typename?: "MediaSet";
                          original: { __typename?: "Media"; url: any };
                        } | null;
                        media: Array<{
                          __typename?: "MediaSet";
                          original: { __typename?: "Media"; url: any; mimeType?: any | null };
                        }>;
                      };
                    };
              }
            | {
                __typename: "Post";
                id: any;
                reaction?: ReactionTypes | null;
                mirrors: Array<any>;
                hasCollectedByMe: boolean;
                hidden: boolean;
                createdAt: any;
                appId?: any | null;
                profile: {
                  __typename?: "Profile";
                  id: any;
                  name?: string | null;
                  handle: any;
                  bio?: string | null;
                  ownedBy: any;
                  attributes?: Array<{
                    __typename?: "Attribute";
                    key: string;
                    value: string;
                  }> | null;
                  picture?:
                    | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
                    | { __typename?: "NftImage"; uri: any }
                    | null;
                  followModule?:
                    | { __typename: "FeeFollowModuleSettings" }
                    | { __typename: "ProfileFollowModuleSettings" }
                    | { __typename: "RevertFollowModuleSettings" }
                    | { __typename: "UnknownFollowModuleSettings" }
                    | null;
                };
                canComment: { __typename?: "CanCommentResponse"; result: boolean };
                canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
                collectedBy?: {
                  __typename?: "Wallet";
                  address: any;
                  defaultProfile?: {
                    __typename?: "Profile";
                    id: any;
                    name?: string | null;
                    handle: any;
                    bio?: string | null;
                    ownedBy: any;
                    attributes?: Array<{
                      __typename?: "Attribute";
                      key: string;
                      value: string;
                    }> | null;
                    picture?:
                      | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
                      | { __typename?: "NftImage"; uri: any }
                      | null;
                    followModule?:
                      | { __typename: "FeeFollowModuleSettings" }
                      | { __typename: "ProfileFollowModuleSettings" }
                      | { __typename: "RevertFollowModuleSettings" }
                      | { __typename: "UnknownFollowModuleSettings" }
                      | null;
                  } | null;
                } | null;
                collectModule:
                  | {
                      __typename?: "FeeCollectModuleSettings";
                      type: CollectModules;
                      recipient: any;
                      referralFee: number;
                      contractAddress: any;
                      followerOnly: boolean;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | {
                      __typename?: "FreeCollectModuleSettings";
                      type: CollectModules;
                      contractAddress: any;
                      followerOnly: boolean;
                    }
                  | {
                      __typename?: "LimitedFeeCollectModuleSettings";
                      type: CollectModules;
                      collectLimit: string;
                      recipient: any;
                      referralFee: number;
                      contractAddress: any;
                      followerOnly: boolean;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | {
                      __typename?: "LimitedTimedFeeCollectModuleSettings";
                      type: CollectModules;
                      collectLimit: string;
                      recipient: any;
                      endTimestamp: any;
                      referralFee: number;
                      contractAddress: any;
                      followerOnly: boolean;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | { __typename?: "RevertCollectModuleSettings" }
                  | {
                      __typename?: "TimedFeeCollectModuleSettings";
                      type: CollectModules;
                      recipient: any;
                      endTimestamp: any;
                      referralFee: number;
                      contractAddress: any;
                      followerOnly: boolean;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | { __typename?: "UnknownCollectModuleSettings" };
                stats: {
                  __typename?: "PublicationStats";
                  totalUpvotes: number;
                  totalAmountOfMirrors: number;
                  totalAmountOfCollects: number;
                  totalAmountOfComments: number;
                };
                metadata: {
                  __typename?: "MetadataOutput";
                  name?: string | null;
                  description?: any | null;
                  content?: any | null;
                  image?: any | null;
                  attributes: Array<{
                    __typename?: "MetadataAttributeOutput";
                    traitType?: string | null;
                    value?: string | null;
                  }>;
                  cover?: {
                    __typename?: "MediaSet";
                    original: { __typename?: "Media"; url: any };
                  } | null;
                  media: Array<{
                    __typename?: "MediaSet";
                    original: { __typename?: "Media"; url: any; mimeType?: any | null };
                  }>;
                };
              }
            | null;
        }
      | {
          __typename: "Mirror";
          id: any;
          reaction?: ReactionTypes | null;
          hidden: boolean;
          createdAt: any;
          appId?: any | null;
          profile: {
            __typename?: "Profile";
            id: any;
            name?: string | null;
            handle: any;
            bio?: string | null;
            ownedBy: any;
            attributes?: Array<{ __typename?: "Attribute"; key: string; value: string }> | null;
            picture?:
              | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
              | { __typename?: "NftImage"; uri: any }
              | null;
            followModule?:
              | { __typename: "FeeFollowModuleSettings" }
              | { __typename: "ProfileFollowModuleSettings" }
              | { __typename: "RevertFollowModuleSettings" }
              | { __typename: "UnknownFollowModuleSettings" }
              | null;
          };
          canComment: { __typename?: "CanCommentResponse"; result: boolean };
          canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
          collectModule:
            | {
                __typename?: "FeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                contractAddress: any;
                followerOnly: boolean;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
                };
              }
            | {
                __typename?: "FreeCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                followerOnly: boolean;
              }
            | {
                __typename?: "LimitedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                contractAddress: any;
                followerOnly: boolean;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
                };
              }
            | {
                __typename?: "LimitedTimedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                endTimestamp: any;
                referralFee: number;
                contractAddress: any;
                followerOnly: boolean;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
                };
              }
            | { __typename?: "RevertCollectModuleSettings" }
            | {
                __typename?: "TimedFeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                endTimestamp: any;
                referralFee: number;
                contractAddress: any;
                followerOnly: boolean;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
                };
              }
            | { __typename?: "UnknownCollectModuleSettings" };
          stats: {
            __typename?: "PublicationStats";
            totalUpvotes: number;
            totalAmountOfMirrors: number;
            totalAmountOfCollects: number;
            totalAmountOfComments: number;
          };
          metadata: {
            __typename?: "MetadataOutput";
            name?: string | null;
            description?: any | null;
            content?: any | null;
            image?: any | null;
            attributes: Array<{
              __typename?: "MetadataAttributeOutput";
              traitType?: string | null;
              value?: string | null;
            }>;
            cover?: {
              __typename?: "MediaSet";
              original: { __typename?: "Media"; url: any };
            } | null;
            media: Array<{
              __typename?: "MediaSet";
              original: { __typename?: "Media"; url: any; mimeType?: any | null };
            }>;
          };
          mirrorOf:
            | {
                __typename?: "Comment";
                id: any;
                reaction?: ReactionTypes | null;
                mirrors: Array<any>;
                createdAt: any;
                profile: {
                  __typename?: "Profile";
                  id: any;
                  name?: string | null;
                  handle: any;
                  bio?: string | null;
                  ownedBy: any;
                  attributes?: Array<{
                    __typename?: "Attribute";
                    key: string;
                    value: string;
                  }> | null;
                  picture?:
                    | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
                    | { __typename?: "NftImage"; uri: any }
                    | null;
                  followModule?:
                    | { __typename: "FeeFollowModuleSettings" }
                    | { __typename: "ProfileFollowModuleSettings" }
                    | { __typename: "RevertFollowModuleSettings" }
                    | { __typename: "UnknownFollowModuleSettings" }
                    | null;
                };
                canComment: { __typename?: "CanCommentResponse"; result: boolean };
                canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
                stats: {
                  __typename?: "PublicationStats";
                  totalUpvotes: number;
                  totalAmountOfMirrors: number;
                  totalAmountOfCollects: number;
                  totalAmountOfComments: number;
                };
              }
            | {
                __typename: "Post";
                id: any;
                reaction?: ReactionTypes | null;
                mirrors: Array<any>;
                hasCollectedByMe: boolean;
                hidden: boolean;
                createdAt: any;
                appId?: any | null;
                profile: {
                  __typename?: "Profile";
                  id: any;
                  name?: string | null;
                  handle: any;
                  bio?: string | null;
                  ownedBy: any;
                  attributes?: Array<{
                    __typename?: "Attribute";
                    key: string;
                    value: string;
                  }> | null;
                  picture?:
                    | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
                    | { __typename?: "NftImage"; uri: any }
                    | null;
                  followModule?:
                    | { __typename: "FeeFollowModuleSettings" }
                    | { __typename: "ProfileFollowModuleSettings" }
                    | { __typename: "RevertFollowModuleSettings" }
                    | { __typename: "UnknownFollowModuleSettings" }
                    | null;
                };
                canComment: { __typename?: "CanCommentResponse"; result: boolean };
                canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
                collectedBy?: {
                  __typename?: "Wallet";
                  address: any;
                  defaultProfile?: {
                    __typename?: "Profile";
                    id: any;
                    name?: string | null;
                    handle: any;
                    bio?: string | null;
                    ownedBy: any;
                    attributes?: Array<{
                      __typename?: "Attribute";
                      key: string;
                      value: string;
                    }> | null;
                    picture?:
                      | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
                      | { __typename?: "NftImage"; uri: any }
                      | null;
                    followModule?:
                      | { __typename: "FeeFollowModuleSettings" }
                      | { __typename: "ProfileFollowModuleSettings" }
                      | { __typename: "RevertFollowModuleSettings" }
                      | { __typename: "UnknownFollowModuleSettings" }
                      | null;
                  } | null;
                } | null;
                collectModule:
                  | {
                      __typename?: "FeeCollectModuleSettings";
                      type: CollectModules;
                      recipient: any;
                      referralFee: number;
                      contractAddress: any;
                      followerOnly: boolean;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | {
                      __typename?: "FreeCollectModuleSettings";
                      type: CollectModules;
                      contractAddress: any;
                      followerOnly: boolean;
                    }
                  | {
                      __typename?: "LimitedFeeCollectModuleSettings";
                      type: CollectModules;
                      collectLimit: string;
                      recipient: any;
                      referralFee: number;
                      contractAddress: any;
                      followerOnly: boolean;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | {
                      __typename?: "LimitedTimedFeeCollectModuleSettings";
                      type: CollectModules;
                      collectLimit: string;
                      recipient: any;
                      endTimestamp: any;
                      referralFee: number;
                      contractAddress: any;
                      followerOnly: boolean;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | { __typename?: "RevertCollectModuleSettings" }
                  | {
                      __typename?: "TimedFeeCollectModuleSettings";
                      type: CollectModules;
                      recipient: any;
                      endTimestamp: any;
                      referralFee: number;
                      contractAddress: any;
                      followerOnly: boolean;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | { __typename?: "UnknownCollectModuleSettings" };
                stats: {
                  __typename?: "PublicationStats";
                  totalUpvotes: number;
                  totalAmountOfMirrors: number;
                  totalAmountOfCollects: number;
                  totalAmountOfComments: number;
                };
                metadata: {
                  __typename?: "MetadataOutput";
                  name?: string | null;
                  description?: any | null;
                  content?: any | null;
                  image?: any | null;
                  attributes: Array<{
                    __typename?: "MetadataAttributeOutput";
                    traitType?: string | null;
                    value?: string | null;
                  }>;
                  cover?: {
                    __typename?: "MediaSet";
                    original: { __typename?: "Media"; url: any };
                  } | null;
                  media: Array<{
                    __typename?: "MediaSet";
                    original: { __typename?: "Media"; url: any; mimeType?: any | null };
                  }>;
                };
              };
        }
      | {
          __typename: "Post";
          id: any;
          reaction?: ReactionTypes | null;
          mirrors: Array<any>;
          hasCollectedByMe: boolean;
          hidden: boolean;
          createdAt: any;
          appId?: any | null;
          profile: {
            __typename?: "Profile";
            id: any;
            name?: string | null;
            handle: any;
            bio?: string | null;
            ownedBy: any;
            attributes?: Array<{ __typename?: "Attribute"; key: string; value: string }> | null;
            picture?:
              | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
              | { __typename?: "NftImage"; uri: any }
              | null;
            followModule?:
              | { __typename: "FeeFollowModuleSettings" }
              | { __typename: "ProfileFollowModuleSettings" }
              | { __typename: "RevertFollowModuleSettings" }
              | { __typename: "UnknownFollowModuleSettings" }
              | null;
          };
          canComment: { __typename?: "CanCommentResponse"; result: boolean };
          canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
          collectedBy?: {
            __typename?: "Wallet";
            address: any;
            defaultProfile?: {
              __typename?: "Profile";
              id: any;
              name?: string | null;
              handle: any;
              bio?: string | null;
              ownedBy: any;
              attributes?: Array<{ __typename?: "Attribute"; key: string; value: string }> | null;
              picture?:
                | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
                | { __typename?: "NftImage"; uri: any }
                | null;
              followModule?:
                | { __typename: "FeeFollowModuleSettings" }
                | { __typename: "ProfileFollowModuleSettings" }
                | { __typename: "RevertFollowModuleSettings" }
                | { __typename: "UnknownFollowModuleSettings" }
                | null;
            } | null;
          } | null;
          collectModule:
            | {
                __typename?: "FeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                contractAddress: any;
                followerOnly: boolean;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
                };
              }
            | {
                __typename?: "FreeCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                followerOnly: boolean;
              }
            | {
                __typename?: "LimitedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                contractAddress: any;
                followerOnly: boolean;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
                };
              }
            | {
                __typename?: "LimitedTimedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                endTimestamp: any;
                referralFee: number;
                contractAddress: any;
                followerOnly: boolean;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
                };
              }
            | { __typename?: "RevertCollectModuleSettings" }
            | {
                __typename?: "TimedFeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                endTimestamp: any;
                referralFee: number;
                contractAddress: any;
                followerOnly: boolean;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: { __typename?: "Erc20"; symbol: string; decimals: number; address: any };
                };
              }
            | { __typename?: "UnknownCollectModuleSettings" };
          stats: {
            __typename?: "PublicationStats";
            totalUpvotes: number;
            totalAmountOfMirrors: number;
            totalAmountOfCollects: number;
            totalAmountOfComments: number;
          };
          metadata: {
            __typename?: "MetadataOutput";
            name?: string | null;
            description?: any | null;
            content?: any | null;
            image?: any | null;
            attributes: Array<{
              __typename?: "MetadataAttributeOutput";
              traitType?: string | null;
              value?: string | null;
            }>;
            cover?: {
              __typename?: "MediaSet";
              original: { __typename?: "Media"; url: any };
            } | null;
            media: Array<{
              __typename?: "MediaSet";
              original: { __typename?: "Media"; url: any; mimeType?: any | null };
            }>;
          };
        }
    >;
    pageInfo: { __typename?: "PaginatedResultInfo"; totalCount?: number | null; next?: any | null };
  };
};

export type UserProfilesQueryVariables = Exact<{
  ownedBy?: InputMaybe<Array<Scalars["EthereumAddress"]> | Scalars["EthereumAddress"]>;
}>;

export type UserProfilesQuery = {
  __typename?: "Query";
  profiles: {
    __typename?: "PaginatedProfileResult";
    items: Array<{
      __typename?: "Profile";
      isDefault: boolean;
      id: any;
      name?: string | null;
      handle: any;
      bio?: string | null;
      ownedBy: any;
      stats: { __typename?: "ProfileStats"; totalFollowing: number; totalFollowers: number };
      dispatcher?: { __typename?: "Dispatcher"; canUseRelay: boolean } | null;
      attributes?: Array<{ __typename?: "Attribute"; key: string; value: string }> | null;
      picture?:
        | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
        | { __typename?: "NftImage"; uri: any }
        | null;
      followModule?:
        | { __typename: "FeeFollowModuleSettings" }
        | { __typename: "ProfileFollowModuleSettings" }
        | { __typename: "RevertFollowModuleSettings" }
        | { __typename: "UnknownFollowModuleSettings" }
        | null;
    }>;
  };
  userSigNonces: { __typename?: "UserSigNonces"; lensHubOnChainSigNonce: any };
};

export const ProfileFieldsFragmentDoc = `
    fragment ProfileFields on Profile {
  id
  name
  handle
  bio
  ownedBy
  attributes {
    key
    value
  }
  picture {
    ... on MediaSet {
      original {
        url
      }
    }
    ... on NftImage {
      uri
    }
  }
  followModule {
    __typename
  }
}
    `;
export const CollectModuleFieldsFragmentDoc = `
    fragment CollectModuleFields on CollectModule {
  ... on FreeCollectModuleSettings {
    type
    contractAddress
    followerOnly
  }
  ... on FeeCollectModuleSettings {
    type
    recipient
    referralFee
    contractAddress
    followerOnly
    amount {
      asset {
        symbol
        decimals
        address
      }
      value
    }
  }
  ... on LimitedFeeCollectModuleSettings {
    type
    collectLimit
    recipient
    referralFee
    contractAddress
    followerOnly
    amount {
      asset {
        symbol
        decimals
        address
      }
      value
    }
  }
  ... on LimitedTimedFeeCollectModuleSettings {
    type
    collectLimit
    recipient
    endTimestamp
    referralFee
    contractAddress
    followerOnly
    amount {
      asset {
        symbol
        decimals
        address
      }
      value
    }
  }
  ... on TimedFeeCollectModuleSettings {
    type
    recipient
    endTimestamp
    referralFee
    contractAddress
    followerOnly
    amount {
      asset {
        symbol
        decimals
        address
      }
      value
    }
  }
}
    `;
export const StatsFieldsFragmentDoc = `
    fragment StatsFields on PublicationStats {
  totalUpvotes
  totalAmountOfMirrors
  totalAmountOfCollects
  totalAmountOfComments
}
    `;
export const MetadataFieldsFragmentDoc = `
    fragment MetadataFields on MetadataOutput {
  name
  description
  content
  image
  attributes {
    traitType
    value
  }
  cover {
    original {
      url
    }
  }
  media {
    original {
      url
      mimeType
    }
  }
}
    `;
export const PostFieldsFragmentDoc = `
    fragment PostFields on Post {
  __typename
  id
  profile {
    ...ProfileFields
  }
  reaction(request: $reactionRequest)
  mirrors(by: $profileId)
  canComment(profileId: $profileId) {
    result
  }
  canMirror(profileId: $profileId) {
    result
  }
  hasCollectedByMe
  collectedBy {
    address
    defaultProfile {
      ...ProfileFields
    }
  }
  collectModule {
    ...CollectModuleFields
  }
  stats {
    ...StatsFields
  }
  metadata {
    ...MetadataFields
  }
  hidden
  createdAt
  appId
}
    `;
export const MirrorFieldsFragmentDoc = `
    fragment MirrorFields on Mirror {
  __typename
  id
  profile {
    ...ProfileFields
  }
  reaction(request: $reactionRequest)
  canComment(profileId: $profileId) {
    result
  }
  canMirror(profileId: $profileId) {
    result
  }
  collectModule {
    ...CollectModuleFields
  }
  stats {
    ...StatsFields
  }
  metadata {
    ...MetadataFields
  }
  hidden
  mirrorOf {
    ... on Post {
      ...PostFields
    }
    ... on Comment {
      id
      profile {
        ...ProfileFields
      }
      reaction(request: $reactionRequest)
      mirrors(by: $profileId)
      canComment(profileId: $profileId) {
        result
      }
      canMirror(profileId: $profileId) {
        result
      }
      stats {
        ...StatsFields
      }
      createdAt
    }
  }
  createdAt
  appId
}
    `;
export const CommentFieldsFragmentDoc = `
    fragment CommentFields on Comment {
  __typename
  id
  profile {
    ...ProfileFields
  }
  reaction(request: $reactionRequest)
  mirrors(by: $profileId)
  canComment(profileId: $profileId) {
    result
  }
  canMirror(profileId: $profileId) {
    result
  }
  hasCollectedByMe
  collectedBy {
    address
    defaultProfile {
      ...ProfileFields
    }
  }
  collectModule {
    ...CollectModuleFields
  }
  stats {
    ...StatsFields
  }
  metadata {
    ...MetadataFields
  }
  hidden
  createdAt
  appId
  commentOn {
    ... on Post {
      ...PostFields
    }
    ... on Comment {
      id
      profile {
        ...ProfileFields
      }
      reaction(request: $reactionRequest)
      mirrors(by: $profileId)
      canComment(profileId: $profileId) {
        result
      }
      canMirror(profileId: $profileId) {
        result
      }
      hasCollectedByMe
      collectedBy {
        address
        defaultProfile {
          handle
        }
      }
      collectModule {
        ...CollectModuleFields
      }
      metadata {
        ...MetadataFields
      }
      stats {
        ...StatsFields
      }
      mainPost {
        ... on Post {
          ...PostFields
        }
        ... on Mirror {
          ...MirrorFields
        }
      }
      hidden
      createdAt
    }
    ... on Mirror {
      ...MirrorFields
    }
  }
}
    `;
export const AuthenticateDocument = `
    mutation Authenticate($request: SignedAuthChallenge!) {
  authenticate(request: $request) {
    accessToken
    refreshToken
  }
}
    `;
export const useAuthenticateMutation = <TError = unknown, TContext = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    AuthenticateMutation,
    TError,
    AuthenticateMutationVariables,
    TContext
  >,
) =>
  useMutation<AuthenticateMutation, TError, AuthenticateMutationVariables, TContext>(
    ["Authenticate"],
    (variables?: AuthenticateMutationVariables) =>
      fetcher<AuthenticateMutation, AuthenticateMutationVariables>(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        AuthenticateDocument,
        variables,
      )(),
    options,
  );
export const ChallengeDocument = `
    query Challenge($request: ChallengeRequest!) {
  challenge(request: $request) {
    text
  }
}
    `;
export const useChallengeQuery = <TData = ChallengeQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: ChallengeQueryVariables,
  options?: UseQueryOptions<ChallengeQuery, TError, TData>,
) =>
  useQuery<ChallengeQuery, TError, TData>(
    ["Challenge", variables],
    fetcher<ChallengeQuery, ChallengeQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      ChallengeDocument,
      variables,
    ),
    options,
  );
export const FollowersDocument = `
    query Followers($request: FollowersRequest!) {
  followers(request: $request) {
    items {
      wallet {
        address
        defaultProfile {
          id
          name
          bio
          isFollowedByMe
          attributes {
            displayType
            traitType
            key
            value
          }
          followNftAddress
          metadata
          isDefault
          handle
          picture {
            ... on NftImage {
              contractAddress
              tokenId
              uri
              verified
            }
            ... on MediaSet {
              original {
                url
                mimeType
              }
            }
          }
          coverPicture {
            ... on NftImage {
              contractAddress
              tokenId
              uri
              verified
            }
            ... on MediaSet {
              original {
                url
                mimeType
              }
            }
          }
          ownedBy
          dispatcher {
            address
            canUseRelay
          }
          stats {
            totalFollowers
            totalFollowing
            totalPosts
            totalComments
            totalMirrors
            totalPublications
            totalCollects
          }
          followModule {
            ... on FeeFollowModuleSettings {
              type
              contractAddress
              amount {
                asset {
                  name
                  symbol
                  decimals
                  address
                }
                value
              }
              recipient
            }
            ... on ProfileFollowModuleSettings {
              type
            }
            ... on RevertFollowModuleSettings {
              type
            }
          }
        }
      }
      totalAmountOfTimesFollowed
    }
    pageInfo {
      prev
      next
      totalCount
    }
  }
}
    `;
export const useFollowersQuery = <TData = FollowersQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: FollowersQueryVariables,
  options?: UseQueryOptions<FollowersQuery, TError, TData>,
) =>
  useQuery<FollowersQuery, TError, TData>(
    ["Followers", variables],
    fetcher<FollowersQuery, FollowersQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      FollowersDocument,
      variables,
    ),
    options,
  );
export const FollowingDocument = `
    query Following($request: FollowingRequest!) {
  following(request: $request) {
    items {
      profile {
        ...ProfileFields
        isFollowedByMe
      }
      totalAmountOfTimesFollowing
    }
    pageInfo {
      next
      totalCount
    }
  }
}
    ${ProfileFieldsFragmentDoc}`;
export const useFollowingQuery = <TData = FollowingQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: FollowingQueryVariables,
  options?: UseQueryOptions<FollowingQuery, TError, TData>,
) =>
  useQuery<FollowingQuery, TError, TData>(
    ["Following", variables],
    fetcher<FollowingQuery, FollowingQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      FollowingDocument,
      variables,
    ),
    options,
  );
export const ProfileDocument = `
    query Profile($request: SingleProfileQueryRequest!, $who: ProfileId) {
  profile(request: $request) {
    id
    handle
    ownedBy
    name
    bio
    metadata
    followNftAddress
    isFollowedByMe
    isFollowing(who: $who)
    attributes {
      key
      value
    }
    dispatcher {
      canUseRelay
    }
    onChainIdentity {
      proofOfHumanity
      sybilDotOrg {
        verified
        source {
          twitter {
            handle
          }
        }
      }
      ens {
        name
      }
      worldcoin {
        isHuman
      }
    }
    stats {
      totalFollowers
      totalFollowing
      totalPosts
      totalComments
      totalMirrors
    }
    picture {
      ... on MediaSet {
        original {
          url
        }
      }
      ... on NftImage {
        uri
      }
    }
    __typename
    coverPicture {
      ... on MediaSet {
        original {
          url
        }
      }
      __typename
    }
    followModule {
      __typename
    }
  }
}
    `;
export const useProfileQuery = <TData = ProfileQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: ProfileQueryVariables,
  options?: UseQueryOptions<ProfileQuery, TError, TData>,
) =>
  useQuery<ProfileQuery, TError, TData>(
    ["Profile", variables],
    fetcher<ProfileQuery, ProfileQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      ProfileDocument,
      variables,
    ),
    options,
  );
export const ProfileFeedDocument = `
    query ProfileFeed($request: PublicationsQueryRequest!, $reactionRequest: ReactionFieldResolverRequest, $profileId: ProfileId) {
  publications(request: $request) {
    items {
      ... on Post {
        ...PostFields
      }
      ... on Comment {
        ...CommentFields
      }
      ... on Mirror {
        ...MirrorFields
      }
    }
    pageInfo {
      totalCount
      next
    }
  }
}
    ${PostFieldsFragmentDoc}
${ProfileFieldsFragmentDoc}
${CollectModuleFieldsFragmentDoc}
${StatsFieldsFragmentDoc}
${MetadataFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${MirrorFieldsFragmentDoc}`;
export const useProfileFeedQuery = <TData = ProfileFeedQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: ProfileFeedQueryVariables,
  options?: UseQueryOptions<ProfileFeedQuery, TError, TData>,
) =>
  useQuery<ProfileFeedQuery, TError, TData>(
    ["ProfileFeed", variables],
    fetcher<ProfileFeedQuery, ProfileFeedQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      ProfileFeedDocument,
      variables,
    ),
    options,
  );
export const UserProfilesDocument = `
    query UserProfiles($ownedBy: [EthereumAddress!]) {
  profiles(request: {ownedBy: $ownedBy}) {
    items {
      ...ProfileFields
      stats {
        totalFollowing
        totalFollowers
      }
      isDefault
      dispatcher {
        canUseRelay
      }
    }
  }
  userSigNonces {
    lensHubOnChainSigNonce
  }
}
    ${ProfileFieldsFragmentDoc}`;
export const useUserProfilesQuery = <TData = UserProfilesQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: UserProfilesQueryVariables,
  options?: UseQueryOptions<UserProfilesQuery, TError, TData>,
) =>
  useQuery<UserProfilesQuery, TError, TData>(
    variables === undefined ? ["UserProfiles"] : ["UserProfiles", variables],
    fetcher<UserProfilesQuery, UserProfilesQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      UserProfilesDocument,
      variables,
    ),
    options,
  );

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
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

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AccessConditionInput: AccessConditionInput;
  AccessConditionOutput: ResolverTypeWrapper<AccessConditionOutput>;
  AchRequest: AchRequest;
  AddProfileInterestsRequest: AddProfileInterestsRequest;
  AllPublicationsTagsRequest: AllPublicationsTagsRequest;
  AndConditionInput: AndConditionInput;
  AndConditionOutput: ResolverTypeWrapper<AndConditionOutput>;
  ApprovedAllowanceAmount: ResolverTypeWrapper<ApprovedAllowanceAmount>;
  ApprovedModuleAllowanceAmountRequest: ApprovedModuleAllowanceAmountRequest;
  Attribute: ResolverTypeWrapper<Attribute>;
  AuthChallengeResult: ResolverTypeWrapper<AuthChallengeResult>;
  AuthenticationResult: ResolverTypeWrapper<AuthenticationResult>;
  BlockchainData: ResolverTypeWrapper<Scalars["BlockchainData"]>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  BroadcastId: ResolverTypeWrapper<Scalars["BroadcastId"]>;
  BroadcastRequest: BroadcastRequest;
  BurnProfileRequest: BurnProfileRequest;
  CanCommentResponse: ResolverTypeWrapper<CanCommentResponse>;
  CanDecryptResponse: ResolverTypeWrapper<CanDecryptResponse>;
  CanMirrorResponse: ResolverTypeWrapper<CanMirrorResponse>;
  ChainId: ResolverTypeWrapper<Scalars["ChainId"]>;
  ChallengeRequest: ChallengeRequest;
  ClaimHandleRequest: ClaimHandleRequest;
  ClaimStatus: ClaimStatus;
  ClaimableHandles: ResolverTypeWrapper<ClaimableHandles>;
  CollectConditionInput: CollectConditionInput;
  CollectConditionOutput: ResolverTypeWrapper<CollectConditionOutput>;
  CollectModule:
    | ResolversTypes["FeeCollectModuleSettings"]
    | ResolversTypes["FreeCollectModuleSettings"]
    | ResolversTypes["LimitedFeeCollectModuleSettings"]
    | ResolversTypes["LimitedTimedFeeCollectModuleSettings"]
    | ResolversTypes["RevertCollectModuleSettings"]
    | ResolversTypes["TimedFeeCollectModuleSettings"]
    | ResolversTypes["UnknownCollectModuleSettings"];
  CollectModuleData: ResolverTypeWrapper<Scalars["CollectModuleData"]>;
  CollectModuleParams: CollectModuleParams;
  CollectModules: CollectModules;
  CollectProxyAction: CollectProxyAction;
  CollectedEvent: ResolverTypeWrapper<CollectedEvent>;
  Comment: ResolverTypeWrapper<
    Omit<Comment, "collectModule" | "commentOn" | "mainPost" | "referenceModule"> & {
      collectModule: ResolversTypes["CollectModule"];
      commentOn?: Maybe<ResolversTypes["Publication"]>;
      mainPost: ResolversTypes["MainPostReference"];
      referenceModule?: Maybe<ResolversTypes["ReferenceModule"]>;
    }
  >;
  ContentEncryptionKey: ResolverTypeWrapper<Scalars["ContentEncryptionKey"]>;
  ContractAddress: ResolverTypeWrapper<Scalars["ContractAddress"]>;
  ContractType: ContractType;
  CreateBurnEIP712TypedData: ResolverTypeWrapper<CreateBurnEip712TypedData>;
  CreateBurnEIP712TypedDataTypes: ResolverTypeWrapper<CreateBurnEip712TypedDataTypes>;
  CreateBurnEIP712TypedDataValue: ResolverTypeWrapper<CreateBurnEip712TypedDataValue>;
  CreateBurnProfileBroadcastItemResult: ResolverTypeWrapper<CreateBurnProfileBroadcastItemResult>;
  CreateCollectBroadcastItemResult: ResolverTypeWrapper<CreateCollectBroadcastItemResult>;
  CreateCollectEIP712TypedData: ResolverTypeWrapper<CreateCollectEip712TypedData>;
  CreateCollectEIP712TypedDataTypes: ResolverTypeWrapper<CreateCollectEip712TypedDataTypes>;
  CreateCollectEIP712TypedDataValue: ResolverTypeWrapper<CreateCollectEip712TypedDataValue>;
  CreateCollectRequest: CreateCollectRequest;
  CreateCommentBroadcastItemResult: ResolverTypeWrapper<CreateCommentBroadcastItemResult>;
  CreateCommentEIP712TypedData: ResolverTypeWrapper<CreateCommentEip712TypedData>;
  CreateCommentEIP712TypedDataTypes: ResolverTypeWrapper<CreateCommentEip712TypedDataTypes>;
  CreateCommentEIP712TypedDataValue: ResolverTypeWrapper<CreateCommentEip712TypedDataValue>;
  CreateFollowBroadcastItemResult: ResolverTypeWrapper<CreateFollowBroadcastItemResult>;
  CreateFollowEIP712TypedData: ResolverTypeWrapper<CreateFollowEip712TypedData>;
  CreateFollowEIP712TypedDataTypes: ResolverTypeWrapper<CreateFollowEip712TypedDataTypes>;
  CreateFollowEIP712TypedDataValue: ResolverTypeWrapper<CreateFollowEip712TypedDataValue>;
  CreateHandle: ResolverTypeWrapper<Scalars["CreateHandle"]>;
  CreateMirrorBroadcastItemResult: ResolverTypeWrapper<CreateMirrorBroadcastItemResult>;
  CreateMirrorEIP712TypedData: ResolverTypeWrapper<CreateMirrorEip712TypedData>;
  CreateMirrorEIP712TypedDataTypes: ResolverTypeWrapper<CreateMirrorEip712TypedDataTypes>;
  CreateMirrorEIP712TypedDataValue: ResolverTypeWrapper<CreateMirrorEip712TypedDataValue>;
  CreateMirrorRequest: CreateMirrorRequest;
  CreatePostBroadcastItemResult: ResolverTypeWrapper<CreatePostBroadcastItemResult>;
  CreatePostEIP712TypedData: ResolverTypeWrapper<CreatePostEip712TypedData>;
  CreatePostEIP712TypedDataTypes: ResolverTypeWrapper<CreatePostEip712TypedDataTypes>;
  CreatePostEIP712TypedDataValue: ResolverTypeWrapper<CreatePostEip712TypedDataValue>;
  CreateProfileRequest: CreateProfileRequest;
  CreatePublicCommentRequest: CreatePublicCommentRequest;
  CreatePublicPostRequest: CreatePublicPostRequest;
  CreatePublicSetProfileMetadataURIRequest: CreatePublicSetProfileMetadataUriRequest;
  CreateSetDefaultProfileRequest: CreateSetDefaultProfileRequest;
  CreateSetDispatcherBroadcastItemResult: ResolverTypeWrapper<CreateSetDispatcherBroadcastItemResult>;
  CreateSetDispatcherEIP712TypedData: ResolverTypeWrapper<CreateSetDispatcherEip712TypedData>;
  CreateSetDispatcherEIP712TypedDataTypes: ResolverTypeWrapper<CreateSetDispatcherEip712TypedDataTypes>;
  CreateSetDispatcherEIP712TypedDataValue: ResolverTypeWrapper<CreateSetDispatcherEip712TypedDataValue>;
  CreateSetFollowModuleBroadcastItemResult: ResolverTypeWrapper<CreateSetFollowModuleBroadcastItemResult>;
  CreateSetFollowModuleEIP712TypedData: ResolverTypeWrapper<CreateSetFollowModuleEip712TypedData>;
  CreateSetFollowModuleEIP712TypedDataTypes: ResolverTypeWrapper<CreateSetFollowModuleEip712TypedDataTypes>;
  CreateSetFollowModuleEIP712TypedDataValue: ResolverTypeWrapper<CreateSetFollowModuleEip712TypedDataValue>;
  CreateSetFollowModuleRequest: CreateSetFollowModuleRequest;
  CreateSetFollowNFTUriBroadcastItemResult: ResolverTypeWrapper<CreateSetFollowNftUriBroadcastItemResult>;
  CreateSetFollowNFTUriEIP712TypedData: ResolverTypeWrapper<CreateSetFollowNftUriEip712TypedData>;
  CreateSetFollowNFTUriEIP712TypedDataTypes: ResolverTypeWrapper<CreateSetFollowNftUriEip712TypedDataTypes>;
  CreateSetFollowNFTUriEIP712TypedDataValue: ResolverTypeWrapper<CreateSetFollowNftUriEip712TypedDataValue>;
  CreateSetFollowNFTUriRequest: CreateSetFollowNftUriRequest;
  CreateSetProfileImageUriBroadcastItemResult: ResolverTypeWrapper<CreateSetProfileImageUriBroadcastItemResult>;
  CreateSetProfileImageUriEIP712TypedData: ResolverTypeWrapper<CreateSetProfileImageUriEip712TypedData>;
  CreateSetProfileImageUriEIP712TypedDataTypes: ResolverTypeWrapper<CreateSetProfileImageUriEip712TypedDataTypes>;
  CreateSetProfileImageUriEIP712TypedDataValue: ResolverTypeWrapper<CreateSetProfileImageUriEip712TypedDataValue>;
  CreateSetProfileMetadataURIBroadcastItemResult: ResolverTypeWrapper<CreateSetProfileMetadataUriBroadcastItemResult>;
  CreateSetProfileMetadataURIEIP712TypedData: ResolverTypeWrapper<CreateSetProfileMetadataUrieip712TypedData>;
  CreateSetProfileMetadataURIEIP712TypedDataTypes: ResolverTypeWrapper<CreateSetProfileMetadataUrieip712TypedDataTypes>;
  CreateSetProfileMetadataURIEIP712TypedDataValue: ResolverTypeWrapper<CreateSetProfileMetadataUrieip712TypedDataValue>;
  CreateToggleFollowBroadcastItemResult: ResolverTypeWrapper<CreateToggleFollowBroadcastItemResult>;
  CreateToggleFollowEIP712TypedData: ResolverTypeWrapper<CreateToggleFollowEip712TypedData>;
  CreateToggleFollowEIP712TypedDataTypes: ResolverTypeWrapper<CreateToggleFollowEip712TypedDataTypes>;
  CreateToggleFollowEIP712TypedDataValue: ResolverTypeWrapper<CreateToggleFollowEip712TypedDataValue>;
  CreateToggleFollowRequest: CreateToggleFollowRequest;
  CreateUnfollowBroadcastItemResult: ResolverTypeWrapper<CreateUnfollowBroadcastItemResult>;
  Cursor: ResolverTypeWrapper<Scalars["Cursor"]>;
  CustomFiltersTypes: CustomFiltersTypes;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]>;
  DecryptFailReason: DecryptFailReason;
  DefaultProfileRequest: DefaultProfileRequest;
  DegreesOfSeparationReferenceModuleParams: DegreesOfSeparationReferenceModuleParams;
  DegreesOfSeparationReferenceModuleSettings: ResolverTypeWrapper<DegreesOfSeparationReferenceModuleSettings>;
  Dispatcher: ResolverTypeWrapper<Dispatcher>;
  DoesFollow: DoesFollow;
  DoesFollowRequest: DoesFollowRequest;
  DoesFollowResponse: ResolverTypeWrapper<DoesFollowResponse>;
  EIP712TypedDataDomain: ResolverTypeWrapper<Eip712TypedDataDomain>;
  EIP712TypedDataField: ResolverTypeWrapper<Eip712TypedDataField>;
  ElectedMirror: ResolverTypeWrapper<ElectedMirror>;
  EnabledModule: ResolverTypeWrapper<EnabledModule>;
  EnabledModules: ResolverTypeWrapper<EnabledModules>;
  EncryptedFieldsOutput: ResolverTypeWrapper<EncryptedFieldsOutput>;
  EncryptedMedia: ResolverTypeWrapper<EncryptedMedia>;
  EncryptedMediaSet: ResolverTypeWrapper<EncryptedMediaSet>;
  EncryptedValueScalar: ResolverTypeWrapper<Scalars["EncryptedValueScalar"]>;
  EncryptionParamsOutput: ResolverTypeWrapper<EncryptionParamsOutput>;
  EncryptionProvider: EncryptionProvider;
  Ens: ResolverTypeWrapper<Scalars["Ens"]>;
  EnsOnChainIdentity: ResolverTypeWrapper<EnsOnChainIdentity>;
  EoaOwnershipInput: EoaOwnershipInput;
  EoaOwnershipOutput: ResolverTypeWrapper<EoaOwnershipOutput>;
  Erc20: ResolverTypeWrapper<Erc20>;
  Erc20Amount: ResolverTypeWrapper<Erc20Amount>;
  Erc20OwnershipInput: Erc20OwnershipInput;
  Erc20OwnershipOutput: ResolverTypeWrapper<Erc20OwnershipOutput>;
  EthereumAddress: ResolverTypeWrapper<Scalars["EthereumAddress"]>;
  ExploreProfileResult: ResolverTypeWrapper<ExploreProfileResult>;
  ExploreProfilesRequest: ExploreProfilesRequest;
  ExplorePublicationRequest: ExplorePublicationRequest;
  ExplorePublicationResult: ResolverTypeWrapper<
    Omit<ExplorePublicationResult, "items"> & { items: Array<ResolversTypes["Publication"]> }
  >;
  FeeCollectModuleParams: FeeCollectModuleParams;
  FeeCollectModuleSettings: ResolverTypeWrapper<FeeCollectModuleSettings>;
  FeeFollowModuleParams: FeeFollowModuleParams;
  FeeFollowModuleRedeemParams: FeeFollowModuleRedeemParams;
  FeeFollowModuleSettings: ResolverTypeWrapper<FeeFollowModuleSettings>;
  FeedEventItemType: FeedEventItemType;
  FeedHighlightsRequest: FeedHighlightsRequest;
  FeedItem: ResolverTypeWrapper<Omit<FeedItem, "root"> & { root: ResolversTypes["FeedItemRoot"] }>;
  FeedItemRoot: ResolversTypes["Comment"] | ResolversTypes["Post"];
  FeedRequest: FeedRequest;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  Follow: Follow;
  FollowConditionInput: FollowConditionInput;
  FollowConditionOutput: ResolverTypeWrapper<FollowConditionOutput>;
  FollowModule:
    | ResolversTypes["FeeFollowModuleSettings"]
    | ResolversTypes["ProfileFollowModuleSettings"]
    | ResolversTypes["RevertFollowModuleSettings"]
    | ResolversTypes["UnknownFollowModuleSettings"];
  FollowModuleData: ResolverTypeWrapper<Scalars["FollowModuleData"]>;
  FollowModuleParams: FollowModuleParams;
  FollowModuleRedeemParams: FollowModuleRedeemParams;
  FollowModules: FollowModules;
  FollowOnlyReferenceModuleSettings: ResolverTypeWrapper<FollowOnlyReferenceModuleSettings>;
  FollowProxyAction: FollowProxyAction;
  FollowRequest: FollowRequest;
  FollowRevenueResult: ResolverTypeWrapper<FollowRevenueResult>;
  Follower: ResolverTypeWrapper<Follower>;
  FollowerNftOwnedTokenIds: ResolverTypeWrapper<FollowerNftOwnedTokenIds>;
  FollowerNftOwnedTokenIdsRequest: FollowerNftOwnedTokenIdsRequest;
  FollowersRequest: FollowersRequest;
  Following: ResolverTypeWrapper<Following>;
  FollowingRequest: FollowingRequest;
  FraudReasonInputParams: FraudReasonInputParams;
  FreeCollectModuleParams: FreeCollectModuleParams;
  FreeCollectModuleSettings: ResolverTypeWrapper<FreeCollectModuleSettings>;
  FreeCollectProxyAction: FreeCollectProxyAction;
  FreeFollowProxyAction: FreeFollowProxyAction;
  GatedPublicationParamsInput: GatedPublicationParamsInput;
  GenerateModuleCurrencyApproval: ResolverTypeWrapper<GenerateModuleCurrencyApproval>;
  GenerateModuleCurrencyApprovalDataRequest: GenerateModuleCurrencyApprovalDataRequest;
  GetPublicationMetadataStatusRequest: GetPublicationMetadataStatusRequest;
  GlobalProtocolStats: ResolverTypeWrapper<GlobalProtocolStats>;
  GlobalProtocolStatsRequest: GlobalProtocolStatsRequest;
  Handle: ResolverTypeWrapper<Scalars["Handle"]>;
  HandleClaimIdScalar: ResolverTypeWrapper<Scalars["HandleClaimIdScalar"]>;
  HasTxHashBeenIndexedRequest: HasTxHashBeenIndexedRequest;
  HidePublicationRequest: HidePublicationRequest;
  IfpsCid: ResolverTypeWrapper<Scalars["IfpsCid"]>;
  IllegalReasonInputParams: IllegalReasonInputParams;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  InternalPublicationId: ResolverTypeWrapper<Scalars["InternalPublicationId"]>;
  InternalPublicationsFilterRequest: InternalPublicationsFilterRequest;
  Jwt: ResolverTypeWrapper<Scalars["Jwt"]>;
  LimitScalar: ResolverTypeWrapper<Scalars["LimitScalar"]>;
  LimitedFeeCollectModuleParams: LimitedFeeCollectModuleParams;
  LimitedFeeCollectModuleSettings: ResolverTypeWrapper<LimitedFeeCollectModuleSettings>;
  LimitedTimedFeeCollectModuleParams: LimitedTimedFeeCollectModuleParams;
  LimitedTimedFeeCollectModuleSettings: ResolverTypeWrapper<LimitedTimedFeeCollectModuleSettings>;
  Locale: ResolverTypeWrapper<Scalars["Locale"]>;
  Log: ResolverTypeWrapper<Log>;
  MainPostReference: ResolversTypes["Mirror"] | ResolversTypes["Post"];
  Markdown: ResolverTypeWrapper<Scalars["Markdown"]>;
  Media: ResolverTypeWrapper<Media>;
  MediaOutput: ResolverTypeWrapper<MediaOutput>;
  MediaSet: ResolverTypeWrapper<MediaSet>;
  MentionPublication: ResolversTypes["Comment"] | ResolversTypes["Post"];
  MetadataAttributeInput: MetadataAttributeInput;
  MetadataAttributeOutput: ResolverTypeWrapper<MetadataAttributeOutput>;
  MetadataOutput: ResolverTypeWrapper<MetadataOutput>;
  MimeType: ResolverTypeWrapper<Scalars["MimeType"]>;
  Mirror: ResolverTypeWrapper<
    Omit<Mirror, "collectModule" | "mirrorOf" | "referenceModule"> & {
      collectModule: ResolversTypes["CollectModule"];
      mirrorOf: ResolversTypes["MirrorablePublication"];
      referenceModule?: Maybe<ResolversTypes["ReferenceModule"]>;
    }
  >;
  MirrorEvent: ResolverTypeWrapper<MirrorEvent>;
  MirrorablePublication: ResolversTypes["Comment"] | ResolversTypes["Post"];
  ModuleFeeAmount: ResolverTypeWrapper<ModuleFeeAmount>;
  ModuleFeeAmountParams: ModuleFeeAmountParams;
  ModuleInfo: ResolverTypeWrapper<ModuleInfo>;
  Mutation: ResolverTypeWrapper<{}>;
  MutualFollowersProfilesQueryRequest: MutualFollowersProfilesQueryRequest;
  NFT: ResolverTypeWrapper<Nft>;
  NFTContent: ResolverTypeWrapper<NftContent>;
  NFTData: NftData;
  NFTsRequest: NfTsRequest;
  NFTsResult: ResolverTypeWrapper<NfTsResult>;
  NewCollectNotification: ResolverTypeWrapper<
    Omit<NewCollectNotification, "collectedPublication"> & {
      collectedPublication: ResolversTypes["Publication"];
    }
  >;
  NewCommentNotification: ResolverTypeWrapper<NewCommentNotification>;
  NewFollowerNotification: ResolverTypeWrapper<NewFollowerNotification>;
  NewMentionNotification: ResolverTypeWrapper<
    Omit<NewMentionNotification, "mentionPublication"> & {
      mentionPublication: ResolversTypes["MentionPublication"];
    }
  >;
  NewMirrorNotification: ResolverTypeWrapper<
    Omit<NewMirrorNotification, "publication"> & {
      publication: ResolversTypes["MirrorablePublication"];
    }
  >;
  NewReactionNotification: ResolverTypeWrapper<
    Omit<NewReactionNotification, "publication"> & { publication: ResolversTypes["Publication"] }
  >;
  NftImage: ResolverTypeWrapper<NftImage>;
  NftOwnershipChallenge: NftOwnershipChallenge;
  NftOwnershipChallengeRequest: NftOwnershipChallengeRequest;
  NftOwnershipChallengeResult: ResolverTypeWrapper<NftOwnershipChallengeResult>;
  NftOwnershipId: ResolverTypeWrapper<Scalars["NftOwnershipId"]>;
  NftOwnershipInput: NftOwnershipInput;
  NftOwnershipOutput: ResolverTypeWrapper<NftOwnershipOutput>;
  Nonce: ResolverTypeWrapper<Scalars["Nonce"]>;
  Notification:
    | ResolversTypes["NewCollectNotification"]
    | ResolversTypes["NewCommentNotification"]
    | ResolversTypes["NewFollowerNotification"]
    | ResolversTypes["NewMentionNotification"]
    | ResolversTypes["NewMirrorNotification"]
    | ResolversTypes["NewReactionNotification"];
  NotificationId: ResolverTypeWrapper<Scalars["NotificationId"]>;
  NotificationRequest: NotificationRequest;
  NotificationTypes: NotificationTypes;
  OnChainIdentity: ResolverTypeWrapper<OnChainIdentity>;
  OrConditionInput: OrConditionInput;
  OrConditionOutput: ResolverTypeWrapper<OrConditionOutput>;
  Owner: ResolverTypeWrapper<Owner>;
  PaginatedAllPublicationsTagsResult: ResolverTypeWrapper<PaginatedAllPublicationsTagsResult>;
  PaginatedFeedResult: ResolverTypeWrapper<PaginatedFeedResult>;
  PaginatedFollowersResult: ResolverTypeWrapper<PaginatedFollowersResult>;
  PaginatedFollowingResult: ResolverTypeWrapper<PaginatedFollowingResult>;
  PaginatedNotificationResult: ResolverTypeWrapper<
    Omit<PaginatedNotificationResult, "items"> & { items: Array<ResolversTypes["Notification"]> }
  >;
  PaginatedProfilePublicationsForSaleResult: ResolverTypeWrapper<
    Omit<PaginatedProfilePublicationsForSaleResult, "items"> & {
      items: Array<ResolversTypes["PublicationForSale"]>;
    }
  >;
  PaginatedProfileResult: ResolverTypeWrapper<PaginatedProfileResult>;
  PaginatedPublicationResult: ResolverTypeWrapper<
    Omit<PaginatedPublicationResult, "items"> & { items: Array<ResolversTypes["Publication"]> }
  >;
  PaginatedResultInfo: ResolverTypeWrapper<PaginatedResultInfo>;
  PaginatedTimelineResult: ResolverTypeWrapper<
    Omit<PaginatedTimelineResult, "items"> & { items: Array<ResolversTypes["Publication"]> }
  >;
  PaginatedWhoCollectedResult: ResolverTypeWrapper<PaginatedWhoCollectedResult>;
  PaginatedWhoReactedResult: ResolverTypeWrapper<PaginatedWhoReactedResult>;
  PendingApprovalFollowsRequest: PendingApprovalFollowsRequest;
  PendingApproveFollowsResult: ResolverTypeWrapper<PendingApproveFollowsResult>;
  Post: ResolverTypeWrapper<
    Omit<Post, "collectModule" | "referenceModule"> & {
      collectModule: ResolversTypes["CollectModule"];
      referenceModule?: Maybe<ResolversTypes["ReferenceModule"]>;
    }
  >;
  Profile: ResolverTypeWrapper<
    Omit<Profile, "coverPicture" | "followModule" | "picture"> & {
      coverPicture?: Maybe<ResolversTypes["ProfileMedia"]>;
      followModule?: Maybe<ResolversTypes["FollowModule"]>;
      picture?: Maybe<ResolversTypes["ProfileMedia"]>;
    }
  >;
  ProfileFollowModuleBeenRedeemedRequest: ProfileFollowModuleBeenRedeemedRequest;
  ProfileFollowModuleRedeemParams: ProfileFollowModuleRedeemParams;
  ProfileFollowModuleSettings: ResolverTypeWrapper<ProfileFollowModuleSettings>;
  ProfileFollowRevenueQueryRequest: ProfileFollowRevenueQueryRequest;
  ProfileId: ResolverTypeWrapper<Scalars["ProfileId"]>;
  ProfileInterest: ResolverTypeWrapper<Scalars["ProfileInterest"]>;
  ProfileMedia: ResolversTypes["MediaSet"] | ResolversTypes["NftImage"];
  ProfileOnChainIdentityRequest: ProfileOnChainIdentityRequest;
  ProfileOwnershipInput: ProfileOwnershipInput;
  ProfileOwnershipOutput: ResolverTypeWrapper<ProfileOwnershipOutput>;
  ProfilePublicationRevenueQueryRequest: ProfilePublicationRevenueQueryRequest;
  ProfilePublicationRevenueResult: ResolverTypeWrapper<ProfilePublicationRevenueResult>;
  ProfilePublicationsForSaleRequest: ProfilePublicationsForSaleRequest;
  ProfileQueryRequest: ProfileQueryRequest;
  ProfileSearchResult: ResolverTypeWrapper<ProfileSearchResult>;
  ProfileSortCriteria: ProfileSortCriteria;
  ProfileStats: ResolverTypeWrapper<ProfileStats>;
  ProviderSpecificParamsOutput: ResolverTypeWrapper<ProviderSpecificParamsOutput>;
  ProxyActionError: ResolverTypeWrapper<ProxyActionError>;
  ProxyActionId: ResolverTypeWrapper<Scalars["ProxyActionId"]>;
  ProxyActionQueued: ResolverTypeWrapper<ProxyActionQueued>;
  ProxyActionRequest: ProxyActionRequest;
  ProxyActionStatusResult: ResolverTypeWrapper<ProxyActionStatusResult>;
  ProxyActionStatusResultUnion:
    | ResolversTypes["ProxyActionError"]
    | ResolversTypes["ProxyActionQueued"]
    | ResolversTypes["ProxyActionStatusResult"];
  ProxyActionStatusTypes: ProxyActionStatusTypes;
  PublicMediaRequest: PublicMediaRequest;
  PublicMediaResults: ResolverTypeWrapper<PublicMediaResults>;
  Publication: ResolversTypes["Comment"] | ResolversTypes["Mirror"] | ResolversTypes["Post"];
  PublicationContentWarning: PublicationContentWarning;
  PublicationForSale: ResolversTypes["Comment"] | ResolversTypes["Post"];
  PublicationId: ResolverTypeWrapper<Scalars["PublicationId"]>;
  PublicationMainFocus: PublicationMainFocus;
  PublicationMediaSource: PublicationMediaSource;
  PublicationMetadataContentWarningFilter: PublicationMetadataContentWarningFilter;
  PublicationMetadataDisplayTypes: PublicationMetadataDisplayTypes;
  PublicationMetadataFilters: PublicationMetadataFilters;
  PublicationMetadataMediaInput: PublicationMetadataMediaInput;
  PublicationMetadataStatus: ResolverTypeWrapper<PublicationMetadataStatus>;
  PublicationMetadataStatusType: PublicationMetadataStatusType;
  PublicationMetadataTagsFilter: PublicationMetadataTagsFilter;
  PublicationMetadataV1Input: PublicationMetadataV1Input;
  PublicationMetadataV2Input: PublicationMetadataV2Input;
  PublicationQueryRequest: PublicationQueryRequest;
  PublicationReportingFraudSubreason: PublicationReportingFraudSubreason;
  PublicationReportingIllegalSubreason: PublicationReportingIllegalSubreason;
  PublicationReportingReason: PublicationReportingReason;
  PublicationReportingSensitiveSubreason: PublicationReportingSensitiveSubreason;
  PublicationReportingSpamSubreason: PublicationReportingSpamSubreason;
  PublicationRevenue: ResolverTypeWrapper<
    Omit<PublicationRevenue, "publication"> & { publication: ResolversTypes["Publication"] }
  >;
  PublicationRevenueQueryRequest: PublicationRevenueQueryRequest;
  PublicationSearchResult: ResolverTypeWrapper<
    Omit<PublicationSearchResult, "items"> & {
      items: Array<ResolversTypes["PublicationSearchResultItem"]>;
    }
  >;
  PublicationSearchResultItem: ResolversTypes["Comment"] | ResolversTypes["Post"];
  PublicationSignatureContextInput: PublicationSignatureContextInput;
  PublicationSortCriteria: PublicationSortCriteria;
  PublicationStats: ResolverTypeWrapper<PublicationStats>;
  PublicationTag: ResolverTypeWrapper<Scalars["PublicationTag"]>;
  PublicationTypes: PublicationTypes;
  PublicationUrl: ResolverTypeWrapper<Scalars["PublicationUrl"]>;
  PublicationValidateMetadataResult: ResolverTypeWrapper<PublicationValidateMetadataResult>;
  PublicationsQueryRequest: PublicationsQueryRequest;
  Query: ResolverTypeWrapper<{}>;
  ReactionEvent: ResolverTypeWrapper<ReactionEvent>;
  ReactionFieldResolverRequest: ReactionFieldResolverRequest;
  ReactionId: ResolverTypeWrapper<Scalars["ReactionId"]>;
  ReactionRequest: ReactionRequest;
  ReactionTypes: ReactionTypes;
  RecommendedProfileOptions: RecommendedProfileOptions;
  ReferenceModule:
    | ResolversTypes["DegreesOfSeparationReferenceModuleSettings"]
    | ResolversTypes["FollowOnlyReferenceModuleSettings"]
    | ResolversTypes["UnknownReferenceModuleSettings"];
  ReferenceModuleData: ResolverTypeWrapper<Scalars["ReferenceModuleData"]>;
  ReferenceModuleParams: ReferenceModuleParams;
  ReferenceModules: ReferenceModules;
  RefreshRequest: RefreshRequest;
  RelRequest: RelRequest;
  RelayError: ResolverTypeWrapper<RelayError>;
  RelayErrorReasons: RelayErrorReasons;
  RelayResult: ResolversTypes["RelayError"] | ResolversTypes["RelayerResult"];
  RelayerResult: ResolverTypeWrapper<RelayerResult>;
  RemoveProfileInterestsRequest: RemoveProfileInterestsRequest;
  ReportPublicationRequest: ReportPublicationRequest;
  ReportingReasonInputParams: ReportingReasonInputParams;
  ReservedClaimableHandle: ResolverTypeWrapper<ReservedClaimableHandle>;
  RevenueAggregate: ResolverTypeWrapper<RevenueAggregate>;
  RevertCollectModuleSettings: ResolverTypeWrapper<RevertCollectModuleSettings>;
  RevertFollowModuleSettings: ResolverTypeWrapper<RevertFollowModuleSettings>;
  ScalarOperator: ScalarOperator;
  Search: ResolverTypeWrapper<Scalars["Search"]>;
  SearchQueryRequest: SearchQueryRequest;
  SearchRequestTypes: SearchRequestTypes;
  SearchResult: ResolversTypes["ProfileSearchResult"] | ResolversTypes["PublicationSearchResult"];
  SensitiveReasonInputParams: SensitiveReasonInputParams;
  SetDefaultProfileBroadcastItemResult: ResolverTypeWrapper<SetDefaultProfileBroadcastItemResult>;
  SetDefaultProfileEIP712TypedData: ResolverTypeWrapper<SetDefaultProfileEip712TypedData>;
  SetDefaultProfileEIP712TypedDataTypes: ResolverTypeWrapper<SetDefaultProfileEip712TypedDataTypes>;
  SetDefaultProfileEIP712TypedDataValue: ResolverTypeWrapper<SetDefaultProfileEip712TypedDataValue>;
  SetDispatcherRequest: SetDispatcherRequest;
  Signature: ResolverTypeWrapper<Scalars["Signature"]>;
  SignedAuthChallenge: SignedAuthChallenge;
  SingleProfileQueryRequest: SingleProfileQueryRequest;
  Sources: ResolverTypeWrapper<Scalars["Sources"]>;
  SpamReasonInputParams: SpamReasonInputParams;
  String: ResolverTypeWrapper<Scalars["String"]>;
  SybilDotOrgIdentity: ResolverTypeWrapper<SybilDotOrgIdentity>;
  SybilDotOrgIdentitySource: ResolverTypeWrapper<SybilDotOrgIdentitySource>;
  SybilDotOrgTwitterIdentity: ResolverTypeWrapper<SybilDotOrgTwitterIdentity>;
  TagResult: ResolverTypeWrapper<TagResult>;
  TagSortCriteria: TagSortCriteria;
  TimedFeeCollectModuleParams: TimedFeeCollectModuleParams;
  TimedFeeCollectModuleSettings: ResolverTypeWrapper<TimedFeeCollectModuleSettings>;
  TimelineRequest: TimelineRequest;
  TimelineType: TimelineType;
  TimestampScalar: ResolverTypeWrapper<Scalars["TimestampScalar"]>;
  TokenId: ResolverTypeWrapper<Scalars["TokenId"]>;
  TransactionError: ResolverTypeWrapper<TransactionError>;
  TransactionErrorReasons: TransactionErrorReasons;
  TransactionIndexedResult: ResolverTypeWrapper<TransactionIndexedResult>;
  TransactionReceipt: ResolverTypeWrapper<TransactionReceipt>;
  TransactionResult:
    | ResolversTypes["TransactionError"]
    | ResolversTypes["TransactionIndexedResult"];
  TxHash: ResolverTypeWrapper<Scalars["TxHash"]>;
  TxId: ResolverTypeWrapper<Scalars["TxId"]>;
  TypedDataOptions: TypedDataOptions;
  UnfollowRequest: UnfollowRequest;
  UnixTimestamp: ResolverTypeWrapper<Scalars["UnixTimestamp"]>;
  UnknownCollectModuleParams: UnknownCollectModuleParams;
  UnknownCollectModuleSettings: ResolverTypeWrapper<UnknownCollectModuleSettings>;
  UnknownFollowModuleParams: UnknownFollowModuleParams;
  UnknownFollowModuleRedeemParams: UnknownFollowModuleRedeemParams;
  UnknownFollowModuleSettings: ResolverTypeWrapper<UnknownFollowModuleSettings>;
  UnknownReferenceModuleParams: UnknownReferenceModuleParams;
  UnknownReferenceModuleSettings: ResolverTypeWrapper<UnknownReferenceModuleSettings>;
  UpdateProfileImageRequest: UpdateProfileImageRequest;
  Url: ResolverTypeWrapper<Scalars["Url"]>;
  UserSigNonces: ResolverTypeWrapper<UserSigNonces>;
  ValidatePublicationMetadataRequest: ValidatePublicationMetadataRequest;
  VerifyRequest: VerifyRequest;
  Void: ResolverTypeWrapper<Scalars["Void"]>;
  Wallet: ResolverTypeWrapper<Wallet>;
  WhoCollectedPublicationRequest: WhoCollectedPublicationRequest;
  WhoReactedPublicationRequest: WhoReactedPublicationRequest;
  WhoReactedResult: ResolverTypeWrapper<WhoReactedResult>;
  WorldcoinIdentity: ResolverTypeWrapper<WorldcoinIdentity>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AccessConditionInput: AccessConditionInput;
  AccessConditionOutput: AccessConditionOutput;
  AchRequest: AchRequest;
  AddProfileInterestsRequest: AddProfileInterestsRequest;
  AllPublicationsTagsRequest: AllPublicationsTagsRequest;
  AndConditionInput: AndConditionInput;
  AndConditionOutput: AndConditionOutput;
  ApprovedAllowanceAmount: ApprovedAllowanceAmount;
  ApprovedModuleAllowanceAmountRequest: ApprovedModuleAllowanceAmountRequest;
  Attribute: Attribute;
  AuthChallengeResult: AuthChallengeResult;
  AuthenticationResult: AuthenticationResult;
  BlockchainData: Scalars["BlockchainData"];
  Boolean: Scalars["Boolean"];
  BroadcastId: Scalars["BroadcastId"];
  BroadcastRequest: BroadcastRequest;
  BurnProfileRequest: BurnProfileRequest;
  CanCommentResponse: CanCommentResponse;
  CanDecryptResponse: CanDecryptResponse;
  CanMirrorResponse: CanMirrorResponse;
  ChainId: Scalars["ChainId"];
  ChallengeRequest: ChallengeRequest;
  ClaimHandleRequest: ClaimHandleRequest;
  ClaimableHandles: ClaimableHandles;
  CollectConditionInput: CollectConditionInput;
  CollectConditionOutput: CollectConditionOutput;
  CollectModule:
    | ResolversParentTypes["FeeCollectModuleSettings"]
    | ResolversParentTypes["FreeCollectModuleSettings"]
    | ResolversParentTypes["LimitedFeeCollectModuleSettings"]
    | ResolversParentTypes["LimitedTimedFeeCollectModuleSettings"]
    | ResolversParentTypes["RevertCollectModuleSettings"]
    | ResolversParentTypes["TimedFeeCollectModuleSettings"]
    | ResolversParentTypes["UnknownCollectModuleSettings"];
  CollectModuleData: Scalars["CollectModuleData"];
  CollectModuleParams: CollectModuleParams;
  CollectProxyAction: CollectProxyAction;
  CollectedEvent: CollectedEvent;
  Comment: Omit<Comment, "collectModule" | "commentOn" | "mainPost" | "referenceModule"> & {
    collectModule: ResolversParentTypes["CollectModule"];
    commentOn?: Maybe<ResolversParentTypes["Publication"]>;
    mainPost: ResolversParentTypes["MainPostReference"];
    referenceModule?: Maybe<ResolversParentTypes["ReferenceModule"]>;
  };
  ContentEncryptionKey: Scalars["ContentEncryptionKey"];
  ContractAddress: Scalars["ContractAddress"];
  CreateBurnEIP712TypedData: CreateBurnEip712TypedData;
  CreateBurnEIP712TypedDataTypes: CreateBurnEip712TypedDataTypes;
  CreateBurnEIP712TypedDataValue: CreateBurnEip712TypedDataValue;
  CreateBurnProfileBroadcastItemResult: CreateBurnProfileBroadcastItemResult;
  CreateCollectBroadcastItemResult: CreateCollectBroadcastItemResult;
  CreateCollectEIP712TypedData: CreateCollectEip712TypedData;
  CreateCollectEIP712TypedDataTypes: CreateCollectEip712TypedDataTypes;
  CreateCollectEIP712TypedDataValue: CreateCollectEip712TypedDataValue;
  CreateCollectRequest: CreateCollectRequest;
  CreateCommentBroadcastItemResult: CreateCommentBroadcastItemResult;
  CreateCommentEIP712TypedData: CreateCommentEip712TypedData;
  CreateCommentEIP712TypedDataTypes: CreateCommentEip712TypedDataTypes;
  CreateCommentEIP712TypedDataValue: CreateCommentEip712TypedDataValue;
  CreateFollowBroadcastItemResult: CreateFollowBroadcastItemResult;
  CreateFollowEIP712TypedData: CreateFollowEip712TypedData;
  CreateFollowEIP712TypedDataTypes: CreateFollowEip712TypedDataTypes;
  CreateFollowEIP712TypedDataValue: CreateFollowEip712TypedDataValue;
  CreateHandle: Scalars["CreateHandle"];
  CreateMirrorBroadcastItemResult: CreateMirrorBroadcastItemResult;
  CreateMirrorEIP712TypedData: CreateMirrorEip712TypedData;
  CreateMirrorEIP712TypedDataTypes: CreateMirrorEip712TypedDataTypes;
  CreateMirrorEIP712TypedDataValue: CreateMirrorEip712TypedDataValue;
  CreateMirrorRequest: CreateMirrorRequest;
  CreatePostBroadcastItemResult: CreatePostBroadcastItemResult;
  CreatePostEIP712TypedData: CreatePostEip712TypedData;
  CreatePostEIP712TypedDataTypes: CreatePostEip712TypedDataTypes;
  CreatePostEIP712TypedDataValue: CreatePostEip712TypedDataValue;
  CreateProfileRequest: CreateProfileRequest;
  CreatePublicCommentRequest: CreatePublicCommentRequest;
  CreatePublicPostRequest: CreatePublicPostRequest;
  CreatePublicSetProfileMetadataURIRequest: CreatePublicSetProfileMetadataUriRequest;
  CreateSetDefaultProfileRequest: CreateSetDefaultProfileRequest;
  CreateSetDispatcherBroadcastItemResult: CreateSetDispatcherBroadcastItemResult;
  CreateSetDispatcherEIP712TypedData: CreateSetDispatcherEip712TypedData;
  CreateSetDispatcherEIP712TypedDataTypes: CreateSetDispatcherEip712TypedDataTypes;
  CreateSetDispatcherEIP712TypedDataValue: CreateSetDispatcherEip712TypedDataValue;
  CreateSetFollowModuleBroadcastItemResult: CreateSetFollowModuleBroadcastItemResult;
  CreateSetFollowModuleEIP712TypedData: CreateSetFollowModuleEip712TypedData;
  CreateSetFollowModuleEIP712TypedDataTypes: CreateSetFollowModuleEip712TypedDataTypes;
  CreateSetFollowModuleEIP712TypedDataValue: CreateSetFollowModuleEip712TypedDataValue;
  CreateSetFollowModuleRequest: CreateSetFollowModuleRequest;
  CreateSetFollowNFTUriBroadcastItemResult: CreateSetFollowNftUriBroadcastItemResult;
  CreateSetFollowNFTUriEIP712TypedData: CreateSetFollowNftUriEip712TypedData;
  CreateSetFollowNFTUriEIP712TypedDataTypes: CreateSetFollowNftUriEip712TypedDataTypes;
  CreateSetFollowNFTUriEIP712TypedDataValue: CreateSetFollowNftUriEip712TypedDataValue;
  CreateSetFollowNFTUriRequest: CreateSetFollowNftUriRequest;
  CreateSetProfileImageUriBroadcastItemResult: CreateSetProfileImageUriBroadcastItemResult;
  CreateSetProfileImageUriEIP712TypedData: CreateSetProfileImageUriEip712TypedData;
  CreateSetProfileImageUriEIP712TypedDataTypes: CreateSetProfileImageUriEip712TypedDataTypes;
  CreateSetProfileImageUriEIP712TypedDataValue: CreateSetProfileImageUriEip712TypedDataValue;
  CreateSetProfileMetadataURIBroadcastItemResult: CreateSetProfileMetadataUriBroadcastItemResult;
  CreateSetProfileMetadataURIEIP712TypedData: CreateSetProfileMetadataUrieip712TypedData;
  CreateSetProfileMetadataURIEIP712TypedDataTypes: CreateSetProfileMetadataUrieip712TypedDataTypes;
  CreateSetProfileMetadataURIEIP712TypedDataValue: CreateSetProfileMetadataUrieip712TypedDataValue;
  CreateToggleFollowBroadcastItemResult: CreateToggleFollowBroadcastItemResult;
  CreateToggleFollowEIP712TypedData: CreateToggleFollowEip712TypedData;
  CreateToggleFollowEIP712TypedDataTypes: CreateToggleFollowEip712TypedDataTypes;
  CreateToggleFollowEIP712TypedDataValue: CreateToggleFollowEip712TypedDataValue;
  CreateToggleFollowRequest: CreateToggleFollowRequest;
  CreateUnfollowBroadcastItemResult: CreateUnfollowBroadcastItemResult;
  Cursor: Scalars["Cursor"];
  DateTime: Scalars["DateTime"];
  DefaultProfileRequest: DefaultProfileRequest;
  DegreesOfSeparationReferenceModuleParams: DegreesOfSeparationReferenceModuleParams;
  DegreesOfSeparationReferenceModuleSettings: DegreesOfSeparationReferenceModuleSettings;
  Dispatcher: Dispatcher;
  DoesFollow: DoesFollow;
  DoesFollowRequest: DoesFollowRequest;
  DoesFollowResponse: DoesFollowResponse;
  EIP712TypedDataDomain: Eip712TypedDataDomain;
  EIP712TypedDataField: Eip712TypedDataField;
  ElectedMirror: ElectedMirror;
  EnabledModule: EnabledModule;
  EnabledModules: EnabledModules;
  EncryptedFieldsOutput: EncryptedFieldsOutput;
  EncryptedMedia: EncryptedMedia;
  EncryptedMediaSet: EncryptedMediaSet;
  EncryptedValueScalar: Scalars["EncryptedValueScalar"];
  EncryptionParamsOutput: EncryptionParamsOutput;
  Ens: Scalars["Ens"];
  EnsOnChainIdentity: EnsOnChainIdentity;
  EoaOwnershipInput: EoaOwnershipInput;
  EoaOwnershipOutput: EoaOwnershipOutput;
  Erc20: Erc20;
  Erc20Amount: Erc20Amount;
  Erc20OwnershipInput: Erc20OwnershipInput;
  Erc20OwnershipOutput: Erc20OwnershipOutput;
  EthereumAddress: Scalars["EthereumAddress"];
  ExploreProfileResult: ExploreProfileResult;
  ExploreProfilesRequest: ExploreProfilesRequest;
  ExplorePublicationRequest: ExplorePublicationRequest;
  ExplorePublicationResult: Omit<ExplorePublicationResult, "items"> & {
    items: Array<ResolversParentTypes["Publication"]>;
  };
  FeeCollectModuleParams: FeeCollectModuleParams;
  FeeCollectModuleSettings: FeeCollectModuleSettings;
  FeeFollowModuleParams: FeeFollowModuleParams;
  FeeFollowModuleRedeemParams: FeeFollowModuleRedeemParams;
  FeeFollowModuleSettings: FeeFollowModuleSettings;
  FeedHighlightsRequest: FeedHighlightsRequest;
  FeedItem: Omit<FeedItem, "root"> & { root: ResolversParentTypes["FeedItemRoot"] };
  FeedItemRoot: ResolversParentTypes["Comment"] | ResolversParentTypes["Post"];
  FeedRequest: FeedRequest;
  Float: Scalars["Float"];
  Follow: Follow;
  FollowConditionInput: FollowConditionInput;
  FollowConditionOutput: FollowConditionOutput;
  FollowModule:
    | ResolversParentTypes["FeeFollowModuleSettings"]
    | ResolversParentTypes["ProfileFollowModuleSettings"]
    | ResolversParentTypes["RevertFollowModuleSettings"]
    | ResolversParentTypes["UnknownFollowModuleSettings"];
  FollowModuleData: Scalars["FollowModuleData"];
  FollowModuleParams: FollowModuleParams;
  FollowModuleRedeemParams: FollowModuleRedeemParams;
  FollowOnlyReferenceModuleSettings: FollowOnlyReferenceModuleSettings;
  FollowProxyAction: FollowProxyAction;
  FollowRequest: FollowRequest;
  FollowRevenueResult: FollowRevenueResult;
  Follower: Follower;
  FollowerNftOwnedTokenIds: FollowerNftOwnedTokenIds;
  FollowerNftOwnedTokenIdsRequest: FollowerNftOwnedTokenIdsRequest;
  FollowersRequest: FollowersRequest;
  Following: Following;
  FollowingRequest: FollowingRequest;
  FraudReasonInputParams: FraudReasonInputParams;
  FreeCollectModuleParams: FreeCollectModuleParams;
  FreeCollectModuleSettings: FreeCollectModuleSettings;
  FreeCollectProxyAction: FreeCollectProxyAction;
  FreeFollowProxyAction: FreeFollowProxyAction;
  GatedPublicationParamsInput: GatedPublicationParamsInput;
  GenerateModuleCurrencyApproval: GenerateModuleCurrencyApproval;
  GenerateModuleCurrencyApprovalDataRequest: GenerateModuleCurrencyApprovalDataRequest;
  GetPublicationMetadataStatusRequest: GetPublicationMetadataStatusRequest;
  GlobalProtocolStats: GlobalProtocolStats;
  GlobalProtocolStatsRequest: GlobalProtocolStatsRequest;
  Handle: Scalars["Handle"];
  HandleClaimIdScalar: Scalars["HandleClaimIdScalar"];
  HasTxHashBeenIndexedRequest: HasTxHashBeenIndexedRequest;
  HidePublicationRequest: HidePublicationRequest;
  IfpsCid: Scalars["IfpsCid"];
  IllegalReasonInputParams: IllegalReasonInputParams;
  Int: Scalars["Int"];
  InternalPublicationId: Scalars["InternalPublicationId"];
  InternalPublicationsFilterRequest: InternalPublicationsFilterRequest;
  Jwt: Scalars["Jwt"];
  LimitScalar: Scalars["LimitScalar"];
  LimitedFeeCollectModuleParams: LimitedFeeCollectModuleParams;
  LimitedFeeCollectModuleSettings: LimitedFeeCollectModuleSettings;
  LimitedTimedFeeCollectModuleParams: LimitedTimedFeeCollectModuleParams;
  LimitedTimedFeeCollectModuleSettings: LimitedTimedFeeCollectModuleSettings;
  Locale: Scalars["Locale"];
  Log: Log;
  MainPostReference: ResolversParentTypes["Mirror"] | ResolversParentTypes["Post"];
  Markdown: Scalars["Markdown"];
  Media: Media;
  MediaOutput: MediaOutput;
  MediaSet: MediaSet;
  MentionPublication: ResolversParentTypes["Comment"] | ResolversParentTypes["Post"];
  MetadataAttributeInput: MetadataAttributeInput;
  MetadataAttributeOutput: MetadataAttributeOutput;
  MetadataOutput: MetadataOutput;
  MimeType: Scalars["MimeType"];
  Mirror: Omit<Mirror, "collectModule" | "mirrorOf" | "referenceModule"> & {
    collectModule: ResolversParentTypes["CollectModule"];
    mirrorOf: ResolversParentTypes["MirrorablePublication"];
    referenceModule?: Maybe<ResolversParentTypes["ReferenceModule"]>;
  };
  MirrorEvent: MirrorEvent;
  MirrorablePublication: ResolversParentTypes["Comment"] | ResolversParentTypes["Post"];
  ModuleFeeAmount: ModuleFeeAmount;
  ModuleFeeAmountParams: ModuleFeeAmountParams;
  ModuleInfo: ModuleInfo;
  Mutation: {};
  MutualFollowersProfilesQueryRequest: MutualFollowersProfilesQueryRequest;
  NFT: Nft;
  NFTContent: NftContent;
  NFTData: NftData;
  NFTsRequest: NfTsRequest;
  NFTsResult: NfTsResult;
  NewCollectNotification: Omit<NewCollectNotification, "collectedPublication"> & {
    collectedPublication: ResolversParentTypes["Publication"];
  };
  NewCommentNotification: NewCommentNotification;
  NewFollowerNotification: NewFollowerNotification;
  NewMentionNotification: Omit<NewMentionNotification, "mentionPublication"> & {
    mentionPublication: ResolversParentTypes["MentionPublication"];
  };
  NewMirrorNotification: Omit<NewMirrorNotification, "publication"> & {
    publication: ResolversParentTypes["MirrorablePublication"];
  };
  NewReactionNotification: Omit<NewReactionNotification, "publication"> & {
    publication: ResolversParentTypes["Publication"];
  };
  NftImage: NftImage;
  NftOwnershipChallenge: NftOwnershipChallenge;
  NftOwnershipChallengeRequest: NftOwnershipChallengeRequest;
  NftOwnershipChallengeResult: NftOwnershipChallengeResult;
  NftOwnershipId: Scalars["NftOwnershipId"];
  NftOwnershipInput: NftOwnershipInput;
  NftOwnershipOutput: NftOwnershipOutput;
  Nonce: Scalars["Nonce"];
  Notification:
    | ResolversParentTypes["NewCollectNotification"]
    | ResolversParentTypes["NewCommentNotification"]
    | ResolversParentTypes["NewFollowerNotification"]
    | ResolversParentTypes["NewMentionNotification"]
    | ResolversParentTypes["NewMirrorNotification"]
    | ResolversParentTypes["NewReactionNotification"];
  NotificationId: Scalars["NotificationId"];
  NotificationRequest: NotificationRequest;
  OnChainIdentity: OnChainIdentity;
  OrConditionInput: OrConditionInput;
  OrConditionOutput: OrConditionOutput;
  Owner: Owner;
  PaginatedAllPublicationsTagsResult: PaginatedAllPublicationsTagsResult;
  PaginatedFeedResult: PaginatedFeedResult;
  PaginatedFollowersResult: PaginatedFollowersResult;
  PaginatedFollowingResult: PaginatedFollowingResult;
  PaginatedNotificationResult: Omit<PaginatedNotificationResult, "items"> & {
    items: Array<ResolversParentTypes["Notification"]>;
  };
  PaginatedProfilePublicationsForSaleResult: Omit<
    PaginatedProfilePublicationsForSaleResult,
    "items"
  > & { items: Array<ResolversParentTypes["PublicationForSale"]> };
  PaginatedProfileResult: PaginatedProfileResult;
  PaginatedPublicationResult: Omit<PaginatedPublicationResult, "items"> & {
    items: Array<ResolversParentTypes["Publication"]>;
  };
  PaginatedResultInfo: PaginatedResultInfo;
  PaginatedTimelineResult: Omit<PaginatedTimelineResult, "items"> & {
    items: Array<ResolversParentTypes["Publication"]>;
  };
  PaginatedWhoCollectedResult: PaginatedWhoCollectedResult;
  PaginatedWhoReactedResult: PaginatedWhoReactedResult;
  PendingApprovalFollowsRequest: PendingApprovalFollowsRequest;
  PendingApproveFollowsResult: PendingApproveFollowsResult;
  Post: Omit<Post, "collectModule" | "referenceModule"> & {
    collectModule: ResolversParentTypes["CollectModule"];
    referenceModule?: Maybe<ResolversParentTypes["ReferenceModule"]>;
  };
  Profile: Omit<Profile, "coverPicture" | "followModule" | "picture"> & {
    coverPicture?: Maybe<ResolversParentTypes["ProfileMedia"]>;
    followModule?: Maybe<ResolversParentTypes["FollowModule"]>;
    picture?: Maybe<ResolversParentTypes["ProfileMedia"]>;
  };
  ProfileFollowModuleBeenRedeemedRequest: ProfileFollowModuleBeenRedeemedRequest;
  ProfileFollowModuleRedeemParams: ProfileFollowModuleRedeemParams;
  ProfileFollowModuleSettings: ProfileFollowModuleSettings;
  ProfileFollowRevenueQueryRequest: ProfileFollowRevenueQueryRequest;
  ProfileId: Scalars["ProfileId"];
  ProfileInterest: Scalars["ProfileInterest"];
  ProfileMedia: ResolversParentTypes["MediaSet"] | ResolversParentTypes["NftImage"];
  ProfileOnChainIdentityRequest: ProfileOnChainIdentityRequest;
  ProfileOwnershipInput: ProfileOwnershipInput;
  ProfileOwnershipOutput: ProfileOwnershipOutput;
  ProfilePublicationRevenueQueryRequest: ProfilePublicationRevenueQueryRequest;
  ProfilePublicationRevenueResult: ProfilePublicationRevenueResult;
  ProfilePublicationsForSaleRequest: ProfilePublicationsForSaleRequest;
  ProfileQueryRequest: ProfileQueryRequest;
  ProfileSearchResult: ProfileSearchResult;
  ProfileStats: ProfileStats;
  ProviderSpecificParamsOutput: ProviderSpecificParamsOutput;
  ProxyActionError: ProxyActionError;
  ProxyActionId: Scalars["ProxyActionId"];
  ProxyActionQueued: ProxyActionQueued;
  ProxyActionRequest: ProxyActionRequest;
  ProxyActionStatusResult: ProxyActionStatusResult;
  ProxyActionStatusResultUnion:
    | ResolversParentTypes["ProxyActionError"]
    | ResolversParentTypes["ProxyActionQueued"]
    | ResolversParentTypes["ProxyActionStatusResult"];
  PublicMediaRequest: PublicMediaRequest;
  PublicMediaResults: PublicMediaResults;
  Publication:
    | ResolversParentTypes["Comment"]
    | ResolversParentTypes["Mirror"]
    | ResolversParentTypes["Post"];
  PublicationForSale: ResolversParentTypes["Comment"] | ResolversParentTypes["Post"];
  PublicationId: Scalars["PublicationId"];
  PublicationMetadataContentWarningFilter: PublicationMetadataContentWarningFilter;
  PublicationMetadataFilters: PublicationMetadataFilters;
  PublicationMetadataMediaInput: PublicationMetadataMediaInput;
  PublicationMetadataStatus: PublicationMetadataStatus;
  PublicationMetadataTagsFilter: PublicationMetadataTagsFilter;
  PublicationMetadataV1Input: PublicationMetadataV1Input;
  PublicationMetadataV2Input: PublicationMetadataV2Input;
  PublicationQueryRequest: PublicationQueryRequest;
  PublicationRevenue: Omit<PublicationRevenue, "publication"> & {
    publication: ResolversParentTypes["Publication"];
  };
  PublicationRevenueQueryRequest: PublicationRevenueQueryRequest;
  PublicationSearchResult: Omit<PublicationSearchResult, "items"> & {
    items: Array<ResolversParentTypes["PublicationSearchResultItem"]>;
  };
  PublicationSearchResultItem: ResolversParentTypes["Comment"] | ResolversParentTypes["Post"];
  PublicationSignatureContextInput: PublicationSignatureContextInput;
  PublicationStats: PublicationStats;
  PublicationTag: Scalars["PublicationTag"];
  PublicationUrl: Scalars["PublicationUrl"];
  PublicationValidateMetadataResult: PublicationValidateMetadataResult;
  PublicationsQueryRequest: PublicationsQueryRequest;
  Query: {};
  ReactionEvent: ReactionEvent;
  ReactionFieldResolverRequest: ReactionFieldResolverRequest;
  ReactionId: Scalars["ReactionId"];
  ReactionRequest: ReactionRequest;
  RecommendedProfileOptions: RecommendedProfileOptions;
  ReferenceModule:
    | ResolversParentTypes["DegreesOfSeparationReferenceModuleSettings"]
    | ResolversParentTypes["FollowOnlyReferenceModuleSettings"]
    | ResolversParentTypes["UnknownReferenceModuleSettings"];
  ReferenceModuleData: Scalars["ReferenceModuleData"];
  ReferenceModuleParams: ReferenceModuleParams;
  RefreshRequest: RefreshRequest;
  RelRequest: RelRequest;
  RelayError: RelayError;
  RelayResult: ResolversParentTypes["RelayError"] | ResolversParentTypes["RelayerResult"];
  RelayerResult: RelayerResult;
  RemoveProfileInterestsRequest: RemoveProfileInterestsRequest;
  ReportPublicationRequest: ReportPublicationRequest;
  ReportingReasonInputParams: ReportingReasonInputParams;
  ReservedClaimableHandle: ReservedClaimableHandle;
  RevenueAggregate: RevenueAggregate;
  RevertCollectModuleSettings: RevertCollectModuleSettings;
  RevertFollowModuleSettings: RevertFollowModuleSettings;
  Search: Scalars["Search"];
  SearchQueryRequest: SearchQueryRequest;
  SearchResult:
    | ResolversParentTypes["ProfileSearchResult"]
    | ResolversParentTypes["PublicationSearchResult"];
  SensitiveReasonInputParams: SensitiveReasonInputParams;
  SetDefaultProfileBroadcastItemResult: SetDefaultProfileBroadcastItemResult;
  SetDefaultProfileEIP712TypedData: SetDefaultProfileEip712TypedData;
  SetDefaultProfileEIP712TypedDataTypes: SetDefaultProfileEip712TypedDataTypes;
  SetDefaultProfileEIP712TypedDataValue: SetDefaultProfileEip712TypedDataValue;
  SetDispatcherRequest: SetDispatcherRequest;
  Signature: Scalars["Signature"];
  SignedAuthChallenge: SignedAuthChallenge;
  SingleProfileQueryRequest: SingleProfileQueryRequest;
  Sources: Scalars["Sources"];
  SpamReasonInputParams: SpamReasonInputParams;
  String: Scalars["String"];
  SybilDotOrgIdentity: SybilDotOrgIdentity;
  SybilDotOrgIdentitySource: SybilDotOrgIdentitySource;
  SybilDotOrgTwitterIdentity: SybilDotOrgTwitterIdentity;
  TagResult: TagResult;
  TimedFeeCollectModuleParams: TimedFeeCollectModuleParams;
  TimedFeeCollectModuleSettings: TimedFeeCollectModuleSettings;
  TimelineRequest: TimelineRequest;
  TimestampScalar: Scalars["TimestampScalar"];
  TokenId: Scalars["TokenId"];
  TransactionError: TransactionError;
  TransactionIndexedResult: TransactionIndexedResult;
  TransactionReceipt: TransactionReceipt;
  TransactionResult:
    | ResolversParentTypes["TransactionError"]
    | ResolversParentTypes["TransactionIndexedResult"];
  TxHash: Scalars["TxHash"];
  TxId: Scalars["TxId"];
  TypedDataOptions: TypedDataOptions;
  UnfollowRequest: UnfollowRequest;
  UnixTimestamp: Scalars["UnixTimestamp"];
  UnknownCollectModuleParams: UnknownCollectModuleParams;
  UnknownCollectModuleSettings: UnknownCollectModuleSettings;
  UnknownFollowModuleParams: UnknownFollowModuleParams;
  UnknownFollowModuleRedeemParams: UnknownFollowModuleRedeemParams;
  UnknownFollowModuleSettings: UnknownFollowModuleSettings;
  UnknownReferenceModuleParams: UnknownReferenceModuleParams;
  UnknownReferenceModuleSettings: UnknownReferenceModuleSettings;
  UpdateProfileImageRequest: UpdateProfileImageRequest;
  Url: Scalars["Url"];
  UserSigNonces: UserSigNonces;
  ValidatePublicationMetadataRequest: ValidatePublicationMetadataRequest;
  VerifyRequest: VerifyRequest;
  Void: Scalars["Void"];
  Wallet: Wallet;
  WhoCollectedPublicationRequest: WhoCollectedPublicationRequest;
  WhoReactedPublicationRequest: WhoReactedPublicationRequest;
  WhoReactedResult: WhoReactedResult;
  WorldcoinIdentity: WorldcoinIdentity;
};

export type AccessConditionOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AccessConditionOutput"] = ResolversParentTypes["AccessConditionOutput"],
> = {
  and?: Resolver<Maybe<ResolversTypes["AndConditionOutput"]>, ParentType, ContextType>;
  collect?: Resolver<Maybe<ResolversTypes["CollectConditionOutput"]>, ParentType, ContextType>;
  eoa?: Resolver<Maybe<ResolversTypes["EoaOwnershipOutput"]>, ParentType, ContextType>;
  follow?: Resolver<Maybe<ResolversTypes["FollowConditionOutput"]>, ParentType, ContextType>;
  nft?: Resolver<Maybe<ResolversTypes["NftOwnershipOutput"]>, ParentType, ContextType>;
  or?: Resolver<Maybe<ResolversTypes["OrConditionOutput"]>, ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes["ProfileOwnershipOutput"]>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes["Erc20OwnershipOutput"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AndConditionOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AndConditionOutput"] = ResolversParentTypes["AndConditionOutput"],
> = {
  criteria?: Resolver<Array<ResolversTypes["AccessConditionOutput"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApprovedAllowanceAmountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ApprovedAllowanceAmount"] = ResolversParentTypes["ApprovedAllowanceAmount"],
> = {
  allowance?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  module?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttributeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Attribute"] = ResolversParentTypes["Attribute"],
> = {
  displayType?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  key?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  traitType?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthChallengeResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AuthChallengeResult"] = ResolversParentTypes["AuthChallengeResult"],
> = {
  text?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthenticationResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AuthenticationResult"] = ResolversParentTypes["AuthenticationResult"],
> = {
  accessToken?: Resolver<ResolversTypes["Jwt"], ParentType, ContextType>;
  refreshToken?: Resolver<ResolversTypes["Jwt"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BlockchainDataScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["BlockchainData"], any> {
  name: "BlockchainData";
}

export interface BroadcastIdScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["BroadcastId"], any> {
  name: "BroadcastId";
}

export type CanCommentResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CanCommentResponse"] = ResolversParentTypes["CanCommentResponse"],
> = {
  result?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CanDecryptResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CanDecryptResponse"] = ResolversParentTypes["CanDecryptResponse"],
> = {
  reasons?: Resolver<Maybe<ResolversTypes["DecryptFailReason"]>, ParentType, ContextType>;
  result?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CanMirrorResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CanMirrorResponse"] = ResolversParentTypes["CanMirrorResponse"],
> = {
  result?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ChainIdScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["ChainId"], any> {
  name: "ChainId";
}

export type ClaimableHandlesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ClaimableHandles"] = ResolversParentTypes["ClaimableHandles"],
> = {
  canClaimFreeTextHandle?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  reservedHandles?: Resolver<
    Array<ResolversTypes["ReservedClaimableHandle"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectConditionOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CollectConditionOutput"] = ResolversParentTypes["CollectConditionOutput"],
> = {
  publicationId?: Resolver<Maybe<ResolversTypes["ProfileId"]>, ParentType, ContextType>;
  thisPublication?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectModuleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CollectModule"] = ResolversParentTypes["CollectModule"],
> = {
  __resolveType: TypeResolveFn<
    | "FeeCollectModuleSettings"
    | "FreeCollectModuleSettings"
    | "LimitedFeeCollectModuleSettings"
    | "LimitedTimedFeeCollectModuleSettings"
    | "RevertCollectModuleSettings"
    | "TimedFeeCollectModuleSettings"
    | "UnknownCollectModuleSettings",
    ParentType,
    ContextType
  >;
};

export interface CollectModuleDataScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["CollectModuleData"], any> {
  name: "CollectModuleData";
}

export type CollectedEventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CollectedEvent"] = ResolversParentTypes["CollectedEvent"],
> = {
  profile?: Resolver<ResolversTypes["Profile"], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Comment"] = ResolversParentTypes["Comment"],
> = {
  appId?: Resolver<Maybe<ResolversTypes["Sources"]>, ParentType, ContextType>;
  canComment?: Resolver<
    ResolversTypes["CanCommentResponse"],
    ParentType,
    ContextType,
    Partial<CommentCanCommentArgs>
  >;
  canDecrypt?: Resolver<
    ResolversTypes["CanDecryptResponse"],
    ParentType,
    ContextType,
    Partial<CommentCanDecryptArgs>
  >;
  canMirror?: Resolver<
    ResolversTypes["CanMirrorResponse"],
    ParentType,
    ContextType,
    Partial<CommentCanMirrorArgs>
  >;
  collectModule?: Resolver<ResolversTypes["CollectModule"], ParentType, ContextType>;
  collectNftAddress?: Resolver<Maybe<ResolversTypes["ContractAddress"]>, ParentType, ContextType>;
  collectedBy?: Resolver<Maybe<ResolversTypes["Wallet"]>, ParentType, ContextType>;
  commentOn?: Resolver<Maybe<ResolversTypes["Publication"]>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  firstComment?: Resolver<Maybe<ResolversTypes["Comment"]>, ParentType, ContextType>;
  hasCollectedByMe?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    Partial<CommentHasCollectedByMeArgs>
  >;
  hidden?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["InternalPublicationId"], ParentType, ContextType>;
  isGated?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  mainPost?: Resolver<ResolversTypes["MainPostReference"], ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes["MetadataOutput"], ParentType, ContextType>;
  mirrors?: Resolver<
    Array<ResolversTypes["InternalPublicationId"]>,
    ParentType,
    ContextType,
    Partial<CommentMirrorsArgs>
  >;
  onChainContentURI?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  profile?: Resolver<ResolversTypes["Profile"], ParentType, ContextType>;
  reaction?: Resolver<
    Maybe<ResolversTypes["ReactionTypes"]>,
    ParentType,
    ContextType,
    Partial<CommentReactionArgs>
  >;
  referenceModule?: Resolver<Maybe<ResolversTypes["ReferenceModule"]>, ParentType, ContextType>;
  stats?: Resolver<ResolversTypes["PublicationStats"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ContentEncryptionKeyScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["ContentEncryptionKey"], any> {
  name: "ContentEncryptionKey";
}

export interface ContractAddressScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["ContractAddress"], any> {
  name: "ContractAddress";
}

export type CreateBurnEip712TypedDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateBurnEIP712TypedData"] = ResolversParentTypes["CreateBurnEIP712TypedData"],
> = {
  domain?: Resolver<ResolversTypes["EIP712TypedDataDomain"], ParentType, ContextType>;
  types?: Resolver<ResolversTypes["CreateBurnEIP712TypedDataTypes"], ParentType, ContextType>;
  value?: Resolver<ResolversTypes["CreateBurnEIP712TypedDataValue"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateBurnEip712TypedDataTypesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateBurnEIP712TypedDataTypes"] = ResolversParentTypes["CreateBurnEIP712TypedDataTypes"],
> = {
  BurnWithSig?: Resolver<Array<ResolversTypes["EIP712TypedDataField"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateBurnEip712TypedDataValueResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateBurnEIP712TypedDataValue"] = ResolversParentTypes["CreateBurnEIP712TypedDataValue"],
> = {
  deadline?: Resolver<ResolversTypes["UnixTimestamp"], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes["Nonce"], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateBurnProfileBroadcastItemResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateBurnProfileBroadcastItemResult"] = ResolversParentTypes["CreateBurnProfileBroadcastItemResult"],
> = {
  expiresAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BroadcastId"], ParentType, ContextType>;
  typedData?: Resolver<ResolversTypes["CreateBurnEIP712TypedData"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCollectBroadcastItemResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateCollectBroadcastItemResult"] = ResolversParentTypes["CreateCollectBroadcastItemResult"],
> = {
  expiresAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BroadcastId"], ParentType, ContextType>;
  typedData?: Resolver<ResolversTypes["CreateCollectEIP712TypedData"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCollectEip712TypedDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateCollectEIP712TypedData"] = ResolversParentTypes["CreateCollectEIP712TypedData"],
> = {
  domain?: Resolver<ResolversTypes["EIP712TypedDataDomain"], ParentType, ContextType>;
  types?: Resolver<ResolversTypes["CreateCollectEIP712TypedDataTypes"], ParentType, ContextType>;
  value?: Resolver<ResolversTypes["CreateCollectEIP712TypedDataValue"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCollectEip712TypedDataTypesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateCollectEIP712TypedDataTypes"] = ResolversParentTypes["CreateCollectEIP712TypedDataTypes"],
> = {
  CollectWithSig?: Resolver<Array<ResolversTypes["EIP712TypedDataField"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCollectEip712TypedDataValueResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateCollectEIP712TypedDataValue"] = ResolversParentTypes["CreateCollectEIP712TypedDataValue"],
> = {
  data?: Resolver<ResolversTypes["BlockchainData"], ParentType, ContextType>;
  deadline?: Resolver<ResolversTypes["UnixTimestamp"], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes["Nonce"], ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes["ProfileId"], ParentType, ContextType>;
  pubId?: Resolver<ResolversTypes["PublicationId"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCommentBroadcastItemResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateCommentBroadcastItemResult"] = ResolversParentTypes["CreateCommentBroadcastItemResult"],
> = {
  expiresAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BroadcastId"], ParentType, ContextType>;
  typedData?: Resolver<ResolversTypes["CreateCommentEIP712TypedData"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCommentEip712TypedDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateCommentEIP712TypedData"] = ResolversParentTypes["CreateCommentEIP712TypedData"],
> = {
  domain?: Resolver<ResolversTypes["EIP712TypedDataDomain"], ParentType, ContextType>;
  types?: Resolver<ResolversTypes["CreateCommentEIP712TypedDataTypes"], ParentType, ContextType>;
  value?: Resolver<ResolversTypes["CreateCommentEIP712TypedDataValue"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCommentEip712TypedDataTypesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateCommentEIP712TypedDataTypes"] = ResolversParentTypes["CreateCommentEIP712TypedDataTypes"],
> = {
  CommentWithSig?: Resolver<Array<ResolversTypes["EIP712TypedDataField"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCommentEip712TypedDataValueResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateCommentEIP712TypedDataValue"] = ResolversParentTypes["CreateCommentEIP712TypedDataValue"],
> = {
  collectModule?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  collectModuleInitData?: Resolver<ResolversTypes["CollectModuleData"], ParentType, ContextType>;
  contentURI?: Resolver<ResolversTypes["PublicationUrl"], ParentType, ContextType>;
  deadline?: Resolver<ResolversTypes["UnixTimestamp"], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes["Nonce"], ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes["ProfileId"], ParentType, ContextType>;
  profileIdPointed?: Resolver<ResolversTypes["ProfileId"], ParentType, ContextType>;
  pubIdPointed?: Resolver<ResolversTypes["PublicationId"], ParentType, ContextType>;
  referenceModule?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  referenceModuleData?: Resolver<ResolversTypes["ReferenceModuleData"], ParentType, ContextType>;
  referenceModuleInitData?: Resolver<
    ResolversTypes["ReferenceModuleData"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateFollowBroadcastItemResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateFollowBroadcastItemResult"] = ResolversParentTypes["CreateFollowBroadcastItemResult"],
> = {
  expiresAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BroadcastId"], ParentType, ContextType>;
  typedData?: Resolver<ResolversTypes["CreateFollowEIP712TypedData"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateFollowEip712TypedDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateFollowEIP712TypedData"] = ResolversParentTypes["CreateFollowEIP712TypedData"],
> = {
  domain?: Resolver<ResolversTypes["EIP712TypedDataDomain"], ParentType, ContextType>;
  types?: Resolver<ResolversTypes["CreateFollowEIP712TypedDataTypes"], ParentType, ContextType>;
  value?: Resolver<ResolversTypes["CreateFollowEIP712TypedDataValue"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateFollowEip712TypedDataTypesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateFollowEIP712TypedDataTypes"] = ResolversParentTypes["CreateFollowEIP712TypedDataTypes"],
> = {
  FollowWithSig?: Resolver<Array<ResolversTypes["EIP712TypedDataField"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateFollowEip712TypedDataValueResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateFollowEIP712TypedDataValue"] = ResolversParentTypes["CreateFollowEIP712TypedDataValue"],
> = {
  datas?: Resolver<Array<ResolversTypes["BlockchainData"]>, ParentType, ContextType>;
  deadline?: Resolver<ResolversTypes["UnixTimestamp"], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes["Nonce"], ParentType, ContextType>;
  profileIds?: Resolver<Array<ResolversTypes["ProfileId"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface CreateHandleScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["CreateHandle"], any> {
  name: "CreateHandle";
}

export type CreateMirrorBroadcastItemResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateMirrorBroadcastItemResult"] = ResolversParentTypes["CreateMirrorBroadcastItemResult"],
> = {
  expiresAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BroadcastId"], ParentType, ContextType>;
  typedData?: Resolver<ResolversTypes["CreateMirrorEIP712TypedData"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateMirrorEip712TypedDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateMirrorEIP712TypedData"] = ResolversParentTypes["CreateMirrorEIP712TypedData"],
> = {
  domain?: Resolver<ResolversTypes["EIP712TypedDataDomain"], ParentType, ContextType>;
  types?: Resolver<ResolversTypes["CreateMirrorEIP712TypedDataTypes"], ParentType, ContextType>;
  value?: Resolver<ResolversTypes["CreateMirrorEIP712TypedDataValue"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateMirrorEip712TypedDataTypesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateMirrorEIP712TypedDataTypes"] = ResolversParentTypes["CreateMirrorEIP712TypedDataTypes"],
> = {
  MirrorWithSig?: Resolver<Array<ResolversTypes["EIP712TypedDataField"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateMirrorEip712TypedDataValueResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateMirrorEIP712TypedDataValue"] = ResolversParentTypes["CreateMirrorEIP712TypedDataValue"],
> = {
  deadline?: Resolver<ResolversTypes["UnixTimestamp"], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes["Nonce"], ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes["ProfileId"], ParentType, ContextType>;
  profileIdPointed?: Resolver<ResolversTypes["ProfileId"], ParentType, ContextType>;
  pubIdPointed?: Resolver<ResolversTypes["PublicationId"], ParentType, ContextType>;
  referenceModule?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  referenceModuleData?: Resolver<ResolversTypes["ReferenceModuleData"], ParentType, ContextType>;
  referenceModuleInitData?: Resolver<
    ResolversTypes["ReferenceModuleData"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePostBroadcastItemResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreatePostBroadcastItemResult"] = ResolversParentTypes["CreatePostBroadcastItemResult"],
> = {
  expiresAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BroadcastId"], ParentType, ContextType>;
  typedData?: Resolver<ResolversTypes["CreatePostEIP712TypedData"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePostEip712TypedDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreatePostEIP712TypedData"] = ResolversParentTypes["CreatePostEIP712TypedData"],
> = {
  domain?: Resolver<ResolversTypes["EIP712TypedDataDomain"], ParentType, ContextType>;
  types?: Resolver<ResolversTypes["CreatePostEIP712TypedDataTypes"], ParentType, ContextType>;
  value?: Resolver<ResolversTypes["CreatePostEIP712TypedDataValue"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePostEip712TypedDataTypesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreatePostEIP712TypedDataTypes"] = ResolversParentTypes["CreatePostEIP712TypedDataTypes"],
> = {
  PostWithSig?: Resolver<Array<ResolversTypes["EIP712TypedDataField"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePostEip712TypedDataValueResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreatePostEIP712TypedDataValue"] = ResolversParentTypes["CreatePostEIP712TypedDataValue"],
> = {
  collectModule?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  collectModuleInitData?: Resolver<ResolversTypes["CollectModuleData"], ParentType, ContextType>;
  contentURI?: Resolver<ResolversTypes["PublicationUrl"], ParentType, ContextType>;
  deadline?: Resolver<ResolversTypes["UnixTimestamp"], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes["Nonce"], ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes["ProfileId"], ParentType, ContextType>;
  referenceModule?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  referenceModuleInitData?: Resolver<
    ResolversTypes["ReferenceModuleData"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSetDispatcherBroadcastItemResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateSetDispatcherBroadcastItemResult"] = ResolversParentTypes["CreateSetDispatcherBroadcastItemResult"],
> = {
  expiresAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BroadcastId"], ParentType, ContextType>;
  typedData?: Resolver<
    ResolversTypes["CreateSetDispatcherEIP712TypedData"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSetDispatcherEip712TypedDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateSetDispatcherEIP712TypedData"] = ResolversParentTypes["CreateSetDispatcherEIP712TypedData"],
> = {
  domain?: Resolver<ResolversTypes["EIP712TypedDataDomain"], ParentType, ContextType>;
  types?: Resolver<
    ResolversTypes["CreateSetDispatcherEIP712TypedDataTypes"],
    ParentType,
    ContextType
  >;
  value?: Resolver<
    ResolversTypes["CreateSetDispatcherEIP712TypedDataValue"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSetDispatcherEip712TypedDataTypesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateSetDispatcherEIP712TypedDataTypes"] = ResolversParentTypes["CreateSetDispatcherEIP712TypedDataTypes"],
> = {
  SetDispatcherWithSig?: Resolver<
    Array<ResolversTypes["EIP712TypedDataField"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSetDispatcherEip712TypedDataValueResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateSetDispatcherEIP712TypedDataValue"] = ResolversParentTypes["CreateSetDispatcherEIP712TypedDataValue"],
> = {
  deadline?: Resolver<ResolversTypes["UnixTimestamp"], ParentType, ContextType>;
  dispatcher?: Resolver<ResolversTypes["EthereumAddress"], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes["Nonce"], ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes["ProfileId"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSetFollowModuleBroadcastItemResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateSetFollowModuleBroadcastItemResult"] = ResolversParentTypes["CreateSetFollowModuleBroadcastItemResult"],
> = {
  expiresAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BroadcastId"], ParentType, ContextType>;
  typedData?: Resolver<
    ResolversTypes["CreateSetFollowModuleEIP712TypedData"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSetFollowModuleEip712TypedDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateSetFollowModuleEIP712TypedData"] = ResolversParentTypes["CreateSetFollowModuleEIP712TypedData"],
> = {
  domain?: Resolver<ResolversTypes["EIP712TypedDataDomain"], ParentType, ContextType>;
  types?: Resolver<
    ResolversTypes["CreateSetFollowModuleEIP712TypedDataTypes"],
    ParentType,
    ContextType
  >;
  value?: Resolver<
    ResolversTypes["CreateSetFollowModuleEIP712TypedDataValue"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSetFollowModuleEip712TypedDataTypesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateSetFollowModuleEIP712TypedDataTypes"] = ResolversParentTypes["CreateSetFollowModuleEIP712TypedDataTypes"],
> = {
  SetFollowModuleWithSig?: Resolver<
    Array<ResolversTypes["EIP712TypedDataField"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSetFollowModuleEip712TypedDataValueResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateSetFollowModuleEIP712TypedDataValue"] = ResolversParentTypes["CreateSetFollowModuleEIP712TypedDataValue"],
> = {
  deadline?: Resolver<ResolversTypes["UnixTimestamp"], ParentType, ContextType>;
  followModule?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  followModuleInitData?: Resolver<ResolversTypes["FollowModuleData"], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes["Nonce"], ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes["ProfileId"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSetFollowNftUriBroadcastItemResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateSetFollowNFTUriBroadcastItemResult"] = ResolversParentTypes["CreateSetFollowNFTUriBroadcastItemResult"],
> = {
  expiresAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BroadcastId"], ParentType, ContextType>;
  typedData?: Resolver<
    ResolversTypes["CreateSetFollowNFTUriEIP712TypedData"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSetFollowNftUriEip712TypedDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateSetFollowNFTUriEIP712TypedData"] = ResolversParentTypes["CreateSetFollowNFTUriEIP712TypedData"],
> = {
  domain?: Resolver<ResolversTypes["EIP712TypedDataDomain"], ParentType, ContextType>;
  types?: Resolver<
    ResolversTypes["CreateSetFollowNFTUriEIP712TypedDataTypes"],
    ParentType,
    ContextType
  >;
  value?: Resolver<
    ResolversTypes["CreateSetFollowNFTUriEIP712TypedDataValue"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSetFollowNftUriEip712TypedDataTypesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateSetFollowNFTUriEIP712TypedDataTypes"] = ResolversParentTypes["CreateSetFollowNFTUriEIP712TypedDataTypes"],
> = {
  SetFollowNFTURIWithSig?: Resolver<
    Array<ResolversTypes["EIP712TypedDataField"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSetFollowNftUriEip712TypedDataValueResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateSetFollowNFTUriEIP712TypedDataValue"] = ResolversParentTypes["CreateSetFollowNFTUriEIP712TypedDataValue"],
> = {
  deadline?: Resolver<ResolversTypes["UnixTimestamp"], ParentType, ContextType>;
  followNFTURI?: Resolver<ResolversTypes["Url"], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes["Nonce"], ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes["ProfileId"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSetProfileImageUriBroadcastItemResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateSetProfileImageUriBroadcastItemResult"] = ResolversParentTypes["CreateSetProfileImageUriBroadcastItemResult"],
> = {
  expiresAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BroadcastId"], ParentType, ContextType>;
  typedData?: Resolver<
    ResolversTypes["CreateSetProfileImageUriEIP712TypedData"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSetProfileImageUriEip712TypedDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateSetProfileImageUriEIP712TypedData"] = ResolversParentTypes["CreateSetProfileImageUriEIP712TypedData"],
> = {
  domain?: Resolver<ResolversTypes["EIP712TypedDataDomain"], ParentType, ContextType>;
  types?: Resolver<
    ResolversTypes["CreateSetProfileImageUriEIP712TypedDataTypes"],
    ParentType,
    ContextType
  >;
  value?: Resolver<
    ResolversTypes["CreateSetProfileImageUriEIP712TypedDataValue"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSetProfileImageUriEip712TypedDataTypesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateSetProfileImageUriEIP712TypedDataTypes"] = ResolversParentTypes["CreateSetProfileImageUriEIP712TypedDataTypes"],
> = {
  SetProfileImageURIWithSig?: Resolver<
    Array<ResolversTypes["EIP712TypedDataField"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSetProfileImageUriEip712TypedDataValueResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateSetProfileImageUriEIP712TypedDataValue"] = ResolversParentTypes["CreateSetProfileImageUriEIP712TypedDataValue"],
> = {
  deadline?: Resolver<ResolversTypes["UnixTimestamp"], ParentType, ContextType>;
  imageURI?: Resolver<ResolversTypes["Url"], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes["Nonce"], ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes["ProfileId"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSetProfileMetadataUriBroadcastItemResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateSetProfileMetadataURIBroadcastItemResult"] = ResolversParentTypes["CreateSetProfileMetadataURIBroadcastItemResult"],
> = {
  expiresAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BroadcastId"], ParentType, ContextType>;
  typedData?: Resolver<
    ResolversTypes["CreateSetProfileMetadataURIEIP712TypedData"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSetProfileMetadataUrieip712TypedDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateSetProfileMetadataURIEIP712TypedData"] = ResolversParentTypes["CreateSetProfileMetadataURIEIP712TypedData"],
> = {
  domain?: Resolver<ResolversTypes["EIP712TypedDataDomain"], ParentType, ContextType>;
  types?: Resolver<
    ResolversTypes["CreateSetProfileMetadataURIEIP712TypedDataTypes"],
    ParentType,
    ContextType
  >;
  value?: Resolver<
    ResolversTypes["CreateSetProfileMetadataURIEIP712TypedDataValue"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSetProfileMetadataUrieip712TypedDataTypesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateSetProfileMetadataURIEIP712TypedDataTypes"] = ResolversParentTypes["CreateSetProfileMetadataURIEIP712TypedDataTypes"],
> = {
  SetProfileMetadataURIWithSig?: Resolver<
    Array<ResolversTypes["EIP712TypedDataField"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSetProfileMetadataUrieip712TypedDataValueResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateSetProfileMetadataURIEIP712TypedDataValue"] = ResolversParentTypes["CreateSetProfileMetadataURIEIP712TypedDataValue"],
> = {
  deadline?: Resolver<ResolversTypes["UnixTimestamp"], ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes["Url"], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes["Nonce"], ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes["ProfileId"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateToggleFollowBroadcastItemResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateToggleFollowBroadcastItemResult"] = ResolversParentTypes["CreateToggleFollowBroadcastItemResult"],
> = {
  expiresAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BroadcastId"], ParentType, ContextType>;
  typedData?: Resolver<
    ResolversTypes["CreateToggleFollowEIP712TypedData"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateToggleFollowEip712TypedDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateToggleFollowEIP712TypedData"] = ResolversParentTypes["CreateToggleFollowEIP712TypedData"],
> = {
  domain?: Resolver<ResolversTypes["EIP712TypedDataDomain"], ParentType, ContextType>;
  types?: Resolver<
    ResolversTypes["CreateToggleFollowEIP712TypedDataTypes"],
    ParentType,
    ContextType
  >;
  value?: Resolver<
    ResolversTypes["CreateToggleFollowEIP712TypedDataValue"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateToggleFollowEip712TypedDataTypesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateToggleFollowEIP712TypedDataTypes"] = ResolversParentTypes["CreateToggleFollowEIP712TypedDataTypes"],
> = {
  ToggleFollowWithSig?: Resolver<
    Array<ResolversTypes["EIP712TypedDataField"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateToggleFollowEip712TypedDataValueResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateToggleFollowEIP712TypedDataValue"] = ResolversParentTypes["CreateToggleFollowEIP712TypedDataValue"],
> = {
  deadline?: Resolver<ResolversTypes["UnixTimestamp"], ParentType, ContextType>;
  enables?: Resolver<Array<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes["Nonce"], ParentType, ContextType>;
  profileIds?: Resolver<Array<ResolversTypes["ProfileId"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUnfollowBroadcastItemResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateUnfollowBroadcastItemResult"] = ResolversParentTypes["CreateUnfollowBroadcastItemResult"],
> = {
  expiresAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BroadcastId"], ParentType, ContextType>;
  typedData?: Resolver<ResolversTypes["CreateBurnEIP712TypedData"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface CursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["Cursor"], any> {
  name: "Cursor";
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type DegreesOfSeparationReferenceModuleSettingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DegreesOfSeparationReferenceModuleSettings"] = ResolversParentTypes["DegreesOfSeparationReferenceModuleSettings"],
> = {
  commentsRestricted?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  degreesOfSeparation?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  mirrorsRestricted?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["ReferenceModules"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DispatcherResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Dispatcher"] = ResolversParentTypes["Dispatcher"],
> = {
  address?: Resolver<ResolversTypes["EthereumAddress"], ParentType, ContextType>;
  canUseRelay?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DoesFollowResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DoesFollowResponse"] = ResolversParentTypes["DoesFollowResponse"],
> = {
  followerAddress?: Resolver<ResolversTypes["EthereumAddress"], ParentType, ContextType>;
  follows?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isFinalisedOnChain?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes["ProfileId"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Eip712TypedDataDomainResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["EIP712TypedDataDomain"] = ResolversParentTypes["EIP712TypedDataDomain"],
> = {
  chainId?: Resolver<ResolversTypes["ChainId"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  verifyingContract?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  version?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Eip712TypedDataFieldResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["EIP712TypedDataField"] = ResolversParentTypes["EIP712TypedDataField"],
> = {
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ElectedMirrorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ElectedMirror"] = ResolversParentTypes["ElectedMirror"],
> = {
  mirrorId?: Resolver<ResolversTypes["InternalPublicationId"], ParentType, ContextType>;
  profile?: Resolver<ResolversTypes["Profile"], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EnabledModuleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["EnabledModule"] = ResolversParentTypes["EnabledModule"],
> = {
  contractAddress?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  inputParams?: Resolver<Array<ResolversTypes["ModuleInfo"]>, ParentType, ContextType>;
  moduleName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  redeemParams?: Resolver<Array<ResolversTypes["ModuleInfo"]>, ParentType, ContextType>;
  returnDataParms?: Resolver<Array<ResolversTypes["ModuleInfo"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EnabledModulesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["EnabledModules"] = ResolversParentTypes["EnabledModules"],
> = {
  collectModules?: Resolver<Array<ResolversTypes["EnabledModule"]>, ParentType, ContextType>;
  followModules?: Resolver<Array<ResolversTypes["EnabledModule"]>, ParentType, ContextType>;
  referenceModules?: Resolver<Array<ResolversTypes["EnabledModule"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EncryptedFieldsOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["EncryptedFieldsOutput"] = ResolversParentTypes["EncryptedFieldsOutput"],
> = {
  animation_url?: Resolver<Maybe<ResolversTypes["EncryptedValueScalar"]>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes["EncryptedValueScalar"]>, ParentType, ContextType>;
  external_url?: Resolver<Maybe<ResolversTypes["EncryptedValueScalar"]>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["EncryptedValueScalar"]>, ParentType, ContextType>;
  media?: Resolver<Maybe<Array<ResolversTypes["EncryptedMediaSet"]>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EncryptedMediaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["EncryptedMedia"] = ResolversParentTypes["EncryptedMedia"],
> = {
  altTag?: Resolver<Maybe<ResolversTypes["EncryptedValueScalar"]>, ParentType, ContextType>;
  cover?: Resolver<Maybe<ResolversTypes["EncryptedValueScalar"]>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  mimeType?: Resolver<Maybe<ResolversTypes["MimeType"]>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes["Url"], ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EncryptedMediaSetResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["EncryptedMediaSet"] = ResolversParentTypes["EncryptedMediaSet"],
> = {
  medium?: Resolver<Maybe<ResolversTypes["EncryptedMedia"]>, ParentType, ContextType>;
  original?: Resolver<ResolversTypes["EncryptedMedia"], ParentType, ContextType>;
  small?: Resolver<Maybe<ResolversTypes["EncryptedMedia"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface EncryptedValueScalarScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["EncryptedValueScalar"], any> {
  name: "EncryptedValueScalar";
}

export type EncryptionParamsOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["EncryptionParamsOutput"] = ResolversParentTypes["EncryptionParamsOutput"],
> = {
  accessCondition?: Resolver<ResolversTypes["AccessConditionOutput"], ParentType, ContextType>;
  encryptedFields?: Resolver<ResolversTypes["EncryptedFieldsOutput"], ParentType, ContextType>;
  encryptionProvider?: Resolver<ResolversTypes["EncryptionProvider"], ParentType, ContextType>;
  providerSpecificParams?: Resolver<
    ResolversTypes["ProviderSpecificParamsOutput"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface EnsScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["Ens"], any> {
  name: "Ens";
}

export type EnsOnChainIdentityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["EnsOnChainIdentity"] = ResolversParentTypes["EnsOnChainIdentity"],
> = {
  name?: Resolver<Maybe<ResolversTypes["Ens"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EoaOwnershipOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["EoaOwnershipOutput"] = ResolversParentTypes["EoaOwnershipOutput"],
> = {
  address?: Resolver<ResolversTypes["EthereumAddress"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Erc20Resolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Erc20"] = ResolversParentTypes["Erc20"],
> = {
  address?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Erc20AmountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Erc20Amount"] = ResolversParentTypes["Erc20Amount"],
> = {
  asset?: Resolver<ResolversTypes["Erc20"], ParentType, ContextType>;
  value?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Erc20OwnershipOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Erc20OwnershipOutput"] = ResolversParentTypes["Erc20OwnershipOutput"],
> = {
  amount?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  chainID?: Resolver<ResolversTypes["ChainId"], ParentType, ContextType>;
  condition?: Resolver<ResolversTypes["ScalarOperator"], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface EthereumAddressScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["EthereumAddress"], any> {
  name: "EthereumAddress";
}

export type ExploreProfileResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ExploreProfileResult"] = ResolversParentTypes["ExploreProfileResult"],
> = {
  items?: Resolver<Array<ResolversTypes["Profile"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PaginatedResultInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExplorePublicationResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ExplorePublicationResult"] = ResolversParentTypes["ExplorePublicationResult"],
> = {
  items?: Resolver<Array<ResolversTypes["Publication"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PaginatedResultInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeeCollectModuleSettingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FeeCollectModuleSettings"] = ResolversParentTypes["FeeCollectModuleSettings"],
> = {
  amount?: Resolver<ResolversTypes["ModuleFeeAmount"], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  followerOnly?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  recipient?: Resolver<ResolversTypes["EthereumAddress"], ParentType, ContextType>;
  referralFee?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["CollectModules"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeeFollowModuleSettingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FeeFollowModuleSettings"] = ResolversParentTypes["FeeFollowModuleSettings"],
> = {
  amount?: Resolver<ResolversTypes["ModuleFeeAmount"], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  recipient?: Resolver<ResolversTypes["EthereumAddress"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["FollowModules"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeedItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FeedItem"] = ResolversParentTypes["FeedItem"],
> = {
  collects?: Resolver<Array<ResolversTypes["CollectedEvent"]>, ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<ResolversTypes["Comment"]>>, ParentType, ContextType>;
  electedMirror?: Resolver<Maybe<ResolversTypes["ElectedMirror"]>, ParentType, ContextType>;
  mirrors?: Resolver<Array<ResolversTypes["MirrorEvent"]>, ParentType, ContextType>;
  reactions?: Resolver<Array<ResolversTypes["ReactionEvent"]>, ParentType, ContextType>;
  root?: Resolver<ResolversTypes["FeedItemRoot"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeedItemRootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FeedItemRoot"] = ResolversParentTypes["FeedItemRoot"],
> = {
  __resolveType: TypeResolveFn<"Comment" | "Post", ParentType, ContextType>;
};

export type FollowConditionOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FollowConditionOutput"] = ResolversParentTypes["FollowConditionOutput"],
> = {
  profileId?: Resolver<ResolversTypes["ProfileId"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FollowModuleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FollowModule"] = ResolversParentTypes["FollowModule"],
> = {
  __resolveType: TypeResolveFn<
    | "FeeFollowModuleSettings"
    | "ProfileFollowModuleSettings"
    | "RevertFollowModuleSettings"
    | "UnknownFollowModuleSettings",
    ParentType,
    ContextType
  >;
};

export interface FollowModuleDataScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["FollowModuleData"], any> {
  name: "FollowModuleData";
}

export type FollowOnlyReferenceModuleSettingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FollowOnlyReferenceModuleSettings"] = ResolversParentTypes["FollowOnlyReferenceModuleSettings"],
> = {
  contractAddress?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["ReferenceModules"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FollowRevenueResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FollowRevenueResult"] = ResolversParentTypes["FollowRevenueResult"],
> = {
  revenues?: Resolver<Array<ResolversTypes["RevenueAggregate"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FollowerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Follower"] = ResolversParentTypes["Follower"],
> = {
  totalAmountOfTimesFollowed?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  wallet?: Resolver<ResolversTypes["Wallet"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FollowerNftOwnedTokenIdsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FollowerNftOwnedTokenIds"] = ResolversParentTypes["FollowerNftOwnedTokenIds"],
> = {
  followerNftAddress?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  tokensIds?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FollowingResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Following"] = ResolversParentTypes["Following"],
> = {
  profile?: Resolver<ResolversTypes["Profile"], ParentType, ContextType>;
  totalAmountOfTimesFollowing?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FreeCollectModuleSettingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FreeCollectModuleSettings"] = ResolversParentTypes["FreeCollectModuleSettings"],
> = {
  contractAddress?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  followerOnly?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["CollectModules"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenerateModuleCurrencyApprovalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GenerateModuleCurrencyApproval"] = ResolversParentTypes["GenerateModuleCurrencyApproval"],
> = {
  data?: Resolver<ResolversTypes["BlockchainData"], ParentType, ContextType>;
  from?: Resolver<ResolversTypes["EthereumAddress"], ParentType, ContextType>;
  to?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GlobalProtocolStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GlobalProtocolStats"] = ResolversParentTypes["GlobalProtocolStats"],
> = {
  totalBurntProfiles?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  totalCollects?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  totalComments?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  totalFollows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  totalMirrors?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  totalPosts?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  totalProfiles?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  totalRevenue?: Resolver<Array<ResolversTypes["Erc20Amount"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface HandleScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["Handle"], any> {
  name: "Handle";
}

export interface HandleClaimIdScalarScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["HandleClaimIdScalar"], any> {
  name: "HandleClaimIdScalar";
}

export interface IfpsCidScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["IfpsCid"], any> {
  name: "IfpsCid";
}

export interface InternalPublicationIdScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["InternalPublicationId"], any> {
  name: "InternalPublicationId";
}

export interface JwtScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["Jwt"], any> {
  name: "Jwt";
}

export interface LimitScalarScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["LimitScalar"], any> {
  name: "LimitScalar";
}

export type LimitedFeeCollectModuleSettingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["LimitedFeeCollectModuleSettings"] = ResolversParentTypes["LimitedFeeCollectModuleSettings"],
> = {
  amount?: Resolver<ResolversTypes["ModuleFeeAmount"], ParentType, ContextType>;
  collectLimit?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  followerOnly?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  recipient?: Resolver<ResolversTypes["EthereumAddress"], ParentType, ContextType>;
  referralFee?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["CollectModules"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LimitedTimedFeeCollectModuleSettingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["LimitedTimedFeeCollectModuleSettings"] = ResolversParentTypes["LimitedTimedFeeCollectModuleSettings"],
> = {
  amount?: Resolver<ResolversTypes["ModuleFeeAmount"], ParentType, ContextType>;
  collectLimit?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  endTimestamp?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  followerOnly?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  recipient?: Resolver<ResolversTypes["EthereumAddress"], ParentType, ContextType>;
  referralFee?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["CollectModules"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface LocaleScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["Locale"], any> {
  name: "Locale";
}

export type LogResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Log"] = ResolversParentTypes["Log"],
> = {
  address?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  blockHash?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  data?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  removed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  topics?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes["TxHash"], ParentType, ContextType>;
  transactionIndex?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MainPostReferenceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MainPostReference"] = ResolversParentTypes["MainPostReference"],
> = {
  __resolveType: TypeResolveFn<"Mirror" | "Post", ParentType, ContextType>;
};

export interface MarkdownScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Markdown"], any> {
  name: "Markdown";
}

export type MediaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Media"] = ResolversParentTypes["Media"],
> = {
  altTag?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  cover?: Resolver<Maybe<ResolversTypes["Url"]>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  mimeType?: Resolver<Maybe<ResolversTypes["MimeType"]>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes["Url"], ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaOutput"] = ResolversParentTypes["MediaOutput"],
> = {
  altTag?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  cover?: Resolver<Maybe<ResolversTypes["Url"]>, ParentType, ContextType>;
  item?: Resolver<ResolversTypes["Url"], ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes["PublicationMediaSource"]>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes["MimeType"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaSetResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaSet"] = ResolversParentTypes["MediaSet"],
> = {
  medium?: Resolver<Maybe<ResolversTypes["Media"]>, ParentType, ContextType>;
  original?: Resolver<ResolversTypes["Media"], ParentType, ContextType>;
  small?: Resolver<Maybe<ResolversTypes["Media"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MentionPublicationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MentionPublication"] = ResolversParentTypes["MentionPublication"],
> = {
  __resolveType: TypeResolveFn<"Comment" | "Post", ParentType, ContextType>;
};

export type MetadataAttributeOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MetadataAttributeOutput"] = ResolversParentTypes["MetadataAttributeOutput"],
> = {
  displayType?: Resolver<
    Maybe<ResolversTypes["PublicationMetadataDisplayTypes"]>,
    ParentType,
    ContextType
  >;
  traitType?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetadataOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MetadataOutput"] = ResolversParentTypes["MetadataOutput"],
> = {
  animatedUrl?: Resolver<Maybe<ResolversTypes["Url"]>, ParentType, ContextType>;
  attributes?: Resolver<Array<ResolversTypes["MetadataAttributeOutput"]>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes["Markdown"]>, ParentType, ContextType>;
  contentWarning?: Resolver<
    Maybe<ResolversTypes["PublicationContentWarning"]>,
    ParentType,
    ContextType
  >;
  cover?: Resolver<Maybe<ResolversTypes["MediaSet"]>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes["Markdown"]>, ParentType, ContextType>;
  encryptionParams?: Resolver<
    Maybe<ResolversTypes["EncryptionParamsOutput"]>,
    ParentType,
    ContextType
  >;
  image?: Resolver<Maybe<ResolversTypes["Url"]>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes["Locale"]>, ParentType, ContextType>;
  mainContentFocus?: Resolver<ResolversTypes["PublicationMainFocus"], ParentType, ContextType>;
  media?: Resolver<Array<ResolversTypes["MediaSet"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface MimeTypeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["MimeType"], any> {
  name: "MimeType";
}

export type MirrorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mirror"] = ResolversParentTypes["Mirror"],
> = {
  appId?: Resolver<Maybe<ResolversTypes["Sources"]>, ParentType, ContextType>;
  canComment?: Resolver<
    ResolversTypes["CanCommentResponse"],
    ParentType,
    ContextType,
    Partial<MirrorCanCommentArgs>
  >;
  canDecrypt?: Resolver<
    ResolversTypes["CanDecryptResponse"],
    ParentType,
    ContextType,
    Partial<MirrorCanDecryptArgs>
  >;
  canMirror?: Resolver<
    ResolversTypes["CanMirrorResponse"],
    ParentType,
    ContextType,
    Partial<MirrorCanMirrorArgs>
  >;
  collectModule?: Resolver<ResolversTypes["CollectModule"], ParentType, ContextType>;
  collectNftAddress?: Resolver<Maybe<ResolversTypes["ContractAddress"]>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  hasCollectedByMe?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    Partial<MirrorHasCollectedByMeArgs>
  >;
  hidden?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["InternalPublicationId"], ParentType, ContextType>;
  isGated?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes["MetadataOutput"], ParentType, ContextType>;
  mirrorOf?: Resolver<ResolversTypes["MirrorablePublication"], ParentType, ContextType>;
  onChainContentURI?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  profile?: Resolver<ResolversTypes["Profile"], ParentType, ContextType>;
  reaction?: Resolver<
    Maybe<ResolversTypes["ReactionTypes"]>,
    ParentType,
    ContextType,
    Partial<MirrorReactionArgs>
  >;
  referenceModule?: Resolver<Maybe<ResolversTypes["ReferenceModule"]>, ParentType, ContextType>;
  stats?: Resolver<ResolversTypes["PublicationStats"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MirrorEventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MirrorEvent"] = ResolversParentTypes["MirrorEvent"],
> = {
  profile?: Resolver<ResolversTypes["Profile"], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MirrorablePublicationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MirrorablePublication"] = ResolversParentTypes["MirrorablePublication"],
> = {
  __resolveType: TypeResolveFn<"Comment" | "Post", ParentType, ContextType>;
};

export type ModuleFeeAmountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ModuleFeeAmount"] = ResolversParentTypes["ModuleFeeAmount"],
> = {
  asset?: Resolver<ResolversTypes["Erc20"], ParentType, ContextType>;
  value?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModuleInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ModuleInfo"] = ResolversParentTypes["ModuleInfo"],
> = {
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
  ach?: Resolver<
    Maybe<ResolversTypes["Void"]>,
    ParentType,
    ContextType,
    RequireFields<MutationAchArgs, "request">
  >;
  addProfileInterests?: Resolver<
    Maybe<ResolversTypes["Void"]>,
    ParentType,
    ContextType,
    RequireFields<MutationAddProfileInterestsArgs, "request">
  >;
  addReaction?: Resolver<
    Maybe<ResolversTypes["Void"]>,
    ParentType,
    ContextType,
    RequireFields<MutationAddReactionArgs, "request">
  >;
  authenticate?: Resolver<
    ResolversTypes["AuthenticationResult"],
    ParentType,
    ContextType,
    RequireFields<MutationAuthenticateArgs, "request">
  >;
  broadcast?: Resolver<
    ResolversTypes["RelayResult"],
    ParentType,
    ContextType,
    RequireFields<MutationBroadcastArgs, "request">
  >;
  claim?: Resolver<
    ResolversTypes["RelayResult"],
    ParentType,
    ContextType,
    RequireFields<MutationClaimArgs, "request">
  >;
  createAttachMediaData?: Resolver<
    ResolversTypes["PublicMediaResults"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateAttachMediaDataArgs, "request">
  >;
  createBurnProfileTypedData?: Resolver<
    ResolversTypes["CreateBurnProfileBroadcastItemResult"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateBurnProfileTypedDataArgs, "request">
  >;
  createCollectTypedData?: Resolver<
    ResolversTypes["CreateCollectBroadcastItemResult"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateCollectTypedDataArgs, "request">
  >;
  createCommentTypedData?: Resolver<
    ResolversTypes["CreateCommentBroadcastItemResult"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateCommentTypedDataArgs, "request">
  >;
  createCommentViaDispatcher?: Resolver<
    ResolversTypes["RelayResult"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateCommentViaDispatcherArgs, "request">
  >;
  createFollowTypedData?: Resolver<
    ResolversTypes["CreateFollowBroadcastItemResult"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateFollowTypedDataArgs, "request">
  >;
  createMirrorTypedData?: Resolver<
    ResolversTypes["CreateMirrorBroadcastItemResult"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateMirrorTypedDataArgs, "request">
  >;
  createMirrorViaDispatcher?: Resolver<
    ResolversTypes["RelayResult"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateMirrorViaDispatcherArgs, "request">
  >;
  createPostTypedData?: Resolver<
    ResolversTypes["CreatePostBroadcastItemResult"],
    ParentType,
    ContextType,
    RequireFields<MutationCreatePostTypedDataArgs, "request">
  >;
  createPostViaDispatcher?: Resolver<
    ResolversTypes["RelayResult"],
    ParentType,
    ContextType,
    RequireFields<MutationCreatePostViaDispatcherArgs, "request">
  >;
  createProfile?: Resolver<
    ResolversTypes["RelayResult"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateProfileArgs, "request">
  >;
  createSetDefaultProfileTypedData?: Resolver<
    ResolversTypes["SetDefaultProfileBroadcastItemResult"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateSetDefaultProfileTypedDataArgs, "request">
  >;
  createSetDispatcherTypedData?: Resolver<
    ResolversTypes["CreateSetDispatcherBroadcastItemResult"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateSetDispatcherTypedDataArgs, "request">
  >;
  createSetFollowModuleTypedData?: Resolver<
    ResolversTypes["CreateSetFollowModuleBroadcastItemResult"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateSetFollowModuleTypedDataArgs, "request">
  >;
  createSetFollowNFTUriTypedData?: Resolver<
    ResolversTypes["CreateSetFollowNFTUriBroadcastItemResult"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateSetFollowNftUriTypedDataArgs, "request">
  >;
  createSetProfileImageURITypedData?: Resolver<
    ResolversTypes["CreateSetProfileImageUriBroadcastItemResult"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateSetProfileImageUriTypedDataArgs, "request">
  >;
  createSetProfileImageURIViaDispatcher?: Resolver<
    ResolversTypes["RelayResult"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateSetProfileImageUriViaDispatcherArgs, "request">
  >;
  createSetProfileMetadataTypedData?: Resolver<
    ResolversTypes["CreateSetProfileMetadataURIBroadcastItemResult"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateSetProfileMetadataTypedDataArgs, "request">
  >;
  createSetProfileMetadataViaDispatcher?: Resolver<
    ResolversTypes["RelayResult"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateSetProfileMetadataViaDispatcherArgs, "request">
  >;
  createToggleFollowTypedData?: Resolver<
    ResolversTypes["CreateToggleFollowBroadcastItemResult"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateToggleFollowTypedDataArgs, "request">
  >;
  createUnfollowTypedData?: Resolver<
    ResolversTypes["CreateUnfollowBroadcastItemResult"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateUnfollowTypedDataArgs, "request">
  >;
  hidePublication?: Resolver<
    Maybe<ResolversTypes["Void"]>,
    ParentType,
    ContextType,
    RequireFields<MutationHidePublicationArgs, "request">
  >;
  proxyAction?: Resolver<
    ResolversTypes["ProxyActionId"],
    ParentType,
    ContextType,
    RequireFields<MutationProxyActionArgs, "request">
  >;
  refresh?: Resolver<
    ResolversTypes["AuthenticationResult"],
    ParentType,
    ContextType,
    RequireFields<MutationRefreshArgs, "request">
  >;
  removeProfileInterests?: Resolver<
    Maybe<ResolversTypes["Void"]>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveProfileInterestsArgs, "request">
  >;
  removeReaction?: Resolver<
    Maybe<ResolversTypes["Void"]>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveReactionArgs, "request">
  >;
  reportPublication?: Resolver<
    Maybe<ResolversTypes["Void"]>,
    ParentType,
    ContextType,
    RequireFields<MutationReportPublicationArgs, "request">
  >;
};

export type NftResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["NFT"] = ResolversParentTypes["NFT"],
> = {
  chainId?: Resolver<ResolversTypes["ChainId"], ParentType, ContextType>;
  collectionName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  contentURI?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  contractName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  ercType?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  originalContent?: Resolver<ResolversTypes["NFTContent"], ParentType, ContextType>;
  owners?: Resolver<Array<ResolversTypes["Owner"]>, ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftContentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["NFTContent"] = ResolversParentTypes["NFTContent"],
> = {
  animatedUrl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  metaType?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NfTsResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["NFTsResult"] = ResolversParentTypes["NFTsResult"],
> = {
  items?: Resolver<Array<ResolversTypes["NFT"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PaginatedResultInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NewCollectNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["NewCollectNotification"] = ResolversParentTypes["NewCollectNotification"],
> = {
  collectedPublication?: Resolver<ResolversTypes["Publication"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  notificationId?: Resolver<ResolversTypes["NotificationId"], ParentType, ContextType>;
  wallet?: Resolver<ResolversTypes["Wallet"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NewCommentNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["NewCommentNotification"] = ResolversParentTypes["NewCommentNotification"],
> = {
  comment?: Resolver<ResolversTypes["Comment"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  notificationId?: Resolver<ResolversTypes["NotificationId"], ParentType, ContextType>;
  profile?: Resolver<ResolversTypes["Profile"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NewFollowerNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["NewFollowerNotification"] = ResolversParentTypes["NewFollowerNotification"],
> = {
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  isFollowedByMe?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  notificationId?: Resolver<ResolversTypes["NotificationId"], ParentType, ContextType>;
  wallet?: Resolver<ResolversTypes["Wallet"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NewMentionNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["NewMentionNotification"] = ResolversParentTypes["NewMentionNotification"],
> = {
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  mentionPublication?: Resolver<ResolversTypes["MentionPublication"], ParentType, ContextType>;
  notificationId?: Resolver<ResolversTypes["NotificationId"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NewMirrorNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["NewMirrorNotification"] = ResolversParentTypes["NewMirrorNotification"],
> = {
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  notificationId?: Resolver<ResolversTypes["NotificationId"], ParentType, ContextType>;
  profile?: Resolver<ResolversTypes["Profile"], ParentType, ContextType>;
  publication?: Resolver<ResolversTypes["MirrorablePublication"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NewReactionNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["NewReactionNotification"] = ResolversParentTypes["NewReactionNotification"],
> = {
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  notificationId?: Resolver<ResolversTypes["NotificationId"], ParentType, ContextType>;
  profile?: Resolver<ResolversTypes["Profile"], ParentType, ContextType>;
  publication?: Resolver<ResolversTypes["Publication"], ParentType, ContextType>;
  reaction?: Resolver<ResolversTypes["ReactionTypes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftImageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["NftImage"] = ResolversParentTypes["NftImage"],
> = {
  chainId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes["Url"], ParentType, ContextType>;
  verified?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftOwnershipChallengeResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["NftOwnershipChallengeResult"] = ResolversParentTypes["NftOwnershipChallengeResult"],
> = {
  id?: Resolver<ResolversTypes["NftOwnershipId"], ParentType, ContextType>;
  text?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  timeout?: Resolver<ResolversTypes["TimestampScalar"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface NftOwnershipIdScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["NftOwnershipId"], any> {
  name: "NftOwnershipId";
}

export type NftOwnershipOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["NftOwnershipOutput"] = ResolversParentTypes["NftOwnershipOutput"],
> = {
  chainID?: Resolver<ResolversTypes["ChainId"], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  contractType?: Resolver<ResolversTypes["ContractType"], ParentType, ContextType>;
  tokenIds?: Resolver<Maybe<ResolversTypes["TokenId"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface NonceScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["Nonce"], any> {
  name: "Nonce";
}

export type NotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Notification"] = ResolversParentTypes["Notification"],
> = {
  __resolveType: TypeResolveFn<
    | "NewCollectNotification"
    | "NewCommentNotification"
    | "NewFollowerNotification"
    | "NewMentionNotification"
    | "NewMirrorNotification"
    | "NewReactionNotification",
    ParentType,
    ContextType
  >;
};

export interface NotificationIdScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["NotificationId"], any> {
  name: "NotificationId";
}

export type OnChainIdentityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["OnChainIdentity"] = ResolversParentTypes["OnChainIdentity"],
> = {
  ens?: Resolver<Maybe<ResolversTypes["EnsOnChainIdentity"]>, ParentType, ContextType>;
  proofOfHumanity?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  sybilDotOrg?: Resolver<ResolversTypes["SybilDotOrgIdentity"], ParentType, ContextType>;
  worldcoin?: Resolver<ResolversTypes["WorldcoinIdentity"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrConditionOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["OrConditionOutput"] = ResolversParentTypes["OrConditionOutput"],
> = {
  criteria?: Resolver<Array<ResolversTypes["AccessConditionOutput"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OwnerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Owner"] = ResolversParentTypes["Owner"],
> = {
  address?: Resolver<ResolversTypes["EthereumAddress"], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedAllPublicationsTagsResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaginatedAllPublicationsTagsResult"] = ResolversParentTypes["PaginatedAllPublicationsTagsResult"],
> = {
  items?: Resolver<Array<ResolversTypes["TagResult"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PaginatedResultInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedFeedResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaginatedFeedResult"] = ResolversParentTypes["PaginatedFeedResult"],
> = {
  items?: Resolver<Array<ResolversTypes["FeedItem"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PaginatedResultInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedFollowersResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaginatedFollowersResult"] = ResolversParentTypes["PaginatedFollowersResult"],
> = {
  items?: Resolver<Array<ResolversTypes["Follower"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PaginatedResultInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedFollowingResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaginatedFollowingResult"] = ResolversParentTypes["PaginatedFollowingResult"],
> = {
  items?: Resolver<Array<ResolversTypes["Following"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PaginatedResultInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedNotificationResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaginatedNotificationResult"] = ResolversParentTypes["PaginatedNotificationResult"],
> = {
  items?: Resolver<Array<ResolversTypes["Notification"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PaginatedResultInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedProfilePublicationsForSaleResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaginatedProfilePublicationsForSaleResult"] = ResolversParentTypes["PaginatedProfilePublicationsForSaleResult"],
> = {
  items?: Resolver<Array<ResolversTypes["PublicationForSale"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PaginatedResultInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedProfileResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaginatedProfileResult"] = ResolversParentTypes["PaginatedProfileResult"],
> = {
  items?: Resolver<Array<ResolversTypes["Profile"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PaginatedResultInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedPublicationResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaginatedPublicationResult"] = ResolversParentTypes["PaginatedPublicationResult"],
> = {
  items?: Resolver<Array<ResolversTypes["Publication"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PaginatedResultInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedResultInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaginatedResultInfo"] = ResolversParentTypes["PaginatedResultInfo"],
> = {
  next?: Resolver<Maybe<ResolversTypes["Cursor"]>, ParentType, ContextType>;
  prev?: Resolver<Maybe<ResolversTypes["Cursor"]>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedTimelineResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaginatedTimelineResult"] = ResolversParentTypes["PaginatedTimelineResult"],
> = {
  items?: Resolver<Array<ResolversTypes["Publication"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PaginatedResultInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedWhoCollectedResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaginatedWhoCollectedResult"] = ResolversParentTypes["PaginatedWhoCollectedResult"],
> = {
  items?: Resolver<Array<ResolversTypes["Wallet"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PaginatedResultInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedWhoReactedResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PaginatedWhoReactedResult"] = ResolversParentTypes["PaginatedWhoReactedResult"],
> = {
  items?: Resolver<Array<ResolversTypes["WhoReactedResult"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PaginatedResultInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PendingApproveFollowsResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PendingApproveFollowsResult"] = ResolversParentTypes["PendingApproveFollowsResult"],
> = {
  items?: Resolver<Array<ResolversTypes["Profile"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PaginatedResultInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Post"] = ResolversParentTypes["Post"],
> = {
  appId?: Resolver<Maybe<ResolversTypes["Sources"]>, ParentType, ContextType>;
  canComment?: Resolver<
    ResolversTypes["CanCommentResponse"],
    ParentType,
    ContextType,
    Partial<PostCanCommentArgs>
  >;
  canDecrypt?: Resolver<
    ResolversTypes["CanDecryptResponse"],
    ParentType,
    ContextType,
    Partial<PostCanDecryptArgs>
  >;
  canMirror?: Resolver<
    ResolversTypes["CanMirrorResponse"],
    ParentType,
    ContextType,
    Partial<PostCanMirrorArgs>
  >;
  collectModule?: Resolver<ResolversTypes["CollectModule"], ParentType, ContextType>;
  collectNftAddress?: Resolver<Maybe<ResolversTypes["ContractAddress"]>, ParentType, ContextType>;
  collectedBy?: Resolver<Maybe<ResolversTypes["Wallet"]>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  hasCollectedByMe?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    Partial<PostHasCollectedByMeArgs>
  >;
  hidden?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["InternalPublicationId"], ParentType, ContextType>;
  isGated?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes["MetadataOutput"], ParentType, ContextType>;
  mirrors?: Resolver<
    Array<ResolversTypes["InternalPublicationId"]>,
    ParentType,
    ContextType,
    Partial<PostMirrorsArgs>
  >;
  onChainContentURI?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  profile?: Resolver<ResolversTypes["Profile"], ParentType, ContextType>;
  reaction?: Resolver<
    Maybe<ResolversTypes["ReactionTypes"]>,
    ParentType,
    ContextType,
    Partial<PostReactionArgs>
  >;
  referenceModule?: Resolver<Maybe<ResolversTypes["ReferenceModule"]>, ParentType, ContextType>;
  stats?: Resolver<ResolversTypes["PublicationStats"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Profile"] = ResolversParentTypes["Profile"],
> = {
  attributes?: Resolver<Maybe<Array<ResolversTypes["Attribute"]>>, ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  coverPicture?: Resolver<Maybe<ResolversTypes["ProfileMedia"]>, ParentType, ContextType>;
  dispatcher?: Resolver<Maybe<ResolversTypes["Dispatcher"]>, ParentType, ContextType>;
  followModule?: Resolver<Maybe<ResolversTypes["FollowModule"]>, ParentType, ContextType>;
  followNftAddress?: Resolver<Maybe<ResolversTypes["ContractAddress"]>, ParentType, ContextType>;
  handle?: Resolver<ResolversTypes["Handle"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ProfileId"], ParentType, ContextType>;
  interests?: Resolver<Maybe<Array<ResolversTypes["ProfileInterest"]>>, ParentType, ContextType>;
  isDefault?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isFollowedByMe?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    Partial<ProfileIsFollowedByMeArgs>
  >;
  isFollowing?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    Partial<ProfileIsFollowingArgs>
  >;
  metadata?: Resolver<Maybe<ResolversTypes["Url"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  onChainIdentity?: Resolver<ResolversTypes["OnChainIdentity"], ParentType, ContextType>;
  ownedBy?: Resolver<ResolversTypes["EthereumAddress"], ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes["ProfileMedia"]>, ParentType, ContextType>;
  stats?: Resolver<ResolversTypes["ProfileStats"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfileFollowModuleSettingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProfileFollowModuleSettings"] = ResolversParentTypes["ProfileFollowModuleSettings"],
> = {
  contractAddress?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["FollowModules"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ProfileIdScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["ProfileId"], any> {
  name: "ProfileId";
}

export interface ProfileInterestScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["ProfileInterest"], any> {
  name: "ProfileInterest";
}

export type ProfileMediaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProfileMedia"] = ResolversParentTypes["ProfileMedia"],
> = {
  __resolveType: TypeResolveFn<"MediaSet" | "NftImage", ParentType, ContextType>;
};

export type ProfileOwnershipOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProfileOwnershipOutput"] = ResolversParentTypes["ProfileOwnershipOutput"],
> = {
  profileId?: Resolver<ResolversTypes["ProfileId"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfilePublicationRevenueResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProfilePublicationRevenueResult"] = ResolversParentTypes["ProfilePublicationRevenueResult"],
> = {
  items?: Resolver<Array<ResolversTypes["PublicationRevenue"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PaginatedResultInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfileSearchResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProfileSearchResult"] = ResolversParentTypes["ProfileSearchResult"],
> = {
  items?: Resolver<Array<ResolversTypes["Profile"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PaginatedResultInfo"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["SearchRequestTypes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfileStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProfileStats"] = ResolversParentTypes["ProfileStats"],
> = {
  commentsTotal?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    RequireFields<ProfileStatsCommentsTotalArgs, "forSources">
  >;
  id?: Resolver<ResolversTypes["ProfileId"], ParentType, ContextType>;
  mirrorsTotal?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    RequireFields<ProfileStatsMirrorsTotalArgs, "forSources">
  >;
  postsTotal?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    RequireFields<ProfileStatsPostsTotalArgs, "forSources">
  >;
  publicationsTotal?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    RequireFields<ProfileStatsPublicationsTotalArgs, "forSources">
  >;
  totalCollects?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  totalComments?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  totalFollowers?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  totalFollowing?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  totalMirrors?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  totalPosts?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  totalPublications?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderSpecificParamsOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProviderSpecificParamsOutput"] = ResolversParentTypes["ProviderSpecificParamsOutput"],
> = {
  encryptionKey?: Resolver<ResolversTypes["ContentEncryptionKey"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProxyActionErrorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProxyActionError"] = ResolversParentTypes["ProxyActionError"],
> = {
  lastKnownTxId?: Resolver<Maybe<ResolversTypes["TxId"]>, ParentType, ContextType>;
  reason?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ProxyActionIdScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["ProxyActionId"], any> {
  name: "ProxyActionId";
}

export type ProxyActionQueuedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProxyActionQueued"] = ResolversParentTypes["ProxyActionQueued"],
> = {
  queuedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProxyActionStatusResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProxyActionStatusResult"] = ResolversParentTypes["ProxyActionStatusResult"],
> = {
  status?: Resolver<ResolversTypes["ProxyActionStatusTypes"], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes["TxHash"], ParentType, ContextType>;
  txId?: Resolver<ResolversTypes["TxId"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProxyActionStatusResultUnionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProxyActionStatusResultUnion"] = ResolversParentTypes["ProxyActionStatusResultUnion"],
> = {
  __resolveType: TypeResolveFn<
    "ProxyActionError" | "ProxyActionQueued" | "ProxyActionStatusResult",
    ParentType,
    ContextType
  >;
};

export type PublicMediaResultsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PublicMediaResults"] = ResolversParentTypes["PublicMediaResults"],
> = {
  media?: Resolver<ResolversTypes["MediaOutput"], ParentType, ContextType>;
  signedUrl?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Publication"] = ResolversParentTypes["Publication"],
> = {
  __resolveType: TypeResolveFn<"Comment" | "Mirror" | "Post", ParentType, ContextType>;
};

export type PublicationForSaleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PublicationForSale"] = ResolversParentTypes["PublicationForSale"],
> = {
  __resolveType: TypeResolveFn<"Comment" | "Post", ParentType, ContextType>;
};

export interface PublicationIdScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["PublicationId"], any> {
  name: "PublicationId";
}

export type PublicationMetadataStatusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PublicationMetadataStatus"] = ResolversParentTypes["PublicationMetadataStatus"],
> = {
  reason?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes["PublicationMetadataStatusType"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicationRevenueResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PublicationRevenue"] = ResolversParentTypes["PublicationRevenue"],
> = {
  publication?: Resolver<ResolversTypes["Publication"], ParentType, ContextType>;
  revenue?: Resolver<ResolversTypes["RevenueAggregate"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicationSearchResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PublicationSearchResult"] = ResolversParentTypes["PublicationSearchResult"],
> = {
  items?: Resolver<Array<ResolversTypes["PublicationSearchResultItem"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PaginatedResultInfo"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["SearchRequestTypes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicationSearchResultItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PublicationSearchResultItem"] = ResolversParentTypes["PublicationSearchResultItem"],
> = {
  __resolveType: TypeResolveFn<"Comment" | "Post", ParentType, ContextType>;
};

export type PublicationStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PublicationStats"] = ResolversParentTypes["PublicationStats"],
> = {
  commentsTotal?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    RequireFields<PublicationStatsCommentsTotalArgs, "forSources">
  >;
  id?: Resolver<ResolversTypes["InternalPublicationId"], ParentType, ContextType>;
  totalAmountOfCollects?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  totalAmountOfComments?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  totalAmountOfMirrors?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  totalDownvotes?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  totalUpvotes?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface PublicationTagScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["PublicationTag"], any> {
  name: "PublicationTag";
}

export interface PublicationUrlScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["PublicationUrl"], any> {
  name: "PublicationUrl";
}

export type PublicationValidateMetadataResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PublicationValidateMetadataResult"] = ResolversParentTypes["PublicationValidateMetadataResult"],
> = {
  reason?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  valid?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  allPublicationsTags?: Resolver<
    ResolversTypes["PaginatedAllPublicationsTagsResult"],
    ParentType,
    ContextType,
    RequireFields<QueryAllPublicationsTagsArgs, "request">
  >;
  approvedModuleAllowanceAmount?: Resolver<
    Array<ResolversTypes["ApprovedAllowanceAmount"]>,
    ParentType,
    ContextType,
    RequireFields<QueryApprovedModuleAllowanceAmountArgs, "request">
  >;
  challenge?: Resolver<
    ResolversTypes["AuthChallengeResult"],
    ParentType,
    ContextType,
    RequireFields<QueryChallengeArgs, "request">
  >;
  claimableHandles?: Resolver<ResolversTypes["ClaimableHandles"], ParentType, ContextType>;
  claimableStatus?: Resolver<ResolversTypes["ClaimStatus"], ParentType, ContextType>;
  defaultProfile?: Resolver<
    Maybe<ResolversTypes["Profile"]>,
    ParentType,
    ContextType,
    RequireFields<QueryDefaultProfileArgs, "request">
  >;
  doesFollow?: Resolver<
    Array<ResolversTypes["DoesFollowResponse"]>,
    ParentType,
    ContextType,
    RequireFields<QueryDoesFollowArgs, "request">
  >;
  enabledModuleCurrencies?: Resolver<Array<ResolversTypes["Erc20"]>, ParentType, ContextType>;
  enabledModules?: Resolver<ResolversTypes["EnabledModules"], ParentType, ContextType>;
  exploreProfiles?: Resolver<
    ResolversTypes["ExploreProfileResult"],
    ParentType,
    ContextType,
    RequireFields<QueryExploreProfilesArgs, "request">
  >;
  explorePublications?: Resolver<
    ResolversTypes["ExplorePublicationResult"],
    ParentType,
    ContextType,
    RequireFields<QueryExplorePublicationsArgs, "request">
  >;
  feed?: Resolver<
    ResolversTypes["PaginatedFeedResult"],
    ParentType,
    ContextType,
    RequireFields<QueryFeedArgs, "request">
  >;
  feedHighlights?: Resolver<
    ResolversTypes["PaginatedTimelineResult"],
    ParentType,
    ContextType,
    RequireFields<QueryFeedHighlightsArgs, "request">
  >;
  followerNftOwnedTokenIds?: Resolver<
    Maybe<ResolversTypes["FollowerNftOwnedTokenIds"]>,
    ParentType,
    ContextType,
    RequireFields<QueryFollowerNftOwnedTokenIdsArgs, "request">
  >;
  followers?: Resolver<
    ResolversTypes["PaginatedFollowersResult"],
    ParentType,
    ContextType,
    RequireFields<QueryFollowersArgs, "request">
  >;
  following?: Resolver<
    ResolversTypes["PaginatedFollowingResult"],
    ParentType,
    ContextType,
    RequireFields<QueryFollowingArgs, "request">
  >;
  generateModuleCurrencyApprovalData?: Resolver<
    ResolversTypes["GenerateModuleCurrencyApproval"],
    ParentType,
    ContextType,
    RequireFields<QueryGenerateModuleCurrencyApprovalDataArgs, "request">
  >;
  globalProtocolStats?: Resolver<
    ResolversTypes["GlobalProtocolStats"],
    ParentType,
    ContextType,
    Partial<QueryGlobalProtocolStatsArgs>
  >;
  hasTxHashBeenIndexed?: Resolver<
    ResolversTypes["TransactionResult"],
    ParentType,
    ContextType,
    RequireFields<QueryHasTxHashBeenIndexedArgs, "request">
  >;
  internalPublicationFilter?: Resolver<
    ResolversTypes["PaginatedPublicationResult"],
    ParentType,
    ContextType,
    RequireFields<QueryInternalPublicationFilterArgs, "request">
  >;
  mutualFollowersProfiles?: Resolver<
    ResolversTypes["PaginatedProfileResult"],
    ParentType,
    ContextType,
    RequireFields<QueryMutualFollowersProfilesArgs, "request">
  >;
  nftOwnershipChallenge?: Resolver<
    ResolversTypes["NftOwnershipChallengeResult"],
    ParentType,
    ContextType,
    RequireFields<QueryNftOwnershipChallengeArgs, "request">
  >;
  nfts?: Resolver<
    ResolversTypes["NFTsResult"],
    ParentType,
    ContextType,
    RequireFields<QueryNftsArgs, "request">
  >;
  notifications?: Resolver<
    ResolversTypes["PaginatedNotificationResult"],
    ParentType,
    ContextType,
    RequireFields<QueryNotificationsArgs, "request">
  >;
  pendingApprovalFollows?: Resolver<
    ResolversTypes["PendingApproveFollowsResult"],
    ParentType,
    ContextType,
    RequireFields<QueryPendingApprovalFollowsArgs, "request">
  >;
  ping?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  profile?: Resolver<
    Maybe<ResolversTypes["Profile"]>,
    ParentType,
    ContextType,
    RequireFields<QueryProfileArgs, "request">
  >;
  profileFollowModuleBeenRedeemed?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<QueryProfileFollowModuleBeenRedeemedArgs, "request">
  >;
  profileFollowRevenue?: Resolver<
    ResolversTypes["FollowRevenueResult"],
    ParentType,
    ContextType,
    RequireFields<QueryProfileFollowRevenueArgs, "request">
  >;
  profileInterests?: Resolver<Array<ResolversTypes["ProfileInterest"]>, ParentType, ContextType>;
  profileOnChainIdentity?: Resolver<
    Array<ResolversTypes["OnChainIdentity"]>,
    ParentType,
    ContextType,
    RequireFields<QueryProfileOnChainIdentityArgs, "request">
  >;
  profilePublicationRevenue?: Resolver<
    ResolversTypes["ProfilePublicationRevenueResult"],
    ParentType,
    ContextType,
    RequireFields<QueryProfilePublicationRevenueArgs, "request">
  >;
  profilePublicationsForSale?: Resolver<
    ResolversTypes["PaginatedProfilePublicationsForSaleResult"],
    ParentType,
    ContextType,
    RequireFields<QueryProfilePublicationsForSaleArgs, "request">
  >;
  profiles?: Resolver<
    ResolversTypes["PaginatedProfileResult"],
    ParentType,
    ContextType,
    RequireFields<QueryProfilesArgs, "request">
  >;
  proxyActionStatus?: Resolver<
    ResolversTypes["ProxyActionStatusResultUnion"],
    ParentType,
    ContextType,
    RequireFields<QueryProxyActionStatusArgs, "proxyActionId">
  >;
  publication?: Resolver<
    Maybe<ResolversTypes["Publication"]>,
    ParentType,
    ContextType,
    RequireFields<QueryPublicationArgs, "request">
  >;
  publicationMetadataStatus?: Resolver<
    ResolversTypes["PublicationMetadataStatus"],
    ParentType,
    ContextType,
    RequireFields<QueryPublicationMetadataStatusArgs, "request">
  >;
  publicationRevenue?: Resolver<
    Maybe<ResolversTypes["PublicationRevenue"]>,
    ParentType,
    ContextType,
    RequireFields<QueryPublicationRevenueArgs, "request">
  >;
  publications?: Resolver<
    ResolversTypes["PaginatedPublicationResult"],
    ParentType,
    ContextType,
    RequireFields<QueryPublicationsArgs, "request">
  >;
  recommendedProfiles?: Resolver<
    Array<ResolversTypes["Profile"]>,
    ParentType,
    ContextType,
    Partial<QueryRecommendedProfilesArgs>
  >;
  rel?: Resolver<
    Maybe<ResolversTypes["Void"]>,
    ParentType,
    ContextType,
    RequireFields<QueryRelArgs, "request">
  >;
  search?: Resolver<
    ResolversTypes["SearchResult"],
    ParentType,
    ContextType,
    RequireFields<QuerySearchArgs, "request">
  >;
  timeline?: Resolver<
    ResolversTypes["PaginatedTimelineResult"],
    ParentType,
    ContextType,
    RequireFields<QueryTimelineArgs, "request">
  >;
  txIdToTxHash?: Resolver<
    ResolversTypes["TxHash"],
    ParentType,
    ContextType,
    RequireFields<QueryTxIdToTxHashArgs, "txId">
  >;
  unknownEnabledModules?: Resolver<ResolversTypes["EnabledModules"], ParentType, ContextType>;
  userSigNonces?: Resolver<ResolversTypes["UserSigNonces"], ParentType, ContextType>;
  validatePublicationMetadata?: Resolver<
    ResolversTypes["PublicationValidateMetadataResult"],
    ParentType,
    ContextType,
    RequireFields<QueryValidatePublicationMetadataArgs, "request">
  >;
  verify?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<QueryVerifyArgs, "request">
  >;
  whoCollectedPublication?: Resolver<
    ResolversTypes["PaginatedWhoCollectedResult"],
    ParentType,
    ContextType,
    RequireFields<QueryWhoCollectedPublicationArgs, "request">
  >;
  whoReactedPublication?: Resolver<
    ResolversTypes["PaginatedWhoReactedResult"],
    ParentType,
    ContextType,
    RequireFields<QueryWhoReactedPublicationArgs, "request">
  >;
};

export type ReactionEventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ReactionEvent"] = ResolversParentTypes["ReactionEvent"],
> = {
  profile?: Resolver<ResolversTypes["Profile"], ParentType, ContextType>;
  reaction?: Resolver<ResolversTypes["ReactionTypes"], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ReactionIdScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["ReactionId"], any> {
  name: "ReactionId";
}

export type ReferenceModuleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ReferenceModule"] = ResolversParentTypes["ReferenceModule"],
> = {
  __resolveType: TypeResolveFn<
    | "DegreesOfSeparationReferenceModuleSettings"
    | "FollowOnlyReferenceModuleSettings"
    | "UnknownReferenceModuleSettings",
    ParentType,
    ContextType
  >;
};

export interface ReferenceModuleDataScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["ReferenceModuleData"], any> {
  name: "ReferenceModuleData";
}

export type RelayErrorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RelayError"] = ResolversParentTypes["RelayError"],
> = {
  reason?: Resolver<ResolversTypes["RelayErrorReasons"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RelayResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RelayResult"] = ResolversParentTypes["RelayResult"],
> = {
  __resolveType: TypeResolveFn<"RelayError" | "RelayerResult", ParentType, ContextType>;
};

export type RelayerResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RelayerResult"] = ResolversParentTypes["RelayerResult"],
> = {
  txHash?: Resolver<ResolversTypes["TxHash"], ParentType, ContextType>;
  txId?: Resolver<ResolversTypes["TxId"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReservedClaimableHandleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ReservedClaimableHandle"] = ResolversParentTypes["ReservedClaimableHandle"],
> = {
  expiry?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  handle?: Resolver<ResolversTypes["Handle"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["HandleClaimIdScalar"], ParentType, ContextType>;
  source?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RevenueAggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RevenueAggregate"] = ResolversParentTypes["RevenueAggregate"],
> = {
  total?: Resolver<ResolversTypes["Erc20Amount"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RevertCollectModuleSettingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RevertCollectModuleSettings"] = ResolversParentTypes["RevertCollectModuleSettings"],
> = {
  contractAddress?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["CollectModules"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RevertFollowModuleSettingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RevertFollowModuleSettings"] = ResolversParentTypes["RevertFollowModuleSettings"],
> = {
  contractAddress?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["FollowModules"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface SearchScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["Search"], any> {
  name: "Search";
}

export type SearchResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SearchResult"] = ResolversParentTypes["SearchResult"],
> = {
  __resolveType: TypeResolveFn<
    "ProfileSearchResult" | "PublicationSearchResult",
    ParentType,
    ContextType
  >;
};

export type SetDefaultProfileBroadcastItemResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SetDefaultProfileBroadcastItemResult"] = ResolversParentTypes["SetDefaultProfileBroadcastItemResult"],
> = {
  expiresAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["BroadcastId"], ParentType, ContextType>;
  typedData?: Resolver<ResolversTypes["SetDefaultProfileEIP712TypedData"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetDefaultProfileEip712TypedDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SetDefaultProfileEIP712TypedData"] = ResolversParentTypes["SetDefaultProfileEIP712TypedData"],
> = {
  domain?: Resolver<ResolversTypes["EIP712TypedDataDomain"], ParentType, ContextType>;
  types?: Resolver<
    ResolversTypes["SetDefaultProfileEIP712TypedDataTypes"],
    ParentType,
    ContextType
  >;
  value?: Resolver<
    ResolversTypes["SetDefaultProfileEIP712TypedDataValue"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetDefaultProfileEip712TypedDataTypesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SetDefaultProfileEIP712TypedDataTypes"] = ResolversParentTypes["SetDefaultProfileEIP712TypedDataTypes"],
> = {
  SetDefaultProfileWithSig?: Resolver<
    Array<ResolversTypes["EIP712TypedDataField"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetDefaultProfileEip712TypedDataValueResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SetDefaultProfileEIP712TypedDataValue"] = ResolversParentTypes["SetDefaultProfileEIP712TypedDataValue"],
> = {
  deadline?: Resolver<ResolversTypes["UnixTimestamp"], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes["Nonce"], ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes["ProfileId"], ParentType, ContextType>;
  wallet?: Resolver<ResolversTypes["EthereumAddress"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface SignatureScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Signature"], any> {
  name: "Signature";
}

export interface SourcesScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Sources"], any> {
  name: "Sources";
}

export type SybilDotOrgIdentityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SybilDotOrgIdentity"] = ResolversParentTypes["SybilDotOrgIdentity"],
> = {
  source?: Resolver<ResolversTypes["SybilDotOrgIdentitySource"], ParentType, ContextType>;
  verified?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SybilDotOrgIdentitySourceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SybilDotOrgIdentitySource"] = ResolversParentTypes["SybilDotOrgIdentitySource"],
> = {
  twitter?: Resolver<ResolversTypes["SybilDotOrgTwitterIdentity"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SybilDotOrgTwitterIdentityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SybilDotOrgTwitterIdentity"] = ResolversParentTypes["SybilDotOrgTwitterIdentity"],
> = {
  handle?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["TagResult"] = ResolversParentTypes["TagResult"],
> = {
  tag?: Resolver<ResolversTypes["PublicationTag"], ParentType, ContextType>;
  total?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimedFeeCollectModuleSettingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["TimedFeeCollectModuleSettings"] = ResolversParentTypes["TimedFeeCollectModuleSettings"],
> = {
  amount?: Resolver<ResolversTypes["ModuleFeeAmount"], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  endTimestamp?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  followerOnly?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  recipient?: Resolver<ResolversTypes["EthereumAddress"], ParentType, ContextType>;
  referralFee?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["CollectModules"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimestampScalarScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["TimestampScalar"], any> {
  name: "TimestampScalar";
}

export interface TokenIdScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["TokenId"], any> {
  name: "TokenId";
}

export type TransactionErrorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["TransactionError"] = ResolversParentTypes["TransactionError"],
> = {
  reason?: Resolver<ResolversTypes["TransactionErrorReasons"], ParentType, ContextType>;
  txReceipt?: Resolver<Maybe<ResolversTypes["TransactionReceipt"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionIndexedResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["TransactionIndexedResult"] = ResolversParentTypes["TransactionIndexedResult"],
> = {
  indexed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  metadataStatus?: Resolver<
    Maybe<ResolversTypes["PublicationMetadataStatus"]>,
    ParentType,
    ContextType
  >;
  txHash?: Resolver<ResolversTypes["TxHash"], ParentType, ContextType>;
  txReceipt?: Resolver<Maybe<ResolversTypes["TransactionReceipt"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionReceiptResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["TransactionReceipt"] = ResolversParentTypes["TransactionReceipt"],
> = {
  blockHash?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  byzantium?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  confirmations?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contractAddress?: Resolver<Maybe<ResolversTypes["ContractAddress"]>, ParentType, ContextType>;
  cumulativeGasUsed?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  effectiveGasPrice?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  from?: Resolver<ResolversTypes["EthereumAddress"], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  logs?: Resolver<Array<ResolversTypes["Log"]>, ParentType, ContextType>;
  logsBloom?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  root?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes["EthereumAddress"]>, ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes["TxHash"], ParentType, ContextType>;
  transactionIndex?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["TransactionResult"] = ResolversParentTypes["TransactionResult"],
> = {
  __resolveType: TypeResolveFn<
    "TransactionError" | "TransactionIndexedResult",
    ParentType,
    ContextType
  >;
};

export interface TxHashScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["TxHash"], any> {
  name: "TxHash";
}

export interface TxIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["TxId"], any> {
  name: "TxId";
}

export interface UnixTimestampScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["UnixTimestamp"], any> {
  name: "UnixTimestamp";
}

export type UnknownCollectModuleSettingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UnknownCollectModuleSettings"] = ResolversParentTypes["UnknownCollectModuleSettings"],
> = {
  collectModuleReturnData?: Resolver<ResolversTypes["CollectModuleData"], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["CollectModules"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UnknownFollowModuleSettingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UnknownFollowModuleSettings"] = ResolversParentTypes["UnknownFollowModuleSettings"],
> = {
  contractAddress?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  followModuleReturnData?: Resolver<ResolversTypes["FollowModuleData"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["FollowModules"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UnknownReferenceModuleSettingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UnknownReferenceModuleSettings"] = ResolversParentTypes["UnknownReferenceModuleSettings"],
> = {
  contractAddress?: Resolver<ResolversTypes["ContractAddress"], ParentType, ContextType>;
  referenceModuleReturnData?: Resolver<
    ResolversTypes["ReferenceModuleData"],
    ParentType,
    ContextType
  >;
  type?: Resolver<ResolversTypes["ReferenceModules"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["Url"], any> {
  name: "Url";
}

export type UserSigNoncesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserSigNonces"] = ResolversParentTypes["UserSigNonces"],
> = {
  lensHubOnChainSigNonce?: Resolver<ResolversTypes["Nonce"], ParentType, ContextType>;
  peripheryOnChainSigNonce?: Resolver<ResolversTypes["Nonce"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["Void"], any> {
  name: "Void";
}

export type WalletResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Wallet"] = ResolversParentTypes["Wallet"],
> = {
  address?: Resolver<ResolversTypes["EthereumAddress"], ParentType, ContextType>;
  defaultProfile?: Resolver<Maybe<ResolversTypes["Profile"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WhoReactedResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["WhoReactedResult"] = ResolversParentTypes["WhoReactedResult"],
> = {
  profile?: Resolver<ResolversTypes["Profile"], ParentType, ContextType>;
  reaction?: Resolver<ResolversTypes["ReactionTypes"], ParentType, ContextType>;
  reactionAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  reactionId?: Resolver<ResolversTypes["ReactionId"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorldcoinIdentityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["WorldcoinIdentity"] = ResolversParentTypes["WorldcoinIdentity"],
> = {
  isHuman?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AccessConditionOutput?: AccessConditionOutputResolvers<ContextType>;
  AndConditionOutput?: AndConditionOutputResolvers<ContextType>;
  ApprovedAllowanceAmount?: ApprovedAllowanceAmountResolvers<ContextType>;
  Attribute?: AttributeResolvers<ContextType>;
  AuthChallengeResult?: AuthChallengeResultResolvers<ContextType>;
  AuthenticationResult?: AuthenticationResultResolvers<ContextType>;
  BlockchainData?: GraphQLScalarType;
  BroadcastId?: GraphQLScalarType;
  CanCommentResponse?: CanCommentResponseResolvers<ContextType>;
  CanDecryptResponse?: CanDecryptResponseResolvers<ContextType>;
  CanMirrorResponse?: CanMirrorResponseResolvers<ContextType>;
  ChainId?: GraphQLScalarType;
  ClaimableHandles?: ClaimableHandlesResolvers<ContextType>;
  CollectConditionOutput?: CollectConditionOutputResolvers<ContextType>;
  CollectModule?: CollectModuleResolvers<ContextType>;
  CollectModuleData?: GraphQLScalarType;
  CollectedEvent?: CollectedEventResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  ContentEncryptionKey?: GraphQLScalarType;
  ContractAddress?: GraphQLScalarType;
  CreateBurnEIP712TypedData?: CreateBurnEip712TypedDataResolvers<ContextType>;
  CreateBurnEIP712TypedDataTypes?: CreateBurnEip712TypedDataTypesResolvers<ContextType>;
  CreateBurnEIP712TypedDataValue?: CreateBurnEip712TypedDataValueResolvers<ContextType>;
  CreateBurnProfileBroadcastItemResult?: CreateBurnProfileBroadcastItemResultResolvers<ContextType>;
  CreateCollectBroadcastItemResult?: CreateCollectBroadcastItemResultResolvers<ContextType>;
  CreateCollectEIP712TypedData?: CreateCollectEip712TypedDataResolvers<ContextType>;
  CreateCollectEIP712TypedDataTypes?: CreateCollectEip712TypedDataTypesResolvers<ContextType>;
  CreateCollectEIP712TypedDataValue?: CreateCollectEip712TypedDataValueResolvers<ContextType>;
  CreateCommentBroadcastItemResult?: CreateCommentBroadcastItemResultResolvers<ContextType>;
  CreateCommentEIP712TypedData?: CreateCommentEip712TypedDataResolvers<ContextType>;
  CreateCommentEIP712TypedDataTypes?: CreateCommentEip712TypedDataTypesResolvers<ContextType>;
  CreateCommentEIP712TypedDataValue?: CreateCommentEip712TypedDataValueResolvers<ContextType>;
  CreateFollowBroadcastItemResult?: CreateFollowBroadcastItemResultResolvers<ContextType>;
  CreateFollowEIP712TypedData?: CreateFollowEip712TypedDataResolvers<ContextType>;
  CreateFollowEIP712TypedDataTypes?: CreateFollowEip712TypedDataTypesResolvers<ContextType>;
  CreateFollowEIP712TypedDataValue?: CreateFollowEip712TypedDataValueResolvers<ContextType>;
  CreateHandle?: GraphQLScalarType;
  CreateMirrorBroadcastItemResult?: CreateMirrorBroadcastItemResultResolvers<ContextType>;
  CreateMirrorEIP712TypedData?: CreateMirrorEip712TypedDataResolvers<ContextType>;
  CreateMirrorEIP712TypedDataTypes?: CreateMirrorEip712TypedDataTypesResolvers<ContextType>;
  CreateMirrorEIP712TypedDataValue?: CreateMirrorEip712TypedDataValueResolvers<ContextType>;
  CreatePostBroadcastItemResult?: CreatePostBroadcastItemResultResolvers<ContextType>;
  CreatePostEIP712TypedData?: CreatePostEip712TypedDataResolvers<ContextType>;
  CreatePostEIP712TypedDataTypes?: CreatePostEip712TypedDataTypesResolvers<ContextType>;
  CreatePostEIP712TypedDataValue?: CreatePostEip712TypedDataValueResolvers<ContextType>;
  CreateSetDispatcherBroadcastItemResult?: CreateSetDispatcherBroadcastItemResultResolvers<ContextType>;
  CreateSetDispatcherEIP712TypedData?: CreateSetDispatcherEip712TypedDataResolvers<ContextType>;
  CreateSetDispatcherEIP712TypedDataTypes?: CreateSetDispatcherEip712TypedDataTypesResolvers<ContextType>;
  CreateSetDispatcherEIP712TypedDataValue?: CreateSetDispatcherEip712TypedDataValueResolvers<ContextType>;
  CreateSetFollowModuleBroadcastItemResult?: CreateSetFollowModuleBroadcastItemResultResolvers<ContextType>;
  CreateSetFollowModuleEIP712TypedData?: CreateSetFollowModuleEip712TypedDataResolvers<ContextType>;
  CreateSetFollowModuleEIP712TypedDataTypes?: CreateSetFollowModuleEip712TypedDataTypesResolvers<ContextType>;
  CreateSetFollowModuleEIP712TypedDataValue?: CreateSetFollowModuleEip712TypedDataValueResolvers<ContextType>;
  CreateSetFollowNFTUriBroadcastItemResult?: CreateSetFollowNftUriBroadcastItemResultResolvers<ContextType>;
  CreateSetFollowNFTUriEIP712TypedData?: CreateSetFollowNftUriEip712TypedDataResolvers<ContextType>;
  CreateSetFollowNFTUriEIP712TypedDataTypes?: CreateSetFollowNftUriEip712TypedDataTypesResolvers<ContextType>;
  CreateSetFollowNFTUriEIP712TypedDataValue?: CreateSetFollowNftUriEip712TypedDataValueResolvers<ContextType>;
  CreateSetProfileImageUriBroadcastItemResult?: CreateSetProfileImageUriBroadcastItemResultResolvers<ContextType>;
  CreateSetProfileImageUriEIP712TypedData?: CreateSetProfileImageUriEip712TypedDataResolvers<ContextType>;
  CreateSetProfileImageUriEIP712TypedDataTypes?: CreateSetProfileImageUriEip712TypedDataTypesResolvers<ContextType>;
  CreateSetProfileImageUriEIP712TypedDataValue?: CreateSetProfileImageUriEip712TypedDataValueResolvers<ContextType>;
  CreateSetProfileMetadataURIBroadcastItemResult?: CreateSetProfileMetadataUriBroadcastItemResultResolvers<ContextType>;
  CreateSetProfileMetadataURIEIP712TypedData?: CreateSetProfileMetadataUrieip712TypedDataResolvers<ContextType>;
  CreateSetProfileMetadataURIEIP712TypedDataTypes?: CreateSetProfileMetadataUrieip712TypedDataTypesResolvers<ContextType>;
  CreateSetProfileMetadataURIEIP712TypedDataValue?: CreateSetProfileMetadataUrieip712TypedDataValueResolvers<ContextType>;
  CreateToggleFollowBroadcastItemResult?: CreateToggleFollowBroadcastItemResultResolvers<ContextType>;
  CreateToggleFollowEIP712TypedData?: CreateToggleFollowEip712TypedDataResolvers<ContextType>;
  CreateToggleFollowEIP712TypedDataTypes?: CreateToggleFollowEip712TypedDataTypesResolvers<ContextType>;
  CreateToggleFollowEIP712TypedDataValue?: CreateToggleFollowEip712TypedDataValueResolvers<ContextType>;
  CreateUnfollowBroadcastItemResult?: CreateUnfollowBroadcastItemResultResolvers<ContextType>;
  Cursor?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  DegreesOfSeparationReferenceModuleSettings?: DegreesOfSeparationReferenceModuleSettingsResolvers<ContextType>;
  Dispatcher?: DispatcherResolvers<ContextType>;
  DoesFollowResponse?: DoesFollowResponseResolvers<ContextType>;
  EIP712TypedDataDomain?: Eip712TypedDataDomainResolvers<ContextType>;
  EIP712TypedDataField?: Eip712TypedDataFieldResolvers<ContextType>;
  ElectedMirror?: ElectedMirrorResolvers<ContextType>;
  EnabledModule?: EnabledModuleResolvers<ContextType>;
  EnabledModules?: EnabledModulesResolvers<ContextType>;
  EncryptedFieldsOutput?: EncryptedFieldsOutputResolvers<ContextType>;
  EncryptedMedia?: EncryptedMediaResolvers<ContextType>;
  EncryptedMediaSet?: EncryptedMediaSetResolvers<ContextType>;
  EncryptedValueScalar?: GraphQLScalarType;
  EncryptionParamsOutput?: EncryptionParamsOutputResolvers<ContextType>;
  Ens?: GraphQLScalarType;
  EnsOnChainIdentity?: EnsOnChainIdentityResolvers<ContextType>;
  EoaOwnershipOutput?: EoaOwnershipOutputResolvers<ContextType>;
  Erc20?: Erc20Resolvers<ContextType>;
  Erc20Amount?: Erc20AmountResolvers<ContextType>;
  Erc20OwnershipOutput?: Erc20OwnershipOutputResolvers<ContextType>;
  EthereumAddress?: GraphQLScalarType;
  ExploreProfileResult?: ExploreProfileResultResolvers<ContextType>;
  ExplorePublicationResult?: ExplorePublicationResultResolvers<ContextType>;
  FeeCollectModuleSettings?: FeeCollectModuleSettingsResolvers<ContextType>;
  FeeFollowModuleSettings?: FeeFollowModuleSettingsResolvers<ContextType>;
  FeedItem?: FeedItemResolvers<ContextType>;
  FeedItemRoot?: FeedItemRootResolvers<ContextType>;
  FollowConditionOutput?: FollowConditionOutputResolvers<ContextType>;
  FollowModule?: FollowModuleResolvers<ContextType>;
  FollowModuleData?: GraphQLScalarType;
  FollowOnlyReferenceModuleSettings?: FollowOnlyReferenceModuleSettingsResolvers<ContextType>;
  FollowRevenueResult?: FollowRevenueResultResolvers<ContextType>;
  Follower?: FollowerResolvers<ContextType>;
  FollowerNftOwnedTokenIds?: FollowerNftOwnedTokenIdsResolvers<ContextType>;
  Following?: FollowingResolvers<ContextType>;
  FreeCollectModuleSettings?: FreeCollectModuleSettingsResolvers<ContextType>;
  GenerateModuleCurrencyApproval?: GenerateModuleCurrencyApprovalResolvers<ContextType>;
  GlobalProtocolStats?: GlobalProtocolStatsResolvers<ContextType>;
  Handle?: GraphQLScalarType;
  HandleClaimIdScalar?: GraphQLScalarType;
  IfpsCid?: GraphQLScalarType;
  InternalPublicationId?: GraphQLScalarType;
  Jwt?: GraphQLScalarType;
  LimitScalar?: GraphQLScalarType;
  LimitedFeeCollectModuleSettings?: LimitedFeeCollectModuleSettingsResolvers<ContextType>;
  LimitedTimedFeeCollectModuleSettings?: LimitedTimedFeeCollectModuleSettingsResolvers<ContextType>;
  Locale?: GraphQLScalarType;
  Log?: LogResolvers<ContextType>;
  MainPostReference?: MainPostReferenceResolvers<ContextType>;
  Markdown?: GraphQLScalarType;
  Media?: MediaResolvers<ContextType>;
  MediaOutput?: MediaOutputResolvers<ContextType>;
  MediaSet?: MediaSetResolvers<ContextType>;
  MentionPublication?: MentionPublicationResolvers<ContextType>;
  MetadataAttributeOutput?: MetadataAttributeOutputResolvers<ContextType>;
  MetadataOutput?: MetadataOutputResolvers<ContextType>;
  MimeType?: GraphQLScalarType;
  Mirror?: MirrorResolvers<ContextType>;
  MirrorEvent?: MirrorEventResolvers<ContextType>;
  MirrorablePublication?: MirrorablePublicationResolvers<ContextType>;
  ModuleFeeAmount?: ModuleFeeAmountResolvers<ContextType>;
  ModuleInfo?: ModuleInfoResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NFT?: NftResolvers<ContextType>;
  NFTContent?: NftContentResolvers<ContextType>;
  NFTsResult?: NfTsResultResolvers<ContextType>;
  NewCollectNotification?: NewCollectNotificationResolvers<ContextType>;
  NewCommentNotification?: NewCommentNotificationResolvers<ContextType>;
  NewFollowerNotification?: NewFollowerNotificationResolvers<ContextType>;
  NewMentionNotification?: NewMentionNotificationResolvers<ContextType>;
  NewMirrorNotification?: NewMirrorNotificationResolvers<ContextType>;
  NewReactionNotification?: NewReactionNotificationResolvers<ContextType>;
  NftImage?: NftImageResolvers<ContextType>;
  NftOwnershipChallengeResult?: NftOwnershipChallengeResultResolvers<ContextType>;
  NftOwnershipId?: GraphQLScalarType;
  NftOwnershipOutput?: NftOwnershipOutputResolvers<ContextType>;
  Nonce?: GraphQLScalarType;
  Notification?: NotificationResolvers<ContextType>;
  NotificationId?: GraphQLScalarType;
  OnChainIdentity?: OnChainIdentityResolvers<ContextType>;
  OrConditionOutput?: OrConditionOutputResolvers<ContextType>;
  Owner?: OwnerResolvers<ContextType>;
  PaginatedAllPublicationsTagsResult?: PaginatedAllPublicationsTagsResultResolvers<ContextType>;
  PaginatedFeedResult?: PaginatedFeedResultResolvers<ContextType>;
  PaginatedFollowersResult?: PaginatedFollowersResultResolvers<ContextType>;
  PaginatedFollowingResult?: PaginatedFollowingResultResolvers<ContextType>;
  PaginatedNotificationResult?: PaginatedNotificationResultResolvers<ContextType>;
  PaginatedProfilePublicationsForSaleResult?: PaginatedProfilePublicationsForSaleResultResolvers<ContextType>;
  PaginatedProfileResult?: PaginatedProfileResultResolvers<ContextType>;
  PaginatedPublicationResult?: PaginatedPublicationResultResolvers<ContextType>;
  PaginatedResultInfo?: PaginatedResultInfoResolvers<ContextType>;
  PaginatedTimelineResult?: PaginatedTimelineResultResolvers<ContextType>;
  PaginatedWhoCollectedResult?: PaginatedWhoCollectedResultResolvers<ContextType>;
  PaginatedWhoReactedResult?: PaginatedWhoReactedResultResolvers<ContextType>;
  PendingApproveFollowsResult?: PendingApproveFollowsResultResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Profile?: ProfileResolvers<ContextType>;
  ProfileFollowModuleSettings?: ProfileFollowModuleSettingsResolvers<ContextType>;
  ProfileId?: GraphQLScalarType;
  ProfileInterest?: GraphQLScalarType;
  ProfileMedia?: ProfileMediaResolvers<ContextType>;
  ProfileOwnershipOutput?: ProfileOwnershipOutputResolvers<ContextType>;
  ProfilePublicationRevenueResult?: ProfilePublicationRevenueResultResolvers<ContextType>;
  ProfileSearchResult?: ProfileSearchResultResolvers<ContextType>;
  ProfileStats?: ProfileStatsResolvers<ContextType>;
  ProviderSpecificParamsOutput?: ProviderSpecificParamsOutputResolvers<ContextType>;
  ProxyActionError?: ProxyActionErrorResolvers<ContextType>;
  ProxyActionId?: GraphQLScalarType;
  ProxyActionQueued?: ProxyActionQueuedResolvers<ContextType>;
  ProxyActionStatusResult?: ProxyActionStatusResultResolvers<ContextType>;
  ProxyActionStatusResultUnion?: ProxyActionStatusResultUnionResolvers<ContextType>;
  PublicMediaResults?: PublicMediaResultsResolvers<ContextType>;
  Publication?: PublicationResolvers<ContextType>;
  PublicationForSale?: PublicationForSaleResolvers<ContextType>;
  PublicationId?: GraphQLScalarType;
  PublicationMetadataStatus?: PublicationMetadataStatusResolvers<ContextType>;
  PublicationRevenue?: PublicationRevenueResolvers<ContextType>;
  PublicationSearchResult?: PublicationSearchResultResolvers<ContextType>;
  PublicationSearchResultItem?: PublicationSearchResultItemResolvers<ContextType>;
  PublicationStats?: PublicationStatsResolvers<ContextType>;
  PublicationTag?: GraphQLScalarType;
  PublicationUrl?: GraphQLScalarType;
  PublicationValidateMetadataResult?: PublicationValidateMetadataResultResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ReactionEvent?: ReactionEventResolvers<ContextType>;
  ReactionId?: GraphQLScalarType;
  ReferenceModule?: ReferenceModuleResolvers<ContextType>;
  ReferenceModuleData?: GraphQLScalarType;
  RelayError?: RelayErrorResolvers<ContextType>;
  RelayResult?: RelayResultResolvers<ContextType>;
  RelayerResult?: RelayerResultResolvers<ContextType>;
  ReservedClaimableHandle?: ReservedClaimableHandleResolvers<ContextType>;
  RevenueAggregate?: RevenueAggregateResolvers<ContextType>;
  RevertCollectModuleSettings?: RevertCollectModuleSettingsResolvers<ContextType>;
  RevertFollowModuleSettings?: RevertFollowModuleSettingsResolvers<ContextType>;
  Search?: GraphQLScalarType;
  SearchResult?: SearchResultResolvers<ContextType>;
  SetDefaultProfileBroadcastItemResult?: SetDefaultProfileBroadcastItemResultResolvers<ContextType>;
  SetDefaultProfileEIP712TypedData?: SetDefaultProfileEip712TypedDataResolvers<ContextType>;
  SetDefaultProfileEIP712TypedDataTypes?: SetDefaultProfileEip712TypedDataTypesResolvers<ContextType>;
  SetDefaultProfileEIP712TypedDataValue?: SetDefaultProfileEip712TypedDataValueResolvers<ContextType>;
  Signature?: GraphQLScalarType;
  Sources?: GraphQLScalarType;
  SybilDotOrgIdentity?: SybilDotOrgIdentityResolvers<ContextType>;
  SybilDotOrgIdentitySource?: SybilDotOrgIdentitySourceResolvers<ContextType>;
  SybilDotOrgTwitterIdentity?: SybilDotOrgTwitterIdentityResolvers<ContextType>;
  TagResult?: TagResultResolvers<ContextType>;
  TimedFeeCollectModuleSettings?: TimedFeeCollectModuleSettingsResolvers<ContextType>;
  TimestampScalar?: GraphQLScalarType;
  TokenId?: GraphQLScalarType;
  TransactionError?: TransactionErrorResolvers<ContextType>;
  TransactionIndexedResult?: TransactionIndexedResultResolvers<ContextType>;
  TransactionReceipt?: TransactionReceiptResolvers<ContextType>;
  TransactionResult?: TransactionResultResolvers<ContextType>;
  TxHash?: GraphQLScalarType;
  TxId?: GraphQLScalarType;
  UnixTimestamp?: GraphQLScalarType;
  UnknownCollectModuleSettings?: UnknownCollectModuleSettingsResolvers<ContextType>;
  UnknownFollowModuleSettings?: UnknownFollowModuleSettingsResolvers<ContextType>;
  UnknownReferenceModuleSettings?: UnknownReferenceModuleSettingsResolvers<ContextType>;
  Url?: GraphQLScalarType;
  UserSigNonces?: UserSigNoncesResolvers<ContextType>;
  Void?: GraphQLScalarType;
  Wallet?: WalletResolvers<ContextType>;
  WhoReactedResult?: WhoReactedResultResolvers<ContextType>;
  WorldcoinIdentity?: WorldcoinIdentityResolvers<ContextType>;
};
