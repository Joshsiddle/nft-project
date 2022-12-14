import React from "react";
import "./seller.css";
import { SELLER__DATA } from "../../assests/data/data";

const SellerSection = () => {
  return (
    <div className="container">
      <div className="row t-a-c">
        <div className="seller__section-title">
          <h3>Top sellers</h3>
        </div>
        <div className="top__sellers">
             {SELLER__DATA.map((item) => (
          <div className="seller__card">

                <div className="seller__rank">{+item.id}.</div>
            <div >
              <img className="seller__img" src={item.sellerImg} alt="" />
            </div>

            <div className="seller__content">
              <h6>{item.sellerName}</h6>
              <h5>{item.currentBid} ETH</h5>
            </div>
          </div>
        ))}
        </div>
       
      </div>
    </div>
  );
};

export default SellerSection;
