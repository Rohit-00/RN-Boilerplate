// SavedItemsContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

// Define the type for the context state
interface SavedItemsContextType {
  savedItems: [];
  addItem: (item: any) => void;
}

// Initialize the context with default values
export const BookmarkContext = createContext<SavedItemsContextType>({
  savedItems: [],
  addItem: () => {},
});

// Define the type for the provider props
interface SavedItemsProviderProps {
  children: ReactNode;
}

export const BookmarkContextProvider: React.FC<SavedItemsProviderProps> = ({ children }) => {
  const [savedItems, setSavedItems] = useState<any>([]);

  const addItem = (item: any) => {
    setSavedItems(item);
  };

  return (
    <BookmarkContext.Provider value={{ savedItems, addItem}}>
      {children}
    </BookmarkContext.Provider>
  );
};
