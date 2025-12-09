import AdminNavbar from '../../components/layout/AdminNavbar';
import '../../styles/productManagementStyle.css';

const products = [
  { image: '/img/producto1.jpg', title: 'Producto 1', description: 'Descripción del Producto 1' },
  { image: '/img/producto2.jpg', title: 'Producto 2', description: 'Descripción del Producto 2' },
  { image: '/img/producto3.jpg', title: 'Producto 3', description: 'Descripción del Producto 3' },
];

const ManageProducts = () => {
  return (
    <div>
      <AdminNavbar />
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-center flex-grow-1">Gestionar Productos</h2>
          <div className="input-group" style={{ maxWidth: 300 }}>
            <input type="text" className="form-control" placeholder="Buscar producto" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                <img src="/img/search.png" alt="Buscar" style={{ height: 20 }} />
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4" key={product.title}>
              <div className="card mb-4 shadow-sm">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <a href="#" className="btn btn-primary">
                    Mostrar Artículo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;

