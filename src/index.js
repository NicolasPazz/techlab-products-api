import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import productsRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { envs } from "./config/envs.js";

const app = express();
const PORT = envs.PORT;

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/products", productsRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "TechLab Products API",
        status: "running",
    });
});

app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: "Ruta no encontrada",
        message: `La ruta ${req.method} ${req.originalUrl} no existe`,
    });
});

app.use((err, req, res, next) => {
    console.error("Error:", err);
    res.status(500).json({
        success: false,
        error: "Error interno del servidor",
        message: "Ha ocurrido un error inesperado",
    });
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`);
});

export default app;
