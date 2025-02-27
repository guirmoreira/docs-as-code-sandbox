import { IVideoRepository } from "../../domain/repositories/IVideoRepository";
import { Video } from "../../domain/entities/Video";
import { v4 as uuidv4 } from "uuid";


/**
 * Este caso de uso é responsável por criar um vídeo.
 */
export class CreateVideoUseCase {
  constructor(private videoRepository: IVideoRepository) {}

  async execute(data: Omit<Video, "id" | "createdAt">): Promise<Video> {
    const video: Video = {
      id: uuidv4(),
      createdAt: new Date(),
      ...data,
    };

    return this.videoRepository.create(video);
  }
}