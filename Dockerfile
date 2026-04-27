FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

COPY --from=build /app/dist/yantz-web/browser/ ./
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
