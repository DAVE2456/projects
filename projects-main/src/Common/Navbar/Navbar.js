import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <>
      <nav className='navbar'>
        <div className='container flex_space'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : " fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li><Link to='/' onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to='/studio' onClick={closeMobileMenu}>Studio</Link></li>
            <li><Link to='/beauty' onClick={closeMobileMenu}>Beauty</Link></li>
            <li><Link to='/decor' onClick={closeMobileMenu}>Decor</Link></li>
             <li><Link to='/hall' onClick={closeMobileMenu}>Hall</Link></li>
            <li><Link to='/car' onClick={closeMobileMenu}>Car</Link></li>
            <li><Link to='/food' onClick={closeMobileMenu}>Food</Link></li>
          </ul>

          <div className='login-area flex'>
            <li><Link to='/sign-in'>
                <i class='far fa-chevron-right'></i>Sign in</Link></li>
            <li><Link to='/register'>
                 <i class='far fa-chevron-right'></i>Register</Link></li>
            <li><Link to='/contact'>
                <button className='primary-btn'>Request</button></Link></li>
          </div>
        </div>
      </nav>

      <header>
        <div className='container flex_space'>
          <div className='logo'>
            <img src='images/logo.png' alt='' />
          </div>

        </div>
      </header>
    </>
  )
}

export default Navbar
