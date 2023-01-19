import { VideosService } from './videos.service';
import { VideoType } from './videos.dto';
export declare class VideosResolver {
    private readonly videosService;
    constructor(videosService: VideosService);
    videos(): Promise<import("./videos.schema").Videos[]>;
    createVideo(input: VideoType): Promise<import("./videos.schema").Videos>;
    updateVideo(id: string, input: VideoType): Promise<import("./videos.schema").Videos>;
    deleteVideo(id: string): Promise<import("./videos.schema").Videos>;
}
