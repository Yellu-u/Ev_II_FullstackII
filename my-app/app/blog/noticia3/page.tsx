import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Noticia3Page() {
        return (
                <div className="d-flex flex-column min-vh-100">

                        {/* NAVBAR */}
                        <Navbar />

                        {/* CONTENIDO PRINCIPAL */}
                        <main className="flex-grow-1 py-5">
                                <div className="container">

                                        <div className="mb-4">
                                                <Link href="/blog" className="text-decoration-none text-proper fw-bold">
                                                        &larr; Volver a Noticias
                                                </Link>
                                        </div>

                                        <div className="row justify-content-center">
                                                <div className="col-lg-8">

                                                        <h1 className="fw-bold text-proper mb-3">Lanzamiento de Combos o Kits Especiales</h1>
                                                        <h4 className="text-muted fst-italic mb-4">¡Lleva la experiencia PROPER en formato Kit!</h4>

                                                        <img
                                                                src="/assets/img/blog/noticia3.jpeg"
                                                                alt="Kits de Limpieza Proper"
                                                                className="img-fluid rounded shadow-sm mb-5 w-100"
                                                                style={{ maxHeight: '500px', objectFit: 'cover' }}
                                                        />

                                                        <div className="fs-5 text-secondary" style={{ lineHeight: '1.8' }}>
                                                                <p className="mb-4">
                                                                        Sabemos que cada espacio tiene necesidades distintas, y por eso hemos simplificado tu rutina con
                                                                        nuestros nuevos Kits de Limpieza Inteligente. Hemos combinado nuestros mejores productos para
                                                                        que tengas todo lo necesario en un solo lugar.
                                                                </p>
                                                                <p className="mb-4">
                                                                        Ya sea que necesites un kit para el <strong>hogar</strong> (ideal para pisos y cocina), un kit
                                                                        <strong> automotriz</strong> (para dejar tu auto impecable) o un kit para tu <strong>negocio</strong>
                                                                        (con productos de alto rendimiento y sanitización), lo tenemos cubierto.
                                                                </p>
                                                                <p className="mb-4">
                                                                        Cada kit ha sido diseñado pensando en la concentración, la eficacia y el ahorro. Al comprar un combo,
                                                                        obtienes un precio especial respecto a la compra individual de los productos.
                                                                        ¡Descúbrelos en nuestra tienda y empieza a ahorrar hoy mismo!
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