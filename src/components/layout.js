/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { getImage } from "gatsby-plugin-image"
import SEO from "../components/seo"

import { BgImage } from "gbimage-bridge"

//components
import Header from "./Header/header"
import "./layout.css"

const LayoutContainer = styled.div`
  margin: 0;
  padding: 0;
  max-height: 100vh;
  .overlay {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.6;
    z-index: 1;
  }
  main {
    height: 100vh;
    max-height: 100vh;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      backgroundImage: file(relativePath: { eq: "FastTimes.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const image = getImage(data.backgroundImage)

  return (
    <>
      <SEO />
      <BgImage image={image} style={{ width: "100vw", height: "100vh" }}>
        {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
        <LayoutContainer>
          <div class="overlay" />
          <main>{children}</main>
        </LayoutContainer>
      </BgImage>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
