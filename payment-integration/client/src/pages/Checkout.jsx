import React from 'react'


import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";

function Checkout() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setItem(data.map((item) => ({ ...item, quantity: 1 })));
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const payNow = async () => {
    const stripe = await loadStripe(
      process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
    );

    try {
      const response = await axios.post("http://localhost:3000/api/v1/checkout", {
        products: item,
      });

      const result = await stripe.redirectToCheckout({
        sessionId: response.data.id,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const increaseQuantity = (index) => {
    item[index].quantity += 1;
    setItem([...item]);
  };

  const decreaseQuantity = (index) => {
    if (item[index].quantity > 1) {
      item[index].quantity -= 1;
      setItem([...item]);
    }
  };

  const deleteItem = (index) => {
    const updatedItems = item.filter((_, i) => i !== index);
    setItem(updatedItems);
  };

  return (
    <>
      <h1>Checkout</h1>
      <div>
        {item.map((item, index) => {
          return (
            <div
              style={{
                border: "1px solid black",
                borderRadius: "20px",
                padding: "20px",
                margin: "10px",
              }}
              key={item.id}
            >
              <p>Name: {item.title}</p>
              <button onClick={() => decreaseQuantity(index)}>-</button>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => increaseQuantity(index)}>+</button>
              <p>Price: ${item.price * item.quantity}</p>
              <button onClick={() => deleteItem(index)}>Delete</button>
            </div>
          );
        })}

        <div
          style={{
            textAlign: "center",
            margin: "50px",
          }}
        >
          <button onClick={payNow}>Pay Now</button>
        </div>
      </div>
    </>
  );
}

export default Checkout