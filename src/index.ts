import express from "express";
import videoRouter from "./presentation/routes/VideoRoutes";
import { setupSwagger } from "./shared/swagger";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", videoRouter);

// Configuração do Swagger
setupSwagger(app);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  console.log(`Swagger disponível em http://localhost:${port}/api/docs`);
});