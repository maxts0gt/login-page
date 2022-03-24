import { useLanguage } from "../contexts/useLanguage";

const Home = () => {
  const { content } = useLanguage();
  return (
    <main className="page">
      <h1 className="page-title">{content.home}</h1>
      <p className="page-paragraph">{content.homeText}</p>
    </main>
  );
};

export default Home;
