import styles from "./StyledLink.module.css";
import { Link } from "react-router-dom";

const StyledLink = ({ route, children }) => {
  return (
    <Link to={route} className={styles.link}>
      {children}
    </Link>
  );
};

export default StyledLink;
