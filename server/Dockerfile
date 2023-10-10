FROM node:20.7.0-bullseye-slim as base

FROM base as deps
WORKDIR /app
COPY package*.json ./
RUN npm i

FROM base as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base as runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY  package*.json ./
RUN npm i --omit=dev
EXPOSE 5000
CMD [ "npm", "run", "start" ]