import styled from 'styled-components'

export const NavContainer = styled.nav`
  border: 1px solid red;
  background-color: ${props => (props.backColor ? '#fff' : '#212121')};
  padding: 10px;
  width: 100%;
`
export const ResponsiveContainer = styled.div`
  border: 1px solid green;
  padding: 12px;
`
export const LogoImage = styled.img`
  width: 100px;
  height: 30px;
`
export const MobileNavContainer = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const IconsContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const ButtonElement = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`
export const DesktopContainer = styled.div` 
  display:flex; 
  justify-content:space-between; 
  align-items:center;
  @media screen and (max-width:767px){
      display:none; 
      border:1px solid green;
  }
 }
`
export const ProfileImg = styled.img`
  width: 42px;
  height: 42px;
  margin-left: 16px;
  margin-right: 16px;
`
export const LogoutButton = styled.button`
  color: #3b82f6;
  background-color: transparent;
  border: 1px solid #4f46e5;
  border-radius: 6px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 18px;
`
