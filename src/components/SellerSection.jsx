import React from "react";
import "./seller.css";
import { SELLER__DATA } from "../assests/data/data";

const SellerSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="seller__section-title">
          <h3>Top sellers</h3>
        </div>
        <div className="top__sellers">
             {SELLER__DATA.map((item) => (
          <div className="seller__card">
            <div >
              <img className="seller__img" src={item.sellerImg} alt="" />
            </div>

            <div className="seller__content">
              <h6>{item.sellerName}</h6>
              <h6>{item.currentBid}</h6>
            </div>
          </div>
        ))}
        </div>
       
      </div>
    </div>
  );
};

export default SellerSection;
