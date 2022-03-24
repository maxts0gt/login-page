import { ReactComponent as ErrorIcon } from "../assets/svg/error.svg";
import { themes } from "../constants";
import { useTheme } from "../contexts/useTheme";
import { useLanguage } from "../contexts/useLanguage";

const NotFound = () => {
  const { theme, LIGHT } = useTheme();
  const { content } = useLanguage();
  const iconColor =
    theme && theme === LIGHT ? themes.light.secondary : themes.dark.secondary;
  return (
    <main className="page">
      <h1 className="page-title">{content?.notFound}</h1>
      <ErrorIcon height={250} width={250} fill={iconColor} />
    </main>
  );
};

export default NotFound;
