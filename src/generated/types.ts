/* eslint-disable @typescript-eslint/no-explicit-any */
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
  EthereumAddress: any;
  Jwt: any;
  TxHash: any;
  TxId: any;
  InternalPublicationId: any;
  ProfileId: any;
  ContractAddress: any;
  Url: any;
  Handle: any;
  MimeType: any;
  Sources: any;
  FollowModuleData: any;
  Ens: any;
  Markdown: any;
  Locale: any;
  DateTime: any;
  CollectModuleData: any;
  ReferenceModuleData: any;
  Cursor: any;
  LimitScalar: any;
  TimestampScalar: any;
  BlockchainData: any;
  ChainId: any;
  NftOwnershipId: any;
  NotificationId: any;
  UnixTimestamp: any;
  PublicationTag: any;
  Search: any;
  Nonce: any;
  HandleClaimIdScalar: any;
  ProxyActionId: any;
  ReactionId: any;
  Void: any;
  Signature: any;
  BroadcastId: any;
  PublicationId: any;
  PublicationUrl: any;
  CreateHandle: any;
};

export type Query = {
  __typename?: "Query";
  challenge: AuthChallengeResult;
  verify: Scalars["Boolean"];
  txIdToTxHash: Scalars["TxHash"];
  explorePublications: ExplorePublicationResult;
  exploreProfiles: ExploreProfileResult;
  feed: PaginatedFeedResult;
  feedHighlights: PaginatedTimelineResult;
  /** @deprecated You should be using feed, this will not be supported after 15th November 2021, please migrate. */
  timeline: PaginatedTimelineResult;
  pendingApprovalFollows: PendingApproveFollowsResult;
  doesFollow: Array<DoesFollowResponse>;
  following: PaginatedFollowingResult;
  followers: PaginatedFollowersResult;
  followerNftOwnedTokenIds?: Maybe<FollowerNftOwnedTokenIds>;
  mutualFollowersProfiles: PaginatedProfileResult;
  ping: Scalars["String"];
  hasTxHashBeenIndexed: TransactionResult;
  enabledModuleCurrencies: Array<Erc20>;
  approvedModuleAllowanceAmount: Array<ApprovedAllowanceAmount>;
  generateModuleCurrencyApprovalData: GenerateModuleCurrencyApproval;
  profileFollowModuleBeenRedeemed: Scalars["Boolean"];
  enabledModules: EnabledModules;
  unknownEnabledModules: EnabledModules;
  nfts: NfTsResult;
  nftOwnershipChallenge: NftOwnershipChallengeResult;
  notifications: PaginatedNotificationResult;
  profiles: PaginatedProfileResult;
  profile?: Maybe<Profile>;
  recommendedProfiles: Array<Profile>;
  defaultProfile?: Maybe<Profile>;
  globalProtocolStats: GlobalProtocolStats;
  publications: PaginatedPublicationResult;
  publication?: Maybe<Publication>;
  whoCollectedPublication: PaginatedWhoCollectedResult;
  profilePublicationsForSale: PaginatedProfilePublicationsForSaleResult;
  allPublicationsTags: PaginatedAllPublicationsTagsResult;
  search: SearchResult;
  userSigNonces: UserSigNonces;
  claimableHandles: ClaimableHandles;
  claimableStatus: ClaimStatus;
  internalPublicationFilter: PaginatedPublicationResult;
  profileOnChainIdentity: Array<OnChainIdentity>;
  proxyActionStatus: ProxyActionStatusResultUnion;
  validatePublicationMetadata: PublicationValidateMetadataResult;
  publicationMetadataStatus: PublicationMetadataStatus;
  whoReactedPublication: PaginatedWhoReactedResult;
  profilePublicationRevenue: ProfilePublicationRevenueResult;
  publicationRevenue?: Maybe<PublicationRevenue>;
  profileFollowRevenue: FollowRevenueResult;
  rel?: Maybe<Scalars["Void"]>;
};


export type QueryChallengeArgs = {
  request: ChallengeRequest;
};


export type QueryVerifyArgs = {
  request: VerifyRequest;
};


export type QueryTxIdToTxHashArgs = {
  txId: Scalars["TxId"];
};


export type QueryExplorePublicationsArgs = {
  request: ExplorePublicationRequest;
};


export type QueryExploreProfilesArgs = {
  request: ExploreProfilesRequest;
};


export type QueryFeedArgs = {
  request: FeedRequest;
};


export type QueryFeedHighlightsArgs = {
  request: FeedHighlightsRequest;
};


export type QueryTimelineArgs = {
  request: TimelineRequest;
};


export type QueryPendingApprovalFollowsArgs = {
  request: PendingApprovalFollowsRequest;
};


export type QueryDoesFollowArgs = {
  request: DoesFollowRequest;
};


export type QueryFollowingArgs = {
  request: FollowingRequest;
};


export type QueryFollowersArgs = {
  request: FollowersRequest;
};


export type QueryFollowerNftOwnedTokenIdsArgs = {
  request: FollowerNftOwnedTokenIdsRequest;
};


export type QueryMutualFollowersProfilesArgs = {
  request: MutualFollowersProfilesQueryRequest;
};


export type QueryHasTxHashBeenIndexedArgs = {
  request: HasTxHashBeenIndexedRequest;
};


export type QueryApprovedModuleAllowanceAmountArgs = {
  request: ApprovedModuleAllowanceAmountRequest;
};


export type QueryGenerateModuleCurrencyApprovalDataArgs = {
  request: GenerateModuleCurrencyApprovalDataRequest;
};


export type QueryProfileFollowModuleBeenRedeemedArgs = {
  request: ProfileFollowModuleBeenRedeemedRequest;
};


export type QueryNftsArgs = {
  request: NfTsRequest;
};


export type QueryNftOwnershipChallengeArgs = {
  request: NftOwnershipChallengeRequest;
};


export type QueryNotificationsArgs = {
  request: NotificationRequest;
};


export type QueryProfilesArgs = {
  request: ProfileQueryRequest;
};


export type QueryProfileArgs = {
  request: SingleProfileQueryRequest;
};


export type QueryRecommendedProfilesArgs = {
  options?: InputMaybe<RecommendedProfileOptions>;
};


export type QueryDefaultProfileArgs = {
  request: DefaultProfileRequest;
};


export type QueryGlobalProtocolStatsArgs = {
  request?: InputMaybe<GlobalProtocolStatsRequest>;
};


export type QueryPublicationsArgs = {
  request: PublicationsQueryRequest;
};


export type QueryPublicationArgs = {
  request: PublicationQueryRequest;
};


export type QueryWhoCollectedPublicationArgs = {
  request: WhoCollectedPublicationRequest;
};


export type QueryProfilePublicationsForSaleArgs = {
  request: ProfilePublicationsForSaleRequest;
};


export type QueryAllPublicationsTagsArgs = {
  request: AllPublicationsTagsRequest;
};


export type QuerySearchArgs = {
  request: SearchQueryRequest;
};


export type QueryInternalPublicationFilterArgs = {
  request: InternalPublicationsFilterRequest;
};


export type QueryProfileOnChainIdentityArgs = {
  request: ProfileOnChainIdentityRequest;
};


export type QueryProxyActionStatusArgs = {
  proxyActionId: Scalars["ProxyActionId"];
};


export type QueryValidatePublicationMetadataArgs = {
  request: ValidatePublicationMetadataRequest;
};


export type QueryPublicationMetadataStatusArgs = {
  request: GetPublicationMetadataStatusRequest;
};


export type QueryWhoReactedPublicationArgs = {
  request: WhoReactedPublicationRequest;
};


export type QueryProfilePublicationRevenueArgs = {
  request: ProfilePublicationRevenueQueryRequest;
};


export type QueryPublicationRevenueArgs = {
  request: PublicationRevenueQueryRequest;
};


export type QueryProfileFollowRevenueArgs = {
  request: ProfileFollowRevenueQueryRequest;
};


export type QueryRelArgs = {
  request: RelRequest;
};

export type AuthChallengeResult = {
  __typename?: "AuthChallengeResult";
  text: Scalars["String"];
};

export type ChallengeRequest = {
  address: Scalars["EthereumAddress"];
};

export type VerifyRequest = {
  accessToken: Scalars["Jwt"];
};

export type ExplorePublicationResult = {
  __typename?: "ExplorePublicationResult";
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

export type Publication = Post | Comment | Mirror;

export type Post = {
  __typename?: "Post";
  id: Scalars["InternalPublicationId"];
  profile: Profile;
  stats: PublicationStats;
  metadata: MetadataOutput;
  onChainContentURI: Scalars["String"];
  createdAt: Scalars["DateTime"];
  collectModule: CollectModule;
  referenceModule?: Maybe<ReferenceModule>;
  appId?: Maybe<Scalars["Sources"]>;
  hidden: Scalars["Boolean"];
  collectNftAddress?: Maybe<Scalars["ContractAddress"]>;
  /** @deprecated use `feed` query, timeline query will be killed on the 15th November. This includes this field. */
  collectedBy?: Maybe<Wallet>;
  reaction?: Maybe<ReactionTypes>;
  hasCollectedByMe: Scalars["Boolean"];
  canComment: CanCommentResponse;
  canMirror: CanMirrorResponse;
  mirrors: Array<Scalars["InternalPublicationId"]>;
};


export type PostReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>;
};


export type PostCanCommentArgs = {
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};


export type PostCanMirrorArgs = {
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};


export type PostMirrorsArgs = {
  by?: InputMaybe<Scalars["ProfileId"]>;
};

export type Profile = {
  __typename?: "Profile";
  id: Scalars["ProfileId"];
  name?: Maybe<Scalars["String"]>;
  bio?: Maybe<Scalars["String"]>;
  followNftAddress?: Maybe<Scalars["ContractAddress"]>;
  metadata?: Maybe<Scalars["Url"]>;
  handle: Scalars["Handle"];
  picture?: Maybe<ProfileMedia>;
  coverPicture?: Maybe<ProfileMedia>;
  ownedBy: Scalars["EthereumAddress"];
  dispatcher?: Maybe<Dispatcher>;
  stats: ProfileStats;
  followModule?: Maybe<FollowModule>;
  isDefault: Scalars["Boolean"];
  attributes?: Maybe<Array<Attribute>>;
  onChainIdentity: OnChainIdentity;
  isFollowedByMe: Scalars["Boolean"];
  isFollowing: Scalars["Boolean"];
};


