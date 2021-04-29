import React from "react"
import { graphql, useStaticQuery } from "gatsby"

//Components
import Home from "../components/PageComponents/home-page"

const IndexPage = ({ data }) => {
  return <Home />
}

export default IndexPage
