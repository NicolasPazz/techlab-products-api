import * as authService from "../services/auth.service.js";

export const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                success: false,
                error: "Usuario y contraseña son requeridos",
            });
        }

        const token = await authService.authenticateUser(username, password);

        res.json({
            success: true,
            data: {
                token,
                type: "Bearer",
            },
        });
    } catch (error) {
        if (error.message.includes("credenciales")) {
            return res.status(401).json({
                success: false,
                error: error.message,
            });
        }
        next(error);
    }
};
