import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto', overflowX:'scroll'}}>
    <Card/> <Card/> <Card/>
    </div>
    <div>
      
    </div>
  </Layout>
)

export default IndexPage
