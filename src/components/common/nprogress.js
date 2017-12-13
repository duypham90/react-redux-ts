import React, { Component } from 'react'
import '../../styles/nprogress.css';

export default class Nprogress extends Component {
    render() {
        return (
            <div id="nprogress">
                <div className="bar">
                    <div className="peg"></div>
                </div>
                <div className="spinner">
                    <div className="spinner-icon"></div>
                </div>
            </div>
        )
    }
}
