import Button from '@/components/ui/Button';
import { categories } from '@/mocks/categories';
import { stringConstants } from '@/utils/string.constants';
import '../../styles/layout/navbar.css';
import logo from '@/assets/png/manos.mexicanas.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Categories Dropdown Trigger (Hamburger/Menu) */}
                <div className="dropdown-container">
                    <div className="nav-link" role="button">
                        <img
                            src="/img/menu.png"
                            alt="Categorías"
                            style={{ height: '30px' }}
                            onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '☰'; }}
                        />
                    </div>
                    <div className="dropdown-menu">
                        {categories.map((cat, index) => (
                            <a key={index} className="dropdown-item" href="#">{cat}</a>
                        ))}
                    </div>
                </div>

                {/* Brand Logo & Name */}
                <a className="navbar-brand" href="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className="navbar-logo"
                        onError={(e) => { e.target.style.display = 'none'; }} // Fallback logic
                    />
                    <span>{stringConstants.appName}</span>
                </a>

                {/* Search, Cart, User */}
                <ul className="navbar-nav">
                    <li>
                        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                            <input
                                className="search-input"
                                type="search"
                                placeholder="Buscar productos..."
                                aria-label="Search"
                            />
                            <Button variant="outline-success" type="submit" className="nav-search-btn">
                                <span role="img" aria-label="search">🔍</span>
                            </Button>
                        </form>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/cart">
                            <img
                                src="/img/cart.png"
                                alt="Carrito"
                                className="nav-icon"
                                style={{ height: '30px' }}
                                onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '🛒'; }}
                            />
                        </a>
                    </li>

                    <li className="nav-item">
                        <Button
                            variant="primary"
                            className="nav-auth-btn"
                            onClick={() => window.location.href = '/login'}
                            style={{ marginLeft: '0.5rem' }}
                        >
                            Iniciar Sesión
                        </Button>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/profile">
                            <img
                                src="/img/usuario.png"
                                alt="Perfil"
                                className="nav-icon"
                                style={{ height: '32px' }}
                                onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '👤'; }}
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
