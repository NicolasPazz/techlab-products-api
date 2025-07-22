import jwt from 'jsonwebtoken';
import { envs } from '../config/envs.js';

export const generateToken = (payload) => {
    return jwt.sign(payload, envs.JWT_SECRET, {
        expiresIn: envs.JWT_EXPIRATION
    });
};

export const verifyToken = (token) => {
    return jwt.verify(token, envs.JWT_SECRET);
};

export const extractBearerToken = (authHeader) => {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null;
    }
    return authHeader.substring(7);
};
