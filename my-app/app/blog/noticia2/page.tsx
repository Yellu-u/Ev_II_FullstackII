import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Noticia2Page() {
        return (
                <div className="d-flex flex-column min-vh-100">

                        {/* NAVBAR */}
                        <Navbar/>

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

                                                        <h1 className="fw-bold text-proper mb-3">Alianza Estratégica / Proveedor Oficial</h1>
                                                        <h4 className="text-muted fst-italic mb-4">¡PROPER y DuocUc unen fuerzas!</h4>

                                                        <img
                                                                src="/assets/img/blog/noticia2.jpeg"
                                                                alt="Alianza Estratégica"
                                                                className="img-fluid rounded shadow-sm mb-5 w-100"
                                                                style={{ maxHeight: '500px', objectFit: 'cover' }}
                                                        />

                                                        <div className="fs-5 text-secondary" style={{ lineHeight: '1.8' }}>
                                                                <p className="mb-4">
                                                                        Nos enorgullece anunciar una nueva y emocionante alianza estratégica. A partir de hoy,
                                                                        Comercializadora PROPER Spa se convierte en el proveedor oficial de limpieza y sanitización
                                                                        de DuocUc.
                                                                </p>
                                                                <p className="mb-4">
                                                                        Esta colaboración nace con el objetivo de garantizar espacios impecables, seguros y saludables
                                                                        tanto para los colaboradores como para los clientes de nuestra nueva empresa aliada. Estamos
                                                                        seguros de que la sinergia entre nuestras avanzadas fórmulas químicas y su compromiso con la
                                                                        excelencia dará resultados extraordinarios.
                                                                </p>
                                                                <p className="mb-4">
                                                                        Juntos, trabajaremos incansablemente para mantener los más altos estándares de higiene, demostrando
                                                                        una vez más por qué PROPER es la elección número uno de las grandes instituciones en Chile.
                                                                        ¡Agradecemos la confianza depositada en nuestro equipo!
                                                                </p>
                                                        </div>

                                                </div>
                                        </div>

                                </div>
                        </main>

                        {/* FOOTER */}
                        <Footer/>

                </div>
        );
}