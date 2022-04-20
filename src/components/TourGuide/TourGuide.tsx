import type { ITourGuide } from '@/types'
import styles from './TourGuide.module.scss'

const TourGuide = ({br }:{ br: any }) => {
  return (
    <div className={styles.tourGuide}>
      <div className={styles.br}>
        <img src={br} alt="background" />
      </div>
  
    </div>
  )
}

export default TourGuide
