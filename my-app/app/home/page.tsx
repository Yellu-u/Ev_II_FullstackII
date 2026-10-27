import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// IMPORTAMOS LA CONSTANTE PRODUCTOS
import { productos } from '@/data/productos';

export default function HomePage() {
        const destacados = productos.slice(0, 4);

        return (
                <div className="d-flex flex-column min-vh-100">
                        <Navbar />

                        <div className="container mt-3 mb-2">
                                <div className="text-end small">
                                        <Link href="/iniciar-sesion" className="text-proper text-decoration-none fw-bold">Iniciar sesión</Link>
                                        <span className="text-muted mx-2">|</span>
                                        <Link href="/crear-sesion" className="text-proper text-decoration-none fw-bold">Registrar usuario</Link>
                                </div>
                        </div>

                        <main className="flex-grow-1">
                                <div className="container-text container mt-4 mb-5">
                                        <div className="row align-items-center">
                                                <div className="col-md-7 text-start">
                                                        <h1 className="fw-bold text-proper mb-3">TIENDA ONLINE</h1>
                                                        <p className="text-secondary" style={{ lineHeight: '1.6', textAlign: 'justify' }}>
                                                                Comercializadora PROPER Spa es una empresa nobel con 4 años de funcionamiento, especializada en la
                                                                venta, distribución y fabricación de productos químicos para el ámbito del aseo industrial, clínico,
                                                                corporaciones educacionales, edificios administrativos y domiciliarios, entre otros.
                                                        </p>
                                                        <Link href="/productos" className="btn btn-proper btn-lg mt-3 px-4">
                                                                Ver Catálogo Completo
                                                        </Link>
                                                </div>
                                                <div className="col-md-5 text-center mt-4 mt-md-0">
                                                        <img
                                                                src="/assets/img/fondo/fondo1.png"
                                                                alt="Productos Proper"
                                                                className="img-fluid rounded shadow-sm"
                                                                style={{ maxHeight: '300px', objectFit: 'cover' }}

                                                        />
                                                </div>
                                        </div>
                                </div>

                                <div className="container mb-5">
                                        <h2 className="text-center text-proper fw-bold mb-4">Productos Destacados</h2>
                                        <div className="row g-4">
                                                {destacados.map((prod) => (
                                                        <div className="col-sm-6 col-md-3" key={prod.id}>
                                                                <div className="Productos_lista shadow-sm h-100">
                                                                        <img src={prod.imagen} alt={prod.nombre} style={{ height: '200px', objectFit: 'contain' }} className="mt-2" />
                                                                        <div className="informacion-producto mt-3">
                                                                                <span className="text-muted small">{prod.categoria}</span>
                                                                                <h5 className="tituloProducto text-proper fw-bold">{prod.nombre}</h5>

                                                                                <div className="my-2">
                                                                                        <span className="text-danger text-decoration-line-through me-2 small">
                                                                                                ${prod.precio_descuento.toLocaleString('es-CL')}
                                                                                        </span>
                                                                                        <span className="fw-bold fs-5">${prod.precio_nuevo.toLocaleString('es-CL')}</span>
                                                                                </div>

                                                                                {prod.enStock ? (
                                                                                        <Link href={`/productos`} className="btn btn-proper w-100 mt-auto">
                                                                                                Ver en tienda
                                                                                        </Link>
                                                                                ) : (
                                                                                        <button className="btn btn-secondary w-100 mt-auto" disabled>
                                                                                                Agotado
                                                                                        </button>
                                                                                )}
                                                                        </div>
                                                                </div>
                                                        </div>
                                                ))}
                                        </div>
                                </div>
                        </main>

                        <Footer />
                </div>
        );
}