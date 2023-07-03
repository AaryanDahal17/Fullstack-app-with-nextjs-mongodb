"use client"

import { createContext, useEffect, useState } from 'react';

import { gettheItems } from './dbinteraction';

// Create the context
export const MyContext = createContext();





// Create a provider component

export const MyContextProvider = ({ children }) => {

  
  // const [theItems, setTheItems] = useState(thesetofItems);

  const [theItems, setTheItems] = useState([]);

  // setTheItems(thesetofItems)
  
  useEffect(()=>{

    gettheItems().then((data)=>{
      setTheItems(data.data)
  })
  },[])
    


  // Define any functions or state values you want to make available through the context

  return (
    <MyContext.Provider value={{ theItems, setTheItems }}>
      {children}
    </MyContext.Provider>
  );
};
