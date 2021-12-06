import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AiringSchedule = {
  __typename?: 'AiringSchedule';
  airingAt: Scalars['Float'];
  episode: Scalars['Float'];
  id: Scalars['ID'];
  timeUntilAiring: Scalars['Float'];
};

export type AiringScheduleInput = {
  airingAt?: InputMaybe<Scalars['Float']>;
  episode?: InputMaybe<Scalars['Float']>;
  id: Scalars['ID'];
  timeUntilAiring?: InputMaybe<Scalars['Float']>;
};

export type Anime = {
  __typename?: 'Anime';
  averageScore: Scalars['Int'];
  bannerImage: Scalars['String'];
  characters: Scalars['String'];
  countryOfOrigin: Scalars['String'];
  coverImage: MediaCoverImage;
  description: Scalars['String'];
  duration: Scalars['Int'];
  endDate: FuzzyDate;
  episodes: Scalars['Int'];
  externalLinks: Array<MediaExternalLink>;
  format: Scalars['String'];
  genre: Scalars['String'];
  hashtag: Scalars['String'];
  id: Scalars['ID'];
  isAdult: Scalars['Boolean'];
  isLicensed: Scalars['Boolean'];
  licensedBy: Scalars['String'];
  nextAiringEpisode: Array<AiringSchedule>;
  onList: Scalars['Boolean'];
  popularity: Scalars['Int'];
  season: Scalars['String'];
  seasonYear: Scalars['Int'];
  source: Scalars['String'];
  staff: Scalars['String'];
  startDate: FuzzyDate;
  status: Scalars['String'];
  studios: Scalars['String'];
  synonyms: Array<Scalars['String']>;
  tag: Array<MediaTag>;
  title: AnimeTitle;
  trailer: MediaTrailer;
  type: Scalars['String'];
  updatedAt: Scalars['Float'];
};

export type AnimeInput = {
  averageScore?: InputMaybe<Scalars['Int']>;
  bannerImage?: InputMaybe<Scalars['String']>;
  characters?: InputMaybe<Scalars['String']>;
  countryOfOriginL?: InputMaybe<Scalars['String']>;
  coverImage?: InputMaybe<MediaCoverImageInput>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  endDate?: InputMaybe<FuzzyDateInput>;
  episodes?: InputMaybe<Scalars['Int']>;
  externalLinks?: InputMaybe<Array<MediaExternalLinkInput>>;
  format?: InputMaybe<Scalars['String']>;
  genre?: InputMaybe<Scalars['String']>;
  hashtag?: InputMaybe<Scalars['String']>;
  isAdult: Scalars['Boolean'];
  isLicensed?: InputMaybe<Scalars['Boolean']>;
  licensedBy?: InputMaybe<Scalars['String']>;
  nextAiringEpisode?: InputMaybe<Array<AiringScheduleInput>>;
  onList: Scalars['Boolean'];
  popularity?: InputMaybe<Scalars['Int']>;
  season?: InputMaybe<Scalars['String']>;
  seasonYear?: InputMaybe<Scalars['Int']>;
  source?: InputMaybe<Scalars['String']>;
  staff?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<FuzzyDateInput>;
  status?: InputMaybe<Scalars['String']>;
  studios?: InputMaybe<Scalars['String']>;
  synonyms?: InputMaybe<Array<Scalars['String']>>;
  tag?: InputMaybe<Array<MediaTagInput>>;
  title: AnimeTitleInput;
  trailer?: InputMaybe<MediaTrailerInput>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['Float']>;
};

export type AnimeTitle = {
  __typename?: 'AnimeTitle';
  english?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  native?: Maybe<Scalars['String']>;
  romaji?: Maybe<Scalars['String']>;
  userPreferred: Scalars['String'];
};

export type AnimeTitleInput = {
  english?: InputMaybe<Scalars['String']>;
  native?: InputMaybe<Scalars['String']>;
  romaji?: InputMaybe<Scalars['String']>;
  userPreferred: Scalars['String'];
};

export type FuzzyDate = {
  __typename?: 'FuzzyDate';
  day: Scalars['Float'];
  id: Scalars['ID'];
  month: Scalars['Float'];
  year: Scalars['Float'];
};

export type FuzzyDateInput = {
  day: Scalars['Float'];
  id: Scalars['ID'];
  month: Scalars['Float'];
  year: Scalars['Float'];
};

export type MediaCoverImage = {
  __typename?: 'MediaCoverImage';
  color?: Maybe<Scalars['String']>;
  extraLarge?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  large?: Maybe<Scalars['String']>;
  medium?: Maybe<Scalars['String']>;
};

export type MediaCoverImageInput = {
  color?: InputMaybe<Scalars['String']>;
  extraLarge?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  large?: InputMaybe<Scalars['String']>;
  medium?: InputMaybe<Scalars['String']>;
};

export type MediaExternalLink = {
  __typename?: 'MediaExternalLink';
  id: Scalars['ID'];
  site: Scalars['String'];
  url: Scalars['String'];
};

export type MediaExternalLinkInput = {
  id: Scalars['ID'];
  site: Scalars['String'];
  url: Scalars['String'];
};

export type MediaTag = {
  __typename?: 'MediaTag';
  description: Scalars['String'];
  id: Scalars['ID'];
  isAdult: Scalars['Boolean'];
  name: Scalars['String'];
};

export type MediaTagInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  isAdult: Scalars['Boolean'];
  name: Scalars['String'];
};

