import { Tooltip } from '@mui/material'
import type { ITravel } from '@/types'
import styles from './Travel.module.scss'

const Travel = (travel: ITravel) => {
  return (
    <div className={styles.travel}>
      <div className={styles.imgTravel}>
        <img src={travel.thumbnail} alt="image" />
      </div>
      <div className={styles.infoTravel}>
        <Tooltip title={travel.date}>
          <div className="icon-date">
            <span>calendar</span>
            <span>{travel.date.slice(0, 5)}</span>
          </div>
        </Tooltip>
        <Tooltip title={travel.tour_guide}>
          <div className="icon-tour-guide">
            <span>id card</span>{' '}
            <span>{travel.tour_guide.split(' ')[travel.tour_guide.split(' ').length - 1]}</span>
          </div>
        </Tooltip>
      </div>
      <div className={styles.descriptionTravel}>
        <p>
          <span className={styles.titleDesc}>Giới thiệu</span>
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
