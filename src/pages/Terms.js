import { useLanguage } from "../contexts/useLanguage";
const Terms = () => {
  const { content } = useLanguage();
  return (
    <main className="page">
      <h1 className="page-title">{content?.terms}</h1>
      <p className="page-paragraph">{content?.termsText}</p>
    </main>
  );
};

export default Terms;
