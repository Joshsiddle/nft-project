import Modal from './Modal'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NftCard = ({ props }) => {
const { title, id, currentBid, creatorImg, imgUrl, creator } = props
const [showModal, setShowModal] = useState(false)


  return (
    <div className="single__nft__card">
    <div className="nft__img">
      <img src={imgUrl} alt="" />
    </div>
    <div className="nft__content">
      <h5 className="nft__title"><Link to={`/market/${id}`}>{title}</Link></h5>

      <div className="creator__info-wrapper">
        <div>
          <img className="creator__img" src={creatorImg} alt="" />
        </div>

        <div className="creator__info">
          <div>
            <h6>Created By</h6>
            <p>{creator}</p>
          </div>

          <div className="creator__info--bid">
            <h6>Current Bid</h6>
            <p>{currentBid} ETH</p>
          </div>
        </div>
      </div>

      <div className="card__bottom">
        <button className="bid__btn" onClick={() => setShowModal(true)}>Place Bid</button>

        {showModal && <Modal setShowModal={setShowModal}/>}

        <span className='history__link'><Link to='#'>View History</Link></span>
      </div>
    </div>
  </div>
  )
}

export default NftCard