"use client";

import { Suspense } from "react"; // <--- 1. Importamos Suspense
import { useParams } from "next/navigation";
import Link from "next/link";
import { productos } from "../../../data/productos.js"; 
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCarrito } from "../../context/CarritoContext";

// 2. Creamos un componente interno que sí usa useParams
function DetalleProductoContenido() {
    const params = useParams();
    const id = params.slug; 
    const producto = productos.find(p => p.id === Number(id));
    const { agregarAlCarrito } = useCarrito();

    if (!producto) {
        return (
            <div className="text-center py-5">
                <h2>Producto no encontrado</h2>
                <Link href="/productos" className="btn btn-primary mt-3">Volver a la tienda</Link>
            </div>
        );
    }

    return (
        <div className="row align-items-center">
            <div className="col-md-6 mb-4">
                <div className="card shadow-sm p-4">
                    <img src={producto.imagen} alt={producto.nombre} className="img-fluid" style={{ maxHeight: "400px", objectFit: "contain" }} />
                </div>
            </div>
            <div className="col-md-6">
                <h6 className="text-muted">{producto.categoria}</h6>
                <h1 className="fw-bold mb-3">{producto.nombre}</h1>
                <p className="text-secondary fs-5">{producto.descripcion}</p>
                <hr />
                <h2 className="fw-bold text-success mb-4">${producto.precio_nuevo.toLocaleString('es-CL')}</h2>
                <div className="d-grid gap-2 d-md-block">
                    <button className="btn btn-success btn-lg me-md-2" onClick={() => agregarAlCarrito(producto)}>
                        Añadir al carrito
                    </button>
                    <Link href="/productos" className="btn btn-outline-secondary btn-lg">Volver a la tienda</Link>
                </div>
            </div>
        </div>
    );
}

// 3. El componente principal exportado envuelve todo en Suspense
export default function DetalleProducto() {
    return (
        <div className="d-flex flex-column min-vh-100 bg-light">
            <Navbar />
            <div className="container py-5 flex-grow-1">
                <Suspense fallback={<div className="text-center py-5"><h3>Cargando producto...</h3></div>}>
                    <DetalleProductoContenido />
                </Suspense>
            </div>
            <Footer />
        </div>
    );
}