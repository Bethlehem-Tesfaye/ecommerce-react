import React, { useContext } from "react";
import "./Clothes.css";
import { Header } from "../../Components/Header/Header";
import { GlobalContext } from "../../utils/Context";
import { Link } from "react-router-dom";
import "./Clothes.css";

export const Clothes = () => {
  const {
    count2,
    setCount2,
    clothProducts,
    setClothProducts,
    disBtn2,
    setDisBtn2,
    gender,
    setGender,
  } = useContext(GlobalContext);
  const uniqeCLothes = clothProducts.length
    ? clothProducts.filter(
        (item, index, self) => index === self.findIndex((p) => p.id === item.id)
      )
    : [];
  console.log(uniqeCLothes);

  return (
    <section className="cloth-wraper">
      <Header />
      <div className="flexRowCenter innerWidth padding cloth-container">
        {/* <div className="flexRowCenter cloth-top">
          <div className="flexColCenter top-left">
            <span className="SecondaryText seasonal-sale">Seasonal Sale</span>
            <span className="primaryText">Women's fashion</span>
            <span className="SecondaryText discount">30-70% Off</span>
            <button className="button">shop now</button>
          </div>
          <div className="top-right">
            <div className="cloth-image">
              <img src="/women-clothes.png" alt="clothimage" width={300} />
            </div>
          </div>
        </div> */}

        <div className="flexColCenter cloth-bottom">
          <div className="flexRowCenter women-men">
            <div className="women" onClick={()=>setGender("women")}>
              <span>Women</span>
            </div>
            <div className="men" onClick={()=>setGender("men")}>
              <span>Men</span>
            </div>
          </div>
          <div className="flexRowCenter cloth-list s-products">
            {uniqeCLothes && uniqeCLothes.length ? (
              [
                ...new Map(
                  uniqeCLothes.map((item) => [item.id, item])
                ).values(),
              ].map((item) => (
                <div key={item.id} className="flexColStart productBox">
                  <Link to={`/details/${item.id}`}>
                    <div className="flexRowCenter product-img">
                      <img src={item.thumbnail} alt="image" width={150} />
                    </div>
                    <div className="flexColStart p-spans">
                      <span>{item.title}</span>
                      <span>${item.price}</span>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p>No products!</p>
            )}
          </div>
          <button
            className={`button ${disBtn2 ? "hidden-btn" : ""}`}
            onClick={() => setCount2(count2 + 1)}
          >
            Explore more
          </button>
        </div>
      </div>
    </section>
  );
};
