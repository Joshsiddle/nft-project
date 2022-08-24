import React from "react";
import "./Modal.css";
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';


const Modal = ({setShowModal, currentBid}) => {
  return (
    <div className="modal__wrapper" >
      <div className="modal">

        <span className="close__modal"><HighlightOffOutlinedIcon onClick={() => setShowModal(false)} className="close" fontSize="large"/></span>
        <h6 className="modal__title">Place a Bid</h6>
        <p className="modal__subtitle">
          You must bid at least <span className="modal__money">5.89 ETH</span>
        </p>

        <div className="input__item">
          <input type="number" placeholder="00 : 00 ETH" />
        </div>

        <div className="input__item">
          <h6>Enter Quantity, 7 available</h6>
          <input type="number" placeholder="Enter Quantity" />
        </div>

        <div className="modal__bid">
          <p>You must bid at least</p> 
          <span className="modal__money">5.89 ETH</span>
        </div>
        <div className="modal__bid">
          <p>Service Fee</p> 
          <span className="modal__money">0.89 ETH</span>
        </div>
        <div className="modal__bid">
          <p>Total Bid Amount</p> 
          <span className="modal__money">5.89 ETH</span>
        </div>

        <button className="place__bid-btn">
            Place Bid
        </button>
      </div>
    </div>
  );
};

export default Modal;
