'use client';

import Link from 'next/link';
import { useCarrito } from '@/app/context/CarritoContext';

export default function Navbar() {
        const { carrito } = useCarrito();

        let totalProductos = 0;
        if (carrito) {
                for (let i = 0; i < carrito.length; i++) {
                        totalProductos = totalProductos + carrito[i].cantidad;
                }
        }

        return (
                <nav className="navbar navbar-expand-sm navbar-proper shadow-sm">
                        <div className="container-fluid px-4">
                                <div className="navbar-header">
                                        <img id="logo-color-img-nav" src="/assets/img/logos/logocolor.png" alt="logo-proper-color" />
                                </div>
                                <ul className="navbar-nav mx-auto">
                                        <li className="nav-item"><Link className="nav-link fw-semibold" href="/home">Home</Link></li>
                                        <li className="nav-item"><Link className="nav-link fw-semibold" href="/productos">Productos</Link></li>
                                        <li className="nav-item"><Link className="nav-link fw-semibold" href="/nosotros">Nosotros</Link></li>
                                        <li className="nav-item"><Link className="nav-link fw-semibold" href="/contacto">Contacto</Link></li>
                                        <li className="nav-item"><Link className="nav-link fw-semibold" href="/blog">Blogs</Link></li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                        <li>
                                                <Link href="/carrito" className="nav-link text-white fw-bold">
                                                        Carrito
                                                        {totalProductos > 0 && (
                                                                <span className="badge bg-danger rounded-pill">
                                                                        {totalProductos}
                                                                </span>
                                                        )}
                                                </Link>
                                        </li>
                                </ul>
                        </div>
                </nav>
        );
}