export type MediaTrailer = {
  __typename?: 'MediaTrailer';
  id: Scalars['ID'];
  site: Scalars['String'];
  thumbnail: Scalars['String'];
};

export type MediaTrailerInput = {
  id: Scalars['ID'];
  site?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAnime: Anime;
  addProfilePicture: Scalars['Boolean'];
  login?: Maybe<User>;
  logout: Scalars['Boolean'];
  register: User;
};


export type MutationAddAnimeArgs = {
  anime: AnimeInput;
};


export type MutationAddProfilePictureArgs = {
  picture: Scalars['Upload'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};

export type Query = {
  __typename?: 'Query';
  Hello: Scalars['String'];
  getAnimes: Array<Anime>;
  me?: Maybe<User>;
};

export type RegisterInput = {
  name: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  username: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'User', id: string, name: string, username: string } | null | undefined };

export type RegisterMutationVariables = Exact<{
  data: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'User', id: string, name: string, username: string } };

export type GetAllAnimesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAnimesQuery = { __typename?: 'Query', getAnimes: Array<{ __typename?: 'Anime', id: string, synonyms: Array<string>, description: string, season: string, seasonYear: number, type: string, format: string, status: string, episodes: number, duration: number, isAdult: boolean, genre: string, onList: boolean, isLicensed: boolean, licensedBy: string, averageScore: number, popularity: number, source: string, countryOfOrigin: string, hashtag: string, updatedAt: number, bannerImage: string, characters: string, staff: string, studios: string, title: { __typename?: 'AnimeTitle', romaji?: string | null | undefined, id: number, userPreferred: string, english?: string | null | undefined, native?: string | null | undefined }, startDate: { __typename?: 'FuzzyDate', id: string, year: number, month: number, day: number }, endDate: { __typename?: 'FuzzyDate', year: number, id: string, month: number, day: number }, tag: Array<{ __typename?: 'MediaTag', id: string, name: string, description: string, isAdult: boolean }>, trailer: { __typename?: 'MediaTrailer', id: string, site: string, thumbnail: string }, coverImage: { __typename?: 'MediaCoverImage', id: string, extraLarge?: string | null | undefined, medium?: string | null | undefined, large?: string | null | undefined, color?: string | null | undefined }, nextAiringEpisode: Array<{ __typename?: 'AiringSchedule', id: string, airingAt: number, timeUntilAiring: number, episode: number }>, externalLinks: Array<{ __typename?: 'MediaExternalLink', site: string, url: string, id: string }> }> };


export const LoginDocument = gql`
    mutation Login($password: String!, $username: String!) {
  login(password: $password, username: $username) {
    id
    name
    username
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const RegisterDocument = gql`
    mutation Register($data: RegisterInput!) {
  register(data: $data) {
    id
    name
    username
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const GetAllAnimesDocument = gql`
    query GetAllAnimes {
  getAnimes {
    id
    title {
      romaji
      id
      userPreferred
      english
      native
    }
    synonyms
    description
    startDate {
      id
      year
      month
      day
    }
    endDate {
      year
      id
      month
      day
    }
    season
    seasonYear
    type
    format
    status
    episodes
    duration
    isAdult
    genre
    tag {
      id
      name
      description
      isAdult
    }
    onList
    isLicensed
    licensedBy
    averageScore
    popularity
    source
    countryOfOrigin
    hashtag
    trailer {
      id
      site
      thumbnail
    }
    updatedAt
    coverImage {
      id
      extraLarge
      medium
      large
      color
    }
    bannerImage
    characters
    staff
    studios
    nextAiringEpisode {
      id
      airingAt
      timeUntilAiring
      episode
    }
    externalLinks {
      site
      url
      id
    }
  }
}
    `;

export function useGetAllAnimesQuery(options: Omit<Urql.UseQueryArgs<GetAllAnimesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllAnimesQuery>({ query: GetAllAnimesDocument, ...options });
};
import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "AiringSchedule",
        "fields": [
          {
            "name": "airingAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "episode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "timeUntilAiring",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Anime",
        "fields": [
          {
            "name": "averageScore",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "bannerImage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "characters",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "countryOfOrigin",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "coverImage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MediaCoverImage",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "duration",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "endDate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "FuzzyDate",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "episodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "externalLinks",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "MediaExternalLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "format",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "genre",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "hashtag",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "isAdult",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "isLicensed",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "licensedBy",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "nextAiringEpisode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "AiringSchedule",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "onList",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "popularity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "season",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "seasonYear",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "source",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "staff",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "startDate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "FuzzyDate",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "studios",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "synonyms",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "tag",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "MediaTag",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AnimeTitle",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "trailer",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MediaTrailer",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "AnimeTitle",
        "fields": [
          {
            "name": "english",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "native",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "romaji",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "userPreferred",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "FuzzyDate",
        "fields": [
          {
            "name": "day",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "month",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "year",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "MediaCoverImage",
        "fields": [
          {
            "name": "color",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "extraLarge",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "large",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "medium",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "MediaExternalLink",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "site",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "MediaTag",
        "fields": [
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "isAdult",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "MediaTrailer",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "site",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "thumbnail",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "addAnime",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Anime",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "anime",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "addProfilePicture",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "picture",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "login",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "password",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "username",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "logout",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "register",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "Hello",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "getAnimes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Anime",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "me",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "User",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "username",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;