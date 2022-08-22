import React from "react";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { Link } from "react-router-dom";
import './step-section.css'


const StepSection = () => {
  return (
    <div className="container">
      <div className="row">
        <h3 className="step__title">Create nft</h3>
        <div className="single__step">
          <AccountBalanceWalletOutlinedIcon className="walleticon"/>
          <div className="step__item__content">
            <h5>
            <Link to="/wallet">Setup your wallet</Link>
          </h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit inventore voluptatibus libero ullam quae assumenda
            accusantium illo nam ipsa omnis alias exercitationem corporis dolor
            optio, doloremque dicta facere quibusdam laudantium?
          </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default StepSection;
