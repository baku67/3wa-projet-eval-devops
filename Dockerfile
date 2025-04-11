FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

# ou npm run dev ?
CMD ["node", "server.js"] 
