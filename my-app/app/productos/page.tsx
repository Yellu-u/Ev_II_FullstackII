"use client";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { productos } from "../../data/productos.js";
import { useCarrito } from "../context/CarritoContext";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function ItemProducto({ producto, onAgregar }) {
    const url = "/productos/" + producto.id;
    return (
        <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
                <img src={producto.imagen} className="card-img-top p-3" alt={producto.nombre} style={{ height: "200px", objectFit: "contain" }} />
                <div className="card-body d-flex flex-column text-center">
                    <h5 className="card-title fw-bold text-dark">{producto.nombre}</h5>
                    <span className="text-muted mb-2">{producto.categoria}</span>
                    <p className="card-text text-secondary">{producto.descripcion}</p>
                    <div className="mt-auto">
                        <p className="fs-4 fw-bold text-black mb-3">${producto.precio_nuevo.toLocaleString('es-CL')}</p>
                        <div className="d-grid gap-2">
                            <a href={url} className="btn btn-sm boton-detalle">Ver detalle</a>
                            <button className="btn btn-sm boton-carrito" onClick={() => onAgregar(producto)}>
                                Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Productos() {
    // Traemos la función para agregar desde el contexto global
    const { agregarAlCarrito } = useCarrito();

    // Lógica del filtro de categorías
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
    const categorias = ["Todas"];
    for (let i = 0; i < productos.length; i++) {
        if (!categorias.includes(productos[i].categoria)) {
            categorias.push(productos[i].categoria);
        }
    }
    const productosFiltrados = [];
    for (let i = 0; i < productos.length; i++) {
        if (categoriaSeleccionada === "Todas" || productos[i].categoria === categoriaSeleccionada) {
            productosFiltrados.push(productos[i]);
        }
    }

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <div className="container py-5 flex-grow-1">
                <div className="text-center mb-5">
                    <h1 className="fw-bold">PRODUCTOS</h1>
                    <p className="text-muted">Mostrando {productosFiltrados.length} productos disponibles</p>
                    <hr />
                </div>

                {/* Filtros de categorías */}
                <div className="row justify-content-center g-3 mb-5">
                    {categorias.map((cat) => (
                        <div className="col-6 col-md-3 col-lg-2" key={cat}>
                            <div
                                onClick={() => setCategoriaSeleccionada(cat)}
                                className={`card text-center shadow-sm h-100 justify-content-center ${categoriaSeleccionada === cat ? 'border-primary border-3' : 'border-light'}`}
                                style={{ cursor: "pointer", minHeight: "80px" }}
                            >
                                <div className="card-body p-2 d-flex align-items-center justify-content-center">
                                    <span className={`fw-bold ${categoriaSeleccionada === cat ? 'text-primary' : 'text-muted'}`}>
                                        {cat}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lista de productos */}
                <div className="row g-4">
                    {productosFiltrados.map((unProducto) => (
                        <ItemProducto 
                            producto={unProducto} 
                            key={unProducto.id} 
                            onAgregar={agregarAlCarrito} 
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}