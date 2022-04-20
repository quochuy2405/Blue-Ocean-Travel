import TourGuide from '../TourGuide'
import tourguide1 from '@/../public/images/tourguide/tourguide1.png'
import tourguide2 from '@/../public/images/tourguide/tourguide2.png'
import tourguide3 from '@/../public/images/tourguide/tourguide3.png'
import tourguide4 from '@/../public/images/tourguide/tourguide4.png'
import tourguide5 from '@/../public/images/tourguide/tourguide5.png'
import styles from './TourGuideList.module.scss'
import type { ITourGuide } from '@/types'

const ListTourGuide = [tourguide1,tourguide2,tourguide3,tourguide4,tourguide5]
const TourGuideList = () => {
  return (
    <>  <div className={styles.enjoy}>
      <p>Tour Guide </p>
    </div>
      <div className={styles.title}>
        <p>CONTACT</p>
      </div>
      <div className={styles.tourGuideList}>
        {ListTourGuide.map((item, index) => (
          <TourGuide br={item} key={index} />
        ))}
      </div>
    </>
  )
}

export default TourGuideList
