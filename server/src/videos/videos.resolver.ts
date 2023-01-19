import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { VideosService } from './videos.service';
import { VType, VideoType } from './videos.dto';

@Resolver()
export class VideosResolver {
  constructor(private readonly videosService: VideosService) {}

  @Query(() => [VType])
  async videos() {
    return this.videosService.findAll();
  }

  @Mutation(() => VideoType)
  async createVideo(@Args('input') input: VideoType) {
    return this.videosService.create(input);
  }

  @Mutation(() => VideoType)
  async updateVideo(@Args('id') id: string, @Args('input') input: VideoType) {
    return this.videosService.update(id, input);
  }

  @Mutation(() => VideoType)
  async deleteVideo(@Args('id') id: string) {
    return this.videosService.delete(id);
  }
}
