import Link from "next/link";

export default function NosotrosPage() {
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
                        <main className="flex-grow-1">
                                <div className="row m-0">
                                        <div className="col-sm-2"></div>

                                        <div className="col-sm-8 py-4">
                                                {/* CONTENEDOR QUIENES SOMOS */}
                                                <div className="container-somos">
                                                        <h1 className="mb-3">Quiénes Somos</h1>
                                                        <h4 className="text-muted mb-4">
                                                                Conoce nuestra historia, mision y los valores que nos impulsan a ofrecer productos de excelencia
                                                        </h4>

                                                        <p className="text-start mb-4">
                                                                Comercializadora PROPER Spa es una empresa nobel con 4 años de funcionamiento, especializada en la
                                                                venta, distribución y fabricación de productos químicos para el ámbito del aseo industrial, clínico,
                                                                corporaciones educacionales, edificios administrativos y domiciliarios, entre otros. Una de nuestras principales
                                                                fortalezas y que nos caracteriza por sobre la competencia, es ofrecer una amplia gama de productos de fabricación
                                                                propia con un rendimiento superior, dadas sus características de mayor concentración y comprobada satisfacción
                                                                de calidad profesional ante la exigencia de trabajos duros, hasta los más sencillos y cotidianos según requerimiento.
                                                                Implementamos fórmulas avanzadas de última generación, logrando con esto la fidelización de nuestros clientes,
                                                                quienes —indicado por ellos— realizan una primera compra por el bajo costo de nuestros productos y las sucesivas,
                                                                por los resultados obtenidos de su uso y la calidad que se nota en cada una de las diferentes líneas disponibles.
                                                        </p>

                                                        <p className="text-star mb-4">
                                                                Junto a lo anterior y acogiendo las diferentes sugerencias de nuestros clientes, hemos ampliado la
                                                                oferta disponible como una manera de poder entregar un servicio más integral y de simple adquisición,
                                                                incorporando una Línea de Accesorios Complementarios de reconocida calidad para aseo, mantención y otros,
                                                                facilitando los procesos de cotización, facturación y pago de compromisos.
                                                        </p>

                                                        <p className="fst-italic text-start">
                                                                Estamos atentos a sus comentarios y canales de comunicación para concretar una exitosa y responsable relación comercial.
                                                        </p>
                                                </div>

                                                {/* INFORMACIÓN DE CONTACTO */}
                                                <div className="contacto-gerente mt-5">
                                                        <h5 className="fw-bold">Cristian Rodrigo Pérez Espinoza</h5>
                                                        <p className="text-muted">Gerente de Operaciones</p>

                                                        <div className="datos-gerente d-flex justify-content-center gap-2 flex-wrap mt-3">
                                                                <a href="mailto:ventas@proper.cl" className="text-decoration-none text-proper fw-semibold">ventas@proper.cl</a>
                                                                <span className="text-muted">|</span>
                                                                <span className="text-muted">22 415 7516</span>
                                                                <span className="text-muted">|</span>
                                                                <span className="text-muted">+569 6158 6768</span>
                                                                <span className="text-muted">|</span>
                                                                <span className="text-muted">+569 6349 2455</span>
                                                        </div>
                                                </div>
                                        </div>

                                        <div className="col-sm-2"></div>
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
        )
}