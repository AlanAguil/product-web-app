import AdminNavbar from '../../components/layout/AdminNavbar';
import '../../styles/modifyProductStyle.css';

const EditProduct = () => {
  return (
    <div>
      <AdminNavbar />
      <div className="container mt-5">
        <h2 className="text-center">Modificar Producto</h2>
        <form id="modifyProductForm" className="mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="productName">Nombre</label>
                <input type="text" className="form-control" id="productName" placeholder="Nombre del Producto" />
              </div>
              <div className="form-group">
                <label htmlFor="productCategory">Categoría</label>
                <input type="text" className="form-control" id="productCategory" placeholder="Categoría del Producto" />
              </div>
              <div className="form-group">
                <label htmlFor="productColor">Color</label>
                <input type="text" className="form-control" id="productColor" placeholder="Color del Producto" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="productStock">Cantidad en Stock</label>
                <input type="number" className="form-control" id="productStock" placeholder="Cantidad en Stock" />
              </div>
              <div className="form-group">
                <label htmlFor="productPrice">Precio</label>
                <input type="number" step="0.01" className="form-control" id="productPrice" placeholder="Precio del Producto" />
              </div>
              <div className="form-group">
                <label htmlFor="productImage">Imagen</label>
                <input type="file" className="form-control-file" id="productImage" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="productDescription">Descripción</label>
                <textarea
                  className="form-control"
                  id="productDescription"
                  rows="3"
                  placeholder="Descripción del Producto"
                />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-primary">
              Modificar Producto
            </button>
            <button type="button" className="btn btn-secondary">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;

