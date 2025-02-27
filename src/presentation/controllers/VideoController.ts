import { Request, Response } from "express";
import { CreateVideoUseCase } from "../../application/useCases/CreateVideoUseCase";

export class VideoController {
  constructor(private createVideoUseCase: CreateVideoUseCase) {}

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const video = await this.createVideoUseCase.execute(req.body);
      return res.status(201).json(video);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao criar vídeo." });
    }
  }

  // Outros métodos (listar, buscar por id, atualizar, deletar) podem ser adicionados
}