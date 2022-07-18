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

const LOGO = true
  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
class LoginPage extends Component {
  state = {}

  renderUsername = () => (
    <UserContainer>
      <LabelElement htmlFor="username">USERNAME</LabelElement>
      <InputElement type="text" id="username" />
    </UserContainer>
  )

  renderPassword = () => (
    <UserContainer>
      <LabelElement htmlFor="username">PASSWORD</LabelElement>
      <InputElement type="password" id="username" />
    </UserContainer>
  )

  renderShowPassword = () => (
    <ShowPasswordContainer>
      <InputCheckbox type="checkbox" id="showPassword" />
      <LabelCheckBox htmlFor="showPassword">Show Password</LabelCheckBox>
    </ShowPasswordContainer>
  )

  render() {
    return (
      <LoginContainer>
        <ResponseContainer>
          <LogoImage src={LOGO} alt="logo" />
          <Form>
            {this.renderUsername()}
            {this.renderPassword()}
            {this.renderShowPassword()}
            <ButtonElement type="submit">Login</ButtonElement>
          </Form>
        </ResponseContainer>
      </LoginContainer>
    )
  }
}
export default LoginPage
