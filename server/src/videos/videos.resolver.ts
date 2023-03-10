import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import * as fs from 'fs';
import { VideosService } from './videos.service';
import {
  VType,
  VideoType,
  VideoInputType,
  VideoUpdateInputType,
} from './videos.dto';

@Resolver()
export class VideosResolver {
  constructor(private readonly videosService: VideosService) {}

  @Query(() => [VType])
  async videos() {
    return this.videosService.findAll();
  }

  @Mutation(() => VideoType)
  async createVideo(@Args('input') input: VideoInputType) {
    try {
      const { title, file } = input;
      const baseUrl = process.env.BASE_URL;
      const { createReadStream, mimetype } = await file;
      const extension = mimetype.split('/')[1];
      const fileName = `${Date.now()}.${extension}`;
      const filePath = `./uploads/${fileName}`;
      const fileUrl = `http://${baseUrl}:${process.env.PORT}/${fileName}`;

      return new Promise(async (resolve, reject) => {
        createReadStream()
          .pipe(fs.createWriteStream(filePath))
          .on('finish', () => {
            resolve(this.videosService.create({ url: fileUrl, title }));
          })
          .on('error', (error: Error) => {
            console.log('Error', error);
            reject(error);
          });
      });
    } catch (error) {
      console.log('Error', error);
    }
  }

  @Mutation(() => VideoType)
  async updateVideo(
    @Args('id') id: string,
    @Args('input') input: VideoUpdateInputType,
  ) {
    return this.videosService.update(id, input);
  }

  @Mutation(() => VideoType)
  async deleteVideo(@Args('id') id: string) {
    return this.videosService.delete(id);
  }
}
