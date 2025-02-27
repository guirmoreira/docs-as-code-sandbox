import { IVideoRepository } from "../../domain/repositories/IVideoRepository";
import { Video } from "../../domain/entities/Video";

export class InMemoryVideoRepository implements IVideoRepository {
  private videos: Video[] = [];

  async findAll(): Promise<Video[]> {
    return this.videos;
  }

  async findById(id: string): Promise<Video | null> {
    const video = this.videos.find(v => v.id === id);
    return video || null;
  }

  async create(video: Video): Promise<Video> {
    this.videos.push(video);
    return video;
  }
}