// import { StyledLink } from "../common";
import { useState } from "react";
import styles from "./Dropdown.module.css";
import { ReactComponent as DownArrow } from "../../assets/svg/downArrow.svg";
import { themes } from "../../constants";
import { useTheme } from "../../contexts/useTheme";
import { useLanguage } from "../../contexts/useLanguage";

const Dropdown = () => {
  const { content, changeLanguage } = useLanguage();
  const { theme, LIGHT } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(content?.selectLanguage);
  const arrowColor =
    theme === LIGHT ? themes.light.secondary : themes.dark.secondary;

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value) => {
    setSelected(value);
    const language = (value === "English" ? value : "French").toLowerCase();
    changeLanguage(language);
    toggleOpen();
  };

  return (
    <figure className={styles.dropdown}>
      <figcaption className={styles.dropdownCaption} onClick={toggleOpen}>
        {selected}{" "}
        <DownArrow
          width={15}
          height={15}
          fill={arrowColor}
          style={{ paddingTop: "5px" }}
        />
      </figcaption>
      {isOpen && (
        <ul className={styles.dropdownContent} id="dropdown" name="dropdown">
          <li
            className={styles.dropdownItem}
            onClick={() => handleSelect(content?.english)}
          >
            {content?.english}
          </li>
          <li
            className={styles.dropdownItem}
            onClick={() => handleSelect(content?.french)}
          >
            {content?.french}
          </li>
        </ul>
      )}
    </figure>
  );
};

export default Dropdown;
