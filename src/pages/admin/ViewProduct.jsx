import AdminNavbar from '../../components/layout/AdminNavbar';
import '../../styles/productViewStyle.css';

const ViewProduct = () => {
  return (
    <div>
      <AdminNavbar />
      <div className="container mt-5">
        <h2 className="text-center flex-grow-1 mb-4">Visualizar Producto</h2>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <img src="/img/producto1.jpg" className="img-fluid product-image" alt="Producto 1" />
            <div className="product-details mt-4">
              <h3>Nombre del Producto</h3>
              <p>
                <strong>Descripción:</strong> Descripción detallada del producto.
              </p>
              <p>
                <strong>Precio:</strong> $100.00
              </p>
              <p>
                <strong>Categoría:</strong> Artesanías
              </p>
              <p>
                <strong>Disponibilidad:</strong> En stock
              </p>
            </div>
            <div className="mt-4 d-flex justify-content-center">
              <a href="#" className="btn btn-warning mr-2">
                Modificar Producto
              </a>
              <button type="button" className="btn btn-danger mr-2">
                Eliminar Producto
              </button>
              <a href="#" className="btn btn-success">
                Registrar Producto
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;

