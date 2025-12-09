# CitApp - Frontend React

## 📋 Descripción

CitApp es una aplicación web moderna construida con React y Vite, diseñada para gestionar proyectos y tareas de manera eficiente. Este es el frontend que se conectará con un backend desarrollado en Nest.js.

## 🚀 Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite** - Build tool y dev server ultrarrápido
- **React Router DOM** - Navegación y routing
- **Axios** - Cliente HTTP para peticiones al backend
- **CSS Modules** - Estilos modulares y componentes

## 📁 Estructura del Proyecto

```
CitApp/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── common/         # Componentes comunes (Button, Input, Card, etc.)
│   │   └── layout/         # Componentes de layout (Navbar, Layout)
│   ├── contexts/           # Contextos de React (AuthContext)
│   ├── pages/              # Páginas de la aplicación
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Dashboard.jsx
│   ├── services/           # Servicios para comunicación con API
│   │   ├── api.js          # Configuración de Axios
│   │   └── authService.js  # Servicio de autenticación
│   ├── hooks/              # Custom hooks (para futuras funcionalidades)
│   ├── utils/              # Utilidades y helpers
│   ├── styles/             # Estilos globales
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Punto de entrada
│   └── index.css           # Estilos globales
├── public/                 # Archivos estáticos
├── .env                    # Variables de entorno
├── .env.example            # Ejemplo de variables de entorno
├── package.json            # Dependencias y scripts
└── vite.config.js          # Configuración de Vite
```

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js (versión 20.19+ o 22.12+)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio** (si aplica)
   ```bash
   git clone <url-del-repositorio>
   cd CitApp-web-app
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   
   Copia el archivo `.env.example` a `.env` y ajusta las variables:
   ```bash
   cp .env.example .env
   ```
   
   Edita `.env` con la URL de tu backend:
   ```
   BASE_API_URL=http://localhost:3000/api
   ```

4. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:5173`

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## 🔐 Autenticación

El sistema de autenticación está implementado usando:

- **Context API** para el estado global de autenticación
- **LocalStorage** para persistir el token JWT
- **Axios Interceptors** para agregar automáticamente el token a las peticiones
- **Protected Routes** para proteger rutas que requieren autenticación

### Flujo de Autenticación

1. El usuario inicia sesión en `/login`
2. El backend devuelve un token JWT
3. El token se guarda en localStorage
4. Todas las peticiones subsecuentes incluyen el token en el header `Authorization`
5. Si el token expira (401), el usuario es redirigido al login

## 🎨 Componentes Principales

### Componentes Comunes

- **Button** - Botón reutilizable con múltiples variantes (primary, secondary, outline, danger)
- **Input** - Campo de entrada con validación y mensajes de error
- **Card** - Tarjeta contenedora con estilos consistentes
- **ProtectedRoute** - HOC para proteger rutas que requieren autenticación

### Layout

- **Navbar** - Barra de navegación con menú responsive
- **Layout** - Layout principal con navbar y footer

### Páginas

- **Home** - Página de inicio con hero section y características
- **Login** - Formulario de inicio de sesión
- **Register** - Formulario de registro
- **Dashboard** - Panel de control del usuario (protegido)

## 🔌 Integración con Backend (Nest.js)

### Configuración de API

El archivo `src/services/api.js` contiene la configuración base de Axios:

```javascript
const API_BASE_URL = import.meta.env.BASE_API_URL || 'http://localhost:3000/api';
```

### Endpoints Esperados del Backend

El frontend espera los siguientes endpoints del backend:

#### Autenticación
- `POST /api/auth/login` - Iniciar sesión
  ```json
  Request: { "email": "user@example.com", "password": "password123" }
  Response: { "token": "jwt-token", "user": { "id": 1, "name": "Usuario", "email": "user@example.com" } }
  ```

- `POST /api/auth/register` - Registrar nuevo usuario
  ```json
  Request: { "name": "Usuario", "email": "user@example.com", "password": "password123" }
  Response: { "message": "Usuario creado exitosamente" }
  ```

## 🎯 Próximos Pasos

### Backend (Nest.js)

1. Crear proyecto Nest.js en la carpeta `server/`
2. Implementar módulo de autenticación con JWT
3. Crear endpoints de API que coincidan con los servicios del frontend
4. Configurar CORS para permitir peticiones desde el frontend
5. Implementar base de datos (PostgreSQL, MongoDB, etc.)

### Frontend

1. Agregar más páginas según las necesidades del proyecto
2. Implementar gestión de proyectos y tareas
3. Agregar notificaciones en tiempo real (Socket.io)
4. Mejorar manejo de errores y loading states
5. Agregar tests unitarios y de integración
6. Implementar internacionalización (i18n)

## 🐛 Solución de Problemas

### Error: "crypto.hash is not a function"

Este error ocurre cuando la versión de Node.js es menor a la requerida por Vite 7.
- **Solución**: Actualizar Node.js a la versión 20.19+ o 22.12+

### El servidor no inicia

- Verifica que todas las dependencias estén instaladas: `npm install`
- Elimina `node_modules` y reinstala: `rm -rf node_modules && npm install`
- Verifica que el puerto 5173 no esté en uso

### Errores de CORS

- Asegúrate de que el backend tenga CORS configurado correctamente
- Verifica que la URL del backend en `.env` sea correcta

## 📚 Recursos Adicionales

- [Documentación de React](https://react.dev/)
- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de React Router](https://reactrouter.com/)
- [Documentación de Axios](https://axios-http.com/)

## 👥 Contribución

Para contribuir al proyecto:

1. Crea una rama para tu feature: `git checkout -b feature/nueva-funcionalidad`
2. Haz commit de tus cambios: `git commit -m 'Agrega nueva funcionalidad'`
3. Push a la rama: `git push origin feature/nueva-funcionalidad`
4. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

---

**Desarrollado con ❤️ usando React y Vite**
