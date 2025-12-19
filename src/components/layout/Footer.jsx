import './styles/footer.css';
import { stringConstants } from '@/utils/string.constants';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {stringConstants.allRightsReserved}</p>
    </footer>
  );
};

export default Footer;

