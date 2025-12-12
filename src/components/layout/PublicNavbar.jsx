import { categories } from '@/mocks/categories';
import { stringConstants } from '@/utils/string.constants';

const PublicNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#publicNavbar"
        aria-controls="publicNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="dropdown mr-3">
        <button
          className="btn btn-link nav-link dropdown-toggle p-0"
          id="publicNavbarDropdown"
          type="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img src="/img/menu.png" alt="Categorías" style={{ height: 30 }} />
        </button>
        <div className="dropdown-menu" aria-labelledby="publicNavbarDropdown">
          {categories.map((category) => (
            <a key={category} className="dropdown-item" href="#">
              {category}
            </a>
          ))}
        </div>
      </div>

      <a className="navbar-brand d-flex align-items-center" href="#">
        <img
          src="/img/logo_Manos_Mexicanas-removebg-preview.png"
          alt="Logo Manos Mexicanas"
          style={{ height: 50 }}
        />
        <span className="ml-2">{stringConstants.appName}</span>
      </a>

      <div className="collapse navbar-collapse" id="publicNavbar">
        <ul className="navbar-nav ml-auto align-items-center">
          <li className="nav-item">
            <form className="form-inline ml-auto" id="search-form">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Buscar productos..."
                aria-label="Buscar"
              />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                <img src="/img/search.png" alt="Buscar" style={{ height: 20 }} />
              </button>
            </form>
          </li>
          <li className="nav-item ml-3">
            <a className="nav-link" href="#">
              <img src="/img/cart.png" alt="Carrito" style={{ height: 30 }} />
            </a>
          </li>
          <li className="nav-item ml-3">
            <button className="btn btn-primary" type="button">
              Iniciar sesión
            </button>
          </li>
          <li className="nav-item ml-3">
            <a className="nav-link" href="#">
              <img src="/img/usuario.png" alt="Perfil" style={{ height: 32 }} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default PublicNavbar;

