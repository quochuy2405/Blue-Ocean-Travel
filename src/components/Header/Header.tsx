import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
const Header = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <svg viewBox="0 0 1000 150">
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="50%" dy=".35em">
              Blue Ocean Travel
            </text>
          </symbol>
          <use xlinkHref="#s-text" />
          <use xlinkHref="#s-text" />
          <use xlinkHref="#s-text" />
          <use xlinkHref="#s-text" />
          <use xlinkHref="#s-text" />
        </svg>
      </div>
      <div className={styles.headerNavLinks}>
        <div className={styles.navLink} >
          <NavLink className={({ isActive }) => (isActive ? styles.active: 'inactive')} to={'/'}>Home</NavLink>
        </div>
        <div className={styles.navLink}>
          <NavLink className={({ isActive }) => (isActive ? styles.active : 'inactive')} to={'/travel'}>Travel</NavLink>
        </div>
        <div className={styles.headerNavSearch}>
          <i className="ti-search"></i>
        </div>
        <div className={styles.headerNavSearch}>
          <i className="ti-info-alt"></i>
        </div>
      </div>
    </div>
  )
}

export default Header
