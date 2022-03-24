import { useContext, createContext, useState } from "react";
import { languageContent } from "../constants";

const LanguageContext = createContext();
const LANGUAGES = Object.keys(languageContent);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(LANGUAGES[1]);
  const content = language && languageContent[language];
  const changeLanguage = (newLanguage) => {
    if (!LANGUAGES.includes(newLanguage)) return;
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
