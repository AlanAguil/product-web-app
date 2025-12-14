import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext();
const STORAGE_KEY = "theme-mode";

function getSystemTheme() {
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        // Validar que sea uno de los modos permitidos
        if (saved === "light" || saved === "dark" || saved === "system") {
            return saved;
        }
        return "system";
    });

    const resolvedTheme = useMemo(() => {
        return mode === "system" ? getSystemTheme() : mode;
    }, [mode]);

    useEffect(() => {
        const root = document.documentElement;

        // aplica tema actual (resolved)
        root.setAttribute("data-theme", resolvedTheme);

        // Si no estamos en modo system, no necesitamos escuchar cambios del sistema
        if (mode !== "system") return;

        // escucha cambios del sistema si estás en "system"
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = () => {
            // Cuando cambia el sistema, actualizamos la clase/atributo
            // Nota: resolvedTheme depende de 'mode' y 'getSystemTheme'. 
            // Para que React detecte el cambio de 'system theme' necesitamos forzar render update
            // O simplemente actualizar el atributo manualmente aquí.
            root.setAttribute("data-theme", getSystemTheme());
        };

        if (mq.addEventListener) {
            mq.addEventListener("change", handler);
        } else {
            // Fallback para navegadores viejos (aunque matchMedia suele soportar addEventListener en navegadores modernos)
            mq.addListener(handler);
        }

        return () => {
            if (mq.removeEventListener) {
                mq.removeEventListener("change", handler);
            } else {
                mq.removeListener(handler);
            }
        };
    }, [mode, resolvedTheme]);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, mode);
    }, [mode]);

    // Value del contexto
    const value = {
        mode,
        setMode,
        resolvedTheme
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
    }
    return context;
};
