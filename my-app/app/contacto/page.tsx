'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function ContactoPage() {
        const [nombre, setNombre] = useState('');
        const [correo, setCorreo] = useState('');
        const [mensaje, setMensaje] = useState('');

        const handleSubmit = (event: React.SyntheticEvent) => {
                event.preventDefault();

                // Validaciones basadas en tu HTML original
                if (nombre.length > 100) {
                        alert("El nombre debe tener un máximo de 100 caracteres");
                        return;
                }

                if (correo.length > 100) {
                        alert("El correo debe tener un máximo de 100 caracteres");
                        return;
                }

                if (!correo.endsWith("@duocuc.cl") && !correo.endsWith("@profesor.duocuc.cl") && !correo.endsWith("@gmail.com")) {
                        alert("El correo debe ser un @gmail.com o un @profesor.duocuc.cl o un @duocuc.cl");
                        return;
                }

                if (mensaje.length > 500) {
                        alert("El mensaje debe tener un máximo de 500 caracteres");
                        return;
                }

                alert("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
        };

        return (
                <div className="d-flex flex-column min-vh-100 login-wrapper">

                        {/* NAVBAR */}
                        <Navbar />

                        {/* CONTENEDOR PRINCIPAL */}
                        <div className="container d-flex justify-content-center align-items-center flex-grow-1 py-5">

                                {/* TARJETA DEL FORMULARIO */}
                                <div className="card shadow-lg border-0 p-5 login-card" style={{ maxWidth: '600px' }}>

                                        <div className="text-center mb-4">
                                                <img src="/assets/img/logos/logo.png" alt="Logo Proper" className="d-block mx-auto mb-4" style={{ height: '80px', objectFit: 'contain' }} />
                                                <h3 className="fw-bold text-proper">Formulario de Contacto</h3>
                                                <p className="text-muted small">¿Tienes alguna duda o requerimiento? Escríbenos.</p>
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

                                                <div className="mb-4">
                                                        <label htmlFor="mensaje" className="form-label fw-bold text-proper small">MENSAJE</label>
                                                        <textarea
                                                                className="form-control bg-light"
                                                                id="mensaje"
                                                                rows={5}
                                                                placeholder="Escribe tu mensaje aquí..."
                                                                required
                                                                value={mensaje}
                                                                onChange={(e) => setMensaje(e.target.value)}
                                                        ></textarea>
                                                </div>

                                                <button type="submit" className="btn btn-lg btn-proper w-100">
                                                        Enviar Mensaje
                                                </button>
                                        </form>
                                </div>
                        </div>

                        {/* FOOTER */}
                        <Footer />

                </div>
        );
}