// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header">
    <div className="website-logo-logoutBtn-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="website-logo"
        alt="website logo"
      />
      <Link to="/login" className="nav-link">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="logout-logo"
        />
      </Link>
    </div>
    <ul className="nav-items">
      <li>
        <Link to="/" className="nav-link">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="nav-item"
          />
        </Link>
      </li>
      <li>
        <Link to="/products" className="nav-link">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav product"
            className="nav-item"
          />
        </Link>
      </li>
      <li>
        <Link to="/cart" className="nav-link">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="nav-item"
          />
        </Link>
      </li>
    </ul>
    <div className="large-nav-bar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="website-logo"
        alt="website logo"
      />
      <ul className="nav-items large-nav-items">
        <li className="text-nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="text-nav-item">
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </li>
        <li className="text-nav-item">
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
        </li>
        <li className="text-nav-item">
          <Link to="/login" className="nav-link">
            <button type="button" className="logout-btn">
              Logout
            </button>
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
