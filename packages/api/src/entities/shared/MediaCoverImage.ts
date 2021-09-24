import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export default class MediaCoverImage {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  extraLarge?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  large?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  medium?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  color?: string;
}
