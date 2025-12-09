import PublicNavbar from '../components/layout/PublicNavbar';
import '../styles/Style2.css';

const Profile = () => {
  return (
    <div>
      <PublicNavbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <img src="/img/productoMascota1.jpg" alt="Perfil" className="rounded-circle" style={{ height: 120 }} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Mi Perfil</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="firstName">Nombre:</label>
                    <input type="text" className="form-control" id="firstName" value="Trinnity" readOnly />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" className="form-control" id="email" defaultValue="example@gmail.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Número de Teléfono:</label>
                    <input type="tel" className="form-control" id="phone" defaultValue="123456789" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Dirección:</label>
                    <input type="text" className="form-control" id="address" defaultValue="Dirección cualquiera" />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Guardar Cambios
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

