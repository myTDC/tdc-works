import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/card"
import styles from "../styles/landing.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Image />
    <h1 className={styles.heading}>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto', overflowX:'scroll'}}>
      <Card/> <Card/> <Card/>
    </div>
    
    <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto', overflowX:'scroll'}}>
      <Card/> <Card/> <Card/>
    </div>
    
    <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto', overflowX:'scroll'}}>
      <Card/> <Card/> <Card/>
    </div>
  </Layout>
)

export default IndexPage
