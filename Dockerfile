# Usar uma imagem do Ubuntu
FROM ubuntu:22.04

# Definir o diretório de trabalho
WORKDIR /app

# Atualizar pacotes e instalar dependências necessárias
RUN apt-get update && apt-get install -y \
    curl \
    python3 \
    python3-pip \
    python3-venv

# Instalar o Node.js e o npm manualmente
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Instalar as dependências do projeto
COPY package*.json ./
RUN npm install

# Copiar o código da aplicação
COPY . .

# Criar um ambiente virtual para instalar MkDocs
RUN python3 -m venv /app/venv && \
    . /app/venv/bin/activate && \
    pip install mkdocs-material

# Adicionar ambiente virtual ao PATH
ENV PATH="/app/venv/bin:$PATH"

# Expor as portas da API e do MkDocs
EXPOSE 3000 8000

# Comando para rodar a API e a documentação
CMD . /app/venv/bin/activate && npm run dev & mkdocs serve -a 0.0.0.0:8000