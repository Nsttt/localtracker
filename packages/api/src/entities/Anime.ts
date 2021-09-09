import { Field, ObjectType, ID, Int } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Anime extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ description: 'The official titles of the media in various languages' })
  @Column()
  title: string;

  @Field({ description: 'The first official release date of the media' })
  @Column()
  startDate: ;

  @Field({ description: 'The first official release date of the media' })
  @Column()
  endDate: ;

  @Field({ description: 'The first official release date of the media' })
  @Column()
  season: ;

  @Field((type) => Int)
  @Column('int')
  seasonYear: number;

  @Field({ description: 'The type of the media; ANIME / MANGA / SHOW / MOVIE / BOOK' })
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

  @Field(() => Boolean)
  @Column({ default: false})
  isAdult: boolean;

  @Field()
  @Column()
  genre: string;

  @Field()
  @Column()
  tag: string;

  @Field((type) => Int)
  @Column('int')
  minimumTagRank: number;

  @Field()
  @Column()
  tagCategory: string;

  @Field(() => Boolean)
  @Column({ default: false})
  onList: boolean;

  @Field()
  @Column()
  licensedBy: string;

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
  search: string;

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
  startDate_like: string;

  @Field()
  @Column()
  endDate_greater: ;

  @Field()
  @Column()
  endDate_lesser: ;

  @Field()
  @Column()
  endDate_like: string;

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
