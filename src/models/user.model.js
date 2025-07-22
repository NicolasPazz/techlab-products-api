const users = [
    {
        id: '1',
        username: 'admin',
        password: 'admin123',
        role: 'admin'
    },
    {
        id: '2',
        username: 'techlab',
        password: 'techlab2025',
        role: 'user'
    }
];

export const validateCredentials = async (username, password) => {
    const user = users.find(u => 
        u.username === username && u.password === password
    );

    if (!user) {
        return null;
    }

    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
};

export const findById = async (id) => {
    const user = users.find(u => u.id === id);
    
    if (!user) {
        return null;
    }

    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
};
