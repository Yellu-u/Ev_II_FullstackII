import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Noticia1Page() {
        return (
                <div className="d-flex flex-column min-vh-100">

                        {/* NAVBAR */}
                        <Navbar />

                        {/* CONTENIDO PRINCIPAL */}
                        <main className="flex-grow-1 py-5">
                                <div className="container">

                                        {/* Botón para volver */}
                                        <div className="mb-4">
                                                <Link href="/blog" className="text-decoration-none text-proper fw-bold">
                                                        &larr; Volver a Noticias
                                                </Link>
                                        </div>

                                        {/* Artículo */}
                                        <div className="row justify-content-center">
                                                <div className="col-lg-8">

                                                        <h1 className="fw-bold text-proper mb-3">Proveedor Oficial del Ejército de Chile</h1>
                                                        <h4 className="text-muted fst-italic mb-4">Disciplina y limpieza de nivel institucional</h4>

                                                        <img
                                                                src="/assets/img/blog/noticia1.jpeg"
                                                                alt="Ejército de Chile"
                                                                className="img-fluid rounded shadow-sm mb-5 w-100"
                                                                style={{ maxHeight: '500px', objectFit: 'cover' }}
                                                        />

                                                        <div className="fs-5 text-secondary" style={{ lineHeight: '1.8' }}>
                                                                <p className="mb-4">
                                                                        Nos enorgullece profundamente anunciar que Comercializadora PROPER Spa ha sido seleccionada como
                                                                        proveedor oficial de limpieza y sanitización para la academia del Ejército de Chile.
                                                                </p>
                                                                <p className="mb-4">
                                                                        Este hito representa un reconocimiento a nuestra constante búsqueda de la excelencia. Los productos
                                                                        de Proper han demostrado tener el alto rendimiento y la eficacia necesarios para cumplir con las
                                                                        exigencias más estrictas de una institución de nivel institucional, donde la disciplina y el orden son fundamentales.
                                                                </p>
                                                                <p className="mb-4">
                                                                        A través de nuestras líneas de limpieza profunda y sanitización, hemos logrado garantizar espacios
                                                                        impecables y seguros para miles de personas. Seguiremos trabajando con la misma dedicación que nos
                                                                        caracteriza, llevando la calidad de la fabricación chilena a los más altos estándares.
                                                                </p>
                                                        </div>

                                                </div>
                                        </div>

                                </div>
                        </main>

                        {/* FOOTER */}
                        <Footer />

                </div>
        );
}