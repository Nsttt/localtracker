import { Field, Int, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export default class AnimeTitle {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  userPreferred: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  romaji?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  english?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  native?: string;
}