export type ProfileIsFollowingArgs = {
  who?: InputMaybe<Scalars["ProfileId"]>;
};

export type ProfileMedia = NftImage | MediaSet;

export type NftImage = {
  __typename?: "NftImage";
  contractAddress: Scalars["ContractAddress"];
  tokenId: Scalars["String"];
  uri: Scalars["Url"];
  chainId: Scalars["Int"];
  verified: Scalars["Boolean"];
};

export type MediaSet = {
  __typename?: "MediaSet";
  original: Media;
  /** @deprecated should not be used will always be null */
  small?: Maybe<Media>;
  /** @deprecated should not be used will always be null */
  medium?: Maybe<Media>;
};

export type Media = {
  __typename?: "Media";
  url: Scalars["Url"];
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  mimeType?: Maybe<Scalars["MimeType"]>;
  altTag?: Maybe<Scalars["String"]>;
  cover?: Maybe<Scalars["String"]>;
};

export type Dispatcher = {
  __typename?: "Dispatcher";
  address: Scalars["EthereumAddress"];
  canUseRelay: Scalars["Boolean"];
};

export type ProfileStats = {
  __typename?: "ProfileStats";
  id: Scalars["ProfileId"];
  totalFollowers: Scalars["Int"];
  totalFollowing: Scalars["Int"];
  totalPosts: Scalars["Int"];
  totalComments: Scalars["Int"];
  totalMirrors: Scalars["Int"];
  totalPublications: Scalars["Int"];
  totalCollects: Scalars["Int"];
  commentsTotal: Scalars["Int"];
  postsTotal: Scalars["Int"];
  mirrorsTotal: Scalars["Int"];
  publicationsTotal: Scalars["Int"];
};


export type ProfileStatsCommentsTotalArgs = {
  forSources: Array<Scalars["Sources"]>;
};


export type ProfileStatsPostsTotalArgs = {
  forSources: Array<Scalars["Sources"]>;
};


export type ProfileStatsMirrorsTotalArgs = {
  forSources: Array<Scalars["Sources"]>;
};


export type ProfileStatsPublicationsTotalArgs = {
  forSources: Array<Scalars["Sources"]>;
};

export type FollowModule = FeeFollowModuleSettings | ProfileFollowModuleSettings | RevertFollowModuleSettings | UnknownFollowModuleSettings;

export type FeeFollowModuleSettings = {
  __typename?: "FeeFollowModuleSettings";
  type: FollowModules;
  contractAddress: Scalars["ContractAddress"];
  amount: ModuleFeeAmount;
  recipient: Scalars["EthereumAddress"];
};

export enum FollowModules {
  FeeFollowModule = "FeeFollowModule",
  RevertFollowModule = "RevertFollowModule",
  ProfileFollowModule = "ProfileFollowModule",
  UnknownFollowModule = "UnknownFollowModule"
}

export type ModuleFeeAmount = {
  __typename?: "ModuleFeeAmount";
  asset: Erc20;
  value: Scalars["String"];
};

export type Erc20 = {
  __typename?: "Erc20";
  name: Scalars["String"];
  symbol: Scalars["String"];
  decimals: Scalars["Int"];
  address: Scalars["ContractAddress"];
};

export type ProfileFollowModuleSettings = {
  __typename?: "ProfileFollowModuleSettings";
  type: FollowModules;
  contractAddress: Scalars["ContractAddress"];
};

export type RevertFollowModuleSettings = {
  __typename?: "RevertFollowModuleSettings";
  type: FollowModules;
  contractAddress: Scalars["ContractAddress"];
};

export type UnknownFollowModuleSettings = {
  __typename?: "UnknownFollowModuleSettings";
  type: FollowModules;
  contractAddress: Scalars["ContractAddress"];
  followModuleReturnData: Scalars["FollowModuleData"];
};

export type Attribute = {
  __typename?: "Attribute";
  displayType?: Maybe<Scalars["String"]>;
  traitType?: Maybe<Scalars["String"]>;
  key: Scalars["String"];
  value: Scalars["String"];
};

export type OnChainIdentity = {
  __typename?: "OnChainIdentity";
  proofOfHumanity: Scalars["Boolean"];
  ens?: Maybe<EnsOnChainIdentity>;
  sybilDotOrg: SybilDotOrgIdentity;
  worldcoin: WorldcoinIdentity;
};

export type EnsOnChainIdentity = {
  __typename?: "EnsOnChainIdentity";
  name?: Maybe<Scalars["Ens"]>;
};

export type SybilDotOrgIdentity = {
  __typename?: "SybilDotOrgIdentity";
  verified: Scalars["Boolean"];
  source: SybilDotOrgIdentitySource;
};

export type SybilDotOrgIdentitySource = {
  __typename?: "SybilDotOrgIdentitySource";
  twitter: SybilDotOrgTwitterIdentity;
};

export type SybilDotOrgTwitterIdentity = {
  __typename?: "SybilDotOrgTwitterIdentity";
  handle?: Maybe<Scalars["String"]>;
};

export type WorldcoinIdentity = {
  __typename?: "WorldcoinIdentity";
  isHuman: Scalars["Boolean"];
};

export type PublicationStats = {
  __typename?: "PublicationStats";
  id: Scalars["InternalPublicationId"];
  totalAmountOfMirrors: Scalars["Int"];
  totalAmountOfCollects: Scalars["Int"];
  totalAmountOfComments: Scalars["Int"];
  totalUpvotes: Scalars["Int"];
  totalDownvotes: Scalars["Int"];
  commentsTotal: Scalars["Int"];
};


export type PublicationStatsCommentsTotalArgs = {
  forSources: Array<Scalars["Sources"]>;
};

export type MetadataOutput = {
  __typename?: "MetadataOutput";
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["Markdown"]>;
  content?: Maybe<Scalars["Markdown"]>;
  image?: Maybe<Scalars["Url"]>;
  cover?: Maybe<MediaSet>;
  media: Array<MediaSet>;
  attributes: Array<MetadataAttributeOutput>;
  locale?: Maybe<Scalars["Locale"]>;
  tags: Array<Scalars["String"]>;
  contentWarning?: Maybe<PublicationContentWarning>;
  mainContentFocus: PublicationMainFocus;
  animatedUrl?: Maybe<Scalars["Url"]>;
};

export type MetadataAttributeOutput = {
  __typename?: "MetadataAttributeOutput";
  displayType?: Maybe<PublicationMetadataDisplayTypes>;
  traitType?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export enum PublicationMetadataDisplayTypes {
  Number = "number",
  String = "string",
  Date = "date"
}

export enum PublicationContentWarning {
  Nsfw = "NSFW",
  Sensitive = "SENSITIVE",
  Spoiler = "SPOILER"
}

export enum PublicationMainFocus {
  Video = "VIDEO",
  Image = "IMAGE",
  Article = "ARTICLE",
  TextOnly = "TEXT_ONLY",
  Audio = "AUDIO",
  Link = "LINK",
  Embed = "EMBED"
}

export type CollectModule = FreeCollectModuleSettings | FeeCollectModuleSettings | LimitedFeeCollectModuleSettings | LimitedTimedFeeCollectModuleSettings | RevertCollectModuleSettings | TimedFeeCollectModuleSettings | UnknownCollectModuleSettings;

export type FreeCollectModuleSettings = {
  __typename?: "FreeCollectModuleSettings";
  type: CollectModules;
  contractAddress: Scalars["ContractAddress"];
  followerOnly: Scalars["Boolean"];
};

export enum CollectModules {
  LimitedFeeCollectModule = "LimitedFeeCollectModule",
  FeeCollectModule = "FeeCollectModule",
  LimitedTimedFeeCollectModule = "LimitedTimedFeeCollectModule",
  TimedFeeCollectModule = "TimedFeeCollectModule",
  RevertCollectModule = "RevertCollectModule",
  FreeCollectModule = "FreeCollectModule",
  UnknownCollectModule = "UnknownCollectModule"
}

export type FeeCollectModuleSettings = {
  __typename?: "FeeCollectModuleSettings";
  type: CollectModules;
  contractAddress: Scalars["ContractAddress"];
  amount: ModuleFeeAmount;
  recipient: Scalars["EthereumAddress"];
  referralFee: Scalars["Float"];
  followerOnly: Scalars["Boolean"];
};

export type LimitedFeeCollectModuleSettings = {
  __typename?: "LimitedFeeCollectModuleSettings";
  type: CollectModules;
  contractAddress: Scalars["ContractAddress"];
  collectLimit: Scalars["String"];
  amount: ModuleFeeAmount;
  recipient: Scalars["EthereumAddress"];
  referralFee: Scalars["Float"];
  followerOnly: Scalars["Boolean"];
};

export type LimitedTimedFeeCollectModuleSettings = {
  __typename?: "LimitedTimedFeeCollectModuleSettings";
  type: CollectModules;
  contractAddress: Scalars["ContractAddress"];
  collectLimit: Scalars["String"];
  amount: ModuleFeeAmount;
  recipient: Scalars["EthereumAddress"];
  referralFee: Scalars["Float"];
  followerOnly: Scalars["Boolean"];
  endTimestamp: Scalars["DateTime"];
};

export type RevertCollectModuleSettings = {
  __typename?: "RevertCollectModuleSettings";
  type: CollectModules;
  contractAddress: Scalars["ContractAddress"];
};

export type TimedFeeCollectModuleSettings = {
  __typename?: "TimedFeeCollectModuleSettings";
  type: CollectModules;
  contractAddress: Scalars["ContractAddress"];
  amount: ModuleFeeAmount;
  recipient: Scalars["EthereumAddress"];
  referralFee: Scalars["Float"];
  followerOnly: Scalars["Boolean"];
  endTimestamp: Scalars["DateTime"];
};

export type UnknownCollectModuleSettings = {
  __typename?: "UnknownCollectModuleSettings";
  type: CollectModules;
  contractAddress: Scalars["ContractAddress"];
  collectModuleReturnData: Scalars["CollectModuleData"];
};

export type ReferenceModule = FollowOnlyReferenceModuleSettings | UnknownReferenceModuleSettings | DegreesOfSeparationReferenceModuleSettings;

export type FollowOnlyReferenceModuleSettings = {
  __typename?: "FollowOnlyReferenceModuleSettings";
  type: ReferenceModules;
  contractAddress: Scalars["ContractAddress"];
};

export enum ReferenceModules {
  FollowerOnlyReferenceModule = "FollowerOnlyReferenceModule",
  DegreesOfSeparationReferenceModule = "DegreesOfSeparationReferenceModule",
  UnknownReferenceModule = "UnknownReferenceModule"
}

export type UnknownReferenceModuleSettings = {
  __typename?: "UnknownReferenceModuleSettings";
  type: ReferenceModules;
  contractAddress: Scalars["ContractAddress"];
  referenceModuleReturnData: Scalars["ReferenceModuleData"];
};

export type DegreesOfSeparationReferenceModuleSettings = {
  __typename?: "DegreesOfSeparationReferenceModuleSettings";
  type: ReferenceModules;
  contractAddress: Scalars["ContractAddress"];
  commentsRestricted: Scalars["Boolean"];
  mirrorsRestricted: Scalars["Boolean"];
  degreesOfSeparation: Scalars["Int"];
};

export type Wallet = {
  __typename?: "Wallet";
  address: Scalars["EthereumAddress"];
  defaultProfile?: Maybe<Profile>;
};

export enum ReactionTypes {
  Upvote = "UPVOTE",
  Downvote = "DOWNVOTE"
}

export type ReactionFieldResolverRequest = {
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};

export type CanCommentResponse = {
  __typename?: "CanCommentResponse";
  result: Scalars["Boolean"];
};

export type CanMirrorResponse = {
  __typename?: "CanMirrorResponse";
  result: Scalars["Boolean"];
};

export type Comment = {
  __typename?: "Comment";
  id: Scalars["InternalPublicationId"];
  profile: Profile;
  stats: PublicationStats;
  metadata: MetadataOutput;
  onChainContentURI: Scalars["String"];
  createdAt: Scalars["DateTime"];
  collectModule: CollectModule;
  referenceModule?: Maybe<ReferenceModule>;
  appId?: Maybe<Scalars["Sources"]>;
  hidden: Scalars["Boolean"];
  collectNftAddress?: Maybe<Scalars["ContractAddress"]>;
  mainPost: MainPostReference;
  commentOn?: Maybe<Publication>;
  firstComment?: Maybe<Comment>;
  collectedBy?: Maybe<Wallet>;
  reaction?: Maybe<ReactionTypes>;
  hasCollectedByMe: Scalars["Boolean"];
  canComment: CanCommentResponse;
  canMirror: CanMirrorResponse;
  mirrors: Array<Scalars["InternalPublicationId"]>;
};


export type CommentReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>;
};


