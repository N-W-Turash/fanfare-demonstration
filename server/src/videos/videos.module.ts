import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VideosService } from './videos.service';
import { VideosResolver } from './videos.resolver';
import { Videos, VideosSchema } from './videos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Videos.name, schema: VideosSchema }]),
  ],
  providers: [VideosService, VideosResolver],
})
export class VideosModule {}
