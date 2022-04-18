import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Image/logo.png'
import '../Styles/Header.scss'
const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <svg viewBox="0 0 1000 150">
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="50%" dy=".35em">
              Blue Ocean Travel
            </text>
          </symbol>
          <use className="text" xlinkHref="#s-text"></use>
          <use className="text" xlinkHref="#s-text"></use>
          <use className="text" xlinkHref="#s-text"></use>
          <use className="text" xlinkHref="#s-text"></use>
          <use className="text" xlinkHref="#s-text"></use>
        </svg>
      </div>
      <div className="header-nav-links">
        <div className="nav-link">
          <NavLink to={'/'}>Home</NavLink>
        </div>
        <div className="nav-link">
          <NavLink to={'/'}>Travel</NavLink>
        </div>
        <div className="header-nav-search">
          <i className="ti-search"></i>
        </div>
        <div className="header-nav-search">
          <i className="ti-info-alt"></i>
        </div>
      </div>
    </div>
  )
}

export default Header
