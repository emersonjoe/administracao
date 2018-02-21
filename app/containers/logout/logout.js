import React, { Component, PropTypes } from 'react'

export default class Logout extends Component {

  handleClick(event) {
    this.props.logoutUser()
  }

  render() {
    const { onLogoutClick } = this.props

    return (
      <button onClick={() => this.handleClick()} className="btn btn-primary">
        Logout
      </button>
    )
  }

}

// Logout.propTypes = {
//   onLogoutClick: PropTypes.func.isRequired
// }