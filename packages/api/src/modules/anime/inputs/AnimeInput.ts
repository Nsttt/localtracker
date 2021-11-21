import { Field, InputType, Int } from 'type-graphql';

import { Anime } from '../../../entities/Anime';

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
export class AnimeInput implements Partial<Anime> {
  @Field()
  title: AnimeTitleInput;

  @Field(() => [String])
  synonyms: string[];

  @Field()
  description: string;

  @Field()
  startDate: FuzzyDateInput;

  @Field()
  endDate: FuzzyDateInput;

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

  @Field(() => [MediaTagInput])
  tag: MediaTagInput[];

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
  source: MediaSource;

  @Field()
  countryOfOriginL: CountryCode;

  @Field()
  hashtag: String;

  @Field()
  trailer: MediaTrailerInput;

  @Field()
  updatedAt: number;

  @Field()
  coverImage: MediaCoverImageInput;

  @Field()
  bannerImage: String;

  @Field()
  characters: string;

  @Field()
  staff: string;

  @Field()
  studios: string;

  @Field(() => [AiringScheduleInput])
  nextAiringEpisode: AiringScheduleInput[];

  @Field(() => [MediaExternalLinkInput])
  externalLinks: MediaExternalLinkInput[];
}
