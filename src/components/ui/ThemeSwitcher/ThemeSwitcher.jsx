import './theme-switcher.css';
import { useThemeSwitcher } from './useThemeSwitcher';

export function ThemeSwitcher() {
  const { toggleTheme, icon, label, next } = useThemeSwitcher();

  return (
    <div>
      <button
        className="theme-toggle-btn"
        onClick={toggleTheme}
        aria-label={`Tema actual: ${label}. Clic para ${next}`}
        title={`Actual: ${label}. ${next}`}
      >
        <img src={icon} alt={label} className="theme-icon" />
      </button>
    </div>
  );
}

export default ThemeSwitcher;
