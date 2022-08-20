import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import LiveAuction from '../components/LiveAuction'

function Home() {
  return (
    <div>
        <Header />

        <Hero />

        <LiveAuction />

        <Footer />
    </div>
  )
}

export default Home