export type CommentCanCommentArgs = {
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};


export type CommentCanMirrorArgs = {
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};


export type CommentMirrorsArgs = {
  by?: InputMaybe<Scalars["ProfileId"]>;
};

export type MainPostReference = Post | Mirror;

export type Mirror = {
  __typename?: "Mirror";
  id: Scalars["InternalPublicationId"];
  profile: Profile;
  stats: PublicationStats;
  metadata: MetadataOutput;
  onChainContentURI: Scalars["String"];
  createdAt: Scalars["DateTime"];
  collectModule: CollectModule;
  referenceModule?: Maybe<ReferenceModule>;
  appId?: Maybe<Scalars["Sources"]>;
  hidden: Scalars["Boolean"];
  collectNftAddress?: Maybe<Scalars["ContractAddress"]>;
  mirrorOf: MirrorablePublication;
  reaction?: Maybe<ReactionTypes>;
  hasCollectedByMe: Scalars["Boolean"];
  canComment: CanCommentResponse;
  canMirror: CanMirrorResponse;
};


export type MirrorReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>;
};


export type MirrorCanCommentArgs = {
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};


export type MirrorCanMirrorArgs = {
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};

export type MirrorablePublication = Post | Comment;

export type PaginatedResultInfo = {
  __typename?: "PaginatedResultInfo";
  prev?: Maybe<Scalars["Cursor"]>;
  next?: Maybe<Scalars["Cursor"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type ExplorePublicationRequest = {
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  cursor?: InputMaybe<Scalars["Cursor"]>;
  timestamp?: InputMaybe<Scalars["TimestampScalar"]>;
  sortCriteria: PublicationSortCriteria;
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
  publicationTypes?: InputMaybe<Array<PublicationTypes>>;
  noRandomize?: InputMaybe<Scalars["Boolean"]>;
  excludeProfileIds?: InputMaybe<Array<Scalars["ProfileId"]>>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
};

export enum PublicationSortCriteria {
  TopCommented = "TOP_COMMENTED",
  TopCollected = "TOP_COLLECTED",
  TopMirrored = "TOP_MIRRORED",
  CuratedProfiles = "CURATED_PROFILES",
  Latest = "LATEST"
}

export enum PublicationTypes {
  Post = "POST",
  Comment = "COMMENT",
  Mirror = "MIRROR"
}

export type PublicationMetadataFilters = {
  locale?: InputMaybe<Scalars["Locale"]>;
  contentWarning?: InputMaybe<PublicationMetadataContentWarningFilter>;
  mainContentFocus?: InputMaybe<Array<PublicationMainFocus>>;
  tags?: InputMaybe<PublicationMetadataTagsFilter>;
};

export type PublicationMetadataContentWarningFilter = {
  includeOneOf?: InputMaybe<Array<PublicationContentWarning>>;
};

export type PublicationMetadataTagsFilter = {
  oneOf?: InputMaybe<Array<Scalars["String"]>>;
  all?: InputMaybe<Array<Scalars["String"]>>;
};

export enum CustomFiltersTypes {
  Gardeners = "GARDENERS"
}

export type ExploreProfileResult = {
  __typename?: "ExploreProfileResult";
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

export type ExploreProfilesRequest = {
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  cursor?: InputMaybe<Scalars["Cursor"]>;
  timestamp?: InputMaybe<Scalars["TimestampScalar"]>;
  sortCriteria: ProfileSortCriteria;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
};

export enum ProfileSortCriteria {
  CreatedOn = "CREATED_ON",
  MostFollowers = "MOST_FOLLOWERS",
  LatestCreated = "LATEST_CREATED",
  MostPosts = "MOST_POSTS",
  MostComments = "MOST_COMMENTS",
  MostMirrors = "MOST_MIRRORS",
  MostPublication = "MOST_PUBLICATION",
  MostCollects = "MOST_COLLECTS"
}

export type PaginatedFeedResult = {
  __typename?: "PaginatedFeedResult";
  items: Array<FeedItem>;
  pageInfo: PaginatedResultInfo;
};

export type FeedItem = {
  __typename?: "FeedItem";
  root: FeedItemRoot;
  electedMirror?: Maybe<ElectedMirror>;
  mirrors: Array<MirrorEvent>;
  collects: Array<CollectedEvent>;
  reactions: Array<ReactionEvent>;
  comments?: Maybe<Array<Comment>>;
};

export type FeedItemRoot = Post | Comment;

export type ElectedMirror = {
  __typename?: "ElectedMirror";
  mirrorId: Scalars["InternalPublicationId"];
  profile: Profile;
  timestamp: Scalars["DateTime"];
};

export type MirrorEvent = {
  __typename?: "MirrorEvent";
  profile: Profile;
  timestamp: Scalars["DateTime"];
};

export type CollectedEvent = {
  __typename?: "CollectedEvent";
  profile: Profile;
  timestamp: Scalars["DateTime"];
};

export type ReactionEvent = {
  __typename?: "ReactionEvent";
  profile: Profile;
  reaction: ReactionTypes;
  timestamp: Scalars["DateTime"];
};

export type FeedRequest = {
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  cursor?: InputMaybe<Scalars["Cursor"]>;
  profileId: Scalars["ProfileId"];
  feedEventItemTypes?: InputMaybe<Array<FeedEventItemType>>;
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
};

export enum FeedEventItemType {
  Post = "POST",
  Comment = "COMMENT",
  Mirror = "MIRROR",
  CollectPost = "COLLECT_POST",
  CollectComment = "COLLECT_COMMENT",
  ReactionPost = "REACTION_POST",
  ReactionComment = "REACTION_COMMENT"
}

export type PaginatedTimelineResult = {
  __typename?: "PaginatedTimelineResult";
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

export type FeedHighlightsRequest = {
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  cursor?: InputMaybe<Scalars["Cursor"]>;
  profileId: Scalars["ProfileId"];
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
};

export type TimelineRequest = {
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  cursor?: InputMaybe<Scalars["Cursor"]>;
  profileId: Scalars["ProfileId"];
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
  timelineTypes?: InputMaybe<Array<TimelineType>>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
};

export enum TimelineType {
  Post = "POST",
  Comment = "COMMENT",
  Mirror = "MIRROR",
  CollectPost = "COLLECT_POST",
  CollectComment = "COLLECT_COMMENT"
}

export type PendingApproveFollowsResult = {
  __typename?: "PendingApproveFollowsResult";
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

export type PendingApprovalFollowsRequest = {
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  cursor?: InputMaybe<Scalars["Cursor"]>;
};

export type DoesFollowResponse = {
  __typename?: "DoesFollowResponse";
  followerAddress: Scalars["EthereumAddress"];
  profileId: Scalars["ProfileId"];
  follows: Scalars["Boolean"];
};

export type DoesFollowRequest = {
  followInfos: Array<DoesFollow>;
};

export type DoesFollow = {
  followerAddress: Scalars["EthereumAddress"];
  profileId: Scalars["ProfileId"];
};

export type PaginatedFollowingResult = {
  __typename?: "PaginatedFollowingResult";
  items: Array<Following>;
  pageInfo: PaginatedResultInfo;
};

export type Following = {
  __typename?: "Following";
  profile: Profile;
  totalAmountOfTimesFollowing: Scalars["Int"];
};

export type FollowingRequest = {
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  cursor?: InputMaybe<Scalars["Cursor"]>;
  address: Scalars["EthereumAddress"];
};

export type PaginatedFollowersResult = {
  __typename?: "PaginatedFollowersResult";
  items: Array<Follower>;
  pageInfo: PaginatedResultInfo;
};

export type Follower = {
  __typename?: "Follower";
  wallet: Wallet;
  totalAmountOfTimesFollowed: Scalars["Int"];
};

export type FollowersRequest = {
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  cursor?: InputMaybe<Scalars["Cursor"]>;
  profileId: Scalars["ProfileId"];
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

export type PaginatedProfileResult = {
  __typename?: "PaginatedProfileResult";
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

export type MutualFollowersProfilesQueryRequest = {
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  cursor?: InputMaybe<Scalars["Cursor"]>;
  viewingProfileId: Scalars["ProfileId"];
  yourProfileId: Scalars["ProfileId"];
};

export type TransactionResult = TransactionIndexedResult | TransactionError;

export type TransactionIndexedResult = {
  __typename?: "TransactionIndexedResult";
  indexed: Scalars["Boolean"];
  txHash: Scalars["TxHash"];
  txReceipt?: Maybe<TransactionReceipt>;
  metadataStatus?: Maybe<PublicationMetadataStatus>;
};

export type TransactionReceipt = {
  __typename?: "TransactionReceipt";
  to?: Maybe<Scalars["EthereumAddress"]>;
  from: Scalars["EthereumAddress"];
  contractAddress?: Maybe<Scalars["ContractAddress"]>;
  transactionIndex: Scalars["Int"];
  root?: Maybe<Scalars["String"]>;
  gasUsed: Scalars["String"];
  logsBloom: Scalars["String"];
  blockHash: Scalars["String"];
  transactionHash: Scalars["TxHash"];
  logs: Array<Log>;
  blockNumber: Scalars["Int"];
  confirmations: Scalars["Int"];
  cumulativeGasUsed: Scalars["String"];
  effectiveGasPrice: Scalars["String"];
  byzantium: Scalars["Boolean"];
  type: Scalars["Int"];
  status?: Maybe<Scalars["Int"]>;
};

export type Log = {
  __typename?: "Log";
  blockNumber: Scalars["Int"];
  blockHash: Scalars["String"];
  transactionIndex: Scalars["Int"];
  removed: Scalars["Boolean"];
  address: Scalars["ContractAddress"];
  data: Scalars["String"];
  topics: Array<Scalars["String"]>;
  transactionHash: Scalars["TxHash"];
  logIndex: Scalars["Int"];
};

export type PublicationMetadataStatus = {
  __typename?: "PublicationMetadataStatus";
  status: PublicationMetadataStatusType;
  reason?: Maybe<Scalars["String"]>;
};

export enum PublicationMetadataStatusType {
  NotFound = "NOT_FOUND",
  Pending = "PENDING",
  MetadataValidationFailed = "METADATA_VALIDATION_FAILED",
  Success = "SUCCESS"
}

export type TransactionError = {
  __typename?: "TransactionError";
  reason: TransactionErrorReasons;
  txReceipt?: Maybe<TransactionReceipt>;
};

export enum TransactionErrorReasons {
  Reverted = "REVERTED"
}

export type HasTxHashBeenIndexedRequest = {
  txHash?: InputMaybe<Scalars["TxHash"]>;
  txId?: InputMaybe<Scalars["TxId"]>;
};

export type ApprovedAllowanceAmount = {
  __typename?: "ApprovedAllowanceAmount";
  currency: Scalars["ContractAddress"];
  module: Scalars["String"];
  contractAddress: Scalars["ContractAddress"];
  allowance: Scalars["String"];
};

export type ApprovedModuleAllowanceAmountRequest = {
  currencies: Array<Scalars["ContractAddress"]>;
  collectModules?: InputMaybe<Array<CollectModules>>;
  unknownCollectModules?: InputMaybe<Array<Scalars["ContractAddress"]>>;
  followModules?: InputMaybe<Array<FollowModules>>;
  unknownFollowModules?: InputMaybe<Array<Scalars["ContractAddress"]>>;
  referenceModules?: InputMaybe<Array<ReferenceModules>>;
  unknownReferenceModules?: InputMaybe<Array<Scalars["ContractAddress"]>>;
};

export type GenerateModuleCurrencyApproval = {
  __typename?: "GenerateModuleCurrencyApproval";
  to: Scalars["ContractAddress"];
  from: Scalars["EthereumAddress"];
  data: Scalars["BlockchainData"];
};

export type GenerateModuleCurrencyApprovalDataRequest = {
  currency: Scalars["ContractAddress"];
  value: Scalars["String"];
  collectModule?: InputMaybe<CollectModules>;
  unknownCollectModule?: InputMaybe<Scalars["ContractAddress"]>;
  followModule?: InputMaybe<FollowModules>;
  unknownFollowModule?: InputMaybe<Scalars["ContractAddress"]>;
  referenceModule?: InputMaybe<ReferenceModules>;
  unknownReferenceModule?: InputMaybe<Scalars["ContractAddress"]>;
};

export type ProfileFollowModuleBeenRedeemedRequest = {
  followProfileId: Scalars["ProfileId"];
  redeemingProfileId: Scalars["ProfileId"];
};

export type EnabledModules = {
  __typename?: "EnabledModules";
  collectModules: Array<EnabledModule>;
  followModules: Array<EnabledModule>;
  referenceModules: Array<EnabledModule>;
};

export type EnabledModule = {
  __typename?: "EnabledModule";
  moduleName: Scalars["String"];
  contractAddress: Scalars["ContractAddress"];
  inputParams: Array<ModuleInfo>;
  redeemParams: Array<ModuleInfo>;
  returnDataParms: Array<ModuleInfo>;
};

export type ModuleInfo = {
  __typename?: "ModuleInfo";
  name: Scalars["String"];
  type: Scalars["String"];
};

export type NfTsResult = {
  __typename?: "NFTsResult";
  items: Array<Nft>;
  pageInfo: PaginatedResultInfo;
};

export type Nft = {
  __typename?: "NFT";
  contractName: Scalars["String"];
  contractAddress: Scalars["ContractAddress"];
  symbol: Scalars["String"];
  tokenId: Scalars["String"];
  owners: Array<Owner>;
  name: Scalars["String"];
  description: Scalars["String"];
  contentURI: Scalars["String"];
  originalContent: NftContent;
  chainId: Scalars["ChainId"];
  collectionName: Scalars["String"];
  ercType: Scalars["String"];
};

export type Owner = {
  __typename?: "Owner";
  amount: Scalars["Float"];
  address: Scalars["EthereumAddress"];
};

export type NftContent = {
  __typename?: "NFTContent";
  uri: Scalars["String"];
  metaType: Scalars["String"];
  animatedUrl?: Maybe<Scalars["String"]>;
};

export type NfTsRequest = {
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  cursor?: InputMaybe<Scalars["Cursor"]>;
  ownerAddress: Scalars["EthereumAddress"];
  contractAddress?: InputMaybe<Scalars["ContractAddress"]>;
  chainIds: Array<Scalars["ChainId"]>;
};

export type NftOwnershipChallengeResult = {
  __typename?: "NftOwnershipChallengeResult";
  id: Scalars["NftOwnershipId"];
  text: Scalars["String"];
  timeout: Scalars["TimestampScalar"];
};

export type NftOwnershipChallengeRequest = {
  ethereumAddress: Scalars["EthereumAddress"];
  nfts: Array<NftOwnershipChallenge>;
};

export type NftOwnershipChallenge = {
  contractAddress: Scalars["ContractAddress"];
  tokenId: Scalars["String"];
  chainId: Scalars["ChainId"];
};

export type PaginatedNotificationResult = {
  __typename?: "PaginatedNotificationResult";
  items: Array<Notification>;
  pageInfo: PaginatedResultInfo;
};

export type Notification = NewFollowerNotification | NewCollectNotification | NewCommentNotification | NewMirrorNotification | NewMentionNotification | NewReactionNotification;

export type NewFollowerNotification = {
  __typename?: "NewFollowerNotification";
  notificationId: Scalars["NotificationId"];
  createdAt: Scalars["DateTime"];
  wallet: Wallet;
  isFollowedByMe: Scalars["Boolean"];
};

export type NewCollectNotification = {
  __typename?: "NewCollectNotification";
  notificationId: Scalars["NotificationId"];
  createdAt: Scalars["DateTime"];
  wallet: Wallet;
  collectedPublication: Publication;
};

export type NewCommentNotification = {
  __typename?: "NewCommentNotification";
  notificationId: Scalars["NotificationId"];
  createdAt: Scalars["DateTime"];
  profile: Profile;
  comment: Comment;
};

export type NewMirrorNotification = {
  __typename?: "NewMirrorNotification";
  notificationId: Scalars["NotificationId"];
  createdAt: Scalars["DateTime"];
  profile: Profile;
  publication: MirrorablePublication;
};

export type NewMentionNotification = {
  __typename?: "NewMentionNotification";
  notificationId: Scalars["NotificationId"];
  createdAt: Scalars["DateTime"];
  mentionPublication: MentionPublication;
};

export type MentionPublication = Post | Comment;

export type NewReactionNotification = {
  __typename?: "NewReactionNotification";
  notificationId: Scalars["NotificationId"];
  createdAt: Scalars["DateTime"];
  profile: Profile;
  reaction: ReactionTypes;
  publication: Publication;
};

export type NotificationRequest = {
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  cursor?: InputMaybe<Scalars["Cursor"]>;
  profileId: Scalars["ProfileId"];
  notificationTypes?: InputMaybe<Array<NotificationTypes>>;
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
};

export enum NotificationTypes {
  MirroredPost = "MIRRORED_POST",
  MirroredComment = "MIRRORED_COMMENT",
  MentionPost = "MENTION_POST",
  MentionComment = "MENTION_COMMENT",
  CommentedComment = "COMMENTED_COMMENT",
  CommentedPost = "COMMENTED_POST",
  CollectedPost = "COLLECTED_POST",
  CollectedComment = "COLLECTED_COMMENT",
  Followed = "FOLLOWED",
  ReactionPost = "REACTION_POST",
  ReactionComment = "REACTION_COMMENT"
}

export type ProfileQueryRequest = {
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  cursor?: InputMaybe<Scalars["Cursor"]>;
  profileIds?: InputMaybe<Array<Scalars["ProfileId"]>>;
  ownedBy?: InputMaybe<Array<Scalars["EthereumAddress"]>>;
  handles?: InputMaybe<Array<Scalars["Handle"]>>;
  whoMirroredPublicationId?: InputMaybe<Scalars["InternalPublicationId"]>;
};

export type SingleProfileQueryRequest = {
  profileId?: InputMaybe<Scalars["ProfileId"]>;
  handle?: InputMaybe<Scalars["Handle"]>;
};

export type RecommendedProfileOptions = {
  disableML?: InputMaybe<Scalars["Boolean"]>;
  shuffle?: InputMaybe<Scalars["Boolean"]>;
};

export type DefaultProfileRequest = {
  ethereumAddress: Scalars["EthereumAddress"];
};

export type GlobalProtocolStats = {
  __typename?: "GlobalProtocolStats";
  totalProfiles: Scalars["Int"];
  totalBurntProfiles: Scalars["Int"];
  totalPosts: Scalars["Int"];
  totalMirrors: Scalars["Int"];
  totalComments: Scalars["Int"];
  totalCollects: Scalars["Int"];
  totalFollows: Scalars["Int"];
  totalRevenue: Array<Erc20Amount>;
};

export type Erc20Amount = {
  __typename?: "Erc20Amount";
  asset: Erc20;
  value: Scalars["String"];
};

export type GlobalProtocolStatsRequest = {
  fromTimestamp?: InputMaybe<Scalars["UnixTimestamp"]>;
  toTimestamp?: InputMaybe<Scalars["UnixTimestamp"]>;
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
};

export type PaginatedPublicationResult = {
  __typename?: "PaginatedPublicationResult";
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

export type PublicationsQueryRequest = {
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  cursor?: InputMaybe<Scalars["Cursor"]>;
  profileId?: InputMaybe<Scalars["ProfileId"]>;
  profileIds?: InputMaybe<Array<Scalars["ProfileId"]>>;
  publicationTypes?: InputMaybe<Array<PublicationTypes>>;
  commentsOf?: InputMaybe<Scalars["InternalPublicationId"]>;
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
  collectedBy?: InputMaybe<Scalars["EthereumAddress"]>;
  publicationIds?: InputMaybe<Array<Scalars["InternalPublicationId"]>>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
};

export type PublicationQueryRequest = {
  publicationId?: InputMaybe<Scalars["InternalPublicationId"]>;
  txHash?: InputMaybe<Scalars["TxHash"]>;
};

export type PaginatedWhoCollectedResult = {
  __typename?: "PaginatedWhoCollectedResult";
  items: Array<Wallet>;
  pageInfo: PaginatedResultInfo;
};

export type WhoCollectedPublicationRequest = {
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  cursor?: InputMaybe<Scalars["Cursor"]>;
  publicationId: Scalars["InternalPublicationId"];
};

export type PaginatedProfilePublicationsForSaleResult = {
  __typename?: "PaginatedProfilePublicationsForSaleResult";
  items: Array<PublicationForSale>;
  pageInfo: PaginatedResultInfo;
};

export type PublicationForSale = Post | Comment;

export type ProfilePublicationsForSaleRequest = {
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  cursor?: InputMaybe<Scalars["Cursor"]>;
  profileId: Scalars["ProfileId"];
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
};

export type PaginatedAllPublicationsTagsResult = {
  __typename?: "PaginatedAllPublicationsTagsResult";
  items: Array<TagResult>;
  pageInfo: PaginatedResultInfo;
};

export type TagResult = {
  __typename?: "TagResult";
  tag: Scalars["PublicationTag"];
  total: Scalars["Int"];
};

export type AllPublicationsTagsRequest = {
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  cursor?: InputMaybe<Scalars["Cursor"]>;
  sort: TagSortCriteria;
  source?: InputMaybe<Scalars["Sources"]>;
};

export enum TagSortCriteria {
  MostPopular = "MOST_POPULAR",
  Alphabetical = "ALPHABETICAL"
}

export type SearchResult = PublicationSearchResult | ProfileSearchResult;

export type PublicationSearchResult = {
  __typename?: "PublicationSearchResult";
  items: Array<PublicationSearchResultItem>;
  pageInfo: PaginatedResultInfo;
  type: SearchRequestTypes;
};

export type PublicationSearchResultItem = Post | Comment;

export enum SearchRequestTypes {
  Publication = "PUBLICATION",
  Profile = "PROFILE"
}

export type ProfileSearchResult = {
  __typename?: "ProfileSearchResult";
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
  type: SearchRequestTypes;
};

export type SearchQueryRequest = {
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  cursor?: InputMaybe<Scalars["Cursor"]>;
  query: Scalars["Search"];
  type: SearchRequestTypes;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
};

export type UserSigNonces = {
  __typename?: "UserSigNonces";
  lensHubOnChainSigNonce: Scalars["Nonce"];
  peripheryOnChainSigNonce: Scalars["Nonce"];
};

export type ClaimableHandles = {
  __typename?: "ClaimableHandles";
  reservedHandles: Array<ReservedClaimableHandle>;
  canClaimFreeTextHandle: Scalars["Boolean"];
};

export type ReservedClaimableHandle = {
  __typename?: "ReservedClaimableHandle";
  id: Scalars["HandleClaimIdScalar"];
  handle: Scalars["Handle"];
  source: Scalars["String"];
  expiry: Scalars["DateTime"];
};

export enum ClaimStatus {
  AlreadyClaimed = "ALREADY_CLAIMED",
  ClaimFailed = "CLAIM_FAILED",
  NotClaimed = "NOT_CLAIMED"
}

export type InternalPublicationsFilterRequest = {
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  cursor?: InputMaybe<Scalars["Cursor"]>;
  fromDate: Scalars["String"];
  toDate: Scalars["String"];
  source: Scalars["Sources"];
  secret: Scalars["String"];
};

export type ProfileOnChainIdentityRequest = {
  profileIds: Array<Scalars["ProfileId"]>;
};

export type ProxyActionStatusResultUnion = ProxyActionStatusResult | ProxyActionError | ProxyActionQueued;

export type ProxyActionStatusResult = {
  __typename?: "ProxyActionStatusResult";
  txHash: Scalars["TxHash"];
  txId: Scalars["TxId"];
  status: ProxyActionStatusTypes;
};

export enum ProxyActionStatusTypes {
  Minting = "MINTING",
  Transferring = "TRANSFERRING",
  Complete = "COMPLETE"
}

export type ProxyActionError = {
  __typename?: "ProxyActionError";
  reason: Scalars["String"];
  lastKnownTxId?: Maybe<Scalars["TxId"]>;
};

export type ProxyActionQueued = {
  __typename?: "ProxyActionQueued";
  queuedAt: Scalars["DateTime"];
};

export type PublicationValidateMetadataResult = {
  __typename?: "PublicationValidateMetadataResult";
  valid: Scalars["Boolean"];
  reason?: Maybe<Scalars["String"]>;
};

export type ValidatePublicationMetadataRequest = {
  metadatav1?: InputMaybe<PublicationMetadataV1Input>;
  metadatav2?: InputMaybe<PublicationMetadataV2Input>;
};

export type PublicationMetadataV1Input = {
  version: Scalars["String"];
  metadata_id: Scalars["String"];
  appId?: InputMaybe<Scalars["Sources"]>;
  description?: InputMaybe<Scalars["Markdown"]>;
  content?: InputMaybe<Scalars["Markdown"]>;
  external_url?: InputMaybe<Scalars["Url"]>;
  signatureContext?: InputMaybe<PublicationSignatureContextInput>;
  name: Scalars["String"];
  attributes: Array<MetadataAttributeInput>;
  image?: InputMaybe<Scalars["Url"]>;
  imageMimeType?: InputMaybe<Scalars["MimeType"]>;
  media?: InputMaybe<Array<PublicationMetadataMediaInput>>;
  animation_url?: InputMaybe<Scalars["Url"]>;
};

export type PublicationSignatureContextInput = {
  signature: Scalars["String"];
};

export type MetadataAttributeInput = {
  displayType?: InputMaybe<PublicationMetadataDisplayTypes>;
  traitType: Scalars["String"];
  value: Scalars["String"];
};

export type PublicationMetadataMediaInput = {
  item: Scalars["Url"];
  type?: InputMaybe<Scalars["MimeType"]>;
  altTag?: InputMaybe<Scalars["String"]>;
  cover?: InputMaybe<Scalars["String"]>;
};

export type PublicationMetadataV2Input = {
  version: Scalars["String"];
  metadata_id: Scalars["String"];
  appId?: InputMaybe<Scalars["Sources"]>;
  description?: InputMaybe<Scalars["Markdown"]>;
  content?: InputMaybe<Scalars["Markdown"]>;
  external_url?: InputMaybe<Scalars["Url"]>;
  signatureContext?: InputMaybe<PublicationSignatureContextInput>;
  name: Scalars["String"];
  attributes: Array<MetadataAttributeInput>;
  image?: InputMaybe<Scalars["Url"]>;
  imageMimeType?: InputMaybe<Scalars["MimeType"]>;
  media?: InputMaybe<Array<PublicationMetadataMediaInput>>;
  animation_url?: InputMaybe<Scalars["Url"]>;
  locale: Scalars["Locale"];
  tags?: InputMaybe<Array<Scalars["String"]>>;
  contentWarning?: InputMaybe<PublicationContentWarning>;
  mainContentFocus: PublicationMainFocus;
};

export type GetPublicationMetadataStatusRequest = {
  publicationId?: InputMaybe<Scalars["InternalPublicationId"]>;
  txHash?: InputMaybe<Scalars["TxHash"]>;
  txId?: InputMaybe<Scalars["TxId"]>;
};

export type PaginatedWhoReactedResult = {
  __typename?: "PaginatedWhoReactedResult";
  items: Array<WhoReactedResult>;
  pageInfo: PaginatedResultInfo;
};

export type WhoReactedResult = {
  __typename?: "WhoReactedResult";
  reactionId: Scalars["ReactionId"];
  reaction: ReactionTypes;
  reactionAt: Scalars["DateTime"];
  profile: Profile;
};

export type WhoReactedPublicationRequest = {
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  cursor?: InputMaybe<Scalars["Cursor"]>;
  publicationId: Scalars["InternalPublicationId"];
};

export type ProfilePublicationRevenueResult = {
  __typename?: "ProfilePublicationRevenueResult";
  items: Array<PublicationRevenue>;
  pageInfo: PaginatedResultInfo;
};

export type PublicationRevenue = {
  __typename?: "PublicationRevenue";
  publication: Publication;
  revenue: RevenueAggregate;
};

export type RevenueAggregate = {
  __typename?: "RevenueAggregate";
  total: Erc20Amount;
};

export type ProfilePublicationRevenueQueryRequest = {
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  cursor?: InputMaybe<Scalars["Cursor"]>;
  profileId: Scalars["ProfileId"];
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
  types?: InputMaybe<Array<PublicationTypes>>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
};

export type PublicationRevenueQueryRequest = {
  publicationId: Scalars["InternalPublicationId"];
};

export type FollowRevenueResult = {
  __typename?: "FollowRevenueResult";
  revenues: Array<RevenueAggregate>;
};

export type ProfileFollowRevenueQueryRequest = {
  profileId: Scalars["ProfileId"];
};

export type RelRequest = {
  secret: Scalars["String"];
  ethereumAddress: Scalars["EthereumAddress"];
};

export type Mutation = {
  __typename?: "Mutation";
  authenticate: AuthenticationResult;
  refresh: AuthenticationResult;
  broadcast: RelayResult;
  createSetDispatcherTypedData: CreateSetDispatcherBroadcastItemResult;
  createFollowTypedData: CreateFollowBroadcastItemResult;
  createUnfollowTypedData: CreateUnfollowBroadcastItemResult;
  createSetFollowModuleTypedData: CreateSetFollowModuleBroadcastItemResult;
  createSetFollowNFTUriTypedData: CreateSetFollowNftUriBroadcastItemResult;
  createToggleFollowTypedData: CreateToggleFollowBroadcastItemResult;
  createCollectTypedData: CreateCollectBroadcastItemResult;
  createSetDefaultProfileTypedData: SetDefaultProfileBroadcastItemResult;
  createSetProfileImageURITypedData: CreateSetProfileImageUriBroadcastItemResult;
  createSetProfileImageURIViaDispatcher: RelayResult;
  createBurnProfileTypedData: CreateBurnProfileBroadcastItemResult;
  createPostTypedData: CreatePostBroadcastItemResult;
  createPostViaDispatcher: RelayResult;
  createCommentTypedData: CreateCommentBroadcastItemResult;
  createCommentViaDispatcher: RelayResult;
  createMirrorTypedData: CreateMirrorBroadcastItemResult;
  hidePublication?: Maybe<Scalars["Void"]>;
  createMirrorViaDispatcher: RelayResult;
  claim: RelayResult;
  createSetProfileMetadataTypedData: CreateSetProfileMetadataUriBroadcastItemResult;
  createSetProfileMetadataViaDispatcher: RelayResult;
  proxyAction: Scalars["ProxyActionId"];
  addReaction?: Maybe<Scalars["Void"]>;
  removeReaction?: Maybe<Scalars["Void"]>;
  reportPublication?: Maybe<Scalars["Void"]>;
  ach?: Maybe<Scalars["Void"]>;
};


export type MutationAuthenticateArgs = {
  request: SignedAuthChallenge;
};


export type MutationRefreshArgs = {
  request: RefreshRequest;
};


export type MutationBroadcastArgs = {
  request: BroadcastRequest;
};


export type MutationCreateSetDispatcherTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: SetDispatcherRequest;
};


export type MutationCreateFollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: FollowRequest;
};


export type MutationCreateUnfollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: UnfollowRequest;
};


export type MutationCreateSetFollowModuleTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetFollowModuleRequest;
};


export type MutationCreateSetFollowNftUriTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetFollowNftUriRequest;
};


export type MutationCreateToggleFollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateToggleFollowRequest;
};


export type MutationCreateCollectTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateCollectRequest;
};


export type MutationCreateSetDefaultProfileTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetDefaultProfileRequest;
};


export type MutationCreateSetProfileImageUriTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: UpdateProfileImageRequest;
};


export type MutationCreateSetProfileImageUriViaDispatcherArgs = {
  request: UpdateProfileImageRequest;
};


export type MutationCreateBurnProfileTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: BurnProfileRequest;
};


export type MutationCreatePostTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicPostRequest;
};


export type MutationCreatePostViaDispatcherArgs = {
  request: CreatePublicPostRequest;
};


export type MutationCreateCommentTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicCommentRequest;
};


export type MutationCreateCommentViaDispatcherArgs = {
  request: CreatePublicCommentRequest;
};


export type MutationCreateMirrorTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateMirrorRequest;
};


export type MutationHidePublicationArgs = {
  request: HidePublicationRequest;
};


export type MutationCreateMirrorViaDispatcherArgs = {
  request: CreateMirrorRequest;
};


export type MutationClaimArgs = {
  request: ClaimHandleRequest;
};


export type MutationCreateSetProfileMetadataTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicSetProfileMetadataUriRequest;
};


export type MutationCreateSetProfileMetadataViaDispatcherArgs = {
  request: CreatePublicSetProfileMetadataUriRequest;
};


export type MutationProxyActionArgs = {
  request: ProxyActionRequest;
};


export type MutationAddReactionArgs = {
  request: ReactionRequest;
};


