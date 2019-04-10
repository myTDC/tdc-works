import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { connect } from "react-redux"
import signon from "../redux/actions/auth"
import Logo from "./logo"
// linear-gradient(to bottom, #040404f0, #04162090)
const Header = ({ siteTitle, siteNav, join }) => (
  <header style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      position: "fixed",
      width: "100%",
      height: "8vh",
      top: "0",
      left: "0",
      zIndex: "10",
      background: `162432f0`,
      marginBottom: `1.45rem`,
    }}>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
        fontSize: `1.4rem`,
      }}>
      <Logo />
    </Link>
    <aside
      style={{
        display: "flex",
        width: "100%",
        maxWidth: "320px",
        boxSizing: "border-box",
        justifyContent: "space-evenly",
        padding: "4px 4px 4px 4px",
        color: `white`,
        textDecoration: `none`,
      }}
    >
      {siteNav.map(link => (
        <Link className={null} to={link.to} key={link.i}>
          {/* JSON.stringify(siteNav.index) */}
          {link.label}
        </Link>
      ))}
      <button
        type="button"
        onClick={join}
        style={{
          background: `linear-gradient(to bottom, #040404, #041620)`,
          color: `#FFE`,
          border: `.4px solid #16df82`,
          borderRadius: `2px`,
        }}
      >
        Register
      </button>
    </aside>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `TDC Works`,
}

// export default Header

const mapStateToProps = ({ root: { count, user } }) => {
  return {
    count,
    user,
  }
}

const mapDispatchToProps = dispatch => {
  return { join: () => dispatch(signon()) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
