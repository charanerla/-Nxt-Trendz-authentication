// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {userName: '', password: ''}

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccess()
    }
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  userName = event => {
    this.setState({userName: event.target.value})
  }

  userPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {userName, password} = this.state
    return (
      <div className="login-page">
        <div className="login-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo small"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-logo"
          />
          <form onSubmit={this.onSubmitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo large"
            />
            <label htmlFor="userName" className="custom-label">
              USERNAME
            </label>
            <input
              type="text"
              id="userName"
              placeholder="Username"
              value={userName}
              onChange={this.userName}
            />
            <label htmlFor="password" className="custom-label">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={this.userPassword}
            />
            <button type="submit" className="submit-button">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
