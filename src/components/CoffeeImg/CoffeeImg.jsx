import React from "react";
import style from "./CoffeeImg.module.css";
import imgLogo from "../../assets/images/image.png";
export default function CoffeeImg() {
  return (
    <div className="boxSizingBorder p-5  w-100 d-flex flex-row flex-wrap ">
      <div className="col-lg-6 col-md-6 col-12 d-lg-flex d-md-flex d-none py-3 justify-content-center align-items-center">
        <div className="position-relative">
          <img src={imgLogo} className={style.imgLogo} alt="coffee" />
          <div className={style.square}></div>
          <div className={style.circle}></div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center">
        <p className={style.heading}>
          Make Your
          <br />
          Own Coffee
        </p>
      </div>
    </div>
  );
}
