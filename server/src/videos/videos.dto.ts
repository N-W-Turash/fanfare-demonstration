import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload-minimal';

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
export class VideoType {
  @Field()
  title: string;
  @Field()
  url: string;
}

@InputType('VideoInputType')
export class VideoInputType {
  @Field()
  title: string;
  @Field(() => GraphQLUpload)
  image: Promise<FileUpload>;
}

@ObjectType('SuccessResultType')
export class SuccessResultType {
  @Field()
  success: boolean;
  @Field({ nullable: true })
  message: string;
}
