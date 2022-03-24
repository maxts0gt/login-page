import { useLanguage } from "../contexts/useLanguage";
const Privacy = () => {
  const { content } = useLanguage();
  return (
    <main className="page">
      <h1 className="page-title">{content?.privacy}</h1>
      <p className="page-paragraph">{content?.privacyText}</p>
    </main>
  );
};

export default Privacy;
