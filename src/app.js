const express = require('express');
const cors = require('cors');
const { API_NAME, API_VERSION } = require('./config/config');

const app = express();

const userRoutes = require('./router/user');
const authRoutes = require('./router/auth');
const branchRoutes = require('./router/branch');
const organizationRoutes = require('./router/organization');
const productRoutes = require('./router/product')
const categoryRoutes = require('./router/category')
const discountRoutes = require('./router/discount')

// Middleware para parsear JSON y datos codificados
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuración de CORS
const corsOptions = {
    origin: ['http://localhost:4000', 'http://localhost:4200'], // Dominios permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeceras permitidas
    credentials: true, // Permitir envío de cookies o credenciales
};

// Aplica el middleware de CORS
app.use(cors(corsOptions));

// Manejo explícito de solicitudes preflight
app.options('*', cors(corsOptions)); 

// Definir el prefijo de la API
const baseUrl = `/${API_NAME}/${API_VERSION}`;

// Rutas
app.use(baseUrl, userRoutes);
app.use(baseUrl, authRoutes);
app.use(baseUrl, branchRoutes);
app.use(baseUrl, organizationRoutes);
app.use(baseUrl, productRoutes);
app.use(baseUrl, categoryRoutes);
app.use(baseUrl, discountRoutes);

module.exports = app;
