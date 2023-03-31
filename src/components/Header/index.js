import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="nav-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </Link>

      <Popup
        modal
        trigger={
          <button
            data-testid="hamburgerIconButton"
            type="button"
            className="nav-button"
          >
            <GiHamburgerMenu className="ham-icon" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              data-testid="closeButton"
              type="button"
              className="close-button"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>
            <ul className="nav-links-list">
              <li className="nav-link-item">
                <Link className="nav-link" to="/" onClick={() => close()}>
                  <AiFillHome size="36" />
                  <p className="nav-link-content">Home</p>
                </Link>
              </li>
              <li className="nav-link-item">
                <Link className="nav-link" to="/about" onClick={() => close()}>
                  <BsInfoCircleFill size="32" />
                  <p className="nav-link-content">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </nav>
)

export default Header
