import * as React from 'react'
import logo from '/images/logo2.png'
import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'

const Footer = (): JSX.Element => {
  return (
    <div className={styles.footer} id="footer">
      <div className={styles.footerTop}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.company}>
          <div className={styles.companyName}>
            <p>Blue Ocean Travel</p>
          </div>
          <div className={styles.companyTour}>
            <p>Tour: Binh Dinh - Phu yen - nha trang - da nang</p>
          </div>
        </div>
      </div>
      <div className={styles.footerDescription}>
        <ul>
          <li>
            <p><i className="ti-mobile"></i> Mobile: 0905364378</p>
          </li>
          <li>
            <p><i className="ti-signal"></i> Landline: 0905364378</p>
          </li>
         <li>
            <p> <i className="ti-home"></i> Office Andress: 170 An Duong Vuong St.Quy Nhon City, Binh Dinh.</p>
          </li>
        </ul>
        <ul>
         
          <li>
            <p><i className="ti-email"></i> Office Email: blueoceantravel@gmail.com</p>
          </li>
          <li>
            <p><i className="ti-unlink"></i> Office Website: <Link to='https://blue-ocean-travel.vercel.app/'>BlueOcean.com</Link></p>
          </li>
          <li>
            <p><i className="ti-facebook"> </i>Facebook @blueoceantravel</p>
          </li>
        </ul>
         <div className={styles.footerLogo}>
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
      </div>
      
      <p style={{ textAlign: 'center', fontSize: '0.9rem', fontWeight: '600' }}> © 2022 HuyPui</p>
    </div>
  )
}

export default Footer
