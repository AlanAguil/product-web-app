import Carousel from '@/components/layout/Carousel';
import Navbar from '@/components/layout/Navbar';
import {
    ProductCard,
    carouselImages,
    products,
} from '@/features/shop';
import { useState } from 'react';

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
                            <div className="no-products-message">
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
