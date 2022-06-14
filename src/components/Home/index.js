// Write your JS code here
import {Component} from 'react'
import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-sub-container">
          <Header />
          <div className="home-description-container">
            <div className="description-container">
              <h1 className="heading">Clothes That Get You Noticed</h1>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                alt="clothes that get you noticed"
                className="small-img image"
              />
              <p className="description">
                Fashion is part of the daily air Fashion is a form of
                self-expression and autonomy at a particular period and place
                and in a specific context, of clothing, footwear, lifestyle,
                accessories, makeup, hairstyle, and body posture. The term
                implies a look defined by the fashion industry as that which is
                trending.
              </p>
              <button className="shop-now-button" type="button">
                Shop Now
              </button>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="cloths that get you noticed"
              className="large-img image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
