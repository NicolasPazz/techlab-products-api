import * as userModel from "../models/user.model.js";
import { generateToken } from "../utils/jwt.js";

export const authenticateUser = async (username, password) => {
    try {
        const user = await userModel.validateCredentials(username, password);

        if (!user) {
            throw new Error("Credenciales inválidas");
        }

        const token = generateToken({
            userId: user.id,
            username: user.username,
            role: user.role,
        });

        return token;
    } catch (error) {
        throw error;
    }
};
