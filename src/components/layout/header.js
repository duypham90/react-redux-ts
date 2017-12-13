import React, { Component } from 'react'
import logo from '../../logo.svg';

export default class Header extends Component {
    render() {
        return (
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <h1 className="app-title">DEMO React & Redux</h1>
            </header>
        )
    }
}
