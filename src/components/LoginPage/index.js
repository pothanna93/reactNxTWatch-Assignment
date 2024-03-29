import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'

import {
  LoginContainer,
  ResponseContainer,
  LogoImage,
  Form,
  UserContainer,
  LabelElement,
  InputElement,
  ShowPasswordContainer,
  InputCheckbox,
  LabelCheckBox,
  ButtonElement,
} from './styledComponents'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',

    checkedPassword: false,
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = event => {
    this.setState({checkedPassword: event.target.checked})
  }

  render() {
    const {username, password, checkedPassword} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const LOGO = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginContainer back={isDarkTheme}>
              <ResponseContainer backColor={isDarkTheme}>
                <LogoImage src={LOGO} alt="logo" />
                <Form onSubmit={this.onFormSubmit}>
                  <UserContainer>
                    <LabelElement htmlFor="username" userName={isDarkTheme}>
                      USERNAME
                    </LabelElement>
                    <InputElement
                      type="text"
                      id="username"
                      placeholder="Username"
                      textColor={isDarkTheme}
                      onChange={this.onChangeUsername}
                      value={username}
                    />
                  </UserContainer>
                  <UserContainer>
                    <LabelElement htmlFor="password" userName={isDarkTheme}>
                      PASSWORD
                    </LabelElement>
                    <InputElement
                      type={checkedPassword ? 'text' : 'password'}
                      id="password"
                      placeholder="Password"
                      onChange={this.onChangePassword}
                      value={password}
                      textColor={isDarkTheme}
                    />
                  </UserContainer>
                  <ShowPasswordContainer>
                    <InputCheckbox
                      type="checkbox"
                      id="showPassword"
                      onChange={this.onChangeShowPassword}
                      value={checkedPassword}
                    />
                    <LabelCheckBox
                      htmlFor="showPassword"
                      showPassword={isDarkTheme}
                    >
                      Show Password
                    </LabelCheckBox>
                  </ShowPasswordContainer>
                  <ButtonElement type="submit">Login</ButtonElement>
                </Form>
              </ResponseContainer>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default LoginPage
