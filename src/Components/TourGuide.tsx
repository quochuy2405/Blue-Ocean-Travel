import React from 'react'
import '../Styles/TourGuide.scss'
import { ITourGuide } from './../Interface/index'

const TourGuide = (tour: ITourGuide) => {
  return (
    <div className="tour-guide">
      <div className="br">
        <img src={tour.br} alt="background" />
      </div>
      <div className="tour-details">
        <div className="avatar">
          <img src={tour?.avata} alt="avatar" />
        </div>
        <div className="content">
          <div className="name">
            <p>NAME: {tour.name}</p>
          </div>
          <div className="dob">
            <p>D.O.B: {tour.DOB}</p>
          </div>
          <div className="position">
            <p>POSITION: {tour.position}</p>
          </div>
          <div className="code">
            <p>CODE: {tour.code}</p>
          </div>
          <div className="tel">
            <p>TEL: {tour.tel}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourGuide
