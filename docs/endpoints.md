# 📌 Endpoints

## Criar um Vídeo

### `POST /videos`

Adiciona um novo vídeo.

**Requisição:**

```json
{
  "title": "Introduction to Node.js",
  "description": "A beginner-friendly guide to Node.js.",
  "url": "https://example.com/videos/nodejs-intro.mp4",
  "duration": 600
}
```

**Resposta:**

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "Introduction to Node.js",
  "description": "A beginner-friendly guide to Node.js.",
  "url": "https://example.com/videos/nodejs-intro.mp4",
  "duration": 600,
  "created_at": "2025-02-27T12:00:00Z"
}
```
