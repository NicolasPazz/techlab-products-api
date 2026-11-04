import { envs } from "../config/envs.js";

// Las credenciales se definen por variables de entorno (ver .env.example).
// El usuario admin tiene acceso completo; el usuario demo es de solo lectura.
const users = [
    { id: "1", username: envs.ADMIN_USERNAME, password: envs.ADMIN_PASSWORD, role: "admin" },
    { id: "2", username: envs.DEMO_USERNAME, password: envs.DEMO_PASSWORD, role: "user" },
].filter((u) => u.username && u.password);

export const validateCredentials = async (username, password) => {
    const user = users.find(
        (u) => u.username === username && u.password === password
    );

    if (!user) {
        return null;
    }

    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
};

export const findById = async (id) => {
    const user = users.find((u) => u.id === id);

    if (!user) {
        return null;
    }

    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
};
