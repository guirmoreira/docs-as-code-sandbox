# 🎬 Video Streaming API

Uma API para gerenciar e transmitir vídeos, construída com **Node.js**, **TypeScript** e documentada com **Swagger**.

---

## 🚀 Como Rodar a Aplicação Localmente

### 1️⃣ Pré-requisitos  

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/) (opcional, mas recomendado)
- [Git](https://git-scm.com/)

### 2️⃣ Clonar o Repositório  

```bash
git clone https://github.com/seu-usuario/video-streaming-api.git
cd video-streaming-api
```

### 3️⃣ Instalar as Dependências  

```bash
npm install
```

### 4️⃣ Rodar o Projeto Localmente  

```bash
npm run dev
```

A API estará rodando em <http://localhost:3000>.

### 5️⃣ Rodar o Projeto com Docker  

Se preferir, pode rodar a aplicação com Docker:

```bash
docker-compose up --build
```

---

## 📖 Documentação geral

A documentação geral do projeto está disponível via MkDocs.  

- 🌐 **Acesse em:** [`http://localhost:8000`](http://localhost:3000)

---

## 📖 Documentação da API  

A documentação interativa está disponível via Swagger.  

- 🌐 **Acesse em:** [`http://localhost:3000/api/docs`](http://localhost:3000/api/docs)

---

## 📌 Endpoints  

| Método | Rota      | Descrição                 |
|--------|----------|---------------------------|
| `POST` | `/videos` | Cadastra um novo vídeo    |

---

## 📦 Estrutura do Projeto  

``` txt
video-streaming-api/
│── src/
│   ├── application/         # Casos de uso (Regras de negócio)
│   ├── domain/              # Entidades e modelos
│   ├── infrastructure/      # Repositórios e banco de dados
│   ├── presentation/        # Controllers e rotas
│   │   ├── routes/          # Definição das rotas da API
│   │   ├── controllers/     # Controllers para tratar as requisições
│   ├── shared/              # Configurações compartilhadas (Swagger, Logger, etc.)
│   ├── index.ts             # Arquivo principal da API
│── package.json
│── tsconfig.json
│── docker-compose.yml
│── README.md
```

---

## 📌 Releases  

| Versão  | Data       | Descrição                                    |
|---------|-----------|----------------------------------------------|
| `1.0.0` | 2025-02-27 | Primeira versão da API com CRUD de vídeos |

---

## 📜 Licença  

Este projeto está sob a licença **MIT**.  
Sinta-se à vontade para contribuir! 🚀

---

### 💡 Autores  

**Guilherme Moreira**  
📧 Email: [guilhermeribmoreira@gmail.com](mailto:guilhermeribmoreira@gmail.com)  
🔗 GitHub: [guirmoreira](https://github.com/guirmoreira)
