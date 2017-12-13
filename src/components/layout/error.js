import React, { Component } from 'react'

export default class ErrorTemplate extends Component {
  render() {
      const img = '/404.png';
    return (
      <div className="error-page">
         <img className="error-icon" src={img} alt="404"/>
      </div>
    )
  }
}
