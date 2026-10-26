'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
        const [correo, setCorreo] = useState('');
        const [contrasena, setContrasena] = useState('');

        const handleSubmit = (event: React.SyntheticEvent) => {
                event.preventDefault();

                if (correo.length > 100) {
                        alert("El correo debe tener un máximo de 100 caracteres");
                        return;
                }
                if (!correo.endsWith("@duocuc.cl") && !correo.endsWith("@profesor.duocuc.cl") && !correo.endsWith("@gmail.com")) {
                        alert("El correo debe ser un @gmail.com o un @profesor.duocuc.cl o un @duocuc.cl");
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
                alert("¡Inicio de sesión exitoso!");
        };

        return (
                <div className="login-wrapper">

                        {/* NAVBAR */}
                        <nav className="navbar navbar-expand-sm navbar-proper shadow-sm">
                                <div className="container-fluid px-4">
                                        <div className="navbar-header">
                                                <img id="logo-color-img-nav" src="/assets/img/logos/logocolor.png" alt="logo-proper-color" />
                                        </div>
                                        <ul className="navbar-nav mx-auto">
                                                <li className="nav-item"><Link className="nav-link fw-semibold" href="/">Home</Link></li>
                                                <li className="nav-item"><Link className="nav-link fw-semibold" href="/productos">Productos</Link></li>
                                                <li className="nav-item"><Link className="nav-link fw-semibold" href="/nosotros">Nosotros</Link></li>
                                                <li className="nav-item"><Link className="nav-link fw-semibold" href="/contacto">Contacto</Link></li>
                                                <li className="nav-item"><Link className="nav-link fw-semibold" href="/blog">Blogs</Link></li>
                                        </ul>
                                        <ul className="nav navbar-nav navbar-right">
                                                <li><Link href="/carrito" className="nav-link text-white fw-bold">Carrito</Link></li>
                                        </ul>
                                </div>
                        </nav>

                        {/* CONTENEDOR PRINCIPAL */}
                        <div className="container d-flex justify-content-center align-items-center min-vh-100 py-5">

                                {/* TARJETA DEL FORMULARIO */}
                                <div className="card shadow-lg border-0 p-5 login-card">

                                        <div className="text-center mb-4">
                                                <img src="/assets/img/logos/logo.png" alt="Logo Proper" className="d-block mx-auto mb-4 login-logo" />
                                                <h3 className="fw-bold text-proper">Iniciar Sesión</h3>
                                                <p className="text-muted small">Ingresa tus credenciales para poder ver tu perfil.</p>
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                                <div className="mb-3">
                                                        <label htmlFor="correo" className="form-label fw-bold text-proper small">CORREO ELECTRÓNICO</label>
                                                        <input
                                                                type="email"
                                                                className="form-control form-control-lg bg-light"
                                                                id="correo"
                                                                placeholder="juan@ejemplo.com"
                                                                required
                                                                value={correo}
                                                                onChange={(e) => setCorreo(e.target.value)}
                                                        />
                                                </div>

                                                <div className="mb-4">
                                                        <label htmlFor="contrasena" className="form-label fw-bold text-proper small">CONTRASEÑA</label>
                                                        <input
                                                                type="password"
                                                                className="form-control form-control-lg bg-light"
                                                                id="contrasena"
                                                                placeholder="••••••••"
                                                                required
                                                                value={contrasena}
                                                                onChange={(e) => setContrasena(e.target.value)}
                                                        />
                                                </div>

                                                <button type="submit" className="btn btn-lg btn-proper w-100 mb-4">
                                                        Ingresar
                                                </button>

                                                <div className="text-center">
                                                        <span className="text-muted small">¿No tienes cuenta? </span>
                                                        <Link href="/crear-sesion" className="text-decoration-none fw-bold text-proper small">
                                                                Regístrate aquí
                                                        </Link>
                                                </div>
                                        </form>
                                </div>
                        </div>
                </div>
        );
}