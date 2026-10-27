"use client"; 

import { createContext, useState, useContext } from 'react';


const CarritoContext = createContext();

export function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState([]); 
    const [isOpen, setIsOpen] = useState(false); 

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

    // Función para limpiar todo
    const vaciarCarrito = () => {
        setCarrito([]);
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
            setIsOpen,
            vaciarCarrito
        }}>
            {children}
        </CarritoContext.Provider>
    );
    
}

// 3. Función para usar el carrito en cualquier página
export const useCarrito = () => useContext(CarritoContext);