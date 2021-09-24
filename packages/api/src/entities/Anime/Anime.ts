import { Field, ObjectType, ID, Int } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import {
  FuzzyDate,
  MediaTag,
  MediaTrailer,
  MediaCoverImage,
  MediaExternalLinks,
  AiringSchedule,
} from '../shared';
import { AnimeTitle } from './AnimeTitle';
import { AnimeSeason, AnimeFormat } from '../../types/AnimeTypes';
import {
  MediaStatus,
  MediaSource,
  CountryCode,
  MediaType,
} from '../../types/MediaTypes';

@ObjectType()
@Entity()
export default class Anime extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field(() => AnimeTitle)
  @Column()
  title: AnimeTitle;

  @Field()
  @Column()
  synonyms: string;

  @Field()
  @Column()
  description: string;

  @Field(() => FuzzyDate)
  @Column()
  startDate: FuzzyDate;

  @Field(() => FuzzyDate)
  @Column()
  endDate: FuzzyDate;

  @Field()
  @Column()
  season: AnimeSeason;

  @Field(() => Int)
  @Column('int')
  seasonYear: number;

  @Field()
  @Column()
  type: MediaType;

  @Field()
  @Column()
  format: AnimeFormat;

  @Field()
  @Column()
  status: MediaStatus;

  @Field(() => Int)
  @Column('int')
  episodes: number;

  @Field(() => Int)
  @Column('int')
  duration: number;

  @Field(() => Boolean)
  @Column({ default: false })
  isAdult: boolean;

  @Field()
  @Column()
  genre: string;

  @Field(() => [MediaTag])
  @Column()
  tag: MediaTag;

  @Field(() => Boolean)
  @Column({ default: false })
  onList: boolean;

  @Field(() => Boolean)
  @Column()
  isLicensed: boolean;

  @Field()
  @Column()
  licensedBy: string;

  @Field(() => Int)
  @Column('int')
  averageScore: number;

  @Field(() => Int)
  @Column('int')
  popularity: number;

  @Field()
  @Column()
  source: MediaSource;

  @Field()
  @Column()
  countryOfOrigin: CountryCode;

  @Field()
  @Column()
  hashtag: String;

  @Field(() => MediaTrailer)
  @Column()
  trailer: MediaTrailer;

  @Field()
  @Column()
  updatedAt: number;

  @Field(() => MediaCoverImage)
  @Column()
  coverImage: MediaCoverImage;

  @Field()
  @Column()
  bannerImage: String;

  @Field()
  @Column()
  characters: string;

  @Field()
  @Column()
  staff: string;

  @Field()
  @Column()
  studios: string;

  @Field(() => [AiringSchedule])
  @Column()
  nextAiringEpisode: AiringSchedule[];

  @Field(() => [MediaExternalLinks])
  @Column()
  externalLinks: MediaExternalLinks[];
}
