import React from "react";
import { useContext } from "react";
// import "./Clothes.css";
import { Header } from "../../Components/Header/Header";
import { GlobalContext } from "../../utils/Context";
import { Link } from "react-router-dom";

export const Accessories = () => {
  const {
    accesariesProduct,
    setAccesariesProduct,
    count3,
    setCount3,
    disBtn3,
    setDisBtn3,
    gender2,
    setGender2,
  } = useContext(GlobalContext);
  const uniqeCLothes = accesariesProduct.length
    ? accesariesProduct.filter(
        (item, index, self) => index === self.findIndex((p) => p.id === item.id)
      )
    : [];
  console.log(uniqeCLothes);

  return (
    <section className="cloth-wraper">
      <Header />
      <div className="flexRowCenter innerWidth padding cloth-container">
         <div className="flexColCenter cloth-bottom">
          <div className="flexRowCenter women-men">
            <div className="women" onClick={() => setGender2("women")}>
              <span>Women</span>
            </div>
            <div className="men" onClick={() => setGender2("men")}>
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
            className={`button ${disBtn3 ? "hidden-btn" : ""}`}
            onClick={() => setCount3(count3 + 1)}
          >
            Explore more
          </button>
        </div>
      </div>
    </section>
  );
};
