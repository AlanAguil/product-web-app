import ProductCard from '@/components/common/ProductCard';
import Navbar from '@/components/layout/Navbar';
import Carousel from '@/components/ui/Carousel';
import '../styles/pages/Shop.css';

const Shop = () => {
    // Static data extracted from the HTML
    const carouselImages = [
        "/img/Imagen1.jpeg",
        "/img/Imagen2.jpeg",
        "/img/Imagen3.jpeg"
    ];

    const products = [
        {
            id: 1,
            title: "Producto 1",
            description: "Pequeña descripción del producto 1.",
            price: 100.00,
            image: "/img/producto1.jpg"
        },
        {
            id: 2,
            title: "Producto 2",
            description: "Pequeña descripción del producto 2.",
            price: 150.00,
            image: "/img/producto2.jpg"
        },
        {
            id: 3,
            title: "Producto 3",
            description: "Pequeña descripción del producto 3.",
            price: 200.00,
            image: "/img/producto3.jpg"
        },
        {
            id: 4,
            title: "Producto 4",
            description: "Pequeña descripción del producto 4.",
            price: 250.00,
            image: "/img/productoJoyeria1.jpg"
        },
        {
            id: 5,
            title: "Producto 5",
            description: "Pequeña descripción del producto 5.",
            price: 300.00,
            image: "/img/productoMascota1.jpg"
        },
        {
            id: 6,
            title: "Producto 6",
            description: "Pequeña descripción del producto 6.",
            price: 350.00,
            image: "/img/productoPeluche1.jpg"
        },
        {
            id: 7,
            title: "Producto 7",
            description: "Pequeña descripción del producto 7.",
            price: 400.00,
            image: "/img/producto7.jpg"
        },
        {
            id: 8,
            title: "Producto 8",
            description: "Pequeña descripción del producto 8.",
            price: 450.00,
            image: "/img/producto8.jpg"
        },
        {
            id: 9,
            title: "Producto 9",
            description: "Pequeña descripción del producto 9.",
            price: 500.00,
            image: "/img/producto9.jpg"
        }
    ];

    return (
        <div className="shop-page">
            <Navbar />

            <header className="shop-hero-section">
                <Carousel images={carouselImages} />
            </header>

            <main className="shop-container">
                <section>
                    <div className="shop-product-grid">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Shop;
