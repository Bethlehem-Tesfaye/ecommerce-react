import React, { useContext } from 'react' 
import { Header } from '../../Components/Header/Header'
// import "./Shop.css";
import { Link } from "react-router-dom";
import { GlobalContext } from '../../utils/Context';

export const Favorite = () => {
    const {favList}=useContext(GlobalContext)
  return (
    <section className="s-wrapper">
    <Header/>
    <div className="innerWidth padding flexColStart s-container">
      <div className="flexRowStart s-products">
        {favList && favList.length ? (
          [...new Map(favList.map((item) => [item.id, item])).values()].map(
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
          <p>No products in favorite!</p>
        )}
      </div>
      
    </div>
  </section>
  )
}
