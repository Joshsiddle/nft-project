import React from 'react'
import './Footer.css'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'

function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer_1">
                <h2 className='footer__header'>Marketplace</h2>
                <p>All NFTs</p>
                <p>Crypto</p>
                <p>Metaverse</p>
                <p>Collections</p>
                <p>Auctions</p>
                <p>Create</p>
            </div>
            <div className="footer__2">
                <h2 className='footer__header'>Resources</h2>
                <p>Help Center</p>
                <p>Partners</p>
                <p>Suggestions</p>
                <p>Discord</p>
                <p>Docs</p>
                <p>Newsletter</p>
            </div>
            <div className="footer__3">
            <h2 className='footer__header'>Community</h2>
                <p>Community</p>
                <p>Documentation</p>
                <p>Brand Assets</p>
                <p>Blog</p>
                <p>Forum</p>
                <p>Mailing List</p>
            </div>
            <div className="footer__4">
                <h2 className="footer__header">Newsletter</h2>
                <p>Signup for our newsletter to get the latest news in your inbox.</p>
                <input type='email' placeholder='example@email.com'></input>
                <p>Your email is safe with us. We dont't spam.</p>
            </div>
        </div>
        <div className="logo">
            <h2>
              DeFi <AccountBalanceIcon />
            </h2>
            CopyRight 2022
          </div>
    </footer>
  )
}

export default Footer