import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import LiveAuction from '../components/LiveAuction'
import SellerSection from '../components/SellerSection'
import StepSection from '../components/StepSection'

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