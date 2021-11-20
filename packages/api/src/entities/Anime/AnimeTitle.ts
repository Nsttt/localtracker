import { Field, Int, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export default class AnimeTitle {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field()
  @Column()
  userPreferred: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  romaji: string | null;

  @Field({ nullable: true })
  @Column({ nullable: true })
  english: string | null;

  @Field({ nullable: true })
  @Column({ nullable: true })
  native: string | null;
}
