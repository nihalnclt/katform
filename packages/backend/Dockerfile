FROM node:alpine

WORKDIR /app

RUN npm install -g pnpm

COPY .npmrc package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod
COPY . .

CMD ["npm", "start"]