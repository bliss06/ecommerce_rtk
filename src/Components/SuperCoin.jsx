import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const SuperCoin = () => {
  const [superCoin, setSuperCoin] = useState(0);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    const newSuperCoins = Math.floor(totalAmount / 100) * 10;
    setSuperCoin(newSuperCoins);
  }, [totalAmount]);
  return (
    <div className="super-coins" style={{ textAlign: "center" }}>
      <h2 className="super-coins-title">Super Coins</h2>
      <p className="super-coins-info">
        You will earn {superCoin} super coins with this purchase.
      </p>
    </div>
  );
};

export default SuperCoin;
