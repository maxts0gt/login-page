import FormInput from "./FormInput";
import { StyledLink } from "../common";
import { ReactComponent as Logo } from "../../assets/svg/kidsloop_min_logo.svg";
import { routes } from "../../constants";
import { Loader } from "../common";
import styles from "./Form.module.css";
import { useState } from "react";
import { useAuth } from "../../contexts/useAuth";
import { useLanguage } from "../../contexts/useLanguage";

const Form = () => {
  const { content } = useLanguage();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { loading, login, auth } = useAuth();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitting...");
    await login(formData);
  };

  if (loading) return <Loader />;
  if (auth) {
    console.log(`Welcome, ${auth?.name}!`);
    return (
      <h1 className={styles.welcomeMessage}>
        {content?.home}, {auth?.name}!
      </h1>
    );
  }
  return (
    <form className={styles.formCard} onSubmit={handleSubmit}>
      <Logo height={80} />
      <h1 className={styles.formTitle}>{content?.signIn}</h1>
      {content?.inputProps.map((loginInput) => (
        <FormInput
          key={loginInput.id}
          {...loginInput}
          value={formData[loginInput.name]}
          onChange={handleChange}
        />
      ))}
      <div className={styles.buttonContainer}>
        <StyledLink route={routes.forgotPassword}>
          {content?.forgotPassword}
        </StyledLink>
        <button type="submit" className={styles.submitButton}>
          {content?.signIn}
        </button>
      </div>
      <StyledLink route={routes.forgotPassword}>
        {content?.createAccount}
      </StyledLink>
    </form>
  );
};

export default Form;
