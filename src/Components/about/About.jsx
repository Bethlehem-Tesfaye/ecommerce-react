import React from "react";
import "./About.css";
import { Header } from "../Header/Header";

const About = () => {
  return (
    <>
          <Header/>  
    <div className="innerWidth padding" style={{ backgroundColor: "var(--background)", minHeight: "80vh" }}>
      <h1 className="primaryText flexColCenter" style={{ marginBottom: "30px" }}>
        About Our E-Commerce App
      </h1>

      <p className="" style={{ color: "var(--DarkGray)", fontSize: "18px", lineHeight: "1.6", maxWidth: "700px", margin: "0 auto 30px" }}>
        Welcome to BTrade — your friendly online marketplace where you can find a wide variety of products from fashion to electronics. We aim to provide a smooth and enjoyable shopping experience with fast delivery and secure payments.
      </p>

      <h2 className="SecondaryText" style={{ color: "var(--ShopNow)", fontSize: "28px", marginBottom: "15px" }}>
        Why Choose Us?
      </h2>

      <ul className="SecondaryText" style={{ color: "var(--DarkGray)", maxWidth: "700px", margin: "0 auto 40px", listStyle: "disc", paddingLeft: "20px", fontSize: "16px" }}>
        <li>Wide range of high-quality products</li>
        <li>User-friendly interface for easy browsing</li>
        <li>Secure payment options and privacy protection</li>
        <li>Fast and reliable shipping</li>
        <li>Responsive customer support</li>
      </ul>

      <h2 className="SecondaryText" style={{ color: "var(--ShopNow)", fontSize: "28px", marginBottom: "15px" }}>
        Contact Us
      </h2>

      <p className="" style={{ color: "var(--DarkGray)", maxWidth: "700px", margin: "0 auto 15px", fontSize: "16px" }}>
        Have questions or feedback? Reach out to us anytime:
      </p>

      <ul className="SecondaryText" style={{ color: "var(--DarkGray)", maxWidth: "700px", margin: "0 auto", listStyle: "none", paddingLeft: 0, fontSize: "16px" }}>
        <li><strong>Email:</strong> support@btrade.com</li>
        <li><strong>Phone:</strong> +1 (555) 123-4567</li>
        <li><strong>Address:</strong> 123 Commerce St, Online City</li>
      </ul>
    </div>
    </>
  );
};

export default About;
