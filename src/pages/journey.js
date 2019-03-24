import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'gatsby'
import { connect } from 'react-redux';
import Layout from '../components/layout';

class Journey extends Component {
  state = {
    user: this.props,
  }

  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
  }

  render() {  
    const { count, increment } = this.props
    return (
      <>
        <Layout>
          <h1 role="presentation" onClick={increment} onKeyPress={increment} >I&apos;m the Journey page.</h1>
          <h2>I&apos;m currently hosting redux stuff and the favor count is: {count}</h2>
          <h6>Later I&apos;ll be hosting the data where i&apos;ll show how would your journey be once you untake the disruption challenge.</h6>
        </Layout>
      </>
    )
  }

}

const mapStateToProps = ({ root: { count } }) => {
  return { 
    count, 
  }
}

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch({ type: `INCREMENT` }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Journey)

