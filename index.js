import {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct,
} from "./services/api.js";

const [, , method, resource, ...params] = process.argv;

const print = (data) => console.log(JSON.stringify(data, null, 2));

const main = async () => {
    try {
        switch (true) {
            case method === "GET" && resource === "products": {
                print(await getAllProducts().then((r) => r.data));
                break;
            }

            case method === "GET" && resource.startsWith("products/"): {
                const [, productId] = resource.split("/");
                if (isNaN(productId)) throw new Error("El ID debe ser un número");
                print(await getProductById(productId).then((r) => r.data));
                break;
            }

            case method === "POST" && resource === "products": {
                const [title, price, category] = params;
                if (!title || !price || !category) {
                    throw new Error("Faltan argumentos: título, precio y categoría requeridos");
                }
                print(await createProduct(title, price, category).then((r) => r.data));
                break;
            }

            case method === "DELETE" && resource.startsWith("products/"): {
                const [, id] = resource.split("/");
                if (isNaN(id)) throw new Error("El ID debe ser un número");
                print(await deleteProduct(id).then((r) => r.data));
                break;
            }

            case method === "help" || method === "--help": {
                console.log(`    Comandos disponibles:
                - GET products
                - GET products/<id>
                - POST products <title> <price> <category>
                - DELETE products/<id>`);
                return;
            }

            default: {
                throw new Error(
                    "Comando no reconocido. Usá 'help' para ver los comandos disponibles."
                );
            }
        }
    } catch (error) {
        console.error(
            JSON.stringify(
                { error: error.message || "Error inesperado" },
                null,
                2
            )
        );
    }
};

main();
