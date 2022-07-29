import React from "react";
import style from "./Product.module.css";

export default function Product({ name, rate, reviews, imgSrc }) {
  return (
      <div className={`d-flex flex-column`}>
        <div className={`${style.CoffeeImg}`}>
          <img src={imgSrc} alt="coffee imge" width={"100%"} />
        </div>
        <div className="d-flex flex-column align-items-start pt-3 pb-5">
          <h5 className="textShadow greenColor">{name}</h5>
          <p className="mb-0 textShadow">
            <i className="fa-solid fa-star text-warning pe-1"></i>
            {rate}
            <span className="text-muted"> {reviews} reviews</span>
          </p>
          <h5 className="textShadow greenColor" >New cairo, Egypt</h5>
        </div>
      </div>
  );
}