export type MutationRemoveReactionArgs = {
  request: ReactionRequest;
};


export type MutationReportPublicationArgs = {
  request: ReportPublicationRequest;
};


export type MutationAchArgs = {
  request: AchRequest;
};

export type AuthenticationResult = {
  __typename?: "AuthenticationResult";
  accessToken: Scalars["Jwt"];
  refreshToken: Scalars["Jwt"];
};

export type SignedAuthChallenge = {
  address: Scalars["EthereumAddress"];
  signature: Scalars["Signature"];
};

export type RefreshRequest = {
  refreshToken: Scalars["Jwt"];
};

export type RelayResult = RelayerResult | RelayError;

export type RelayerResult = {
  __typename?: "RelayerResult";
  txHash: Scalars["TxHash"];
  txId: Scalars["TxId"];
};

export type RelayError = {
  __typename?: "RelayError";
  reason: RelayErrorReasons;
};

export enum RelayErrorReasons {
  Rejected = "REJECTED",
  HandleTaken = "HANDLE_TAKEN",
  Expired = "EXPIRED",
  WrongWalletSigned = "WRONG_WALLET_SIGNED",
  NotAllowed = "NOT_ALLOWED"
}

export type BroadcastRequest = {
  id: Scalars["BroadcastId"];
  signature: Scalars["Signature"];
};

