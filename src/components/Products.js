import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import product1Image from "../Images/product1.png";
import product2Image from "../Images/product2.png";
import product3Image from "../Images/product3.png";
import product4Image from "../Images/product4.png";
import product5Image from "../Images/product5.png";
import product6Image from "../Images/product6.png";
import product7Image from "../Images/product7.png";
import product8Image from "../Images/product8.png";
import product9Image from "../Images/product9.png";

function Products({ handleBuy }) {
  const products = [
    {
      productNo: 1,
      productName: "HIGH NECK SOLID KNITTED LONG SLEEVE CROP SWEATER",
      Description1: "Stretch: High",
      Description2: "Material: Knit Fabric",
      Price: "£22.00",
      Image: product1Image,
    },
    {
      productNo: 2,
      productName: "SOLID JERSEY HIGH WAIST RUFFLE WIDE LEG TROUSERS",
      Description1: "Stretch: High",
      Description2: "Material: Jersey",
      Price: "£12.90",
      Image: product2Image,
    },
    {
      productNo: 3,
      productName: "V-NECK SOLID SPLIT MIDI DRESS",
      Description1: "Stretch: Slight",
      Description2: "Material: Woven",
      Price: "£37.90",
      Image: product3Image,
    },
    {
      productNo: 4,
      productName: "DRAWSTRING POCKET WIDE LEG CARGO SWEATPANTS",
      Description1: "Stretch: Medium",
      Description2: "Material: Terry",
      Price: "£28.90",
      Image: product4Image,
    },
    {
      productNo: 5,
      productName: "BOW DECOR SQUARE TOE BALLET MARY JANE FLATS",
      Description1: "Upper Material: Faux Leather",
      Description2: "Lining Material: Faux Leather,Polyester",
      Price: "£18.00",
      Image: product5Image,
    },
    {
      productNo: 6,
      productName: "WINTER WARM SHAWL",
      Description1: "Material: Polyester",
      Description2: "",
      Price: "£15.90",
      Image: product6Image,
    },
    {
      productNo: 7,
      productName: "HIGH RISE KNOTTED POCKET WIDE LEG TROUSERS",
      Description1: "Stretch: Non",
      Description2: "Material: Woven",
      Price: "£25.00",
      Image: product7Image,
    },
    {
      productNo: 8,
      productName: "HIGH WAIST SOLID PLEATED MAXI SKIRT",
      Description1: "Stretch: Non",
      Description2: "Material: Woven",
      Price: "£14.00",
      Image: product8Image,
    },
    {
      productNo: 9,
      productName: "SOLID KNIT POLO ZIPPER CARDIGAN",
      Description1: "Stretch: High",
      Description2: "Material: Knit Fabric",
      Price: "£17.90",
      Image: product9Image,
    },
  ];

  const ProductCard = ({ product, handleBuy }) => {
    const [selectedColor, setSelectedColor] = useState("Color");

    const handleColorSelect = (color) => {
      setSelectedColor(color);
    };
    // product card
    return (
      <Card
        style={{ width: "18rem", margin: "1rem", backgroundColor: "#f7f4ed" }}
      >
        {product.Image && (
          <Card.Img
            variant="top"
            src={product.Image}
            alt={product.productName}
            style={{
              width: "7cm",
              height: "9cm",
              margin: "auto",
              marginTop: "1rem",
            }}
          />
        )}
        <Card.Body>
          <Card.Title>{product.productName}</Card.Title>
          <Card.Text>
            {product.Description1} <br />
            {product.Description2} <br /> <br />
            {product.Price}
          </Card.Text>
          <Button //BUY button
            variant="primary"
            style={{
              borderColor: "black",
              backgroundColor: "#f7f4ed",
              color: "black",
            }}
            onClick={() => handleBuy(product)} //totalPrice shown only after 'BUY' is clicked
          >
            BUY
          </Button>
          <br />
          <br />
          <Dropdown>
            <Dropdown.Toggle //Dropdown for three color options
              variant="success"
              id="dropdown-basic"
              style={{
                backgroundColor: "#f7f4ed",
                color: "black",
                borderColor: "black",
              }}
            >
              {selectedColor}
            </Dropdown.Toggle>{" "}
            {/*Text changes to selected color */}
            <Dropdown.Menu style={{ backgroundColor: "white" }}>
              <Dropdown.Item onClick={() => handleColorSelect("Beige")}>
                Beige
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleColorSelect("Black")}>
                Black
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleColorSelect("Grey")}>
                Grey
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>
    );
  };
  // return product cards to page
  return (
    <div>
      <div
        className="product-list"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.productNo}
            product={product}
            handleBuy={handleBuy}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
