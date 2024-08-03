import React from "react";
import Logo from "../Images/Logo.png";
import Figure from "react-bootstrap/Figure";

function About() {
  return (
    <div className="body">
      <Figure>
        <Figure.Image height={140} alt="Logo" src={Logo} className="Logo" />{" "}
        {/*bootstrap figures component*/}
        <Figure.Caption className="store-description">
          <br /> <br />
          Welcome to Needle & Thread! <br />
          We're passionate about providing high-quality fashion items that
          inspire and delight. Our mission is to empower women by making them
          confident in what they wear.
          <br /> Whether you're looking for a new dress or the perfect
          accessory, we're here to ensure your shopping experience is enjoyable
          and fulfilling. <br />
          Join us in discovering the perfect blend of style and craftsmanship at
          Needle & Thread.
          <br /> Happy shopping!
        </Figure.Caption>
        <Figure.Caption className="contact">
          <h2 className="contactus">Contact Us!</h2>
          Email : enquiries@needleandthread.com <br />
          Phone : 07396194295 <br />
          Working hours : Mon - Fri 8:00 - 17:00
        </Figure.Caption>
      </Figure>
    </div>
  );
}

export default About;