export type CreateSetDispatcherBroadcastItemResult = {
  __typename?: "CreateSetDispatcherBroadcastItemResult";
  id: Scalars["BroadcastId"];
  expiresAt: Scalars["DateTime"];
  typedData: CreateSetDispatcherEip712TypedData;
};

export type CreateSetDispatcherEip712TypedData = {
  __typename?: "CreateSetDispatcherEIP712TypedData";
  types: CreateSetDispatcherEip712TypedDataTypes;
  domain: Eip712TypedDataDomain;
  value: CreateSetDispatcherEip712TypedDataValue;
};

export type CreateSetDispatcherEip712TypedDataTypes = {
  __typename?: "CreateSetDispatcherEIP712TypedDataTypes";
  SetDispatcherWithSig: Array<Eip712TypedDataField>;
};

export type Eip712TypedDataField = {
  __typename?: "EIP712TypedDataField";
  name: Scalars["String"];
  type: Scalars["String"];
};

export type Eip712TypedDataDomain = {
  __typename?: "EIP712TypedDataDomain";
  name: Scalars["String"];
  chainId: Scalars["ChainId"];
  version: Scalars["String"];
  verifyingContract: Scalars["ContractAddress"];
};

export type CreateSetDispatcherEip712TypedDataValue = {
  __typename?: "CreateSetDispatcherEIP712TypedDataValue";
  nonce: Scalars["Nonce"];
  deadline: Scalars["UnixTimestamp"];
  profileId: Scalars["ProfileId"];
  dispatcher: Scalars["EthereumAddress"];
};

export type TypedDataOptions = {
  overrideSigNonce: Scalars["Nonce"];
};

export type SetDispatcherRequest = {
  profileId: Scalars["ProfileId"];
  dispatcher?: InputMaybe<Scalars["EthereumAddress"]>;
  enable?: InputMaybe<Scalars["Boolean"]>;
};

export type CreateFollowBroadcastItemResult = {
  __typename?: "CreateFollowBroadcastItemResult";
  id: Scalars["BroadcastId"];
  expiresAt: Scalars["DateTime"];
  typedData: CreateFollowEip712TypedData;
};

export type CreateFollowEip712TypedData = {
  __typename?: "CreateFollowEIP712TypedData";
  types: CreateFollowEip712TypedDataTypes;
  domain: Eip712TypedDataDomain;
  value: CreateFollowEip712TypedDataValue;
};

export type CreateFollowEip712TypedDataTypes = {
  __typename?: "CreateFollowEIP712TypedDataTypes";
  FollowWithSig: Array<Eip712TypedDataField>;
};

export type CreateFollowEip712TypedDataValue = {
  __typename?: "CreateFollowEIP712TypedDataValue";
  nonce: Scalars["Nonce"];
  deadline: Scalars["UnixTimestamp"];
  profileIds: Array<Scalars["ProfileId"]>;
  datas: Array<Scalars["BlockchainData"]>;
};

export type FollowRequest = {
  follow: Array<Follow>;
};

export type Follow = {
  profile: Scalars["ProfileId"];
  followModule?: InputMaybe<FollowModuleRedeemParams>;
};

export type FollowModuleRedeemParams = {
  feeFollowModule?: InputMaybe<FeeFollowModuleRedeemParams>;
  profileFollowModule?: InputMaybe<ProfileFollowModuleRedeemParams>;
  unknownFollowModule?: InputMaybe<UnknownFollowModuleRedeemParams>;
};

export type FeeFollowModuleRedeemParams = {
  amount: ModuleFeeAmountParams;
};

export type ModuleFeeAmountParams = {
  currency: Scalars["ContractAddress"];
  value: Scalars["String"];
};

export type ProfileFollowModuleRedeemParams = {
  profileId: Scalars["ProfileId"];
};

export type UnknownFollowModuleRedeemParams = {
  data: Scalars["BlockchainData"];
};

export type CreateUnfollowBroadcastItemResult = {
  __typename?: "CreateUnfollowBroadcastItemResult";
  id: Scalars["BroadcastId"];
  expiresAt: Scalars["DateTime"];
  typedData: CreateBurnEip712TypedData;
};

export type CreateBurnEip712TypedData = {
  __typename?: "CreateBurnEIP712TypedData";
  types: CreateBurnEip712TypedDataTypes;
  domain: Eip712TypedDataDomain;
  value: CreateBurnEip712TypedDataValue;
};

export type CreateBurnEip712TypedDataTypes = {
  __typename?: "CreateBurnEIP712TypedDataTypes";
  BurnWithSig: Array<Eip712TypedDataField>;
};

export type CreateBurnEip712TypedDataValue = {
  __typename?: "CreateBurnEIP712TypedDataValue";
  nonce: Scalars["Nonce"];
  deadline: Scalars["UnixTimestamp"];
  tokenId: Scalars["String"];
};

