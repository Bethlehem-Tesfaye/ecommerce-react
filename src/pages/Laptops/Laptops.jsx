import React, { useContext } from "react";
import { GlobalContext } from "../../utils/Context";
import { Link } from "react-router-dom";
import { Header } from "../../Components/Header/Header";

export const Laptops = () => {
  const {
    laptopsProducts,
    count5,
    setCount5,
    disBtn5, 
  } = useContext(GlobalContext);
  const uniqueProducts = laptopsProducts?.length
    ? laptopsProducts.filter(
        (item, index, self) => index === self.findIndex((p) => p.id === item.id)
      )
    : [];

  return (
    <section className="s-wrapper">
      <Header />
      <div className="innerWidth padding flexColStart s-container">
        <div className="flexRowCenter s-products">
          {uniqueProducts && uniqueProducts.length ? (
            [
              ...new Map(
                uniqueProducts.map((item) => [item.id, item])
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
          className={`button ${disBtn5 ? "hidden-btn" : ""}`}
          onClick={() => setCount5(count5 + 1)}
        >
          Explore more
        </button>
      </div>
    </section>
  );
};
