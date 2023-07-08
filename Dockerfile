FROM node:18.16.0
WORKDIR /app
COPY package*.json ./
RUN ["npm", "i"]
COPY . .
RUN chown node:node /app
USER node
CMD ["npm", "run", "dev"]