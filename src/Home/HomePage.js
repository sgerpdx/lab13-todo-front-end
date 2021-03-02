import React from 'react';
//import './HomePage.css';
import { NavLink } from 'react-router-dom';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="dataPlace">
                Welcome Home
                <NavLink exact activeClassName="selected" to="/plans">
                    <p className="introduction">To review your plans, click here.</p>
                </NavLink>
            </div>
        )
    }
}