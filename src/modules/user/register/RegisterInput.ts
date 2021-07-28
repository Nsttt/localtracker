import { Length } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { IsUsernameAlreadyExist } from './isUsernameAlreadyExists';

@InputType()
export class RegisterInput {
  @Field()
  @Length(1, 255)
  name: string;

  @Field()
  @Length(1, 255)
  @IsUsernameAlreadyExist({ message: 'Username already in use.'})
  username: string;

  @Field()
  password: string;
}
