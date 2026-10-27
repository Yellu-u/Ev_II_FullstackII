"use client"; 

import { createContext, useState, useContext } from 'react';


const CarritoContext = createContext();

export function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState([]); 
    const [isOpen, setIsOpen] = useState(false); 

    // Función para agregar un producto
    const agregarAlCarrito = (producto) => {
        setCarrito((prev) => {
            // verificamos producto esta en el carrito
            const existe = prev.find(item => item.id === producto.id);
            if (existe) {
                // Si existe, le sumamos 1 a la cantidad
                return prev.map(item => item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item);
            }
            // Si no existe le agregamos 1
            return [...prev, { ...producto, cantidad: 1 }];
        });
        setIsOpen(true);
    };

    const sumarCantidad = (id) => {
        setCarrito((prev) => 
            prev.map(item => item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item)
        );
    };

    const restarCantidad = (id) => {
        setCarrito((prev) => {
            return prev.map(item => {
                if (item.id === id) {
                    return { ...item, cantidad: item.cantidad - 1 };
                }
                return item;
            }).filter(item => item.cantidad > 0);
        });
    };

    // Función de eliminar un producto
    const eliminarDelCarrito = (id) => {
        setCarrito((prev) => prev.filter(item => item.id !== id));
    };

    // Función de limpiar todo
    const vaciarCarrito = () => {
        setCarrito([]);
    };


    // Calculamos el total a pagar
    const total = carrito.reduce((acc, item) => acc + (item.precio_nuevo * item.cantidad), 0);

    return (
        <CarritoContext.Provider value={{ 
            carrito, 
            agregarAlCarrito, 
            sumarCantidad,
            restarCantidad,
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

// funcion para usar el carrito en todas las paginas
export const useCarrito = () => useContext(CarritoContext);