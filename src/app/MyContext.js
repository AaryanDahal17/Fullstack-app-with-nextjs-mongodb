"use client"

import { createContext, useEffect, useState } from 'react';
import { gettheItems } from './dbinteraction';

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [theItems, setTheItems] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  // useEffect(()=>{

  //   if (!isFetched){
  //     gettheItems().then((data)=>{
  //       setTheItems(data.data)
  //       setIsFetched(true)
  //     })
  //     console.log("Called the functionn")
  // }
  // },[isFetched])

  return (
    <MyContext.Provider value={{ theItems, setTheItems, isFetched, setIsFetched }}>
      {children}
    </MyContext.Provider>
  );
};


