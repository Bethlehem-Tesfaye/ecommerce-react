import React from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";
import './Hero.css'
export const Hero = () => {
    const stars = [0, 1, 2, 3, 4]; 
  return (
    <section className="he-wrapper">
        <div className="flexRowCenter padding innerWidth he-container">
                <div className="flexColCenter he-left">
                    <span className="primaryText">the new </span>
                    <span className="primaryText">IPhone 16 pro max</span>
                    <p className="product-description">
        Discover the new iPhone 16 Pro Max with <br/>groundbreaking features and performance.
    </p>
                    <div className="flexRowCenter star">
                    {stars.map((star, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 1 }}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{
                                repeat: Infinity,
                                duration: 1,
                                ease: "easeInOut",
                                delay: index * 0.2, 
                            }}
                            >
                                {index!=4? <FaStar color='FFD700'  size={45}/>: <FaRegStar size={45}/>}
          
                        </motion.div>
                    ))}
                    </div>
                   <button className='button'>Buy Now</button>
                </div>
                <div className="flexRowCenter he-right">
                
                    <div className="phoneImg">
                    <img src="./phone.png" alt="phone"width={300} />
                    <div className=" flexRowCenter price">
                        <span>$2000.00</span>
                    </div>
                    </div>
                    
                </div>
        </div>
    </section>
  )
}
