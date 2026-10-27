import Link from 'next/link';

export default function BlogPage() {
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
                                        <h2 className="titulo-principal text-center mb-5 text-proper">NOTICIAS IMPORTANTES</h2>

                                        {/* NOTICIA 1 */}
                                        <div className="row align-items-center tarjeta-noticia shadow-sm">
                                                <div className="col-md-6 mb-4 mb-md-0">
                                                        <h3 className="titulo-noticia text-proper">Proveedor Oficial del Ejército de Chile</h3>
                                                        <h5 className="text-muted fst-italic">Disciplina y limpieza de nivel institucional</h5>
                                                        <p className="mt-3">
                                                                Nos enorgullece ser proveedores oficiales de limpieza y sanitización para la academia del
                                                                Ejército de Chile. Productos de alto rendimiento que cumplen con las exigencias más altas.
                                                        </p>
                                                        <Link href="/blog/noticia1" className="btn btn-proper mt-3">VER CASO</Link>
                                                </div>
                                                <div className="col-md-6 text-center">
                                                        <img src="/assets/img/blog/noticia1portada.jpeg" alt="Ejército de Chile" className="imagen-noticia rounded shadow-sm" />
                                                </div>
                                        </div>

                                        {/* NOTICIA 2 */}
                                        <div className="row align-items-center tarjeta-noticia shadow-sm">
                                                <div className="col-md-6 order-md-2 mb-4 mb-md-0">
                                                        <h3 className="titulo-noticia text-proper">Alianza Estratégica / Proveedor Oficial</h3>
                                                        <h5 className="text-muted fst-italic">¡PROPER y DuocUc unen fuerzas!</h5>
                                                        <p className="mt-3">
                                                                Nos enorgullece anunciar que ahora somos el proveedor oficial de limpieza y sanitización de
                                                                DuocUc. Juntos, garantizamos espacios impecables y seguros.
                                                        </p>
                                                        <Link href="/blog/noticia2" className="btn btn-proper mt-3">VER CASO</Link>
                                                </div>
                                                <div className="col-md-6 order-md-1 text-center">
                                                        <img src="/assets/img/blog/noticia2portada.jpeg" alt="Alianza Estratégica" className="imagen-noticia rounded shadow-sm" />
                                                </div>
                                        </div>

                                        {/* NOTICIA 3 */}
                                        <div className="row align-items-center tarjeta-noticia shadow-sm">
                                                <div className="col-md-6 mb-4 mb-md-0">
                                                        <h3 className="titulo-noticia text-proper">Lanzamiento de Combos o Kits Especiales</h3>
                                                        <h5 className="text-muted fst-italic">¡Lleva la experiencia PROPER en formato Kit!</h5>
                                                        <p className="mt-3">
                                                                Simplifica tu rutina con nuestros nuevos Kits de Limpieza Inteligente.
                                                                Hemos combinado nuestros mejores productos para tu hogar, auto o negocio a un precio especial.
                                                                ¡Descúbrelos y ahorra!
                                                        </p>
                                                        <Link href="/blog/noticia3" className="btn btn-proper mt-3">VER CASO</Link>
                                                </div>
                                                <div className="col-md-6 text-center">
                                                        <img src="/assets/img/blog/noticia3portada.jpeg" alt="Kits de Limpieza" className="imagen-noticia rounded shadow-sm" />
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