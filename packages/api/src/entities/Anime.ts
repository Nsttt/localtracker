import { Field, ObjectType, ID, Int } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import {
  FuzzyDate,
  MediaSeason,
  MediaFormat,
  MediaStatus,
  MediaType,
  MediaTag,
  MediaSource,
  CountryCode,
  MediaTrailer,
  MediaCoverImage,
  CharacterConnection,
  StaffConnection,
  StudioConnection,
  AiringSchedule,
  MediaExternalLinks,
} from '../types/MediaTypes';

@ObjectType()
@Entity()
export class Anime extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ description: 'The official titles of the media in various languages' })
  @Column()
  title: string[];

  @Field({ description: 'Alternative titles of the media' })
  @Column()
  synonyms: string[];

  @Field({ description: "Short description of the media's story and characters" })
  @Column()
  description: string;

  @Field({ description: 'The first official release date of the media' })
  @Column()
  startDate: FuzzyDate;

  @Field({ description: 'The last official release date of the media' })
  @Column()
  endDate: FuzzyDate;

  @Field({ description: 'The season the media was initially released in' })
  @Column()
  season: MediaSeason;

  @Field(() => Int)
  @Column('int')
  seasonYear: number;

  @Field({ description: 'The type of the media; ANIME / MANGA / SHOW / MOVIE / BOOK' })
  @Column()
  type: MediaType;

  @Field()
  @Column()
  format: MediaFormat;

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

  @Field({ description: 'The genres of the media' })
  @Column()
  genre: string[];

  @Field({ description: 'List of tags that describes elements and themes of the media' })
  @Column()
  tag: MediaTag[];

  @Field(() => Boolean)
  @Column({ default: false })
  onList: boolean;

  @Field()
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

  @Field()
  @Column()
  trailer: MediaTrailer;

  @Field()
  @Column()
  updatedAt: number;

  @Field()
  @Column()
  coverImage: MediaCoverImage;

  @Field()
  @Column()
  bannerImage: String;

  @Field()
  @Column()
  characters: CharacterConnection;

  @Field()
  @Column()
  staff: StaffConnection;

  @Field()
  @Column()
  studios: StudioConnection;

  @Field()
  @Column()
  nextAiringEpisode: AiringSchedule;

  @Field()
  @Column()
  externalLinks: MediaExternalLinks[];
}
