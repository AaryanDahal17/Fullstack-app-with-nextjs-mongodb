"use client"

import { MyContext } from "../MyContext";
import { useContext,useEffect,useState } from "react";
import { gettheItems } from "../dbinteraction";


const FoodBox = ({ name, price }) => {
  const boxStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
    marginBottom: "15px",
    height: "80px", // Adjust the height as desired
  };

  const nameStyle = {
    marginRight: "10px",
    fontSize: "20px",
    fontFamily: "Arial",
  };

  const priceStyle = {
    fontWeight: "bold",
    color: "grey",
    fontSize: "18px",
    
  };

  return (
    <div style={boxStyle}>
      <div style={nameStyle}>{name}</div>
      <div style={priceStyle}>Rs {price}</div>
    </div>
  );
};




const GrandTotal = ({ price }) => {
  const grandTotalStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    fontWeight: "bold",
    margin: "20px 0",
    position: "fixed",
    bottom : "35px",
    // top : "480px",
    left: '5px',
    right: '5px',
    height: '40px',
    backgroundColor: 'white',
  };

  const priceStyle = {
    color: "green",
    marginLeft: "5px",

  };

  const totalStyle = {
      color: "black",
      fontFamily: "Arial",
     
    };

  return (
    <div style={grandTotalStyle}>
      <div style = {totalStyle}>Total : </div>
      <div style={priceStyle}>Rs {price}</div>
    </div>
  );
};



const FoodListtt = () => {
  
  const { theItems, setTheItems, isFetched, setIsFetched } = useContext(MyContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);


  useEffect(()=>{

    if (!isFetched){
      gettheItems().then((data) => {
        setTheItems(data.data);
        setIsFetched(true);
      });
    }
    else{
      setIsLoaded(true)
    }

  },[isFetched])

  useEffect(() => {
    let daPrice = 0;
    theItems.forEach((item) => {
      daPrice += Number(item.price);
    });
    setTotalPrice(daPrice);
  }, [theItems]);

  return (
    <>
      {!isLoaded && <div>Fetching data...</div>}

      {/* {isLoaded && <div>Data loaded</div>} */}

      {isLoaded&&<div className="allItems" style={{paddingBottom:'100px'}}>
             {theItems.map((item,index) => {
            return <FoodBox name={item.name} price={item.price} key={index} />;
        })}
        </div>
      }

      <GrandTotal price = {totalPrice.toString()}/>

    </>
  );
};



export default FoodListtt;


