import ProductCard from '@/components/common/ProductCard';
import Navbar from '@/components/layout/Navbar';
import Carousel from '@/components/ui/Carousel';
import { carouselImages } from '@/mocks/carousel';
import { products } from '@/mocks/products';
import { useState } from 'react';
import "../styles/pages/shop.css";

const Shop = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="shop-page">
            <Navbar onSearch={setSearchTerm} />
            <header className="shop-hero-section">
                <Carousel images={carouselImages} />
            </header>

            <main className="shop-container">
                <section>
                    <div className="shop-product-grid">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        ) : (
                            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '1.5rem' }}>
                                <p>No se encontraron productos que coincidan con tu búsqueda.</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Shop;
