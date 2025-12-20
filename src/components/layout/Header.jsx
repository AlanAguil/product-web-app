import { stringConstants } from '@/utils/string.constants';
import './styles/header.css';

const Header = () => {
  return (
    <header>
      <nav className="header-main">
        <div className="logo-container">
          <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="40" height="40" className="book-icon">
              <g fill="none" stroke="#fff" strokeWidth="2">
                <rect x="4" y="4" width="28" height="56" rx="10" ry="10" fill="#fff" />
                <rect x="32" y="4" width="28" height="56" rx="10" ry="10" fill="none" stroke="#fff" strokeWidth="2" />
                <line x1="18" y1="14" x2="46" y2="14" stroke="#fff" />
                <line x1="18" y1="24" x2="46" y2="24" stroke="#fff" />
                <line x1="18" y1="34" x2="46" y2="34" stroke="#fff" />
                <line x1="18" y1="44" x2="46" y2="44" stroke="#fff" />
                <line x1="18" y1="54" x2="46" y2="54" stroke="#fff" />
              </g>
            </svg>
          </div>
          <span className="logo-text">{stringConstants.appName}</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;

