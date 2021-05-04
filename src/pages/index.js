import React from "react"
import { graphql } from "gatsby"

//Components
import Home from "../components/PageComponents/home-page"

const IndexPage = ({ data }) => {
  return <Home data={data} />
}

export const data = graphql`
  query HomePageQuery {
    wpPage(title: { eq: "Home Page" }) {
      HomePageACF {
        homePageHeading
        homePageSubHeading
        igLink
        fbLink
        twitterLink
      }
    }
  }
`

export default IndexPage
