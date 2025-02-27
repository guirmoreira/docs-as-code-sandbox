# 🛠 Instalação

## Requisitos

- Node.js
- Docker (opcional)
- MkDocs (+ Python/PIP)

## Passos para rodar localmente

```bash
git clone https://github.com/guirmoreira/docs-as-code-sandbox.git
cd docs-as-code-sandbox
npm install
pip install mkdocs-material

mkdocs serve -a 0.0.0.0:8000
npm run dev
```

## Rodar com o Docker

```bash
docker-compose up --build
```
