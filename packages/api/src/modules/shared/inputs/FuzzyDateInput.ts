import { Field, ID, InputType } from 'type-graphql';
import { FuzzyDate } from 'src/entities/shared';

@InputType()
export default class FuzzyDateInput implements Partial<FuzzyDate> {
  @Field(() => ID)
  readonly id: number;

  @Field()
  year: number;

  @Field()
  month: number;

  @Field()
  day: number;
}
