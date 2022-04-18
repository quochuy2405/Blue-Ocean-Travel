import React from 'react'
import '../Styles/Footer.scss'
import logo from '../image/logo2.png'
const Footer = () => {
  return (
    <div className="footer" id='footer'>
      <div className="footer-top">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="company">
          <div className="company-name">
            <p>Blue Ocean Travel</p>
          </div>
          <div className="company-tour">
            <p>Tour: Binh Dinh - Phu yen - nha trang - da nang</p>
          </div>
        </div>
      </div>
      <div className="footer-description">
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
    </div>
  )
}

export default Footer
