import AdminNavbar from '../../components/layout/AdminNavbar';
import '../../styles/adminStyle.css';

const adminOptions = [
  { icon: '/img/producto.png', label: 'Gestionar pedidos', href: '#' },
  { icon: '/img/avatar.png', label: 'Gestionar usuarios', href: '#' },
  { icon: '/img/articulo.png', label: 'Gestionar productos', href: '#' },
];

const AdminHome = () => {
  return (
    <div>
      <AdminNavbar />
      <div className="container mt-5 text-center">
        <h2>Consultar</h2>
        <div className="row justify-content-center mt-4">
          <div className="col-md-8">
            <ul className="list-group">
              {adminOptions.map((option) => (
                <li
                  key={option.label}
                  className="list-group-item d-flex justify-content-between align-items-center shadow-inner"
                >
                  <div className="d-flex align-items-center">
                    <img src={option.icon} alt={option.label} className="icon" />
                    <span className="ml-3">{option.label}</span>
                  </div>
                  <a href={option.href} className="arrow-link">
                    <img src="/img/flecha-apunta-a-la-derecha.png" alt="Ir" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;

