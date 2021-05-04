import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { media } from "../../components/mq"

import Nav from "./nav"

//images
import Menu from "../../images/menu.svg"

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  height: 60vh;
  width: 100%;
  position: absolute;
  background-color: transparent;
  ${media.small`position: absolute; width: 100%; height: 15vh; max-height: 150px; background-color: transparent !important;`}
  &.active {
    background-color: black;
  }
  .mobile-button {
    display: flex;
    align-self: center;
    margin-top: 5vh;
    height: 65px;
    width: 65px;
    border: 0;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    ${media.small`display: none !important;`}
    img {
      height: 100%;
      width: 100%;
    }
  }
  .nav-wrapper {
    display: none;
    height: 100%;
    width: 100%;
    ${media.small`display: block`}
    &.active {
      display: block;
    }
  }
`

const Header = ({ siteTitle }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const toggleMenu = () => setMobileNavOpen(!mobileNavOpen)

  return (
    <HeaderContainer className={mobileNavOpen === true ? "active" : ""}>
      <button className="mobile-button" onClick={() => toggleMenu()}>
        <img src={Menu} alt="" />
      </button>
      <div
        class={mobileNavOpen === true ? "nav-wrapper active" : "nav-wrapper"}
      >
        <Nav />
      </div>
    </HeaderContainer>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
