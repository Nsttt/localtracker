import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export default class AiringSchedule {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field()
  @Column({ nullable: true })
  airingAt: number | null;

  @Field()
  @Column({ nullable: true })
  timeUntilAiring: number | null;

  @Field()
  @Column({ nullable: true })
  episode: number | null;
}
