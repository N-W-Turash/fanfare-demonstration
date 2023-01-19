import { ObjectType, Field, InputType } from '@nestjs/graphql';

@ObjectType('VType')
export class VType {
  @Field()
  _id: string;
  @Field()
  url: string;
  @Field()
  title: string;
}

@ObjectType('VideoType')
@InputType('VideoInputType')
export class VideoType {
  @Field()
  url: string;
  @Field()
  title: string;
}
