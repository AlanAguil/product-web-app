import menu from '@/assets/png/menu.png';
import cart from '@/assets/png/cart.png';
import { useAuth } from '@/contexts/AuthContext';
import { categories } from '@/mocks/categories';
import { useNavigate } from 'react-router-dom';
import '../../styles/layout/navbar.css';
import Button from '../ui/Button';
import ThemeSwitcher from '../ui/ThemeSwitcher';

const Navbar = ({ onSearch }) => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    // Navbar ya no necesita acceder al tema directamente, lo hace el Switcher

    const handleCartClick = (e) => {
        e.preventDefault();
        if (!isAuthenticated) {
            alert("Debes de iniciar sesión para ver tu carrito");
        } else {
            navigate('/cart');
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Categories Dropdown Trigger (Hamburger/Menu) */}
                <div className="dropdown-container">
                    <div className="nav-link" role="button">
                        <img
                            src={menu}
                            alt="Categorías"
                            style={{ height: '50%' }}
                            onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '☰'; }}
                        />
                    </div>
                    <div className="dropdown-menu">
                        {categories.map((cat, index) => (
                            <a key={index} className="dropdown-item" href="#">{cat}</a>
                        ))}
                    </div>
                </div>

                {/* Search, Cart, User */}
                <ul className="navbar-nav">
                    <li>
                        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                            <input
                                className="search-input"
                                type="search"
                                placeholder="Buscar productos..."
                                aria-label="Search"
                                onChange={(e) => onSearch && onSearch(e.target.value)}
                            />
                        </form>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={handleCartClick}>
                            <img
                                src={cart}
                                alt="Carrito"
                                className="nav-icon"
                                style={{ height: '60%' }}
                                onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '🛒'; }}
                            />
                        </a>
                    </li>
                    <li className="nav-item">
                        <ThemeSwitcher />
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
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
