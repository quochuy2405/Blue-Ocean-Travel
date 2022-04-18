import { IconCalendarClock, IconIdCard } from '@douyinfe/semi-icons'
import React from 'react'
import { ITravel } from '../Interface'
import '../Styles/Travel.scss'
const Travel = (travel: ITravel) => {
  return (
    <div className="travel">
      <div className="img-travel">
        <img src={travel.thumbnail} alt="anh" />
      </div>
      <div className="info-travel">
        <div className="icon-date">
          <IconCalendarClock size="large" /> <span>{travel.date.slice(0, 5)}</span>
        </div>

        <div className="icon-tour-guide">
          <IconIdCard size={'large'} />{' '}
          <span>{travel.tour_guide.split(' ')[travel.tour_guide.split(' ').length - 1]}</span>
        </div>
      </div>
      <div className="description-travel">
        <p>
          <span className="title-desc">Giới thiệu</span>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, oditLorem ipsum dolor
          sit amet consectetur adipisicing elit. Nostrum, odit Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nostrum, oditLorem ipsum dolor sit amet consectetur
          adipisicing elit. Nostrum, odit
        </p>
      </div>
    </div>
  )
}

export default Travel
