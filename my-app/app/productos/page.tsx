export const instant = false;
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

import {productos} from "../../data/productos.js";


function ItemProducto({ producto }) {
    const url = "/productos/" + producto.id;

    return (
        <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
                <img src={producto.imagen} className="card-img-top p-3" alt={producto.nombre} style={{ height: "200px", objectFit: "contain" }} />
                
                <div className="card-body d-flex flex-column text-center">
                    <h5 className="card-title fw-bold text-dark">{producto.nombre}</h5>
                    
                    <span className="text-muted mb-2" style={{ fontSize: "0.85rem" }}>
                        {producto.categoria}
                    </span>
                    
                    <p className="card-text text-secondary" style={{ fontSize: "0.9rem" }}>
                        {producto.descripcion}
                    </p>
                    
                    <div className="mt-auto">
                        <p className="fs-4 fw-bold text-black mb-3">
                            ${producto.precio_nuevo.toLocaleString('es-CL')}
                        </p>
                        
                        <div className="d-grid gap-2">
                            <Link href={url} className="btn btn-sm boton-detalle">
                                Ver detalle
                            </Link>
                            
                            <button className="btn btn-sm boton-carrito" >
                                Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ListaProductos({ productos }) {
    return (
        <div className="row g-4">
            {productos.map((unProducto) => (
                <ItemProducto 
                    producto={unProducto} 
                    key={unProducto.id} 
                />
            ))}
        </div>
    );
}


export default function Productos() {
    const cuantos = productos.length;
    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="container py-5 flex-grow-1">
                <div className="text-center mb-5">
                    <h1 className="fw-bold">PRODUCTOS</h1>
                    <p className="text-muted">Mostrando {cuantos} productos disponibles</p>
                    <hr />
                </div>
                
                <div className="row g-4">
                    {productos.map((unProducto) => (
                        <ItemProducto producto={unProducto} key={unProducto.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}