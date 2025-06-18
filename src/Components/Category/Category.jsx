import React, { useContext } from "react";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/category.json";
import { sliderSetting } from "../../utils/common";
import "./Category.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../utils/Context";

export const Category = () => {

  const {selCat, setSelCat} = useContext(GlobalContext)
  const swiper = useSwiper();
  return (
    <section className="c-wrapper">
      <div className="padding innerWidth flexColStart c-container">
        <div className="flexRowCenter c-title">
          <div className="flexRowCenter title-right">
            <span>browse by category</span>
            <img src="./categories.png" alt="logo" width={30} />
          </div>
        </div>
        <div className="flexRowCenter c-category">
          <Swiper {...sliderSetting}>
            {data.map((item, i) => {
              return (
                <SwiperSlide className key={i}>
                  <Link to={i===0?"/Clothes":i===1?"/accessories":i===2?"/phones":i===3?"/laptops":'/'}>
                    <div className="flexColCenter cat">
                      <img src={item.imgage} alt="icon" width={100} />
                      <span>{item.name}</span>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
            <br></br>
            <SliderButtons />
          </Swiper>
        </div>
      </div>
    </section>
  );
};
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexRowCenter title-left">
      <div onClick={() => swiper.slidePrev()} className="left">
        <FaCaretLeft />
      </div>
      <div onClick={() => swiper.slideNext()} className="right">
        <FaCaretRight />
      </div>
    </div>
  );
};
