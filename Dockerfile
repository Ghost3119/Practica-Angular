# Etapa 1: Construcción
FROM node:20-alpine as build

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar el resto del código fuente
COPY . .

# Compilar la aplicación para producción
RUN npm run build -- --configuration production

# Etapa 2: Servidor Nginx
FROM nginx:alpine

# Eliminar archivos por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar los archivos compilados desde la etapa de construcción
COPY --from=build /app/dist/app-angular/browser /usr/share/nginx/html

# Crear enlace simbólico si Angular genera index.csr.html en lugar de index.html
RUN if [ -f /usr/share/nginx/html/index.csr.html ] && [ ! -f /usr/share/nginx/html/index.html ]; then \
        ln -s /usr/share/nginx/html/index.csr.html /usr/share/nginx/html/index.html; \
    fi

# Copiar configuración personalizada de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
