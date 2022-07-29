import React from "react";
import style from "./Navbar.module.css";
export default function Navbar() {
  return (
    <div className="w-100 boxSizingBorder py-2 bg-light d-flex flex-wrap flex-row justify-content-lg-end justify-content-md-end justify-content-center" >
      <div className={`${style.InputContainer} col-lg-4 col-md-4 col-10 my-1 `}>
        <input className={style.Input} placeholder="what do you want to learn" />
        <div className={style.btnsSarch}>
          <i class="fas fa-search"></i>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-10 d-flex my-1 justify-content-around">
        <div className={style.btnLogin}>Login</div>
        <div className={style.btnJoin}>
          <span>Join for free</span> <i className="fa-solid fa-arrow-right ps-2"></i>
        </div>
      </div>
    </div>
  );
}
