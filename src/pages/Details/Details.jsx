import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { GlobalContext } from "../../utils/Context";
import { Header } from "../../Components/Header/Header";
import { FaStar, FaRegStar, FaHeart } from "react-icons/fa6";
import "./Details.css";
import { GlobalContext } from "../../utils/Context";

export const Details = () => {
  const {
    productDetails,
    setProductDetails,
    favList,
    setFavList,
    cartList,
    setCartLIst,
    cartCount, 
    setCartCount
  } = useContext(GlobalContext);

  const { id } = useParams();
  const star = [0, 1, 2, 3, 4];
  const [rate, setRate] = useState(0);
  const [frontImage, setFrontImage] = useState(null);

  useEffect(() => {
    async function handleDetails() {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();

      console.log(data);
      if (data) {
        setProductDetails(data);
        setRate(Math.floor(data.rating));
      }
    }
    handleDetails();
  }, [id]);
  // console.log(productDetails);

  let cpyFav = [...favList];
  const handleFav = () => {
    if (!productDetails) return;
    if (cpyFav.findIndex((item) => item.id === productDetails.id) == -1) {
      cpyFav.push(productDetails);
    } else {
      cpyFav.splice(
        cpyFav.findIndex((item) => item.id === productDetails.id),1);
    }
    setFavList(cpyFav);
  };
  console.log(favList);
  let cpyCart = [...cartList];
  
  const handleCart =()=>{
    if(!productDetails) return;
    let index = cpyCart.findIndex((item)=>item.id===productDetails.id);
    if(index ===-1){
        cpyCart.push({...productDetails, quantity:1});
        setCartCount(cartCount+1);
    }else{
        let existingProduct = cpyCart[index];
        if(existingProduct.quantity<productDetails.stock){
            existingProduct.quantity+=1;
            setCartCount(cartCount+1);
        }else{
            alert("prpoduct out of stock!");
        } 
    }
    setCartLIst(cpyCart);
  }
  console.log("cartlist ", cartList);
  console.log("cartCount", cartCount);
  

  return (
    <section className="d-wrapper">
      <Header />
      <div className="innerWidth padding flexColStart d-container">
        {!productDetails ? (
          <p>loading...</p>
        ) : (
          <>
            <div className="flexRowStart d-top">
              <div className="flexRowStart">
              <div className="flexColStart three-images">
                {productDetails && productDetails.images
                  ? productDetails.images.map((item, i) => {
                      return (
                        <div className="images-box" key={i}>
                          <img
                            src={item}
                            alt=""
                            width={100}
                            onClick={() => {
                              setFrontImage(item);
                            }}
                          />
                        </div>
                      );
                    })
                  : null}
              </div>
              <div className={productDetails.images.length<=3?"main-image":"main-image2"}>
                <img
                  src={frontImage ? frontImage : productDetails.thumbnail}
                  alt="image"
                />
                <FaHeart
                  className={productDetails.images.length<=3?"heart":"heart2"}
                  size={40}
                  color={
                    cpyFav.findIndex(
                      (item) => item.id === productDetails.id
                    ) !== -1
                      ? "red"
                      : "white"
                  }
                  onClick={() => handleFav()}
                />
              </div>
              </div>
              <div className="flexColStart productDes">
                <span className="pro-title flexRowCenter">
                  {productDetails.title}{" "}
                </span>
                <span className="pro-price">${productDetails.price}</span>
                <div className="pro-stars">
                  {star.map((item, index) =>
                    index < rate ? (
                      <FaStar key={index} color="FFD700" size={30} />
                    ) : (
                      <FaRegStar key={index} size={30} />
                    )
                  )}
                </div>
                <div className="box-des">
                  <p className="pro-description">
                    {productDetails.description}
                  </p>
                </div>
                <span className="pro-category">
                  Category: {productDetails.category}
                </span>
              </div>
            </div>
            <div className=" flexColStart d-bottom">
              {/*<span>select size</span>
               <div className="flexRowCenter p-size">
                <div className="flexRowCenter s">S</div>
                <div className="flexRowCenter m">M</div>
                <div className="flexRowCenter l">L</div>
                <div className="flexRowCenter xl">XL</div>
                <div className="flexRowCenter xxl">XXL</div>
              </div> */}
              <div className="flexRowCenter">
                <button className="button" onClick={()=>handleCart()}>add to cart</button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
