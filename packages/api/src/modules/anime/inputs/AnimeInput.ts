import { Field, InputType, Int } from 'type-graphql';

import { AnimeTitleInput } from './AnimeTitleInput';
import { AnimeFormat, AnimeSeason } from '../../../types/AnimeTypes';
import {
  CountryCode,
  MediaSource,
  MediaStatus,
  MediaType,
} from '../../../types/MediaTypes';
import FuzzyDateInput from '../../shared/inputs/FuzzyDateInput';
import MediaTagInput from '../../shared/inputs/MediaTagInput';
import MediaTrailerInput from '../../shared/inputs/MediaTrailerInput';
import MediaCoverImageInput from '../../shared/inputs/MediaCoverImageInput';
import AiringScheduleInput from '../../shared/inputs/AiringScheduleInput';
import MediaExternalLinkInput from '../../shared/inputs/MediaExternalLinkInput';

@InputType()
export class AnimeInput {
  @Field()
  title: AnimeTitleInput;

  @Field(() => [String], { nullable: true })
  synonyms: string[];

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  startDate: FuzzyDateInput;

  @Field({ nullable: true })
  endDate: FuzzyDateInput;

  @Field({ nullable: true })
  season: AnimeSeason;

  @Field(() => Int, { nullable: true })
  seasonYear: number;

  @Field()
  type: MediaType;

  @Field({ nullable: true })
  format: AnimeFormat;

  @Field({ nullable: true })
  status: MediaStatus;

  @Field(() => Int, { nullable: true })
  episodes: number;

  @Field(() => Int, { nullable: true })
  duration: number;

  @Field(() => Boolean)
  isAdult: boolean;

  @Field({ nullable: true })
  genre: string;

  @Field(() => [MediaTagInput], { nullable: true })
  tag: MediaTagInput[];

  @Field(() => Boolean)
  onList: boolean;

  @Field({ nullable: true })
  isLicensed: boolean;

  @Field({ nullable: true })
  licensedBy: string;

  @Field(() => Int, { nullable: true })
  averageScore: number;

  @Field(() => Int, { nullable: true })
  popularity: number;

  @Field({ nullable: true })
  source: MediaSource;

  @Field({ nullable: true })
  countryOfOriginL: CountryCode;

  @Field({ nullable: true })
  hashtag: String;

  @Field({ nullable: true })
  trailer: MediaTrailerInput;

  @Field({ nullable: true })
  updatedAt: number;

  @Field({ nullable: true })
  coverImage: MediaCoverImageInput;

  @Field({ nullable: true })
  bannerImage: String;

  @Field({ nullable: true })
  characters: string;

  @Field({ nullable: true })
  staff: string;

  @Field({ nullable: true })
  studios: string;

  @Field(() => [AiringScheduleInput], { nullable: true })
  nextAiringEpisode: AiringScheduleInput[];

  @Field(() => [MediaExternalLinkInput], { nullable: true })
  externalLinks: MediaExternalLinkInput[];
}
