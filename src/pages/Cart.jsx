import PublicNavbar from '../components/layout/PublicNavbar';
import '../styles/carritoCom.css';

const cartItems = [
  {
    image: '/img/productoRopa1.jpg',
    title: 'Blusa estilo crochet',
    color: 'Azul',
    details: 'Talla: S, M',
    price: '$230',
  },
  {
    image: '/img/llaveros-ballenas.jpg',
    title: 'Llaveros de pulpo',
    color: 'Rosa',
    price: '$200',
  },
  {
    image: '/img/pajaro-crochet.jpg',
    title: 'Pájaro de crochet',
    color: 'Verde',
    price: '$250',
  },
  {
    image: '/img/productoJoyeria1.jpg',
    title: 'Collar de Crochet',
    color: 'Amarillo',
    price: '$200',
  },
];

const Cart = () => {
  return (
    <div>
      <PublicNavbar />
      <main className="container mt-5">
        <section className="cart">
          <h2>Carrito de compras</h2>
          <div className="row">
            <div className="col-md-8">
              {cartItems.map((item) => (
                <div className="cart-item row" key={item.title}>
                  <div className="col-3">
                    <img src={item.image} alt={item.title} className="img-thumbnail" />
                  </div>
                  <div className="col-9">
                    <h3>{item.title}</h3>
                    {item.color ? <p>Color: {item.color}</p> : null}
                    {item.details ? <p>{item.details}</p> : null}
                    <p className="price">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-4">
              <section className="summary mt-3">
                <h2>Resumen de compra</h2>
                <ul>
                  {cartItems.map((item) => (
                    <li key={`summary-${item.title}`}>{item.title}</li>
                  ))}
                </ul>
                <p className="total-price">$880</p>
                <button className="btn btn-primary btn-block">Realizar compra</button>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cart;