export type UnfollowRequest = {
  profile: Scalars["ProfileId"];
};

export type CreateSetFollowModuleBroadcastItemResult = {
  __typename?: "CreateSetFollowModuleBroadcastItemResult";
  id: Scalars["BroadcastId"];
  expiresAt: Scalars["DateTime"];
  typedData: CreateSetFollowModuleEip712TypedData;
};

export type CreateSetFollowModuleEip712TypedData = {
  __typename?: "CreateSetFollowModuleEIP712TypedData";
  types: CreateSetFollowModuleEip712TypedDataTypes;
  domain: Eip712TypedDataDomain;
  value: CreateSetFollowModuleEip712TypedDataValue;
};

export type CreateSetFollowModuleEip712TypedDataTypes = {
  __typename?: "CreateSetFollowModuleEIP712TypedDataTypes";
  SetFollowModuleWithSig: Array<Eip712TypedDataField>;
};

export type CreateSetFollowModuleEip712TypedDataValue = {
  __typename?: "CreateSetFollowModuleEIP712TypedDataValue";
  nonce: Scalars["Nonce"];
  deadline: Scalars["UnixTimestamp"];
  profileId: Scalars["ProfileId"];
  followModule: Scalars["ContractAddress"];
  followModuleInitData: Scalars["FollowModuleData"];
};

export type CreateSetFollowModuleRequest = {
  profileId: Scalars["ProfileId"];
  followModule: FollowModuleParams;
};

export type FollowModuleParams = {
  feeFollowModule?: InputMaybe<FeeFollowModuleParams>;
  profileFollowModule?: InputMaybe<Scalars["Boolean"]>;
  revertFollowModule?: InputMaybe<Scalars["Boolean"]>;
  freeFollowModule?: InputMaybe<Scalars["Boolean"]>;
  unknownFollowModule?: InputMaybe<UnknownFollowModuleParams>;
};

export type FeeFollowModuleParams = {
  amount: ModuleFeeAmountParams;
  recipient: Scalars["EthereumAddress"];
};

export type UnknownFollowModuleParams = {
  contractAddress: Scalars["ContractAddress"];
  data: Scalars["BlockchainData"];
};

export type CreateSetFollowNftUriBroadcastItemResult = {
  __typename?: "CreateSetFollowNFTUriBroadcastItemResult";
  id: Scalars["BroadcastId"];
  expiresAt: Scalars["DateTime"];
  typedData: CreateSetFollowNftUriEip712TypedData;
};

export type CreateSetFollowNftUriEip712TypedData = {
  __typename?: "CreateSetFollowNFTUriEIP712TypedData";
  types: CreateSetFollowNftUriEip712TypedDataTypes;
  domain: Eip712TypedDataDomain;
  value: CreateSetFollowNftUriEip712TypedDataValue;
};

export type CreateSetFollowNftUriEip712TypedDataTypes = {
  __typename?: "CreateSetFollowNFTUriEIP712TypedDataTypes";
  SetFollowNFTURIWithSig: Array<Eip712TypedDataField>;
};

export type CreateSetFollowNftUriEip712TypedDataValue = {
  __typename?: "CreateSetFollowNFTUriEIP712TypedDataValue";
  nonce: Scalars["Nonce"];
  deadline: Scalars["UnixTimestamp"];
  profileId: Scalars["ProfileId"];
  followNFTURI: Scalars["Url"];
};

export type CreateSetFollowNftUriRequest = {
  profileId: Scalars["ProfileId"];
  followNFTURI?: InputMaybe<Scalars["Url"]>;
};

export type CreateToggleFollowBroadcastItemResult = {
  __typename?: "CreateToggleFollowBroadcastItemResult";
  id: Scalars["BroadcastId"];
  expiresAt: Scalars["DateTime"];
  typedData: CreateToggleFollowEip712TypedData;
};

export type CreateToggleFollowEip712TypedData = {
  __typename?: "CreateToggleFollowEIP712TypedData";
  types: CreateToggleFollowEip712TypedDataTypes;
  domain: Eip712TypedDataDomain;
  value: CreateToggleFollowEip712TypedDataValue;
};

export type CreateToggleFollowEip712TypedDataTypes = {
  __typename?: "CreateToggleFollowEIP712TypedDataTypes";
  ToggleFollowWithSig: Array<Eip712TypedDataField>;
};

export type CreateToggleFollowEip712TypedDataValue = {
  __typename?: "CreateToggleFollowEIP712TypedDataValue";
  nonce: Scalars["Nonce"];
  deadline: Scalars["UnixTimestamp"];
  profileIds: Array<Scalars["ProfileId"]>;
  enables: Array<Scalars["Boolean"]>;
};

export type CreateToggleFollowRequest = {
  profileIds: Array<Scalars["ProfileId"]>;
  enables: Array<Scalars["Boolean"]>;
};

export type CreateCollectBroadcastItemResult = {
  __typename?: "CreateCollectBroadcastItemResult";
  id: Scalars["BroadcastId"];
  expiresAt: Scalars["DateTime"];
  typedData: CreateCollectEip712TypedData;
};

export type CreateCollectEip712TypedData = {
  __typename?: "CreateCollectEIP712TypedData";
  types: CreateCollectEip712TypedDataTypes;
  domain: Eip712TypedDataDomain;
  value: CreateCollectEip712TypedDataValue;
};

export type CreateCollectEip712TypedDataTypes = {
  __typename?: "CreateCollectEIP712TypedDataTypes";
  CollectWithSig: Array<Eip712TypedDataField>;
};

export type CreateCollectEip712TypedDataValue = {
  __typename?: "CreateCollectEIP712TypedDataValue";
  nonce: Scalars["Nonce"];
  deadline: Scalars["UnixTimestamp"];
  profileId: Scalars["ProfileId"];
  pubId: Scalars["PublicationId"];
  data: Scalars["BlockchainData"];
};

export type CreateCollectRequest = {
  publicationId: Scalars["InternalPublicationId"];
  unknownModuleData?: InputMaybe<Scalars["BlockchainData"]>;
};

export type SetDefaultProfileBroadcastItemResult = {
  __typename?: "SetDefaultProfileBroadcastItemResult";
  id: Scalars["BroadcastId"];
  expiresAt: Scalars["DateTime"];
  typedData: SetDefaultProfileEip712TypedData;
};

export type SetDefaultProfileEip712TypedData = {
  __typename?: "SetDefaultProfileEIP712TypedData";
  types: SetDefaultProfileEip712TypedDataTypes;
  domain: Eip712TypedDataDomain;
  value: SetDefaultProfileEip712TypedDataValue;
};

export type SetDefaultProfileEip712TypedDataTypes = {
  __typename?: "SetDefaultProfileEIP712TypedDataTypes";
  SetDefaultProfileWithSig: Array<Eip712TypedDataField>;
};

export type SetDefaultProfileEip712TypedDataValue = {
  __typename?: "SetDefaultProfileEIP712TypedDataValue";
  nonce: Scalars["Nonce"];
  deadline: Scalars["UnixTimestamp"];
  wallet: Scalars["EthereumAddress"];
  profileId: Scalars["ProfileId"];
};

export type CreateSetDefaultProfileRequest = {
  profileId: Scalars["ProfileId"];
};

export type CreateSetProfileImageUriBroadcastItemResult = {
  __typename?: "CreateSetProfileImageUriBroadcastItemResult";
  id: Scalars["BroadcastId"];
  expiresAt: Scalars["DateTime"];
  typedData: CreateSetProfileImageUriEip712TypedData;
};

export type CreateSetProfileImageUriEip712TypedData = {
  __typename?: "CreateSetProfileImageUriEIP712TypedData";
  types: CreateSetProfileImageUriEip712TypedDataTypes;
  domain: Eip712TypedDataDomain;
  value: CreateSetProfileImageUriEip712TypedDataValue;
};

export type CreateSetProfileImageUriEip712TypedDataTypes = {
  __typename?: "CreateSetProfileImageUriEIP712TypedDataTypes";
  SetProfileImageURIWithSig: Array<Eip712TypedDataField>;
};

export type CreateSetProfileImageUriEip712TypedDataValue = {
  __typename?: "CreateSetProfileImageUriEIP712TypedDataValue";
  nonce: Scalars["Nonce"];
  deadline: Scalars["UnixTimestamp"];
  profileId: Scalars["ProfileId"];
  imageURI: Scalars["Url"];
};

export type UpdateProfileImageRequest = {
  profileId: Scalars["ProfileId"];
  url?: InputMaybe<Scalars["Url"]>;
  nftData?: InputMaybe<NftData>;
};

export type NftData = {
  id: Scalars["NftOwnershipId"];
  signature: Scalars["Signature"];
};

export type CreateBurnProfileBroadcastItemResult = {
  __typename?: "CreateBurnProfileBroadcastItemResult";
  id: Scalars["BroadcastId"];
  expiresAt: Scalars["DateTime"];
  typedData: CreateBurnEip712TypedData;
};

export type BurnProfileRequest = {
  profileId: Scalars["ProfileId"];
};

export type CreatePostBroadcastItemResult = {
  __typename?: "CreatePostBroadcastItemResult";
  id: Scalars["BroadcastId"];
  expiresAt: Scalars["DateTime"];
  typedData: CreatePostEip712TypedData;
};

export type CreatePostEip712TypedData = {
  __typename?: "CreatePostEIP712TypedData";
  types: CreatePostEip712TypedDataTypes;
  domain: Eip712TypedDataDomain;
  value: CreatePostEip712TypedDataValue;
};

export type CreatePostEip712TypedDataTypes = {
  __typename?: "CreatePostEIP712TypedDataTypes";
  PostWithSig: Array<Eip712TypedDataField>;
};

export type CreatePostEip712TypedDataValue = {
  __typename?: "CreatePostEIP712TypedDataValue";
  nonce: Scalars["Nonce"];
  deadline: Scalars["UnixTimestamp"];
  profileId: Scalars["ProfileId"];
  contentURI: Scalars["PublicationUrl"];
  collectModule: Scalars["ContractAddress"];
  collectModuleInitData: Scalars["CollectModuleData"];
  referenceModule: Scalars["ContractAddress"];
  referenceModuleInitData: Scalars["ReferenceModuleData"];
};

