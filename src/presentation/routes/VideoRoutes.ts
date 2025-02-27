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
/**
 * @swagger
 * /videos:
 *   post:
 *     summary: Cria um novo vídeo
 *     tags: [Videos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Título do vídeo
 *               description:
 *                 type: string
 *                 description: Descrição do vídeo
 *               url:
 *                 type: string
 *                 description: URL do vídeo
 *     responses:
 *       201:
 *         description: Vídeo criado com sucesso
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro interno do servidor
 */
videoRouter.post("/videos", async (req: Request, res: Response) => {
  await videoController.create(req, res);
});

// Outras rotas (GET, PUT, DELETE) podem ser definidas aqui

export default videoRouter;