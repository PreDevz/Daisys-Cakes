/* eslint-disable react/prop-types */
/* It's importing the React library. */
import React from "react";

/* It's importing the stripe/react library. */
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

/* loading the Stripe API. */
import { loadStripe } from "@stripe/stripe-js";

// Styles 
import "../sass/components/tipsComp.scss";

/* loading the Stripe API. */
const stripePromise = loadStripe(
  "pk_test_51LxKmeABGjvOJdT1vJsgQxijGf0XZhfuVtr4rBfTr9A7B7JDkMJWPZr615XuHhDr7NY5RS0cwKuAc4oU8bKHp5ZR00vJBFT5nA"
);

/* It's a button that when clicked, opens a Stripe Checkout window */
const TipsButton = ({ itemID, amount }) => {

  const handleClick = async (event) => {
    const stripe = await stripePromise;
    stripe
      .redirectToCheckout({
        lineItems: [{ price: itemID, quantity: 1 }],
        mode: "payment",
        successUrl:
          window.location.protocol + "//bakedwithlove.herokuapp.com/",
        cancelUrl:
          window.location.protocol + "//bakedwithlove.herokuapp.com/",
        submitType: "donate",
      })
      .then(function (result) {
        if (result.error) {
          console.log(error);
        }
      });
  };

  return (
    <div className="tipContainer">
      <h2>Enjoyed our service? Leave a tip! 💕</h2>
      <div className="hello">
      <button className="tipBtn" onClick={handleClick}>Donate {amount}$</button>
      </div>
    </div>
  );
};

export default TipsButton;
