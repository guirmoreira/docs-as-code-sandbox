import { Router, Request, Response } from "express";
import { VideoController } from "../controllers/VideoController";
import { InMemoryVideoRepository } from "../../infrastructure/repositories/InMemoryVideoRepository";
import { CreateVideoUseCase } from "../../application/useCases/CreateVideoUseCase";

const videoRouter = Router();

// Injeção de dependências
const videoRepository = new InMemoryVideoRepository();
const createVideoUseCase = new CreateVideoUseCase(videoRepository);
const videoController = new VideoController(createVideoUseCase);

// Rota para criação de vídeo
videoRouter.post("/videos", async (req: Request, res: Response) => {
  await videoController.create(req, res);
});

// Outras rotas (GET, PUT, DELETE) podem ser definidas aqui

export default videoRouter;