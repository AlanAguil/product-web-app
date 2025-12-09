import PublicNavbar from '../components/layout/PublicNavbar';
import ProductCard from '../components/common/ProductCard';
import '../styles/Style.css';

const featuredImages = ['/img/Imagen1.jpeg', '/img/Imagen2.jpeg', '/img/Imagen3.jpeg'];

const homeProducts = [
  { image: '/img/producto1.jpg', title: 'Producto 1', description: 'Pequeña descripción del producto 1.', price: '$100.00' },
  { image: '/img/producto2.jpg', title: 'Producto 2', description: 'Pequeña descripción del producto 2.', price: '$150.00' },
  { image: '/img/producto3.jpg', title: 'Producto 3', description: 'Pequeña descripción del producto 3.', price: '$200.00' },
  { image: '/img/productoJoyeria1.jpg', title: 'Producto 4', description: 'Pequeña descripción del producto 4.', price: '$250.00' },
  { image: '/img/productoMascota1.jpg', title: 'Producto 5', description: 'Pequeña descripción del producto 5.', price: '$300.00' },
  { image: '/img/productoPeluche1.jpg', title: 'Producto 6', description: 'Pequeña descripción del producto 6.', price: '$350.00' },
  { image: '/img/producto7.jpg', title: 'Producto 7', description: 'Pequeña descripción del producto 7.', price: '$400.00' },
  { image: '/img/producto8.jpg', title: 'Producto 8', description: 'Pequeña descripción del producto 8.', price: '$450.00' },
  { image: '/img/producto9.jpg', title: 'Producto 9', description: 'Pequeña descripción del producto 9.', price: '$500.00' },
];

const Home = () => {
  return (
    <div>
      <PublicNavbar />

      <div id="homeProductCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {featuredImages.map((_, index) => (
            <li
              key={index}
              data-target="#homeProductCarousel"
              data-slide-to={index}
              className={index === 0 ? 'active' : ''}
            />
          ))}
        </ol>
        <div className="carousel-inner">
          {featuredImages.map((image, index) => (
            <div key={image} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={image} className="d-block w-100" alt={`Producto ${index + 1}`} />
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#homeProductCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Anterior</span>
        </a>
        <a className="carousel-control-next" href="#homeProductCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Siguiente</span>
        </a>
      </div>

      <div className="container mt-5">
        <div className="row">
          {homeProducts.map((product) => (
            <div className="col-md-4 mb-4" key={product.title}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

