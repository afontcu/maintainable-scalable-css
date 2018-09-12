FROM mhart/alpine-node:10

WORKDIR /

COPY package.json package-lock.json images/ ./

RUN npm install

COPY . .

RUN npm run build
