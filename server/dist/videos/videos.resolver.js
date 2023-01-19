"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideosResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const videos_service_1 = require("./videos.service");
const videos_dto_1 = require("./videos.dto");
let VideosResolver = class VideosResolver {
    constructor(videosService) {
        this.videosService = videosService;
    }
    async videos() {
        return this.videosService.findAll();
    }
    async createVideo(input) {
        return this.videosService.create(input);
    }
    async updateVideo(id, input) {
        return this.videosService.update(id, input);
    }
    async deleteVideo(id) {
        return this.videosService.delete(id);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [videos_dto_1.VType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VideosResolver.prototype, "videos", null);
__decorate([
    (0, graphql_1.Mutation)(() => videos_dto_1.VideoType),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [videos_dto_1.VideoType]),
    __metadata("design:returntype", Promise)
], VideosResolver.prototype, "createVideo", null);
__decorate([
    (0, graphql_1.Mutation)(() => videos_dto_1.VideoType),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, videos_dto_1.VideoType]),
    __metadata("design:returntype", Promise)
], VideosResolver.prototype, "updateVideo", null);
__decorate([
    (0, graphql_1.Mutation)(() => videos_dto_1.VideoType),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VideosResolver.prototype, "deleteVideo", null);
VideosResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [videos_service_1.VideosService])
], VideosResolver);
exports.VideosResolver = VideosResolver;
//# sourceMappingURL=videos.resolver.js.map