import React from 'react'
import './Footer.css'
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
export const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="flexColCenter innerWidth padding f-container">
            <div className="text">
                <p>Shop with Free Shipping on all orders over $50!</p>
            </div>
            <a href="mailto:bettyxbooksx@gmail.com"><button className="button">Contact Us</button></a>
            <div className="flexRowCenter socials">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={40} color='454a4d'/>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={40} color='454a4d'/>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={40}  color='454a4d'/>
                </a> 
            </div>
        </div>
    </section>
  )
}
