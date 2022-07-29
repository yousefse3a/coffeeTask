import React from "react";
import style from "./Joinus.module.css";
export default function Joinus() {
  return (
    <div className="boxSizingBorder p-5 w-100 h-50 d-flex flex-column justify-content-center align-items-center ">
      <h2 className={style.H2}>JOIN US</h2>
      <div className={`${style.InputContainer} col-lg-7 col-md-6 col-10 my-5`}>
        <input className={style.Input} placeholder="Your email" />

          <div className={style.Btn}>Subscribe</div>
      </div>
    </div>
  );
}
