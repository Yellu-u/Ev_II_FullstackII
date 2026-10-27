import Link from 'next/link';

export default function Footer() {
        return (
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
        );
}