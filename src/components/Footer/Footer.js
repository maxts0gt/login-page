import ThemeToggler from "./ThemeToggler";
import { StyledLink } from "../common";
import { routes } from "../../constants";
import styles from "./Footer.module.css";
import Dropdown from "./Dropdown";
import { useLanguage } from "../../contexts/useLanguage";

const Footer = () => {
  const { content } = useLanguage();
  return (
    <footer className={styles.footer}>
      <div className={styles.linkContainer}>
        <ThemeToggler />
        <Dropdown />
      </div>
      <div className={styles.linkContainer}>
        <StyledLink route={routes.help}>{content?.help}</StyledLink>
        <StyledLink route={routes.privacy}>{content?.privacy}</StyledLink>
        <StyledLink route={routes.terms}>{content?.terms}</StyledLink>
      </div>
    </footer>
  );
};

export default Footer;
