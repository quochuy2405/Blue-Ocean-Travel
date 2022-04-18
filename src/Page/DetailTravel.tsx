import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Components/Header'
import ListTravel from '../Components/ListTravel'
const DetailTravel = () => {
  const path = useParams()
  console.log(path)
  return (
    <div className="details-page">
      <Header />
      <div className="body-page">
        <ListTravel titleList="TOP TRAVEL" size={3} />
      </div>
    </div>
  )
}

export default DetailTravel
