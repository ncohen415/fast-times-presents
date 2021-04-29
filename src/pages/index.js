import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Seo from "../components/seo"
import { media } from "../components/mq"

//Components
import Layout from "../components/layout"

//images
import Instagram from "../images/IG.svg"
import Facebook from "../images/FB.svg"
import Twitter from "../images/TW.svg"

const HomePageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  ${media.small`padding: 0 2rem 0 2rem;`}
  .content-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 5;
    .fast-times-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      ${media.small`align-items: baseline;`};
      h1 {
        color: white;
        font-size: 62px;
        text-align: center;
        ${media.small`font-size: 120px; text-align: left;`};
      }
      hr {
        border: 0;
        height: 1px;
        background-color: white;
        width: 350px;
      }
      .fast-times-copy {
        width: 50%;
        p {
          color: white;
          font-size: 19px;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-weight: 600;
          max-width: 550px;
          text-align: center;
          ${media.small`text-align: left;`}
        }
      }
      .socials {
        ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          li {
            display: flex;
            justify-content: center;
            margin: 0 2rem 0 0;
            a {
              opacity: 1;
              transition: 0.2s ease-in-out;
              &:hover {
                opacity: 0.7;
              }
              img {
                padding: 0;
                margin: 0;
                height: 30px;
                width: 30px;
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = () => (
  <Layout>
    <HomePageContainer>
      <div class="content-wrapper">
        <div class="fast-times-wrapper">
          <h1>
            FAST
            <br /> TIMES
            <br /> PRESENTS
          </h1>
          <hr />
          <div class="fast-times-copy">
            <p>
              FAST TIMES began as a monthly party hosted by musician Andrew St.
              James at Amnesia in the Mission District in 2018.
            </p>
          </div>
          <div class="socials">
            <ul>
              <li>
                <a href="https://www.instagram.com/fasttimespresents/?hl=en">
                  <img src={Instagram} alt="hi" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={Facebook} alt="sd" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={Twitter} alt="hi" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </HomePageContainer>
  </Layout>
)

export default IndexPage
