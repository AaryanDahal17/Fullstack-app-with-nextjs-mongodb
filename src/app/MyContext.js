"use client"

import { createContext, useEffect, useState } from 'react';

import { gettheItems } from './dbinteraction';

export const MyContext = createContext();


export const MyContextProvider = ({ children }) => {

  
  // const [theItems, setTheItems] = useState(thesetofItems);

  const [theItems, setTheItems] = useState([]);

  // setTheItems(thesetofItems)
  
  useEffect(()=>{

    gettheItems().then((data)=>{
      setTheItems(data.data)
  })
  },[])
    


  return (
    <MyContext.Provider value={{ theItems, setTheItems }}>
      {children}
    </MyContext.Provider>
  );
};
