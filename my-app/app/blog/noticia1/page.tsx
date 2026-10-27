import Link from 'next/link';

export default function Noticia1Page() {
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