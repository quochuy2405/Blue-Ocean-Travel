import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import ListTravel from '../Components/ListTravel'
const DetailTravel = () => {
  const { id } = useParams()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="details-page">
      <Header />
      <div className="body-page">
        <div className="body-news-travel"></div>
        <ListTravel titleList="TOP TRAVEL" size={3} />
      </div>
      <Footer />
    </div>
  )
}

export default DetailTravel
