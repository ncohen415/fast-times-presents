import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { media } from "../mq"

const NavContainer = styled.nav`
  height: 100%;
  width: 100%;
  padding: 0 2rem 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    flex-direction: column;
    top: 15vh;
    position: absolute;
    ${media.small`position: relative; flex-direction: row; top: 0;`}
    a {
      text-decoration: none;
      color: white;
      opacity: 0.8;
      transition: 0.2s ease-in-out;
      &:hover {
        opacity: 1;
      }
      .nav-item {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-weight: 800;
        font-size: 4vh;
        line-height: 2em;
        padding: 0;
        margin: 0;
        ${media.small`font-size: 16px; line-height: 1rem; padding: 0 0 0 1rem;`}
      }
    }
  }
`

const Nav = mobileNavOpen => {
  return (
    <NavContainer>
      <ul className={mobileNavOpen === true ? "active nav" : "nav"}>
        <Link to="/">
          <li className="nav-item">HOME</li>
        </Link>
        <Link to="/">
          <li className="nav-item">SHOWS</li>
        </Link>
        <Link to="/">
          <li className="nav-item">PRESS</li>
        </Link>
        <Link to="/">
          <li className="nav-item">GALLERY</li>
        </Link>
        <Link to="/">
          <li className="nav-item">CONTACT</li>
        </Link>
      </ul>
    </NavContainer>
  )
}

export default Nav
