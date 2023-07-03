"use client"

import React,{useEffect, useState,useContext} from 'react'
import { MyContext } from '../MyContext';
import FoodListt from '../components/foodListt';




const Foodlist = async () => {

  const {theItems,setTheItems} = useContext(MyContext)




  // useEffect(()=>{
  //   gettheItems().then((data)=>{
  //     setTheData(data)
  //     // theData = [...data.data]
  //     console.log(theData)
  //   })
  // },[theData])
  
  return (
    <>
    <FoodListt/>
    {/* <div>Foodlist</div>
    {theItems.map((item,index)=>{
      return <div key={index}>{item.name} & {item.price}</div>
    })} */}
    </>
    
  )
}

export default Foodlist