export type CreatePublicPostRequest = {
  profileId: Scalars["ProfileId"];
  contentURI: Scalars["Url"];
  collectModule: CollectModuleParams;
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

export type CollectModuleParams = {
  freeCollectModule?: InputMaybe<FreeCollectModuleParams>;
  revertCollectModule?: InputMaybe<Scalars["Boolean"]>;
  feeCollectModule?: InputMaybe<FeeCollectModuleParams>;
  limitedFeeCollectModule?: InputMaybe<LimitedFeeCollectModuleParams>;
  limitedTimedFeeCollectModule?: InputMaybe<LimitedTimedFeeCollectModuleParams>;
  timedFeeCollectModule?: InputMaybe<TimedFeeCollectModuleParams>;
  unknownCollectModule?: InputMaybe<UnknownCollectModuleParams>;
};

export type FreeCollectModuleParams = {
  followerOnly: Scalars["Boolean"];
};

export type FeeCollectModuleParams = {
  amount: ModuleFeeAmountParams;
  recipient: Scalars["EthereumAddress"];
  referralFee: Scalars["Float"];
  followerOnly: Scalars["Boolean"];
};

export type LimitedFeeCollectModuleParams = {
  collectLimit: Scalars["String"];
  amount: ModuleFeeAmountParams;
  recipient: Scalars["EthereumAddress"];
  referralFee: Scalars["Float"];
  followerOnly: Scalars["Boolean"];
};

export type LimitedTimedFeeCollectModuleParams = {
  collectLimit: Scalars["String"];
  amount: ModuleFeeAmountParams;
  recipient: Scalars["EthereumAddress"];
  referralFee: Scalars["Float"];
  followerOnly: Scalars["Boolean"];
};

export type TimedFeeCollectModuleParams = {
  amount: ModuleFeeAmountParams;
  recipient: Scalars["EthereumAddress"];
  referralFee: Scalars["Float"];
  followerOnly: Scalars["Boolean"];
};

export type UnknownCollectModuleParams = {
  contractAddress: Scalars["ContractAddress"];
  data: Scalars["BlockchainData"];
};

export type ReferenceModuleParams = {
  followerOnlyReferenceModule?: InputMaybe<Scalars["Boolean"]>;
  unknownReferenceModule?: InputMaybe<UnknownReferenceModuleParams>;
  degreesOfSeparationReferenceModule?: InputMaybe<DegreesOfSeparationReferenceModuleParams>;
};

export type UnknownReferenceModuleParams = {
  contractAddress: Scalars["ContractAddress"];
  data: Scalars["BlockchainData"];
};

export type DegreesOfSeparationReferenceModuleParams = {
  commentsRestricted: Scalars["Boolean"];
  mirrorsRestricted: Scalars["Boolean"];
  degreesOfSeparation: Scalars["Int"];
};

export type CreateCommentBroadcastItemResult = {
  __typename?: "CreateCommentBroadcastItemResult";
  id: Scalars["BroadcastId"];
  expiresAt: Scalars["DateTime"];
  typedData: CreateCommentEip712TypedData;
};

export type CreateCommentEip712TypedData = {
  __typename?: "CreateCommentEIP712TypedData";
  types: CreateCommentEip712TypedDataTypes;
  domain: Eip712TypedDataDomain;
  value: CreateCommentEip712TypedDataValue;
};

export type CreateCommentEip712TypedDataTypes = {
  __typename?: "CreateCommentEIP712TypedDataTypes";
  CommentWithSig: Array<Eip712TypedDataField>;
};

export type CreateCommentEip712TypedDataValue = {
  __typename?: "CreateCommentEIP712TypedDataValue";
  nonce: Scalars["Nonce"];
  deadline: Scalars["UnixTimestamp"];
  profileId: Scalars["ProfileId"];
  contentURI: Scalars["PublicationUrl"];
  profileIdPointed: Scalars["ProfileId"];
  pubIdPointed: Scalars["PublicationId"];
  collectModule: Scalars["ContractAddress"];
  collectModuleInitData: Scalars["CollectModuleData"];
  referenceModule: Scalars["ContractAddress"];
  referenceModuleInitData: Scalars["ReferenceModuleData"];
  referenceModuleData: Scalars["ReferenceModuleData"];
};

export type CreatePublicCommentRequest = {
  profileId: Scalars["ProfileId"];
  publicationId: Scalars["InternalPublicationId"];
  contentURI: Scalars["Url"];
  collectModule: CollectModuleParams;
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

export type CreateMirrorBroadcastItemResult = {
  __typename?: "CreateMirrorBroadcastItemResult";
  id: Scalars["BroadcastId"];
  expiresAt: Scalars["DateTime"];
  typedData: CreateMirrorEip712TypedData;
};

export type CreateMirrorEip712TypedData = {
  __typename?: "CreateMirrorEIP712TypedData";
  types: CreateMirrorEip712TypedDataTypes;
  domain: Eip712TypedDataDomain;
  value: CreateMirrorEip712TypedDataValue;
};

export type CreateMirrorEip712TypedDataTypes = {
  __typename?: "CreateMirrorEIP712TypedDataTypes";
  MirrorWithSig: Array<Eip712TypedDataField>;
};

export type CreateMirrorEip712TypedDataValue = {
  __typename?: "CreateMirrorEIP712TypedDataValue";
  nonce: Scalars["Nonce"];
  deadline: Scalars["UnixTimestamp"];
  profileId: Scalars["ProfileId"];
  profileIdPointed: Scalars["ProfileId"];
  pubIdPointed: Scalars["PublicationId"];
  referenceModuleData: Scalars["ReferenceModuleData"];
  referenceModule: Scalars["ContractAddress"];
  referenceModuleInitData: Scalars["ReferenceModuleData"];
};

export type CreateMirrorRequest = {
  profileId: Scalars["ProfileId"];
  publicationId: Scalars["InternalPublicationId"];
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

export type HidePublicationRequest = {
  publicationId: Scalars["InternalPublicationId"];
};

export type ClaimHandleRequest = {
  id?: InputMaybe<Scalars["HandleClaimIdScalar"]>;
  freeTextHandle?: InputMaybe<Scalars["CreateHandle"]>;
  followModule?: InputMaybe<FollowModuleParams>;
};

export type CreateSetProfileMetadataUriBroadcastItemResult = {
  __typename?: "CreateSetProfileMetadataURIBroadcastItemResult";
  id: Scalars["BroadcastId"];
  expiresAt: Scalars["DateTime"];
  typedData: CreateSetProfileMetadataUrieip712TypedData;
};

export type CreateSetProfileMetadataUrieip712TypedData = {
  __typename?: "CreateSetProfileMetadataURIEIP712TypedData";
  types: CreateSetProfileMetadataUrieip712TypedDataTypes;
  domain: Eip712TypedDataDomain;
  value: CreateSetProfileMetadataUrieip712TypedDataValue;
};

export type CreateSetProfileMetadataUrieip712TypedDataTypes = {
  __typename?: "CreateSetProfileMetadataURIEIP712TypedDataTypes";
  SetProfileMetadataURIWithSig: Array<Eip712TypedDataField>;
};

export type CreateSetProfileMetadataUrieip712TypedDataValue = {
  __typename?: "CreateSetProfileMetadataURIEIP712TypedDataValue";
  nonce: Scalars["Nonce"];
  deadline: Scalars["UnixTimestamp"];
  profileId: Scalars["ProfileId"];
  metadata: Scalars["Url"];
};

export type CreatePublicSetProfileMetadataUriRequest = {
  profileId: Scalars["ProfileId"];
  metadata: Scalars["Url"];
};

export type ProxyActionRequest = {
  follow?: InputMaybe<FollowProxyAction>;
  collect?: InputMaybe<CollectProxyAction>;
};

export type FollowProxyAction = {
  freeFollow?: InputMaybe<FreeFollowProxyAction>;
};

export type FreeFollowProxyAction = {
  profileId: Scalars["ProfileId"];
};

export type CollectProxyAction = {
  freeCollect?: InputMaybe<FreeCollectProxyAction>;
};

export type FreeCollectProxyAction = {
  publicationId: Scalars["InternalPublicationId"];
};

export type ReactionRequest = {
  profileId: Scalars["ProfileId"];
  reaction: ReactionTypes;
  publicationId: Scalars["InternalPublicationId"];
};

export type ReportPublicationRequest = {
  publicationId: Scalars["InternalPublicationId"];
  reason: ReportingReasonInputParams;
  additionalComments?: InputMaybe<Scalars["String"]>;
};

export type ReportingReasonInputParams = {
  sensitiveReason?: InputMaybe<SensitiveReasonInputParams>;
  illegalReason?: InputMaybe<IllegalReasonInputParams>;
  fraudReason?: InputMaybe<FraudReasonInputParams>;
  spamReason?: InputMaybe<SpamReasonInputParams>;
};

export type SensitiveReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingSensitiveSubreason;
};

export enum PublicationReportingReason {
  Sensitive = "SENSITIVE",
  Illegal = "ILLEGAL",
  Fraud = "FRAUD",
  Spam = "SPAM"
}

export enum PublicationReportingSensitiveSubreason {
  Nsfw = "NSFW",
  Offensive = "OFFENSIVE"
}

export type IllegalReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingIllegalSubreason;
};

export enum PublicationReportingIllegalSubreason {
  AnimalAbuse = "ANIMAL_ABUSE",
  HumanAbuse = "HUMAN_ABUSE",
  Violence = "VIOLENCE",
  ThreatIndividual = "THREAT_INDIVIDUAL",
  DirectThreat = "DIRECT_THREAT"
}

export type FraudReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingFraudSubreason;
};

export enum PublicationReportingFraudSubreason {
  Scam = "SCAM",
  Impersonation = "IMPERSONATION"
}

export type SpamReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingSpamSubreason;
};

export enum PublicationReportingSpamSubreason {
  Misleading = "MISLEADING",
  MisuseHashtags = "MISUSE_HASHTAGS",
  Unrelated = "UNRELATED",
  Repetitive = "REPETITIVE",
  FakeEngagement = "FAKE_ENGAGEMENT",
  ManipulationAlgo = "MANIPULATION_ALGO",
  SomethingElse = "SOMETHING_ELSE"
}

export type AchRequest = {
  secret: Scalars["String"];
  ethereumAddress: Scalars["EthereumAddress"];
  handle?: InputMaybe<Scalars["CreateHandle"]>;
  freeTextHandle?: InputMaybe<Scalars["Boolean"]>;
  overrideTradeMark: Scalars["Boolean"];
  overrideAlreadyClaimed: Scalars["Boolean"];
};