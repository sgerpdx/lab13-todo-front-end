import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'


export default class Header extends React.Component {
    render() {
        return (
            <header className="navBar">
                Header Bar
                <NavLink exact activeClassName="selected" to="/">
                    <button className="navButton">Home</button>
                </NavLink>
                <NavLink exact activeClassName="selected" to="/plans">
                    <button className="navButton">Plans</button>
                </NavLink>
                <p className="titleArea">Things To-Do</p>
                <NavLink exact activeClassName="selected" to="/signup">
                    <button className="navButton">Signup Page</button>
                </NavLink>
                <NavLink exact activeClassName="selected" to="/login">
                    <button className="navButton">Login Page</button>
                </NavLink>

            </header>
        )
    }
}