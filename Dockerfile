FROM node:22-alpine

WORKDIR /app

COPY ./package.json ./package.json 
COPY ./package-lock.json ./package-lock.json

RUN npm install

COPY . .

RUN npx prisma migrate dev
RUN npx prisma generate 
RUN npm run build 

CMD ["npm",  "start"]