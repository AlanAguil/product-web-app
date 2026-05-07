import React, { useState } from 'react';
import Carousel from '@/components/layout/Carousel';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import {
    ProductCard,
    carouselImages,
    products,
// @ts-ignore
} from '@/modules/shop';

const Shop: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredProducts = products.filter((product: any) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="shop-page">
                <Navbar onSearch={setSearchTerm} />
                <header className="shop-hero-section">
                    <Carousel images={carouselImages} />
                </header>

                <main className="shop-container">
                    <section>
                        <div className="shop-product-grid">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product: any) => (
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
            <Footer />
        </>
    );
};

export default Shop;
