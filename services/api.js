const BASE_URL = "https://fakestoreapi.com/products";

// Consultar Todos los Productos
export const getAllProducts = async () => {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Error al obtener productos");
    const data = await res.json();
    return { data };
};

// Consultar un Producto Específico
export const getProductById = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error("Producto no encontrado");
    const data = await res.json();
    return { data };
};

// Crear un Producto Nuevo
export const createProduct = async (title, price, category) => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, price, category }),
    });
    if (!res.ok) throw new Error("Error al crear el producto");
    const data = await res.json();
    return { data };
};

// Eliminar un Producto
export const deleteProduct = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`, { 
        method: "DELETE" 
    });
    if (!res.ok) throw new Error("Error al eliminar el producto");
    const data = await res.json();
    return { data };
};
