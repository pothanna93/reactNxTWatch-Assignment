import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'

import {
  HomeContainer,
  PopupAndItemsContainer,
  SearchAndItemsContainer,
  PopupContainer,
  AddressAndHomeTrendingContainer,
} from './styledComponents'

class Home extends Component {
  state = {
    videosLists: [],
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/videos/all?search=')
    console.log(response)
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <HomeContainer>
                <PopupAndItemsContainer>
                  <PopupContainer>
                    <p>popupcontainer</p>
                  </PopupContainer>

                  <SearchAndItemsContainer>
                    <h1>serch Container</h1>
                  </SearchAndItemsContainer>
                </PopupAndItemsContainer>
                <AddressAndHomeTrendingContainer>
                  <p>address</p>
                </AddressAndHomeTrendingContainer>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
