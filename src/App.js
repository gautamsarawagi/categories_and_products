import React, { useState } from "react";
import { category1, category2 } from "./data/Products";

function App() {
  const [updatedCategory1, setUpdatedCategory1] = useState(category1);
  const [updatedCategory2, setUpdatedCategory2] = useState(category2);
  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);

  const sepratedProducts1 = (item) => {
    let product = category1.find((pr) => pr.name === item.name);
    product.quantity += 1;
    const updatedProducts = category1.map((p) => {
      if (product.name === p.name) return product;
      return p;
    });

    setUpdatedCategory1(updatedProducts);
    setTotal1((prevState) => prevState + 1);
  };

  const sepratedProducts2 = (item) => {
    let product = category2.find((pr) => pr.name === item.name);
    product.quantity += 1;

    const updatedProducts = category2.map((p) => {
      if (product.name === p.name) return product;
      return p;
    });

    setUpdatedCategory2(updatedProducts);
    setTotal2((prevState) => prevState + 1);
  };

  return (
    <>
      <h1 style={{ margin: "5px" }}>
        Total Products Selected : {total1 + total2}{" "}
      </h1>
      <div style={{ margin: "5px" }}>
        <h2 >Category 1 : {total1}</h2>
        {updatedCategory1.map((item, key) => {
          return (
            <div style={{ display: "flex", alignItems: "center" }}>
              <p>{item.name}</p>
              <button
                style={{ margin: "5px" }}
                onClick={() => sepratedProducts1(item)}
              >
                <p>{item.quantity}</p>
              </button>
            </div>
          );
        })}
      </div>

      <br />
      <div style={{ margin: "5px" }}>
        <h2 >Category 2: {total2}</h2>

        {updatedCategory2.map((item, key) => {
          return (
            <div style={{ display: "flex", alignItems: "center" }}>
              <p>{item.name}</p>
              <button
                style={{ margin: "5px" }}
                onClick={() => sepratedProducts2(item)}
              >
                <p>{item.quantity}</p>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
