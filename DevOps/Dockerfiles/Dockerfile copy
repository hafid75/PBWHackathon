FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install
# Copiar el código fuente del proyecto al contenedor
COPY . .
# Transpilar el código TypeScript a JavaScript
RUN npm run build
# Exponer el puerto que tu aplicación utilizará
EXPOSE 3000
# Ejecutar la aplicación
CMD [ "node", "dist/index.js" ]