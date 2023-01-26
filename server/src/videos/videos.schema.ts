import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Videos {
  @Prop()
  title: string;
  @Prop()
  url: string;
}

export type VideosDocument = Videos & Document;
export const VideosSchema = SchemaFactory.createForClass(Videos);
