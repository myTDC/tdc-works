/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { counter } from "../redux/actions/auth";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            author
            fblink
            navlinks {
              i
              label
              to
            }
            authnavlinks {
              i
              label
              to
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} siteNav={data.site.siteMetadata.navlinks} auth={false}/>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <ConnectedCounter />
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Counter = ({ count, increment }) => (
  <div>
    <p>Count: {count}</p>
    <button type='button' onClick={increment}>Increment</button>
  </div>
)

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
}

const mapStateToProps = ({ root }) => {
  return { 
    count: root.count, 
  }
}

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch(counter()) }
}

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)