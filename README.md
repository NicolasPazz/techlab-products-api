# TechLab Products API

API REST para gestión de productos con autenticación JWT y Firebase Firestore.

## Descripción

Esta API permite administrar un catálogo de productos con funcionalidades CRUD completas, autenticación mediante JWT y almacenamiento en Firebase Firestore.

## Características

- API REST con Express.js
- Autenticación JWT
- Base de datos Firebase Firestore  
- CORS configurado
- Manejo de errores (400, 401, 403, 404, 500)
- Arquitectura en capas

## Tecnologías

- Node.js
- Express.js
- Firebase/Firestore
- JSON Web Tokens (JWT)
- CORS
- Body-Parser
- dotenv

## Estructura

```
src/
├── index.js           # Punto de entrada
├── config/
│   ├── envs.js       # Variables de entorno
│   └── firebase.config.js
├── controllers/       # Lógica de controladores
├── middlewares/       # Middleware de autenticación
├── models/           # Modelos de datos
├── routes/           # Definición de rutas
├── services/         # Lógica de negocio
└── utils/            # Utilidades JWT
```

## Instalación

```bash
npm install
```

## Configuración

Crear archivo `.env`:

```env
PORT=3000
JWT_SECRET=tu_jwt_secret_key
JWT_EXPIRATION=1h
FIREBASE_API_KEY=tu_api_key
FIREBASE_AUTH_DOMAIN=tu_project.firebaseapp.com
FIREBASE_PROJECT_ID=tu_project_id
FIREBASE_STORAGE_BUCKET=tu_project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=123456789
FIREBASE_APP_ID=1:123456789:web:abcdef
```

## Uso

```bash
npm run start
```

## Endpoints

### Autenticación
- `POST /auth/login` - Iniciar sesión

### Productos (requieren autenticación)
- `GET /api/products` - Obtener todos los productos
- `GET /api/products/:id` - Obtener producto por ID
- `POST /api/products/create` - Crear nuevo producto
- `DELETE /api/products/:id` - Eliminar producto

## Credenciales de prueba

- Usuario: `admin` / Contraseña: `********`
- Usuario: `techlab` / Contraseña: `techlab2025`

## Formato de producto

```json
{
  "nombre": "Producto ejemplo",
  "precio": 100
}

curl -X GET http://localhost:3000/api/products \
  -H "Authorization: Bearer TU-TOKEN-AQUI"
```

### 3. Crear un producto
```bash
curl -X POST http://localhost:3000/api/products/create \
  -H "Authorization: Bearer TU-TOKEN-AQUI" \
  -H "Content-Type: application/json" \
  -d '{"name": "Producto Nuevo", "price": 99.99, "description": "Descripción", "category": "test"}'
```

### 4. Eliminar un producto
```bash
curl -X DELETE http://localhost:3000/api/products/PRODUCTO-ID \
  -H "Authorization: Bearer TU-TOKEN-AQUI"
```

## 🛡️ Seguridad

- **JWT Authentication**: Todos los endpoints de productos requieren autenticación
- **CORS**: Configurado para permitir peticiones desde aplicaciones frontend
- **Validación de datos**: Validación en controladores y servicios
- **Manejo de errores**: Respuestas estructuradas para todos los errores
- **Variables de entorno**: Configuración sensible mediante archivos .env

## 🚀 Despliegue

### Requisitos de Producción
- Node.js 18+
- Variables de entorno configuradas
- Proyecto Firebase con Firestore habilitado
- Puerto disponible (por defecto 3000)

### Variables de Entorno de Producción
```env
NODE_ENV=production
PORT=3000
JWT_SECRET=un-jwt-secret-super-seguro-para-produccion
JWT_EXPIRATION=1h
# Firebase config aquí...
```

## 👥 Contribución

1. Fork del proyecto
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📄 Licencia

ISC License - Ver archivo LICENSE para más detalles.

## 👨‍💻 Autor

**TechLab Team**  
Proyecto Final - Clase 15 - Node.js

---

⭐ ¡Si este proyecto te fue útil, no olvides darle una estrella!
