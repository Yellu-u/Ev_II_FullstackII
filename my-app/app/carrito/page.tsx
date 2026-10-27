"use client";

import { useCarrito } from "../context/CarritoContext";
import Link from "next/link";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Carrito() {
    const { carrito, eliminarDelCarrito, vaciarCarrito, total, sumarCantidad, restarCantidad } = useCarrito();

    return (
        <div className="d-flex flex-column min-vh-100 bg-light">
            <Navbar />
            
            <div className="container py-5 flex-grow-1">
                <h1 className="text-center fw-bold mb-5">Tu Carrito 🛒</h1>

                {carrito.length === 0 ? (
                    <div className="text-center mt-5">
                        <h4 className="text-muted">El carrito está vacío.</h4>
                        <Link href="/productos" className="btn btn-primary mt-3">
                            Ir a comprar
                        </Link>
                    </div>
                ) : (
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <ul className="list-group mb-4">
                                {carrito.map((item) => (
                                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center py-3">
                                        
                                        <div className="d-flex align-items-center">
                                            <img 
                                                src={item.imagen} 
                                                alt={item.nombre} 
                                                style={{ width: "60px", height: "60px", objectFit: "contain" }} 
                                                className="me-3 bg-light rounded p-1"
                                            />
                                            <div>
                                                <h6 className="mb-0 fw-bold">{item.nombre}</h6>
                                                <small className="text-muted">
                                                    ${item.precio_nuevo.toLocaleString('es-CL')} c/u
                                                </small>
                                            </div>
                                        </div>
                                        
                                        <div className="d-flex align-items-center">
                                            <div className="input-group input-group-sm me-4" style={{ width: "100px" }}>
                                                <button className="btn btn-outline-secondary" onClick={() => restarCantidad(item.id)}>
                                                    -
                                                </button>
                                                <span className="form-control text-center fw-bold bg-white">
                                                    {item.cantidad}
                                                </span>
                                                <button className="btn btn-outline-secondary" onClick={() => sumarCantidad(item.id)}>
                                                    +
                                                </button>
                                            </div>

                                            <span className="fw-bold me-4" style={{ minWidth: "80px", textAlign: "right" }}>
                                                ${(item.precio_nuevo * item.cantidad).toLocaleString('es-CL')}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <h4 className="text-end">Total: ${total.toLocaleString('es-CL')}</h4>
                            
                            <div className="d-grid gap-2 mt-4">
                                <button className="btn btn-secondary" onClick={vaciarCarrito}>
                                    Limpiar Carrito
                                </button>
                                <button className="btn btn-success btn-lg">
                                    Ir a Pagar
                                </button>
                                <Link href="/productos" className="btn btn-outline-secondary">
                                    Seguir comprando
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}