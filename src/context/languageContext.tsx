import { createContext, useContext, useState } from 'react';

// Definir el tipado del contexto
interface LanguageContexType {
  language: string;
  handleLanguage: (lg: string) => void;
}

// Crear el contexto
export const LanguageContext = createContext<LanguageContexType | undefined>(undefined);

// Crear un proveedor del contexto
interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>('en');

  const handleLanguage = (lg: string) => {
    setLanguage(lg);
    lg === "esp" && document.documentElement.setAttribute('lang', 'es');
    lg === "eng" && document.documentElement.setAttribute('lang', 'en');
  };

  const data = {language, handleLanguage}

  return (
    <LanguageContext.Provider value={data}>
      {children}
    </LanguageContext.Provider>
  );
};

// Crear un hook para acceder al contexto
// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = (): LanguageContexType => {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
};

export default LanguageContext