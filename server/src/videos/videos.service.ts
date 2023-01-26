import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Videos, VideosDocument } from './videos.schema';
import { VideoType, VideoInputType } from './videos.dto';

@Injectable()
export class VideosService {
  constructor(
    @InjectModel(Videos.name) private videosModel: Model<VideosDocument>,
  ) {}

  async findAll(): Promise<Videos[]> {
    return this.videosModel.find().exec();
  }

  async create(createVideosDto: VideoType): Promise<Videos> {
    const createdVideo = new this.videosModel(createVideosDto);
    return createdVideo.save();
  }

  async update(id: string, updateCatDto: VideoInputType): Promise<Videos> {
    return this.videosModel.findByIdAndUpdate(id, updateCatDto);
  }

  async delete(id: string): Promise<Videos> {
    return this.videosModel.findByIdAndDelete(id);
  }
}
