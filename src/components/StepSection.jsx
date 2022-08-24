import React from "react";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { Link } from "react-router-dom";
import "./step-section.css";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";


const step_data = [
  {
    id: "01",
    icon: (
      <AccountBalanceWalletOutlinedIcon
        style={{
          width: "56px",
          height: "56px",
          background: "#8364E2",
          padding: "14px 0",
          borderRadius: "8px",
        }}
      />
    ),
    title: <Link to='/wallet' >Set up your wallet</Link>,
  },
  {
    id: "01",
    icon: (
      <CloudUploadOutlinedIcon
        style={{
          width: "56px",
          height: "56px",
          background: "#8364E2",
          padding: "14px 0",
          borderRadius: "8px",
        }}
      />
    ),
    title: `Add your NFT's`,
  },
  {
    id: "03",
    icon: (
      <SellOutlinedIcon
        style={{
          width: "56px",
          height: "56px",
          background: "#8364E2",
          padding: "14px 0",
          borderRadius: "8px",
        }}
      />
    ),
    title: `Sell your NFT's`,
  },
];

const StepSection = () => {
  return (
    <div className="container">
      <div className="row t-a-c">
        <h1 className="Step__section-title">Getting started is easy!</h1>
        <div className="step__section">
          {step_data.map((item) => (
            <div className="single__step">
              <span>{item.icon}</span>
              <div className="step__item__content">
                <h5>{item.title}</h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepSection;
