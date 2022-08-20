import React from "react";
import { Link } from "react-router-dom";
import "./LiveAuction.css";

import NftCard from "./NftCard";
import { NFT__DATA } from '../assests/data/data'

function LiveAuction() {
  return (
    <div className="liveAuction">
      <div className="live__auction--top">
        <h3>Live Auction</h3>
        <span>
          <Link to="/market">Explore more</Link>
        </span>
      </div>
        <div className="nft--wrapper">
             {
            NFT__DATA.slice(0,4).map((props) => (
                <NftCard key={props.id} props={props} />
            ))
        } 
        </div>
      
      
    </div>
  );
}

export default LiveAuction;
