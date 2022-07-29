import React from "react";
import Product from "../Product/Product.jsx";
import { productsInfo } from "../../assets/productsApi";

export default function Products() {
  return (
    <div className="px-5 boxSizingBorder w-100 d-flex flex-column ">
      <div className="w-100 py-4">
        <p className="text-primary">Practice Advice</p>
        <h2>Coffee Products</h2>
      </div>
      <div className="w-100 d-flex flex-row flex-wrap col-12 justify-content-between py-4 ">
        {productsInfo.map((pro, index) => {
          return (
            <div
              className={`col-lg-2 col-md-6 col-12 d-flex justify-content-center align-items-center `}
            >
              <Product
                key={index}
                rate={pro.rate}
                reviews={pro.reviews}
                imgSrc={pro.imgSrc}
                name={pro.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
