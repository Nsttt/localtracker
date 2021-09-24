import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export default class AiringSchedule {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  airingAt?: number;

  @Field()
  @Column()
  timeUntilAiring?: number;

  @Field()
  @Column()
  episode?: number;
}
