"use client";
import { MyContext } from "./MyContext";
import { useState, useContext, useEffect } from "react";
import { addtheitem } from "./dbinteraction";
import { gettheItems } from "./dbinteraction";

function AddItemForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  // const daValues = useContext(MyContext);
  // const { listItems, setListItems, setWarning, setSubmit } = daValues;
  const { theItems, setTheItems, isFetched, setIsFetched } = useContext(MyContext);

  const onSubmitHandler = () => {
    // console.log("button was clickeddd");
    if (!name || !price) {
      alert("Enter full details");
    } else {
      setTheItems((prevItems) => {
        return [...prevItems, { name: name, price: price }];
      });
      addtheitem({ name: name, price: price }).then(data=>console.log(data));
      setName("");
      setPrice("");
    }
  };

  useEffect(() => {
    if (!isFetched) {
      gettheItems().then((data) => {
        setTheItems(data.data);
        setIsFetched(true);
      });
    }
  }, [isFetched]);

  return (
    <div className="container">
      <h2>Add Items</h2>
      <input
        type="text"
        value={name}
        placeholder="Enter food name"
        className="textField"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={price}
        placeholder="Enter price"
        className="textField"
        onChange={(e) => setPrice(e.target.value)}
      />
      <button className="button" onClick={onSubmitHandler}>
        Submit
      </button>
    </div>
  );
}

export default function Home() {
  return <AddItemForm />;
}
