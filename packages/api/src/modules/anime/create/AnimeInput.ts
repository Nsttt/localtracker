import { Field, InputType, Int } from 'type-graphql';

import { Anime, AnimeTitle } from '../../../entities/Anime';

import {
  FuzzyDate,
  MediaTag,
  AiringSchedule,
  MediaCoverImage,
  MediaTrailer,
  MediaExternalLinks,
} from '../../../entities/shared';
import { AnimeSeason, AnimeFormat } from '../../../types/AnimeTypes';
import {
  MediaStatus,
  MediaSource,
  CountryCode,
  MediaType,
} from '../../../types/MediaTypes';

@InputType()
export class AnimeInput implements Partial<Anime> {
  @Field()
  title: string;

  @Field()
  synonyms: string;

  @Field()
  description: string;

  @Field()
  startDate: FuzzyDate;

  @Field()
  endDate: FuzzyDate;

  @Field()
  season: AnimeSeason;

  @Field(() => Int)
  seasonYear: number;

  @Field()
  type: MediaType;

  @Field()
  format: AnimeFormat;

  @Field()
  status: MediaStatus;

  @Field(() => Int)
  episodes: number;

  @Field(() => Int)
  duration: number;

  @Field(() => Boolean)
  isAdult: boolean;

  @Field()
  genre: string;

  @Field()
  tag: MediaTag;

  @Field(() => Boolean)
  onList: boolean;

  @Field()
  isLicensed: boolean;

  @Field()
  licensedBy: string;

  @Field(() => Int)
  averageScore: number;

  @Field(() => Int)
  popularity: number;

  @Field()
  source: string;

  @Field()
  countryOfOriginL: CountryCode;

  @Field()
  hashtag: String;

  @Field()
  trailer: MediaTrailer;

  @Field()
  updatedAt: number;

  @Field()
  coverImage: MediaCoverImage;

  @Field()
  bannerImage: String;

  @Field()
  characters: string;

  @Field()
  staff: string;

  @Field()
  studios: string;

  @Field()
  nextAiringEpisode: AiringSchedule;

  @Field()
  externalLinks: MediaExternalLinks;
}
