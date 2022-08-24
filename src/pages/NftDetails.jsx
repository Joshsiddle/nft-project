import React from "react";

import { Link, useParams } from "react-router-dom";
import { NFT__DATA } from "../assests/data/data";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import "./NFTdetails.css";
import LiveAuction from "../components/LiveAuction";

const NftDetails = () => {
  const { id } = useParams();

  const singleNFT = NFT__DATA.find((item) => +item.id === +id);
  return (
    <div>
      <Header />

      <div className="container">
        <div className="row">
          <div className="single__nft">
            <img className='nft__details--img' src={singleNFT.imgUrl} alt="" />

            <div className="single__nft--content">
              <h2>{singleNFT.title}</h2>
              <div className="single__nft--icons">
                 <div className="icons__left">
                <span className="span__1"><RemoveRedEyeOutlinedIcon /> 324</span>
                <span><FavoriteBorderOutlinedIcon /> 99</span>
              </div>
              <div className="icons__right">
                <NearMeOutlinedIcon />
                <MoreVertOutlinedIcon />
              </div>
              </div>
             
              <div className="nft__creator">
                <img className="creator__img" src={singleNFT.creatorImg} alt="" />
                <div className="creator__detail">
                  <p>Created By</p>
                  <h6>{singleNFT.creator}</h6>
                </div>
              </div>
              <p>{singleNFT.desc}</p>
              <button className="details__btn"><Link to='/wallet'>Place a bid</Link></button>
            </div>
          </div>
        </div>
      </div>

      <LiveAuction />

      <Footer />
    </div>
  );
};

export default NftDetails;
