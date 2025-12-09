import { useState } from 'react';
import PublicNavbar from '../components/layout/PublicNavbar';
import '../styles/Style.css';

const thumbnails = ['/img/productoJoyeria1.jpg', '/img/productoRopa1.jpg', '/img/productoPeluche1.jpg'];

const ProductDetail = () => {
  const [currentImage, setCurrentImage] = useState('/img/productoRopa1.jpg');

  return (
    <div>
      <PublicNavbar />
      <main className="container mt-5">
        <div className="row product-page">
          <div className="col-md-6 product-images">
            <div className="main-image">
              <img id="currentImage" src={currentImage} className="img-fluid" alt="Producto principal" />
            </div>
            <div className="thumbnail-images mt-3 d-flex justify-content-center">
              {thumbnails.map((image) => (
                <img
                  key={image}
                  src={image}
                  className="img-thumbnail thumbnail"
                  alt={image}
                  onClick={() => setCurrentImage(image)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </div>
          </div>
          <div className="col-md-6 product-details">
            <h2>Top tirantes de mujer Crochet</h2>
            <p className="product-description">
              Top tirantes de mujer hecho a mano en crochet. Disponible en varios colores y tallas.
            </p>
            <p className="product-price">$230</p>
            <div className="product-options">
              <p>Color: Azul</p>
              <p>Tallas: S, M</p>
            </div>
            <div className="purchase-options">
              <button className="btn btn-primary mr-2">Comprar ahora</button>
              <button className="btn btn-secondary">Agregar al carrito</button>
            </div>
            <div className="additional-info mt-3">
              <p>Envío gratis a todo el país</p>
              <p>Stock disponible: 50 unidades</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;

