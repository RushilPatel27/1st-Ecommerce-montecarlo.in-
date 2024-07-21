import React from 'react'
import Slider from './home/Slider'
import CategoryHome from './home/CategoryHome'
import HomeOffer from './home/HomeOffer'
import CollectionHome from './home/CollectionHome'
import BrowseSelection from './home/BrowseSelection'
import VideoHome from './home/VideoHome'
import ShopTrends from './home/ShopTrends'
import Instagram from '../component/Instagram'
import About from '../component/About'
import Footer from '../component/Footer'

export default function Home() {
  return (
    <>
     <Slider />
      <CategoryHome />
      <HomeOffer />
      <CollectionHome />
      <BrowseSelection />
      <VideoHome />
      <ShopTrends />
      <Instagram />
      <About />
      <Footer />
    </>
  )
}
