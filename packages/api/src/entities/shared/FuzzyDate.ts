import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export default class FuzzyDate {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field()
  @Column()
  year: number;

  @Field()
  @Column()
  month: number;

  @Field()
  @Column()
  day: number;
}
