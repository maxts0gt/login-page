import { useTheme } from "../../contexts/useTheme";
import { ReactComponent as DarkMode } from "../../assets/svg/darkMode.svg";
import { ReactComponent as LightMode } from "../../assets/svg/lightMode.svg";
import { themes } from "../../constants";

const ThemeToggler = () => {
  const { theme, toggleTheme, LIGHT } = useTheme();
  if (theme === LIGHT) {
    return (
      <DarkMode
        width={25}
        height={25}
        onClick={toggleTheme}
        fill={themes.light.secondary}
        style={{ cursor: "pointer" }}
      />
    );
  } else {
    return (
      <LightMode
        width={25}
        height={25}
        onClick={toggleTheme}
        fill={themes.dark.secondary}
        style={{ cursor: "pointer" }}
      />
    );
  }
};

export default ThemeToggler;
