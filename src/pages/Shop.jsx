import ProductCard from '@/components/common/ProductCard';
import Navbar from '@/components/layout/Navbar';
import Carousel from '@/components/ui/Carousel';
import "../styles/pages/shop.css";
import { products } from '@/mocks/products';
import { carouselImages } from '@/mocks/carousel';

const Shop = () => {
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
