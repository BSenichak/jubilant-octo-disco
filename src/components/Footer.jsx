import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer>&copy; Robocode {new Date().getFullYear() + 1}</footer>
    )
  }
}
