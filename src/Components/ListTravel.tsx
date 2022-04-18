import React from 'react'
import { ITravel } from '../Interface'
import '../Styles/Travel.scss'
import travel0 from '../image/br.png'
import travel1 from '../image/br.png'
import travel2 from '../image/br.png'
import travel3 from '../image/br.png'
import travel4 from '../image/br.png'
import travel5 from '../image/br.png'
import Travel from './Travel'
import { Link } from 'react-router-dom'

const ListTravel = ({ titleList, size }: { titleList: string; size?: number }) => {
  const list: Array<ITravel> = [
    {
      thumbnail: travel0,
      title: 'huy',
      description: 'huy',
      date: '20/20/2001',
      tour_guide: 'Bui Quoc Huy',
    },
    {
      thumbnail: travel1,
      title: 'huy',
      description: 'huy',
      date: '20/20/2001',
      tour_guide: 'Bui Quoc Huy',
    },
    {
      thumbnail: travel2,
      title: 'huy',
      description: 'huy',
      date: '20/20/2001',
      tour_guide: 'Bui Quoc Huy',
    },
    {
      thumbnail: travel3,
      title: 'huy',
      description: 'huy',
      date: '20/20/2001',
      tour_guide: 'Bui Quoc Huy',
    },
    {
      thumbnail: travel4,
      title: 'huy',
      description: 'huy',
      date: '20/20/2001',
      tour_guide: 'Bui Quoc Huy',
    },
    {
      thumbnail: travel5,
      title: 'huy',
      description: 'huy',
      date: '20/20/2001',
      tour_guide: 'Bui Quoc Huy',
    },
  ]
  return (
    <div className="travel-list">
      <p className="enjoy">Discover</p>
      <p className="title">{titleList}</p>
      <div className="list-item">
        {list.slice(0, size).map((item, index) => (
          <Link key={index} to="/a">
            <Travel {...item} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ListTravel
