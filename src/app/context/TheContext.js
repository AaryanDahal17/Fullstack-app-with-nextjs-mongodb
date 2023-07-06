import { createContext, useContext, useState } from 'react';

const TheContext = createContext();

export function The() {
  const [isOpen, setIsOpen] = useState();

  return (
    <TheContext.Provider value={{ isOpen }}>
      <TheNav />
    </TheContext.Provider>
  );

}