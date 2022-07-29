import React from "react";
import style from "./Landing.module.css";
export default function Landing() {
  return (
    <div className={style.Landing}>
      <div className="px-5 boxSizingBorder mb-5 w-100 h-100 d-flex justify-content-start align-items-center ">
        <div>
          <span> Caffee frist , </span>
          <br />
          <span className="ps-5"> Schemes Later .</span>
        </div>
      </div>
    </div>
  );
}
