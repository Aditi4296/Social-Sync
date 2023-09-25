import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Search from './Search'
import '../../styles/global.css'
import '../../styles/header.css'

const Header = () => {

  return (
    <div className='header bg-light'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-between align-middle nav--style" >
        <div className="container-fluid">
          <Link to="/" className='logo'>
            <h1 className="navbar-brand text-uppercase p-0 m-0">SocialSync</h1>
          </Link>
        </div>
        <Search />
        <Menu />
      </nav>
    </div>
  )
}

export default Header
