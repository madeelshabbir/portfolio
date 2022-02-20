FROM node:16.14-alpine as builder
WORKDIR /var/www/portfolio

COPY package.json package-lock.json ./
RUN npm set maxsockets 3
RUN npm i
COPY . .

RUN npm run build
FROM nginx
COPY --from=builder /var/www/portfolio/build /usr/share/nginx/html
