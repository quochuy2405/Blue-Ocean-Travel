import { Link } from 'react-router-dom'
import travel0 from '/images/br.png'
import travel1 from '/images/br.png'
import travel2 from '/images/br.png'
import travel3 from '/images/br.png'
import travel4 from '/images/br.png'
import travel5 from '/images/br.png'
import Travel from '../Travel'
import styles from './TravelsList.module.scss'
import type { ITravel } from '@/types'

const list: ITravel[] = [
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

const ListTravel = ({ titleList, size }: { titleList: string; size?: number }): JSX.Element => {
  return (
    <div className={styles.travelList}>
      <p className={styles.enjoy}>Discover</p>
      <p className={styles.title}>{titleList}</p>
      <div className={styles.listItem}>
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
