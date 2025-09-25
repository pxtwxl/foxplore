import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import BestTours from '../Components/BestTours'
import Gallery from '../Components/Gallery'
import DestinationHighlight from '../Components/DestinationHighlight'
import DestinationHighlightRight from '../Components/DestinationHighlightRight'
import OurServices from '../Components/OurServices'
import Reviews from '../Components/Reviews'
import TravelSection from '../Components/TravelSection'
import Heading from '../Components/Heading'
import FadeImageLeft from '../Components/FadeImageLeft'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    {/* <FadeImageLeft/> */}
    <BestTours/>
    <Gallery/>
    <DestinationHighlight />
    <DestinationHighlightRight/>
    <OurServices/>
    <Reviews/>
    <Footer/>
    </>
  )
}
