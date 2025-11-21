# AppAngular - Los Rompe Códigos

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.4.

## 👥 Integrantes del Equipo

- Angel Mauricio Plata Rodríguez
- Nadia Paola García Palomino
- Juliette Ramírez Guzmán
- Karime Monserrath Tacuba Montejo
- Roberto Iván Pérez Calderón
- Juan Gerardo Galindo Pineda

## 🐳 Ejecutar con Docker (Recomendado)

### Prerequisitos
- [Docker Desktop](https://www.docker.com/products/docker-desktop) instalado y ejecutándose

### Levantar el proyecto

Para construir y ejecutar el contenedor:

```bash
docker-compose up --build
```

Una vez que el contenedor esté ejecutándose, abre tu navegador en `http://localhost:4200/`

### Detener el contenedor

```bash
docker-compose down
```

### Ver logs del contenedor

```bash
docker-compose logs -f
```

## 💻 Development server (Sin Docker)

Para iniciar un servidor de desarrollo local sin Docker, ejecuta:

```bash
ng serve
```

Una vez que el servidor esté corriendo, abre tu navegador en `http://localhost:4200/`. La aplicación se recargará automáticamente cuando modifiques los archivos fuente.

## 🐋 Docker Configuration

Este proyecto incluye configuración completa de Docker con las siguientes características:

- **Multi-stage build**: Compilación con Node.js 20 y servicio con Nginx Alpine
- **Optimización**: Imagen ligera y optimizada para producción
- **Puerto**: 4200 (host) → 80 (contenedor)
- **Auto-restart**: El contenedor se reinicia automáticamente

### Archivos Docker

- `Dockerfile` - Configuración de la imagen
- `docker-compose.yml` - Orquestación del contenedor
- `nginx.conf` - Configuración del servidor web
- `.dockerignore` - Archivos excluidos del build
