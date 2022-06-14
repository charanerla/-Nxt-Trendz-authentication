// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {userName: '', password: '', isErrorMsgShown: false, errorMsg: ''}

  onSubmitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {username: userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({isErrorMsgShown: true, errorMsg})
  }

  userName = event => {
    this.setState({userName: event.target.value})
  }

  userPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {userName, password, errorMsg, isErrorMsgShown} = this.state
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
            {isErrorMsgShown && <p className="error-msg">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
