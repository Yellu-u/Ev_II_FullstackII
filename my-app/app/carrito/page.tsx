"use client";

import { useCarrito } from "../context/CarritoContext";
import { productos } from "../../data/productos.js";
import Link from "next/link";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Carrito() {
    const { carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, total } = useCarrito();

    return (
        <div className="d-flex flex-column min-vh-100 bg-light">
            <Navbar />
            
            <div className="container py-5 flex-grow-1">
                <h1 className="text-center fw-bold mb-5">Mi Tienda 🛒</h1>

                <div className="row">
                    <div className="col-lg-8 mb-4">
                        <h4 className="mb-3 border-bottom pb-2">Lista de productos</h4>
                        <div className="row">
                            {productos.slice(0, 6).map((unProducto) => (
                                <div className="col-12 col-sm-6 mb-3" key={unProducto.id}>
                                    <div className="card h-100 shadow-sm">
                                        <div className="card-body d-flex flex-column text-center">
                                            <img 
                                                src={unProducto.imagen} 
                                                alt={unProducto.nombre} 
                                                style={{ height: "80px", objectFit: "contain" }} 
                                                className="mb-2"
                                            />
                                            <h6 className="fw-bold mb-1">{unProducto.nombre}</h6>
                                            <small className="text-muted mb-2">${unProducto.precio_nuevo.toLocaleString('es-CL')}</small>
                                            
                                            <button 
                                                className="btn btn-sm btn-dark mt-auto" 
                                                onClick={() => agregarAlCarrito(unProducto)}
                                            >
                                                Añadir
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card shadow-sm sticky-top" style={{ top: "20px" }}>
                            <div className="card-header bg-white fw-bold">
                                Carrito de Compras
                            </div>
                            
                            <div className="card-body p-0">
                                {carrito.length === 0 ? (
                                    <p className="text-center text-muted p-4">El carrito está vacío.</p>
                                ) : (
                                    <ul className="list-group list-group-flush">
                                        {carrito.map((item) => (
                                            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                                <div>
                                                    <h6 className="mb-0 fw-bold">{item.nombre}</h6>
                                                    <small className="text-muted">Cant: {item.cantidad} x ${item.precio_nuevo}</small>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="fw-bold me-3">${(item.precio_nuevo * item.cantidad).toLocaleString('es-CL')}</span>
                                                    <button 
                                                        className="btn btn-sm btn-danger" 
                                                        onClick={() => eliminarDelCarrito(item.id)}
                                                    >
                                                        X
                                                    </button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <div className="card-footer bg-white">
                                <h5 className="d-flex justify-content-between fw-bold mb-3">
                                    <span>Total:</span>
                                    <span>${total.toLocaleString('es-CL')}</span>
                                </h5>
                                
                                <div className="d-grid gap-2">
                                    <button 
                                        className="btn btn-secondary" 
                                        onClick={vaciarCarrito}
                                        disabled={carrito.length === 0}
                                    >
                                        Limpiar Carrito
                                    </button>
                                    <button 
                                        className="btn btn-success" 
                                        disabled={carrito.length === 0}
                                    >
                                        Ir a Pagar
                                    </button>
                                    <Link href="/productos" className="btn btn-outline-secondary">
                                        Seguir comprando
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}