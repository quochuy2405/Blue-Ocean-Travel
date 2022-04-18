import * as React from 'react'
import logo from '/images/logo2.png'
import styles from './Footer.module.scss'

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
            <p>Mobile:03823232</p>
          </li>
          <li>
            <p>Landline:932832738</p>
          </li>
          <li>
            <p>Office Andress:170 An Duong Vuong St...</p>
          </li>
          <li>
            <p>Office Email: huy@gmail.com</p>
          </li>
          <li>
            <p>Office Website:wwww.blueocean.com</p>
          </li>
          <li>
            <p>Facebook @huyqqwwq</p>
          </li>
        </ul>
      </div>
      <p style={{ textAlign: 'center', fontSize: '0.9rem', fontWeight: '600' }}> © 2022 HuyPui</p>
    </div>
  )
}

export default Footer
