FROM node:16.14-alpine
WORKDIR /var/www/portfolio

COPY package.json package-lock.json ./
RUN npm i
COPY . .

RUN chmod +x entrypoint.sh
EXPOSE 3000
ENTRYPOINT ["./entrypoint.sh"]
