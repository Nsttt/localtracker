import { Field, ObjectType, ID, Int } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Anime extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field(() => Int)
  @Column('int')
  idMal: number;

  @Field()
  @Column()
  startDate: number;

  @Field()
  @Column()
  endDate: number;

  @Field()
  @Column()
  season: string;

  @Field(() => Int)
  @Column('int')
  seasonYear: number;

  @Field()
  @Column()
  type: string;

  @Field()
  @Column()
  format: string;

  @Field()
  @Column()
  status: string;

  @Field(() => Int)
  @Column('int')
  episodes: number;

  @Field(() => Int)
  @Column('int')
  duration: number;

  @Field(() => Int)
  @Column('int')
  chapters: number;

  @Field(() => Int)
  @Column('int')
  volumes: number;

  @Field(() => Boolean)
  @Column({ default: false })
  isAdult: boolean;

  @Field()
  @Column()
  genre: string;

  @Field()
  @Column()
  tag: string;

  @Field(() => Int)
  @Column('int')
  minimumTagRank: number;

  @Field()
  @Column()
  tagCategory: string;

  @Field(() => Boolean)
  @Column({ default: false })
  onList: boolean;

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
  source: string;

  @Field()
  @Column()
  countryOfOrigin: string;

  @Field()
  @Column()
  search: string;

  @Field(() => Int)
  @Column('int')
  id_not: number;

  @Field(() => [Int])
  @Column('int')
  id_in: [number];

  @Field(() => [Int])
  @Column('int')
  id_not_in: [number];

  @Field(() => Int)
  @Column('int')
  idMal_not: number;

  @Field(() => [Int])
  @Column('int')
  idMal_in: [number];

  @Field(() => [Int])
  @Column('int')
  idMal_not_in: [number];

  @Field()
  @Column()
  startDate_greater: number;

  @Field()
  @Column()
  startDate_lesser: number;

  @Field()
  @Column()
  startDate_like: string;

  @Field()
  @Column()
  endDate_greater: number;

  @Field()
  @Column()
  endDate_lesser: number;

  @Field()
  @Column()
  endDate_like: string;

  @Field()
  @Column()
  format_in: [string];

  @Field()
  @Column()
  format_not: string;

  @Field()
  @Column()
  format_not_in: [];

  @Field()
  @Column()
  status_in: [];

  @Field()
  @Column()
  status_not: string;

  @Field()
  @Column()
  status_not_in: [];

  @Field(() => Int)
  @Column('int')
  episodes_greater: number;

  @Field(() => Int)
  @Column('int')
  episodes_lesser: number;

  @Field(() => Int)
  @Column('int')
  duration_greater: number;

  @Field(() => Int)
  @Column('int')
  duration_lesser: number;

  @Field(() => Int)
  @Column('int')
  chapters_greater: number;

  @Field(() => Int)
  @Column('int')
  chapters_lesser: number;

  @Field(() => Int)
  @Column('int')
  volumes_greater: number;

  @Field(() => Int)
  @Column('int')
  volumes_lesser: number;

  @Field()
  @Column()
  genre_in: [string];

  @Field()
  @Column()
  genre_not_in: [string];

  @Field()
  @Column()
  tag_in: [string];

  @Field()
  @Column()
  tag_not_in: [string];

  @Field()
  @Column()
  tagCategory_in: [string];

  @Field()
  @Column()
  tagCategory_not_in: [string];

  @Field()
  @Column()
  licensedBy_in: [string];

  @Field(() => Int)
  @Column('int')
  averageScore_not: number;

  @Field(() => Int)
  @Column('int')
  averageScore_greater: number;

  @Field(() => Int)
  @Column('int')
  averageScore_lesser: number;

  @Field(() => Int)
  @Column('int')
  popularity_not: number;

  @Field(() => Int)
  @Column('int')
  popularity_greater: number;

  @Field(() => Int)
  @Column('int')
  popularity_lesser: number;

  @Field()
  @Column()
  source_in: [];

  @Field()
  @Column()
  sort: [];
}
