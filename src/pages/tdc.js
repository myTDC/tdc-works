import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TDCPage = ({ count, increment }) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <p>I&apos;m keeping count too: {count}</p>
    <button  type="button" onClick={increment}>Increment</button>
    <hr />
    <div>
      <Link to='/registration'>Go to Registration</Link>
      <Link to="/">Go back to the homepage</Link>
    </div>

  </Layout>
)

const mapStateToProps = ({ root: { count } }) => {
  return { 
    count, 
  }
}

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch({ type: `INCREMENT` }) }
}

TDCPage.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
}

const ConnectedSecondPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(TDCPage)

export default ConnectedSecondPage