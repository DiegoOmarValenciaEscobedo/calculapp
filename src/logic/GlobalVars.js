import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

  // Global state
  let [globalState, setGlobalState] = useState({
    // Display state
    operation: '',
    result: '',
    // Personalization state
    darkMode: false,
    color: '#FF5732',
    keyboardColor: '#FFFFFF',
    dysplayColor: '#d9d9d9',
    fontColor: '#000',
    displayFont: 'michroma',
    keyboardFont: 'cabin',
    // Calculator state
    parentesis: false,
    decimalCount: 10,
  });

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
