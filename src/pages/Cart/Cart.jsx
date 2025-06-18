import React, { useContext } from "react"; 
import { Header } from "../../Components/Header/Header";
import "./Cart.css";
import { GlobalContext } from "../../utils/Context";

export default function Cart() {
    const { cartList, setCartLIst, cartCount, setCartCount } = useContext(GlobalContext);
    const handlePlus=(i)=>{
        const updateCartList = [...cartList];
        const newQuantity = cartList[i].quantity+1;
        if(newQuantity>updateCartList[i].stock){
            alert("product out of stock1")
        }else{
            updateCartList[i].quantity = newQuantity;
            setCartLIst(updateCartList);
            setCartCount(cartCount+1);
        }
        
    }
    const handleMinus=(i)=>{
        const updateCartList = [...cartList];
        const newQuantity = cartList[i].quantity-1;
        if(newQuantity<=0){
            handleRemove(i);
            alert("product removed from cart")
        }
        else{
            updateCartList[i].quantity = newQuantity;
            setCartLIst(updateCartList);
            setCartCount(cartCount-1);
        }

    }
  
    const handleRemove=(i)=>{
        const updateCartList = [...cartList];
        setCartCount(cartCount-updateCartList[i].quantity);
        updateCartList.splice(i,1);
        setCartLIst(updateCartList);
        

    }
  return (
    <section className="cart-wraper">
      <Header />
      <div className="flexcolStart innerWidth padding cart-conatiner">
        <div className="flexRowStart cart-summary">
          <div className="cart-product">Product</div>
          <div className="cart-title title">Title</div>
          <div className="cart-price">Price</div>
          <div className="cart-quantity">Quantity</div>
          <div className="cart-total">Total</div>
          <div className="cart-remove">Remove</div>
        </div>
        <hr></hr>
        {cartList.map((item, i) => {
          return (
            <div key={i}>
              <div className="flexRowStart cart-summary">
                <div className="cart-products">
                  <img src={item.thumbnail} alt="image" width={60} />
                </div>
                <div className="cart-title">{item.title}</div>
                <div className="cart-price">${item.price} </div>
                <div className="flexRowCenter cart-quantity">
                  <div className="controller">
                    <span onClick={()=>{handlePlus(i)}}>+ </span>
                  </div>
                  <div>{item.quantity}</div>
                  <div className="controller">
                    <span onClick={()=>handleMinus(i)}>- </span>
                  </div>
                </div>
                <div className="cart-total">${(item.quantity * item.price).toFixed(2)} </div>
                <div className="cart-remove" onClick={()=>handleRemove(i)}> X</div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </section>
  );
}
