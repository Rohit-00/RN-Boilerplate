// SavedItemsContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

// Define the type for the context state
interface SavedItemsContextType {
  language: string;
  addLanguage: (item: any) => void;
}

// Initialize the context with default values
export const LanguageContext = createContext<SavedItemsContextType>({
  language: 'English',
  addLanguage: () => {},
});

// Define the type for the provider props
interface SavedItemsProviderProps {
  children: ReactNode;
}

export const LanguageContextProvider: React.FC<SavedItemsProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<any>([]);

  const addLanguage = (item: any) => {
    setLanguage(item);
  };

  return (
    <LanguageContext.Provider value={{language, addLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};
