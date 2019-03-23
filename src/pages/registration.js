import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'gatsby'
import { connect } from 'react-redux';
import Layout from '../components/layout';

class Registration extends Component {
  state = {
    user: this.props,
  }

  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
  }

  render() {
    return (
      <>
        <Layout>
          <h1 onClick={this.props.increment}>I'm the registration Page</h1>
          <h2>I'm currently hsoting redux stuff and the count is: {this.props.count}</h2>
        </Layout>
      </>
    )
  }

}

const mapStateToProps = ({ count }) => {
  return { count }
}

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch({ type: `INCREMENT` }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)

