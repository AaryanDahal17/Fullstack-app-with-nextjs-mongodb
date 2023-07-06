"use client";

import React, { useEffect, useState , useContext} from "react";

import { gettheItems } from "../dbinteraction";

import { MyContext } from "../MyContext";


const TestPage = () => {


const {isFetched, setIsFetched} = useContext(MyContext)

useEffect(()=>{
    
    console.log("hmm it is " , isFetched)
    setIsFetched(true)

},[isFetched])





return(

    <div>

        {!isFetched&&<div>Fetching data...</div>}
        {isFetched&&<div>Data fetched.</div>}

    </div>
)




}

// const [isGotten, setIsGotten] = useState(false);
//   useEffect(() => {
//     gettheItems().then((data) => {
//       console.log(data.data);
//       setIsGotten(true);
//     });
//   }, []);

//   return (
//     <>
//       {isGotten && <div>data gotten</div>}
//       {!isGotten && <div>Getting data..</div>}
//     </>
//   );
// };



export default TestPage;
