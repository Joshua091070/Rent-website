import {Link, NavLink} from "react-router-dom"
import Logo from "../images/logo.png"
import { nav } from "../Data"
import {FaBars} from "react-icons/fa"
import {MdOutlineClose} from "react-icons/md"
import { FaArrowRightFromBracket } from "react-icons/fa6"
import "./navbar.css"
import { useState } from "react"

const Navbar = () => {


  const [isNavShowing, setIsNavShowing] = useState(false)

  return (
    <nav>
       <div className="nav__container">
        <Link to="/" className="Logo">
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}>
              {
                nav.map(({text, path}, index) => {
                  return (
                    <li>
                      <NavLink to={path} onClick={() => setIsNavShowing(prev => !prev)}>{text}</NavLink>
                    </li>
                  )
                })
              }
        </ul>
        <div className="nav__right">
          <h4>
            <span>2</span>My List
          </h4> 
          <a href="" className="btn nav-btn">{ <FaArrowRightFromBracket/> }Sign In</a>
        </div>
        <div className="nav__toggle-btn btn" onClick={() => setIsNavShowing(prev => !prev)}>
          {
            isNavShowing ? <MdOutlineClose/> : <FaBars/>
          }
          
        </div>
       </div>
    </nav>
  )
}

export default Navbar