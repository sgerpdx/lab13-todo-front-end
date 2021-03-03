import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'


export default class Header extends React.Component {
    // state = {
    //     email: ''
    // }


    render() {
        return (
            <header className="navBar">
                Header Bar
                <NavLink exact activeClassName="selected" to="/">
                    <button className="navButton">Home</button>
                </NavLink>
                {
                    this.props.user && this.props.user.token &&
                    <>
                        <NavLink exact activeClassName="selected" to="/plans">
                            <button className="navButton">Plans</button>
                        </NavLink>
                        <NavLink exact activeClassName="selected" to="/create">
                            <button className="navButton">Create Plan</button>
                        </NavLink>
                    </>
                }
                <p className="titleArea">Things To-Do</p>
                {
                    (!this.props.user || !this.props.user.token) &&
                    <>
                        <NavLink exact activeClassName="selected" to="/signup">
                            <button className="navButton">Signup Page</button>
                        </NavLink>
                        <NavLink exact activeClassName="selected" to="/login">
                            <button className="navButton">Login Page</button>
                        </NavLink>
                    </>
                }
                <div className="userDisplay">
                    <p>{this.props.user.email}</p>
                </div>
                {
                    this.props.user && this.props.user.token &&
                    <>
                        <NavLink exact activeClassName="selected" to="/plans">
                            <button onClick={this.props.handleLogout} className="navButton">Logout</button>
                        </NavLink>
                    </>
                }


            </header>
        )
    }
}