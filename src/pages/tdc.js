import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ count, increment }) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    {/* <ConnectedCounter /> */}
    <p>I'm keeping count too: {count}</p>
    <button onClick={increment}>Increment</button>
    <hr />
    <div>
      <Link to='registration'>Go to Registration</Link>
      <Link to="/">Go back to the homepage</Link>
    </div>

  </Layout>
)
const mapStateToProps = ({ count }) => {
  return { count }
}

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch({ type: `INCREMENT` }) }
}

SecondPage.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
}

const ConnectedSecondPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondPage)

export default ConnectedSecondPage

// export default SecondPage

// const Counter = ({ count, increment }) => (
//   <div>
//     <p>Count: {count}</p>
//     <button onClick={increment}>Increment</button>
//   </div>
// )

// Counter.propTypes = {
//   count: PropTypes.number.isRequired,
//   increment: PropTypes.func.isRequired,
// }

// const mapStateToProps = ({ count }) => {
//   return { count }
// }

// const mapDispatchToProps = dispatch => {
//   return { increment: () => dispatch({ type: `INCREMENT` }) }
// }

// const ConnectedCounter = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter)