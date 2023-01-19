import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Videos {
  @Prop()
  url: string;
  @Prop()
  title: string;
}

export type VideosDocument = Videos & Document;
export const VideosSchema = SchemaFactory.createForClass(Videos);
