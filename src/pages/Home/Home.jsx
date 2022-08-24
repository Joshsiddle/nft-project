import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import LiveAuction from '../../components/Featured/LiveAuction'
import SellerSection from '../../components/Seller section/SellerSection'
import StepSection from '../../components/Step section/StepSection'

function Home() {
  return (
    <div>
        <Header />

        <Hero />

        <LiveAuction />

        <SellerSection />

        <StepSection />

        <Footer />
    </div>
  )
}

export default Home