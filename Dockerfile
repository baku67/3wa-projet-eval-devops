FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Copie entrypoint.sh + permission de lecture
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

EXPOSE 3000

# Migation + Fixtures
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
# Le entrypoint contient déjà la commande "node server.js"
# CMD ["node", "server.js"]
