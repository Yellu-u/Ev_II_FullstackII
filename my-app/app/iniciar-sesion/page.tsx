'use client';

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
        // Estados que guardan lo que el usuario ingresa
        const [correo, setCorreo] = useState('');
        const [contrasena, setContrasena] = useState('');

        // Función que se ejecuta al presionar "Iniciar sesión"
        const handleSubmit = (event: React.SyntheticEvent) => {
                event.preventDefault();

                if (correo.length > 100) {
                        alert("El correo debe tener un máximo de 100 caracteres");
                        return;
                }

                if (!correo.endsWith("@duoc.cl") && !correo.endsWith("@profesor.duoc.cl") && !correo.endsWith("@gmail.com")) {
                        alert("El correo debe ser un @gmail.com o un @profesor.duoc.cl o un @duoc.cl");
                        return;
                }

                if (contrasena.length < 4) {
                        alert("La contraseña debe tener al menos 4 caracteres");
                        return;
                }

                if (contrasena.length > 10) {
                        alert("La contraseña no debe tener más de 10 caracteres");
                        return;
                }

                // En caso de pasar la validaciones
                alert("¡Inicio de sesión exitoso!")
        };

        return (
                <div className="container-fluid p-0">
                        {/* NAVBAR */}
                        <nav className="navbar navbar-expand-sm navbar-proper">
                                <div className="container-fluid">
                                        <div className="navbar-header">
                                                <img id="logo-color-img-nav" src="/assets/img/logos/logocolor.png" alt="logo-proper-color" />
                                        </div>

                                        <ul className="navbar-nav">
                                                <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
                                                <li className="nav-item"><Link className="nav-link" href="/productos">Productos</Link></li>
                                                <li className="nav-item"><Link className="nav-link" href="/nosotros">Nosotros</Link></li>
                                                <li className="nav-item"><Link className="nav-link" href="/contacto">Contacto</Link></li>
                                                <li className="nav-item"><Link className="nav-link" href="/blog">Blogs</Link></li>
                                        </ul>
                                        <ul className="nav navbar-nav navbar-right">
                                                <li><Link href="/carrito"><span className="shopping-cart"></span> Carrito</Link></li>
                                        </ul>
                                </div>
                        </nav>

                        {/* FORM INICIO SESIÓN */}
                        <div className="row">
                                <div className="col-sm-3"></div>

                                <div className="col-sm-6">
                                        <div className="container-foto mt-4 mb-2">
                                                <img id="logo-proper" src="/assets/img/logos/logo.png" alt="Logo Proper"/>
                                        </div>

                                        <div className="container-form">
                                                <form onSubmit={handleSubmit}>
                                                        <div className="login-titulo">
                                                                <h4>INICIO DE SESIÓN</h4>
                                                        </div>

                                                        <div className="mb-3">
                                                                <label htmlFor="correo">CORREO</label>
                                                                <input
                                                                        type="email"
                                                                        className="form-control"
                                                                        id="correo"
                                                                        placeholder="juan@ejemplo.com"
                                                                        required
                                                                        value={correo}
                                                                        onChange={(e) => setCorreo(e.target.value)} />
                                                        </div>

                                                        <div className="mb-3">
                                                                <label htmlFor="contrasena">CONTRASEÑA</label>
                                                                <input
                                                                        type="password"
                                                                        className="form-control"
                                                                        id="contrasena"
                                                                        placeholder="Ingresa tu contraseña"
                                                                        required
                                                                        value={contrasena}
                                                                        onChange={(e) => setContrasena(e.target.value)} />
                                                        </div>

                                                        <div className="text-center">
                                                                <button type="submit" className="btn btn-primary btn-lg px-5 mt-4">
                                                                        Iniciar sesión
                                                                </button>
                                                        </div>
                                                </form>
                                        </div>
                                </div>

                                <div className="col-sm-3"></div>
                        </div>
                </div>
        );
}