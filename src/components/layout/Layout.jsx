import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import '../../styles/Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>&copy; 2025 Manos Mexicanas. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Layout;
