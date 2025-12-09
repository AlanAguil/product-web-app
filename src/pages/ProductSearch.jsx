import PublicNavbar from '../components/layout/PublicNavbar';
import '../styles/busquedaPro.css';

const searchProducts = [
  {
    image: '/img/productoRopa1.jpg',
    title: 'Top tirantes de mujer Crochet',
    price: '$230',
    color: 'Azul',
    size: 'S, M',
  },
  {
    image: '/img/productoRopa1.jpg',
    title: 'Top tirantes de mujer Crochet',
    price: '$230',
    color: 'Azul',
    size: 'S, M',
  },
  {
    image: '/img/productoRopa1.jpg',
    title: 'Top tirantes de mujer Crochet',
    price: '$230',
    color: 'Azul',
    size: 'S, M',
  },
  {
    image: '/img/productoRopa1.jpg',
    title: 'Top tirantes de mujer Crochet',
    price: '$230',
    color: 'Azul',
    size: 'S, M',
  },
];

const ProductSearch = () => {
  return (
    <div>
      <PublicNavbar />
      <main className="container mt-5">
        <h2>Productos de la Categoría: Ropa</h2>
        <div id="categoryCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card-deck">
                {searchProducts.map((product, index) => (
                  <div className="card" key={`${product.title}-${index}`}>
                    <img src={product.image} className="card-img-top" alt={product.title} />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.price}</p>
                      <p className="card-text">Color: {product.color}</p>
                      <p className="card-text">Talla: {product.size}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#categoryCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Anterior</span>
          </a>
          <a className="carousel-control-next" href="#categoryCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Siguiente</span>
          </a>
        </div>
      </main>
    </div>
  );
};

export default ProductSearch;

