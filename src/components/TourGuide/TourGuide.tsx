import type { ITourGuide } from '@/types'
import styles from './TourGuide.module.scss'

const TourGuide = (tour: ITourGuide) => {
  return (
    <div className={styles.tourGuide}>
      <div className={styles.br}>
        <img src={tour.br} alt="background" />
      </div>
      <div className={styles.tourDetails}>
        <div className={styles.avatar}>
          <img src={tour?.avatar} alt="avatar" />
        </div>
        <div className={styles.content}>
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
