import AdminNavbar from '../../components/layout/AdminNavbar';
import '../../styles/userManagementStyle.css';

const users = [
  {
    name: 'Guadalupe Esmeralda',
    lastName: 'Hernandez De los Monteros',
    email: '20233tn761@qutez.edu.mx',
    phone: '777 515 5155',
    status: 'Alta',
    id: '1280',
    action: 'Bloquear cuenta',
    actionClass: 'btn-outline-danger',
    icon: '/img/boton-x.png',
  },
  {
    name: 'Guadalupe Esmeralda',
    lastName: 'Hernandez De los Monteros',
    email: '20233tn761@qutez.edu.mx',
    phone: '777 515 5155',
    status: 'Alta',
    id: '1280',
    action: 'Bloquear cuenta',
    actionClass: 'btn-outline-danger',
    icon: '/img/boton-x.png',
  },
  {
    name: 'Guadalupe Esmeralda',
    lastName: 'Hernandez De los Monteros',
    email: '20233tn761@qutez.edu.mx',
    phone: '777 515 5155',
    status: 'Alta',
    id: '1280',
    action: 'Desbloquear cuenta',
    actionClass: 'btn-outline-success',
    icon: '/img/verificado.png',
  },
];

const ManageUsers = () => {
  return (
    <div>
      <AdminNavbar />
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-center flex-grow-1">Gestionar usuarios</h2>
          <div className="input-group" style={{ maxWidth: 300 }}>
            <input type="text" className="form-control" placeholder="Buscar usuario" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                <img src="/img/search.png" alt="Buscar" style={{ height: 20 }} />
              </button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-md-10">
            <div className="list-group">
              {users.map((user, index) => (
                <div
                  key={`${user.email}-${index}`}
                  className="list-group-item d-flex justify-content-between align-items-center shadow-inner user-card"
                >
                  <div>
                    <p>
                      <strong>Nombre(s):</strong> {user.name}
                    </p>
                    <p>
                      <strong>Apellidos:</strong> {user.lastName}
                    </p>
                    <p>
                      <strong>Correo electrónico:</strong> {user.email}
                    </p>
                    <p>
                      <strong>Número de teléfono:</strong> {user.phone}
                    </p>
                    <p>
                      <strong>Estado:</strong> {user.status}
                    </p>
                    <p>
                      <strong>Id de usuario:</strong> {user.id}
                    </p>
                  </div>
                  <div>
                    <button className={`btn ${user.actionClass}`}>
                      <img src={user.icon} alt={user.action} className="icon mr-2" />
                      {user.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;

