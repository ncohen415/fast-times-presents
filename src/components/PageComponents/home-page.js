import React from "react"
import styled from "styled-components"
import SEO from "../seo"
import { media } from "../mq"

//Components
import Layout from "../layout"

//images
import Instagram from "../../images/svgs/IG.svg"
import Facebook from "../../images/svgs/FB.svg"
// import Twitter from "../../images/svgs/TW.svg"

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
      .heading {
        color: white;
        font-size: 62px;
        text-align: center;
        line-height: 1;
        font-weight: 900;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        ${media.small`font-size: 120px; text-align: left;`};
      }
      hr {
        border: 0;
        height: 1px;
        background-color: white;
        width: 350px;
        margin: 25px 0 25px 0;
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
            margin: 0 0.5rem 0.5rem;
            ${media.small`margin: 0 2rem 0 0;`}
            a {
              opacity: 1;
              transition: 0.2s ease-in-out;
              &:hover {
                opacity: 0.7;
              }
              svg {
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

const Home = data => {
  const homeACF = data?.data?.wpPage?.HomePageACF
  console.log(homeACF)

  return (
    <Layout>
      <SEO title="Home" />
      <HomePageContainer>
        <div class="content-wrapper">
          <div class="fast-times-wrapper">
            <div
              className="heading"
              dangerouslySetInnerHTML={{ __html: homeACF.homePageHeading }}
            />
            <hr />
            <div class="fast-times-copy">
              <p>{homeACF.homePageSubHeading}</p>
            </div>
            <div class="socials">
              <ul>
                <li>
                  <a href={homeACF.igLink} target="_blank" rel="noreferrer">
                    <Instagram />
                  </a>
                </li>
                <li>
                  <a href={homeACF.fbLink} target="_blank" rel="noreferrer">
                    <Facebook />
                  </a>
                </li>
                {/* <li>
                  <a
                    href={homeACF.twitterLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Twitter />
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </HomePageContainer>
    </Layout>
  )
}

export default Home
