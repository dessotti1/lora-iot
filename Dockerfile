# Imagem de Origem
FROM node:16-alpine


# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app
# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Instalando dependências da aplicação e armazenando em cache.
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent
# Inicializa a aplicação

EXPOSE 3001
CMD ["npm", "start"]


# docker build -t sample:dev .     

# docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm sample:dev


# docker build -t sample:dev .
# docker run -v "C:/Users/Igor Loredo/Documents/trabalhos/iot/lora-iot/Dockerfile":/app -v /app/node_modules -p 3001:3000 --rm sample:dev