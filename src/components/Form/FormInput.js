import { useState } from "react";
import styles from "./FormInput.module.css";

const Input = (props) => {
  const { errorMessage, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocused = () => {
    setFocused(true);
  };
  return (
    <>
      <input
        {...inputProps}
        className={styles.formInput}
        onBlur={handleFocused}
        focused={focused.toString()}
      />
      <span className={styles.error}>{errorMessage}</span>
    </>
  );
};

export default Input;
