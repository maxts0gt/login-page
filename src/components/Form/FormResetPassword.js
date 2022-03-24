import FormInput from "./FormInput";
import { ReactComponent as Logo } from "../../assets/svg/kidsloop_min_logo.svg";
import { Loader } from "../common";
import styles from "./Form.module.css";
import { useState } from "react";
import { useLanguage } from "../../contexts/useLanguage";

const FormResetPassword = () => {
  const { content } = useLanguage();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const emailProps = content?.inputProps.filter(
    (prop) => prop.name === "email"
  );

  const handleChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSent(true);
    }, 2000);
    e.preventDefault();
    console.log("sending...");
  };

  if (loading) return <Loader />;
  if (isSent) {
    console.log(`${content?.emailSentTitle} ${email}!`);
    return (
      <div className={styles.submittedMessageContainer}>
        <h1 className={styles.sentResetEmail}>
          {content?.emailSentTitle}
          <span className={styles.email}>{email}</span>!
        </h1>
        <p>{content?.emailSentText}</p>
      </div>
    );
  }
  return (
    <form className={styles.formCard} onSubmit={handleSubmit}>
      <Logo height={80} />
      <h1 className={styles.resetFormTitle}>{content?.resetPassword}</h1>
      <p>{content?.resetPasswordText}</p>
      {emailProps.map((prop) => (
        <FormInput
          key={prop.id}
          {...prop}
          value={email}
          onChange={handleChange}
        />
      ))}

      <button type="submit" className={styles.submitButton}>
        {content?.resetPassword}
      </button>
    </form>
  );
};

export default FormResetPassword;
