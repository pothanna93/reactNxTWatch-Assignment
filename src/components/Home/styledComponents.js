import styled from 'styled-components'

export const HomeContainer = styled.div`
  border: 2px solid red;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  padding: 6px;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const PopupAndItemsContainer = styled.div`
  border: 1px solid black;
  padding: 6px;
  margin: 5px;
  @media screen and (min-width: 768px) {
    order: 2;
    width: 80%;
    margin: 5px;
  }
`
export const SearchAndItemsContainer = styled.div`
  border: 3px solid green;
  min-height: 100vh;
  padding: 16px;
`
export const PopupContainer = styled.div`
  border: 2px solid pink;

  margin-bottom: 10px;
`
export const AddressAndHomeTrendingContainer = styled.div`
  border: 1px solid black;
  margin: 5px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    order: 1;
    width: 20%;
  }
`
