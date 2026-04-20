import React from 'react';
import './navbar.css';
// @ts-ignore
import cart from '@/assets/ui/cart.png';
// @ts-ignore
import menu from '@/assets/ui/menu.png';
// @ts-ignore
import userIcon from '@/assets/ui/user.png';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';
import Button from '@/components/ui/Button';
import { useNavbar } from './useNavbar';
import { categories } from '@/modules/shop/mocks/categories';

interface NavbarProps {
    onSearch?: (term: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
    const {
        isAuthenticated,
        isMenuOpen,
        toggleMenu,
        handleCartClick
    } = useNavbar();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Categories Dropdown Trigger (Hamburger/Menu) */}
                <div className="dropdown-container">
                    <div className="nav-link" role="button" onClick={toggleMenu}>
                        <img
                            src={menu}
                            alt="Categorías"
                            className="nav-menu-icon"
                            onError={(e: any) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '☰'; }}
                        />
                    </div>
                    <div className={`dropdown-menu ${isMenuOpen ? 'show' : ''}`}>
                        {categories.map((cat: string, index: number) => (
                            <a key={index} className="dropdown-item" href="#">{cat}</a>
                        ))}
                    </div>
                </div>

                {/* Search, Cart, User */}
                <ul className="navbar-nav">
                    <li className="nav-search-item">
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

                    {isAuthenticated && (
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={handleCartClick}>
                                <img
                                    src={cart}
                                    alt="Carrito"
                                    className="nav-icon nav-cart-icon"
                                    onError={(e: any) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '🛒'; }}
                                />
                            </a>
                        </li>
                    )}
                    <li className="nav-item">
                        <div className="nav-link">
                            <ThemeSwitcher />
                        </div>
                    </li>
                    {isAuthenticated ? (
                        <li className="nav-item">
                            <Button
                                variant="secondary"
                                className="nav-auth-btn"
                                onClick={() => window.location.href = '/login'}
                            >
                                <img src={userIcon} alt="Logout" className="nav-btn-icon" />
                                <span className="nav-btn-text">Cerrar Sesión</span>
                            </Button>
                        </li>
                    ) : (
                        <li className="nav-item">
                            <Button
                                variant="primary"
                                className="nav-auth-btn"
                                onClick={() => window.location.href = '/login'}
                            >
                                <img src={userIcon} alt="Login" className="nav-btn-icon" />
                                <span className="nav-btn-text">Iniciar Sesión</span>
                            </Button>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
