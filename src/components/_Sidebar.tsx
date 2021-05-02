import { useState } from 'react'
import styled from 'styled-components'

const SidebarContainer = styled.aside`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-light-black);
  position: fixed;
  top: 0;
  width: 100%;

  @media screen and (min-width: 1000px) {
    width: auto;
    height: 100vh;
    left: 0;
    bottom: 0;
    flex-direction: column;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`

const LogoArea = styled.div`
  background: var(--color-purple);
  height: 72px;
  width: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 20px 20px 0;
  position: relative;
  z-index: 10;
  transition: height 0.2s ease, width 0.2s ease;
  overflow: hidden;
  cursor: pointer;

  &::after {
    content:'';
    width: 100%;
    height: 50%;
    display: block;
    position: absolute;
    bottom: 0;
    border-radius: 20px 0 20px;
    z-index: -1;
    background: var(--color-light-purple);
    transition: height 0.3s ease;  
  }

  &:hover {
    &::after {
      height: 90%;
    }

    img {
      transform: rotate(90deg);
    }
  }

  img {
    width: 28px;
    height: 26px;
    transition: transform 0.3s ease;

    @media screen and (min-width: 760px) {
      width: 31px;
      height: 29px;
    }

    @media screen and (min-width: 1000px) {
      width: 40px;
      height: 37px;
    }
  }

  @media screen and (min-width: 760px) {
    height: 80px;
    width: 80px;
  }

  @media screen and (min-width: 1000px) {
    width: 103px;
    height: 103px;
  }
`

const InteractiveArea = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 1000px) {
    flex-direction: column;
  }
`

const MiddleBorder = styled.hr`
  height: 72px;
  width: 1px;
  background: hsla(231, 20%, 36%, 1);
  opacity: 0.2;
  margin-left: 25px;

  @media screen and (min-width: 760px) {
    height: 80px;
  }

  @media screen and (min-width: 1000px) {
    height: 1px;
    width: 103px;
    margin: 28px 0 0;
  }
`

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 32px;
  margin: 0 25px;
  cursor: pointer;

  @media screen and (min-width: 1000px) {
    width: 40px;
    margin: 24px 0; 
  }
`

export function Sidebar() {
  const [isLightModeActive, setIsLightModeActive] = useState(false)

  function changeColorMode() {
    setIsLightModeActive(prevState => !prevState)
  }

  return (
    <SidebarContainer>
      <LogoArea>
          <a>
            <img src="/assets/logo.svg" alt="invoicer logo" />
          </a>
      </LogoArea>
      <InteractiveArea>
        {isLightModeActive ? (
          <img
            src="/assets/icon-moon.svg"
            alt="dark mode icon"
            onClick={changeColorMode}
            style={{ cursor: 'pointer' }}
          />
        ) : (
          <img
            src="/assets/icon-sun.svg"
            alt="light mode icon"
            onClick={changeColorMode}
            style={{ cursor: 'pointer' }}
          />
        )}
        <MiddleBorder />
        <ProfilePicture src="/assets/image-avatar.jpg" alt="profile picture" />
      </InteractiveArea>
    </SidebarContainer>
  )
}