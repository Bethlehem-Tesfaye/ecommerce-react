import React, { useContext } from 'react'
import { FaCartShopping , FaRegHeart, FaCircleUser, FaCaretDown } from 'react-icons/fa6'
import './Header.css'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../utils/Context'
export const Header = () => {
    const {cartCount}=useContext(GlobalContext);
  return (
    <section className="hd-wrapper">
        <div className="padding  hd-container">
        <div className="flexRowCenter top">
            <div className='flexRowCenter' style={{gap:0}}><span>English</span><FaCaretDown/></div>
            <span>Log In</span>
        </div>
        <div className="flexRowCenter menu">
            <img src="/logo.png" alt="logo" width={100} />
            <Link to="/"><span>Home</span></Link>
            <Link to="/shop"><span>Shop</span></Link>
            <span>About</span>
            <span>Contact Us</span>
            <div className="flexRowCenter rightMenu">
            <Link to="/cart"><div className=" flexRowCenter cart">
                    <FaCartShopping  className ="cart-icon" size={20}/>
                    <span>{cartCount}</span>
                </div>
                </Link>  
                <Link to="/favorite" className='link-heart' ><FaRegHeart className="heart" size={22}style={{margin:"auto"}} /></Link>
                <FaCircleUser className='account' size={22} color='#88959F'/>

            </div>
        </div>
        </div>
        
    </section>
  )
}
