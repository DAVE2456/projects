import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
  

      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>Studio</h2>
            
            <div className='icon flex_space'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-pinterest'></i>
              <i className='fab fa-youtube'></i>
            </div>
          </div>

          <div className='box'>
            <h2>NAVIGATION</h2>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/studio'>Studio</Link>
              </li>
              <li>
                <Link to='/beauty'>Beauty</Link>
              </li>
              <li>
                <Link to='/decor'>Decor</Link>
              </li>
              <li>
                <Link to='/hall'>Hall</Link>
              </li>
              <li>
                <Link to='/car'>Car</Link>
              </li>
              <li>
                <Link to='/food'>Food</Link>
              </li>
            </ul>
          </div>


          <div className='box'>

            <input type='text' name='' id='' />
            <input type='text' className='primary-btn' value='SUBSCRIBE' />
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>© 2023 Copy Right </p>
      </div>
    </>
  )
}

export default Footer
