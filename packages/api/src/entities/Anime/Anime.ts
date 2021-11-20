import { Field, ObjectType, ID, Int } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import {
  FuzzyDate,
  MediaTag,
  MediaTrailer,
  MediaCoverImage,
  MediaExternalLink,
  AiringSchedule,
} from '../shared';
import { AnimeTitle } from '.';
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
  @Column(() => AnimeTitle)
  title: AnimeTitle;

  @Field()
  @Column('simple-array')
  synonyms: string[];

  @Field()
  @Column()
  description: string;

  @Field(() => FuzzyDate)
  @Column(() => FuzzyDate)
  startDate: FuzzyDate;

  @Field(() => FuzzyDate)
  @Column(() => FuzzyDate)
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
  @Column(() => MediaTag)
  tag: MediaTag[];

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
  @Column('enum', { enum: CountryCode })
  countryOfOrigin: string;

  @Field()
  @Column()
  hashtag: String;

  @Field(() => MediaTrailer)
  @Column(() => MediaTrailer)
  trailer: MediaTrailer;

  @Field()
  @Column()
  updatedAt: number;

  @Field(() => MediaCoverImage)
  @Column(() => MediaCoverImage)
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
  @Column(() => AiringSchedule)
  nextAiringEpisode: AiringSchedule[];

  @Field(() => [MediaExternalLink])
  @Column(() => MediaExternalLink)
  externalLinks: MediaExternalLink[];
}
