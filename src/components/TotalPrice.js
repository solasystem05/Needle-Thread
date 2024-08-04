import React from "react";

const TotalPrice = ({ totalPrice, isVisible }) => {
  return (
    //box to stay in bottom right
    <div
      style={{
        display: isVisible ? "flex" : "none",
        position: "fixed",
        bottom: "20px",
        right: "10px",
        backgroundColor: "#a4a4a0",
        justifyContent: "center",
        alignItems: "center",
        padding: "5px",
        borderRadius: "5px",
        zIndex: 1000, //overlap
      }}
    >
      <p className="totalbox">Total Price: £{totalPrice.toFixed(2)}</p>
    </div>
  );
};
export default TotalPrice;
