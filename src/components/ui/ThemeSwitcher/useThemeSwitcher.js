import system from '@/assets/ui/monitor.png';
import moon from '@/assets/ui/moon.png';
import sun from '@/assets/ui/sun.png';
import { useTheme } from "../../../contexts/ThemeContext";
import { stringConstants } from "../../../utils/string.constants";

export const useThemeSwitcher = () => {
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
      case 'light': return { icon: sun, label: stringConstants.lightMode, next: 'Ir a modo oscuro' };
      case 'dark': return { icon: moon, label: stringConstants.darkMode, next: 'Ir a modo sistema' };
      case 'system': return { icon: system, label: stringConstants.systemMode, next: 'Ir a modo claro' };
      default: return { icon: sun, label: stringConstants.lightMode, next: 'Ir a modo oscuro' };
    }
  };

  const { icon, label, next } = getCurrentInfo();

  return {
    toggleTheme,
    icon,
    label,
    next
  };
};
