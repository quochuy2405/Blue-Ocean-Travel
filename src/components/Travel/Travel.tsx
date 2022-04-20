import { IconCalendarClock, IconIdCard } from '@douyinfe/semi-icons'
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
            <IconCalendarClock size="large" />
            <span>{travel.date.slice(0, 5)}</span>
          </div>
        </Tooltip>
        <Tooltip title={travel.tour_guide}>
          <div className="icon-tour-guide">
            <IconIdCard size={'large'} />{' '}
            <span className={styles.textName} >{travel.tour_guide}</span>
          </div>
        </Tooltip>
      </div>
      <div className={styles.descriptionTravel}>
        <p>
          <span className={styles.titleDesc}>Giới thiệu</span>
          <br />
          {travel.description}
        </p>
      </div>
    </div>
  )
}

export default Travel
