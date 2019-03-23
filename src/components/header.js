import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `linear-gradient(to bottom, #040404, #041620)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <aside style={{ display: 'flex', width: '100%', maxWidth: '320px', justifyContent: 'space-evenly', padding: '4px 4px 4px 4px' }}>
    
    <Link to='/' style={{ color: `white`, textDecoration: `none`,}}>Home</Link>
      <Link to='/registration' style={{ color: `white`, textDecoration: `none`,}}>Registration</Link>
      <Link to='/tdc' style={{ color: `white`, textDecoration: `none`,}}>What is TDC</Link>
    </aside>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
