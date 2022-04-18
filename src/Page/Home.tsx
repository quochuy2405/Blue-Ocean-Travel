import React from 'react'
import Header from './../Components/Header'
import Slider from './../Components/Slider'
import place1 from '../image/place1.png'
import place2 from '../image/place2.png'
import place3 from '../image/place3.png'
import place4 from '../image/place4.png'
import '../Styles/Home.scss'
import TourGuideList from '../Components/TourGuideList'
import Footer from '../Components/Footer'
import ListTravel from './../Components/ListTravel'
function Home() {
  return (
    <div className="home">
      <Header />
      <div className="body-page">
        <Slider />
        <div className="intro">
          <div className="content-top">
            <div className="enjoy">
              <p>Welcome to Quy Nhon</p>
            </div>
            <div className="title">
              <p>CHECK IN NOW</p>
            </div>
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor lorem ipsum.
              </p>
            </div>
          </div>
          <div className="content-bottom">
            <div className="item-type-content">
              <div className="item-img">
                <img src={place4} alt="place4" />
              </div>
              <div className="content-text">
                <div className="item-title">
                  <p>Where to Stay</p>
                </div>
                <div className="item-description">
                  <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
                </div>
              </div>
            </div>
            <div className="item-type-content">
              <div className="item-img">
                <img src={place2} alt="place2" />
              </div>
              <div className="content-text">
                <div className="item-title">
                  <p>Restaurants</p>
                </div>
                <div className="item-description">
                  <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
                </div>
              </div>
            </div>
            <div className="item-type-content">
              <div className="item-img">
                <img src={place1} alt="place1" />
              </div>
              <div className="content-text">
                <div className="item-title">
                  <p>Sightseeing</p>
                </div>
                <div className="item-description">
                  <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
                </div>
              </div>
            </div>
            <div className="item-type-content">
              <div className="item-img">
                <img src={place3} alt="place3" />
              </div>
              <div className="content-text">
                <div className="item-title">
                  <p>Shops & Boutiques</p>
                </div>
                <div className="item-description">
                  <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ListTravel titleList="Khám Phá" />
        <ListTravel titleList="TOP TRAVEL" size={3} />
        <TourGuideList />
      </div>
      <Footer />
    </div>
  )
}

export default Home
