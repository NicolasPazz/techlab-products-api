import { verifyToken, extractBearerToken } from '../utils/jwt.js';

export const authenticateToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                success: false,
                error: 'Token de acceso requerido'
            });
        }

        const token = extractBearerToken(authHeader);
        
        if (!token) {
            return res.status(401).json({
                success: false,
                error: 'Token de acceso inválido'
            });
        }

        const decoded = verifyToken(token);
        req.user = decoded;
        
        next();
    } catch (error) {
        return res.status(403).json({
            success: false,
            error: 'Token inválido o expirado'
        });
    }
};
