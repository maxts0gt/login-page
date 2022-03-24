import { useState, useLayoutEffect, createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const LOCAL_STORAGE_KEY = "mockPageTheme";
  const LIGHT = "light";
  const DARK = "dark";

  const [theme, setTheme] = useState(LIGHT);
  const [localStorageTheme, setLocalStorageTheme] = useLocalStorage(
    LOCAL_STORAGE_KEY,
    null
  );

  useLayoutEffect(() => {
    if (localStorageTheme) {
      return localStorageTheme === DARK ? setTheme(DARK) : setTheme(LIGHT);
    }
    if (!window.matchMedia) return;
    const darkThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeQuery.matches && setTheme(DARK);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = () => {
    const updatedTheme = theme === LIGHT ? DARK : LIGHT;
    setTheme(updatedTheme);
    setLocalStorageTheme(updatedTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, LIGHT, DARK }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
