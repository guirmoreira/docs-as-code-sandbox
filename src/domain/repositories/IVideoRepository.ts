import { Video } from "../entities/Video";

export interface IVideoRepository {
  findAll(): Promise<Video[]>;
  findById(id: string): Promise<Video | null>;
  create(video: Video): Promise<Video>;
  // Outros métodos CRUD conforme necessário
}