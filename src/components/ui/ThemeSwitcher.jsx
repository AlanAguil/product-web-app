import { useTheme } from "../../contexts/ThemeContext";
import { stringConstants } from "../../utils/string.constants";
import moon from '@/assets/png/moon.png';
import sun from '@/assets/png/sun.png';
import system from '@/assets/png/laptop.png';

import '../../styles/ui/theme-switcher.css';

export function ThemeSwitcher() {
  const { mode, setMode } = useTheme();

  // Definir el orden de ciclado: light -> dark -> system -> light
  const toggleTheme = () => {
    if (mode === 'light') setMode('dark');
    else if (mode === 'dark') setMode('system');
    else setMode('light');
  };

  // Obtener etiqueta y emoji actual
  const getCurrentInfo = () => {
    switch (mode) {
        case 'light': return { emoji: '☀️', label: stringConstants.lightMode, next: 'Ir a modo oscuro' };
        case 'dark': return { emoji: '🌙', label: stringConstants.darkMode, next: 'Ir a modo sistema' };
        case 'system': return { emoji: '💻', label: stringConstants.systemMode, next: 'Ir a modo claro' };
        default: return { emoji: '☀️', label: stringConstants.lightMode, next: 'Ir a modo oscuro' };
    }
  };

  const { emoji, label, next } = getCurrentInfo();

  return (
    <div className="theme-switcher-container">
        <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme}
            aria-label={`Tema actual: ${label}. Clic para ${next}`}
            title={`Actual: ${label}. ${next}`}
        >
            {emoji}
        </button>
    </div>
  );
}

export default ThemeSwitcher;
