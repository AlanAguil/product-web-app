import Navbar from '@/components/layout/Navbar';
import {
    CartItem,
    FreeShippingBar,
    OrderSummary,
    useCart
} from '@/features/cart';

const Cart = () => {
    const {
        cartItems,
        updateQuantity,
        removeItem,
        subtotal,
        shippingCost,
        total
    } = useCart();

    return (
        <div className="cart-page">
            <Navbar />
            <div className="cart-header">
                <h1 className="cart-title">Carrito ({cartItems.length})</h1>
            </div>

            <div className="cart-layout">
                <section className="cart-left-column">
                    <FreeShippingBar currentTotal={subtotal} />

                    <div className="cart-items-section">
                        {cartItems.length > 0 ? (
                            cartItems.map(item => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    onUpdateQuantity={updateQuantity}
                                    onRemove={removeItem}
                                />
                            ))
                        ) : (
                            <div className="empty-cart-message">
                                <h2>Tu carrito está vacío</h2>
                                <p>¿No sabes qué comprar? ¡Miles de productos te esperan!</p>
                            </div>
                        )}
                    </div>
                </section>

                <section className="cart-right-column">
                    <OrderSummary
                        subtotal={subtotal}
                        shippingCost={shippingCost}
                        total={total}
                    />
                </section>
            </div>
        </div>
    );
};

export default Cart;
