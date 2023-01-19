import { Model } from 'mongoose';
import { Videos, VideosDocument } from './videos.schema';
import { VideoType } from './videos.dto';
export declare class VideosService {
    private videosModel;
    constructor(videosModel: Model<VideosDocument>);
    findAll(): Promise<Videos[]>;
    create(createVideosDto: VideoType): Promise<Videos>;
    update(id: string, updateCatDto: VideoType): Promise<Videos>;
    delete(id: string): Promise<Videos>;
}
