import React from "react"
import { graphql } from "gatsby"

//Pages
import Home from "../PageComponents/home-page"

const WpPageTemplate = ({ data }) => {
  const page = data?.allWpPage?.edges[0]?.node || {}
  if (page.slug === "/") {
    return <Home />
  }
  return (
    <>
      <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </>
  )
}

export const data = graphql`
  query WpPageQuery($slug: String!) {
    allWpPage(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          title
          content
          slug
        }
      }
    }
  }
`

export default WpPageTemplate
