import Link from 'next/link';

export default function Noticia2Page() {
        return (
                <div className="d-flex flex-column min-vh-100">

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
                        <footer className="footer-proper mt-auto">
                                <div className="container text-center">
                                        <h2>PROPER CHILE</h2>
                                        <p className="mb-1">&copy; Proper Chile. Fabricación Chilena de Excelencia.</p>
                                        <div className="footer-links mt-2">
                                                <Link href="/" className="text-white text-decoration-none mx-2">Inicio</Link>|
                                                <Link href="/nosotros" className="text-white text-decoration-none mx-2">Nosotros</Link>|
                                                <Link href="/contacto" className="text-white text-decoration-none mx-2">Contacto</Link>
                                        </div>
                                </div>
                        </footer>

                </div>
        );
}