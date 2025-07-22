import { collection, getDocs, doc, getDoc, addDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebase.config.js';

const COLLECTION_NAME = 'products';

export const findAll = async () => {
    try {
        const productsCollection = collection(db, COLLECTION_NAME);
        const productsSnapshot = await getDocs(productsCollection);
        
        const products = [];
        productsSnapshot.forEach((doc) => {
            products.push({
                id: doc.id,
                ...doc.data()
            });
        });

        return products;
    } catch (error) {
        throw error;
    }
};

export const findById = async (id) => {
    try {
        const productDoc = doc(db, COLLECTION_NAME, id);
        const productSnapshot = await getDoc(productDoc);

        if (!productSnapshot.exists()) {
            throw new Error('Producto no encontrado');
        }

        return {
            id: productSnapshot.id,
            ...productSnapshot.data()
        };
    } catch (error) {
        throw error;
    }
};

export const create = async (productData) => {
    try {
        const productsCollection = collection(db, COLLECTION_NAME);
        
        const newProduct = {
            nombre: productData.nombre,
            precio: productData.precio
        };

        const docRef = await addDoc(productsCollection, newProduct);
        
        return {
            id: docRef.id,
            ...newProduct
        };
    } catch (error) {
        throw error;
    }
};

export const remove = async (id) => {
    try {
        const productDoc = doc(db, COLLECTION_NAME, id);
        const productSnapshot = await getDoc(productDoc);

        if (!productSnapshot.exists()) {
            throw new Error('Producto no encontrado');
        }

        await deleteDoc(productDoc);
        return true;
    } catch (error) {
        throw error;
    }
};
