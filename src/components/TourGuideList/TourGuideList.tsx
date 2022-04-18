import TourGuide from '../TourGuide'
import avatar1 from '/images/place1.png'
import br1 from '/images/br1.png'
import br2 from '/images/br2.png'
import br3 from '/images/br3.png'
import br4 from '/images/br4.png'
import styles from './TourGuideList.module.scss'
import type { ITourGuide } from '@/types'

const ListTourGuide: ITourGuide[] = [
  {
    avatar: avatar1,
    name: 'Như Quỳnh',
    DOB: '07/04/2000',
    position: 'Manager',
    code: '1212',
    tel: '029122912',
    br: br1,
  },
  {
    avatar: avatar1,
    name: 'Như Quỳnh',
    DOB: '07/04/2000',
    position: 'Manager',
    code: '1212',
    tel: '029122912',
    br: br2,
  },
  {
    avatar: avatar1,
    name: 'Như Quỳnh',
    DOB: '07/04/2000',
    position: 'Manager',
    code: '1212',
    tel: '029122912',
    br: br3,
  },
  {
    avatar: avatar1,
    name: 'Như Quỳnh',
    DOB: '07/04/2000',
    position: 'Manager',
    code: '1212',
    tel: '029122912',
    br: br4,
  },
]

const TourGuideList = () => {
  return (
    <div className={styles.tourGuideList}>
      {ListTourGuide.map((item: ITourGuide, index) => (
        <TourGuide {...item} key={index} />
      ))}
    </div>
  )
}

export default TourGuideList
