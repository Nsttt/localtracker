import { Field, ObjectType, ID, Int } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Anime extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  title: string;

  @Field((type) => Int)
  @Column('int')
  idMal: number;

  @Field()
  @Column()
  startDate: ;

  @Field()
  @Column()
  endDate: ;

  @Field()
  @Column()
  season: ;

  @Field((type) => Int)
  @Column('int')
  seasonYear: number;

  @Field()
  @Column()
  type: ;

  @Field()
  @Column()
  format: ;

  @Field()
  @Column()
  status: ;

  @Field((type) => Int)
  @Column('int')
  episodes: number;

  @Field((type) => Int)
  @Column('int')
  duration: number;

  @Field((type) => Int)
  @Column('int')
  chapters: number;

  @Field((type) => Int)
  @Column('int')
  volumes: number;

  @Field()
  @Column()
  isAdult: Boolean;

  @Field()
  @Column()
  genre: String;

  @Field()
  @Column()
  tag: String;

  @Field((type) => Int)
  @Column('int')
  minimumTagRank: number;

  @Field()
  @Column()
  tagCategory: String;

  @Field()
  @Column()
  onList: Boolean;

  @Field()
  @Column()
  licensedBy: String;

  @Field((type) => Int)
  @Column('int')
  averageScore: number;

  @Field((type) => Int)
  @Column('int')
  popularity: number;

  @Field()
  @Column()
  source: ;

  @Field()
  @Column()
  countryOfOrigin: CountryCode;

  @Field()
  @Column()
  search: String;

  @Field((type) => Int)
  @Column('int')
  id_not: number;

  @Field((type) => [Int])
  @Column('int')
  id_in: [number];

  @Field((type) => [Int])
  @Column('int')
  id_not_in: [number];

  @Field((type) => Int)
  @Column('int')
  idMal_not: number;

  @Field((type) => [Int])
  @Column('int')
  idMal_in: [number];

  @Field((type) => [Int])
  @Column('int')
  idMal_not_in: [number];

  @Field()
  @Column()
  startDate_greater: ;

  @Field()
  @Column()
  startDate_lesser: ;

  @Field()
  @Column()
  startDate_like: String;

  @Field()
  @Column()
  endDate_greater: ;

  @Field()
  @Column()
  endDate_lesser: ;

  @Field()
  @Column()
  endDate_like: String;

  @Field()
  @Column()
  format_in: [];

  @Field()
  @Column()
  format_not: ;

  @Field()
  @Column()
  format_not_in: [];

  @Field()
  @Column()
  status_in: [];

  @Field()
  @Column()
  status_not: ;

  @Field()
  @Column()
  status_not_in: [];

  @Field((type) => Int)
  @Column('int')
  episodes_greater: number;

  @Field((type) => Int)
  @Column('int')
  episodes_lesser: number;

  @Field((type) => Int)
  @Column('int')
  duration_greater: number;

  @Field((type) => Int)
  @Column('int')
  duration_lesser: number;

  @Field((type) => Int)
  @Column('int')
  chapters_greater: number;

  @Field((type) => Int)
  @Column('int')
  chapters_lesser: number;

  @Field((type) => Int)
  @Column('int')
  volumes_greater: number;

  @Field((type) => Int)
  @Column('int')
  volumes_lesser: number;

  @Field()
  @Column()
  genre_in: [String];

  @Field()
  @Column()
  genre_not_in: [String];

  @Field()
  @Column()
  tag_in: [String];

  @Field()
  @Column()
  tag_not_in: [String];

  @Field()
  @Column()
  tagCategory_in: [String];

  @Field()
  @Column()
  tagCategory_not_in: [String];

  @Field()
  @Column()
  licensedBy_in: [String];

  @Field((type) => Int)
  @Column('int')
  averageScore_not: number;

  @Field((type) => Int)
  @Column('int')
  averageScore_greater: number;

  @Field((type) => Int)
  @Column('int')
  averageScore_lesser: number;

  @Field((type) => Int)
  @Column('int')
  popularity_not: number;

  @Field((type) => Int)
  @Column('int')
  popularity_greater: number;

  @Field((type) => Int)
  @Column('int')
  popularity_lesser: number;

  @Field()
  @Column()
  source_in: [];

  @Field()
  @Column()
  sort: [];
}
