"use client"; 

import { createContext, useState, useContext } from 'react';

// 1. Creamos la "mochila" global
const CarritoContext = createContext();

// 2. Creamos el componente que provee la mochila a toda la app
export function CarritoProvider({ children }) {
    // AQUÍ ESTÁ EL FAMOSO useState (La memoria del carrito)
    const [carrito, setCarrito] = useState([]); 
    const [isOpen, setIsOpen] = useState(false); // Para abrir el panel lateral

    // Función para agregar un producto
    const agregarAlCarrito = (producto) => {
        setCarrito((prev) => {
            // Verificamos si el producto ya está en el carrito
            const existe = prev.find(item => item.id === producto.id);
            if (existe) {
                // Si existe, le sumamos 1 a la cantidad
                return prev.map(item => item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item);
            }
            // Si no existe, lo agregamos con cantidad 1
            return [...prev, { ...producto, cantidad: 1 }];
        });
        setIsOpen(true); // Abrimos el panel para que el usuario vea que se agregó
    };

    // Función para eliminar un producto
    const eliminarDelCarrito = (id) => {
        setCarrito((prev) => prev.filter(item => item.id !== id));
    };

    // Calculamos el total a pagar
    const total = carrito.reduce((acc, item) => acc + (item.precio_nuevo * item.cantidad), 0);

    return (
        <CarritoContext.Provider value={{ 
            carrito, 
            agregarAlCarrito, 
            eliminarDelCarrito, 
            total,
            isOpen,
            setIsOpen
        }}>
            {children}
        </CarritoContext.Provider>
    );
}

// 3. Función para usar el carrito en cualquier página
export const useCarrito = () => useContext(CarritoContext);