import { useLanguage } from "../contexts/useLanguage";

const Help = () => {
  const { content } = useLanguage();
  return (
    <main className="page">
      <h1 className="page-title">{content?.help}</h1>
      <p className="page-paragraph">{content?.helpText}</p>
    </main>
  );
};

export default Help;
