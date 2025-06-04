FROM node:18-alpine AS react-build
WORKDIR /usr/src/app

COPY package\*.json ./
RUN npm install

COPY . .
RUN npm run build



FROM nginx:stable-alpine

COPY --from=react-build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]