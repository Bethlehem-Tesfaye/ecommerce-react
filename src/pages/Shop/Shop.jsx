import React, { useContext } from "react"; 
import { GlobalContext } from "../../utils/Context";
import "./Shop.css";
import { Link } from "react-router-dom";
import { Header } from "../../Components/Header/Header";

export default function Shop() {
  const { fetchProduct, products, count, setCount, disBtn } =
    useContext(GlobalContext);
  // to check for duplication use this i guess
  const uniqueProducts = products?.length
    ? products.filter(
        (item, index, self) => index === self.findIndex((p) => p.id === item.id)
      )
    : [];

  return (
    <section className="s-wrapper">
      <Header/>
      <div className="innerWidth padding flexColStart s-container">
        <div className="flexRowCenter s-products">
          {uniqueProducts && uniqueProducts.length ? (
            [...new Map(uniqueProducts.map((item) => [item.id, item])).values()].map(
              (item) => (
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
              )
            )
          ) : (
            <p>No products!</p>
          )}
        </div>
        <button
          className={`button ${disBtn ? "hidden-btn" : ""}`}
          onClick={() => setCount(count + 1)}
        >
          Explore more
        </button>
      </div>
    </section>
  );
}
