'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function RegistroPage() {
        const [nombre, setNombre] = useState('');
        const [correo, setCorreo] = useState('');
        const [contrasena, setContrasena] = useState('');
        const [confirmarContrasena, setConfirmarContrasena] = useState('');

        const handleSubmit = (event: React.SyntheticEvent) => {
                event.preventDefault();

                // Validaciones basadas en tu HTML original
                if (nombre.length > 150) {
                        alert("El nombre no debe tener más de 150 caracteres");
                        return;
                }

                if (correo.length > 100) {
                        alert("El correo no debe tener más de 100 caracteres");
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

                if (contrasena !== confirmarContrasena) {
                        alert("Las contraseñas no coinciden");
                        return;
                }

                alert("¡Usuario registrado con éxito!");
        };

        return (
                <div className="login-wrapper">

                        {/* NAVBAR */}
                        <Navbar />

                        {/* CONTENEDOR PRINCIPAL */}
                        <div className="container d-flex justify-content-center align-items-center min-vh-100 py-5">

                                {/* TARJETA DEL FORMULARIO */}
                                <div className="card shadow-lg border-0 p-5 login-card" style={{ maxWidth: '500px' }}>

                                        <div className="text-center mb-4">
                                                <img src="/assets/img/logos/logo.png" alt="Logo Proper" className="d-block mx-auto mb-4 login-logo" />
                                                <h3 className="fw-bold text-proper">Crear Cuenta</h3>
                                                <p className="text-muted small">Únete a ProperChile para gestionar tus compras</p>
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                                <div className="mb-3">
                                                        <label htmlFor="nombre" className="form-label fw-bold text-proper small">NOMBRE COMPLETO</label>
                                                        <input
                                                                type="text"
                                                                className="form-control form-control-lg bg-light"
                                                                id="nombre"
                                                                placeholder="Ej: Juan Pérez"
                                                                required
                                                                value={nombre}
                                                                onChange={(e) => setNombre(e.target.value)}
                                                        />
                                                </div>

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

                                                <div className="mb-3">
                                                        <label htmlFor="contrasena" className="form-label fw-bold text-proper small">CONTRASEÑA</label>
                                                        <input
                                                                type="password"
                                                                className="form-control form-control-lg bg-light"
                                                                id="contrasena"
                                                                placeholder="Mínimo 4 caracteres"
                                                                required
                                                                value={contrasena}
                                                                onChange={(e) => setContrasena(e.target.value)}
                                                        />
                                                </div>

                                                <div className="mb-4">
                                                        <label htmlFor="confirmarContrasena" className="form-label fw-bold text-proper small">CONFIRMAR CONTRASEÑA</label>
                                                        <input
                                                                type="password"
                                                                className="form-control form-control-lg bg-light"
                                                                id="confirmarContrasena"
                                                                placeholder="Repite tu contraseña"
                                                                required
                                                                value={confirmarContrasena}
                                                                onChange={(e) => setConfirmarContrasena(e.target.value)}
                                                        />
                                                </div>

                                                <button type="submit" className="btn btn-lg btn-proper w-100 mb-4">
                                                        Registrarse
                                                </button>

                                                <div className="text-center">
                                                        <span className="text-muted small">¿Ya tienes cuenta? </span>
                                                        <Link href="/iniciar-sesion" className="text-decoration-none fw-bold text-proper small">
                                                                Inicia sesión aquí
                                                        </Link>
                                                </div>
                                        </form>
                                </div>
                        </div>
                </div>
        );
}