# 🚀 TechLab Products API

> **API REST profesional para gestión de productos con autenticación JWT y Firebase Firestore**

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://techlab-products-api.vercel.app)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat&logo=node.js)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4.18-blue?style=flat&logo=express)](https://expressjs.com)

## 📋 Descripción

Esta API permite administrar un catálogo de productos con funcionalidades CRUD completas, autenticación mediante JWT Bearer tokens y almacenamiento en Firebase Firestore en la nube.

## ✨ Características

- 🔐 **Autenticación JWT** con Bearer tokens
- 🔥 **Firebase Firestore** como base de datos
- 🌐 **CORS** configurado para frontend
- 🛡️ **Manejo de errores** (400, 401, 403, 404, 500)
- 🏗️ **Arquitectura en capas** (Routes → Controllers → Services → Models)

## 🛠️ Tecnologías

- **Node.js**
- **Express.js 4.18**
- **Firebase/Firestore**
- **JSON Web Tokens**

## 📚 Documentación de Endpoints

### 🔐 Autenticación

#### POST `/auth/login`
Autentica un usuario y devuelve un Bearer token.

**Request:**
```bash
curl -X POST https://techlab-products-api.vercel.app/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "********"}'
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "type": "Bearer"
  }
}
```

**Credenciales de prueba:**
- 👤 **Admin**: `username: admin`, `password: ********`
- 👤 **User**: `username: techlab`, `password: techlab2025`

---

### 📦 Productos (Requieren Autenticación)

> **Nota:** Todos los endpoints de productos requieren el header `Authorization: Bearer <token>`

#### GET `/api/products`
Obtiene todos los productos del catálogo.

**Request:**
```bash
curl -X GET https://techlab-products-api.vercel.app/api/products \
  -H "Authorization: Bearer <tu-token>"
```

**Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "3nooTjywME19TrCiD2KE",
      "nombre": "Producto Ejemplo",
      "precio": 350
    }
  ]
}
```

#### GET `/api/products/:id`
Obtiene un producto específico por su ID.

**Request:**
```bash
curl -X GET https://techlab-products-api.vercel.app/api/products/3nooTjywME19TrCiD2KE \
  -H "Authorization: Bearer <tu-token>"
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "3nooTjywME19TrCiD2KE",
    "nombre": "Producto Ejemplo",
    "precio": 350
  }
}
```

#### POST `/api/products/create`
Crea un nuevo producto en el catálogo.

**Request:**
```bash
curl -X POST https://techlab-products-api.vercel.app/api/products/create \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <tu-token>" \
  -d '{"nombre": "Producto Nuevo", "precio": 500}'
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "6QoKKUiqbPadsSun2VjF",
    "nombre": "Producto Nuevo",
    "precio": 500
  }
}
```

#### PUT `/api/products/:id`
Actualiza un producto existente en el catálogo.

**Request:**
```bash
curl -X PUT https://techlab-products-api.vercel.app/api/products/6QoKKUiqbPadsSun2VjF \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <tu-token>" \
  -d '{"nombre": "Producto Actualizado", "precio": 750}'
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "6QoKKUiqbPadsSun2VjF",
    "nombre": "Producto Actualizado",
    "precio": 750
  }
}
```

#### DELETE `/api/products/:id`
Elimina un producto del catálogo.

**Request:**
```bash
curl -X DELETE https://techlab-products-api.vercel.app/api/products/6QoKKUiqbPadsSun2VjF \
  -H "Authorization: Bearer <tu-token>"
```

**Response (204):**
```
No content (eliminación exitosa)
```

## 🚨 Códigos de Estado HTTP

| Código | Significado | Descripción |
|--------|-------------|-------------|
| **200** | ✅ OK | Operación exitosa |
| **201** | ✅ Created | Recurso creado correctamente |
| **204** | ✅ No Content | Eliminación exitosa |
| **400** | ❌ Bad Request | Datos faltantes o inválidos |
| **401** | 🚫 Unauthorized | Token requerido o inválido |
| **403** | 🚫 Forbidden | Token expirado |
| **404** | 🔍 Not Found | Ruta o recurso no encontrado |
| **500** | 💥 Internal Error | Error del servidor |

## 📝 Formato de Producto

Los productos deben tener la siguiente estructura:

```json
{
  "nombre": "string",
  "precio": "number"
}
```

**Ejemplo:**
```json
{
  "nombre": "Laptop Gaming",
  "precio": 1299.99
}
```

## 🔧 Deploy Local

### Instalación
```bash
git clone <repo-url>
cd techlab-products-api
npm install
```

### Variables de Entorno
Crear archivo `.env`:
```env
PORT=3000
JWT_SECRET=tu_jwt_secret_super_seguro
JWT_EXPIRATION=1h
FIREBASE_API_KEY=tu_api_key
FIREBASE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
FIREBASE_PROJECT_ID=tu-proyecto-id
FIREBASE_STORAGE_BUCKET=tu-proyecto.appspot.com
FIREBASE_MESSAGING_SENDER_ID=123456789
FIREBASE_APP_ID=1:123456789:web:abcdef123456
FIREBASE_MEASUREMENT_ID=G-ABCD123456
```

### Ejecución
```bash
npm start
```

El servidor estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
src/
├── 📄 index.js              # Punto de entrada
├── ⚙️ config/
│   ├── envs.js             # Variables de entorno centralizadas
│   └── firebase.config.js   # Configuración Firebase
├── 🎮 controllers/          # Lógica de controladores
├── 🛡️ middlewares/          # Middleware de autenticación
├── 📊 models/               # Modelos de datos (Firestore)
├── 🛣️ routes/               # Definición de rutas
├── ⚡ services/             # Lógica de negocio
└── 🔧 utils/               # Utilidades JWT
```

## 🧪 Ejemplos de Uso Completos

### 1. Flujo completo de autenticación y CRUD

```bash
# 1. Obtener token
TOKEN=$(curl -s -X POST https://techlab-products-api.vercel.app/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"********"}' | \
  grep -o '"token":"[^"]*' | cut -d'"' -f4)

# 2. Listar productos
curl -X GET https://techlab-products-api.vercel.app/api/products \
  -H "Authorization: Bearer $TOKEN"

# 3. Crear producto
curl -X POST https://techlab-products-api.vercel.app/api/products/create \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"nombre":"Mi Producto","precio":199.99}'

# 4. Actualizar producto
curl -X PUT https://techlab-products-api.vercel.app/api/products/ID_DEL_PRODUCTO \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"nombre":"Producto Actualizado","precio":299.99}'

# 5. Obtener producto por ID
curl -X GET https://techlab-products-api.vercel.app/api/products/ID_DEL_PRODUCTO \
  -H "Authorization: Bearer $TOKEN"

# 6. Eliminar producto
curl -X DELETE https://techlab-products-api.vercel.app/api/products/ID_DEL_PRODUCTO \
  -H "Authorization: Bearer $TOKEN"
```