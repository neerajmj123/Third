import './LandingNavbar.css'
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom"

function LandingNavbar() {
  return (
    <>

      <div className="navbar">
        <ul className="link">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <a href="#" className="action-btn">
          Get Started
        </a>
      </div>
      <div className='loginbtn'>
      <button type="submit" className="btn"><Link to={'/login'}>Login</Link>
      </button>
      </div>
    </>


  )
}
export default LandingNavbar;