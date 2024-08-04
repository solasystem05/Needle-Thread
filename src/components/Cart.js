import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { addShippingCost } from "../store/actions";

const Cart = () => {
  const dispatch = useDispatch();
  const { purchasedProducts, totalPrice, isTotalPriceVisible, shippingCost } =
    useSelector((state) => state);
  const [selectedShipment, setSelectedShipment] = useState("Select Shipping");

  const handleShipmentSelect = (shipment, cost) => {
    setSelectedShipment(shipment);
    dispatch(addShippingCost(cost));
  };

  const totalWithShipping = totalPrice + (shippingCost || 0);

  return (
    <div className="CartPrice">
      <h1 className="CartTitle">Cart</h1>
      {purchasedProducts.length === 0 ? (
        <p className="CartStatement">No items in the cart.</p>
      ) : (
        <ul className="cartList">
          {purchasedProducts.map((product, index) => (
            <li key={index}>
              {product.name}: <br />
              {product.Price}
            </li>
          ))}
        </ul>
      )}

      <Dropdown className="ShipmentOptions">
        <Dropdown.Toggle //Dropdown for three shipment options
          variant="success"
          id="dropdown-basic"
          style={{
            backgroundColor: "#f7f4ed",
            color: "black",
            borderColor: "black",
          }}
        >
          {selectedShipment}
        </Dropdown.Toggle>{" "}
        {/*Text changes to selected shipment */}
        <Dropdown.Menu style={{ backgroundColor: "white" }}>
          <Dropdown.Item
            onClick={() => handleShipmentSelect("Standard Shipping", 3.99)}
          >
            Standard Shipping - £3.99
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => handleShipmentSelect("Express Shipping", 5.99)}
          >
            Express Shipping - £5.99
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => handleShipmentSelect("Next Day Delivery", 7.99)}
          >
            Next Day Delivery - £7.99
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {isTotalPriceVisible && (
        <h3 className="TotalCart">
          Total Price: £{totalPrice.toFixed(2)} + £
          {(shippingCost || 0).toFixed(2)}
          (shipping) = £{totalWithShipping.toFixed(2)}
        </h3>
      )}
    </div>
  );
};

export default Cart;
