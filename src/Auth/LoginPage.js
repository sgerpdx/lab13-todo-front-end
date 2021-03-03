import React, { Component } from 'react'
//import request from 'superagent'
import { loginUser } from '../API-utils.js'

export default class LoginPage extends Component {
    state = {
        email: '',
        password: ''
    }


    handleEmailChange = (e) => this.setState({
        email: e.target.value
    });

    handlePasswordChange = (e) => this.setState({
        password: e.target.value
    });


    handleSubmit = async (e) => {
        e.preventDefault();
        const user = await loginUser(this.state.email, this.state.password);
        this.props.handleUserChange(user); //this lets us pass the user/token 'up' to the parent (App)
        this.props.history.push('/api/plans');
    }


    render() {



        return (
            <div>
                <form>
                    Please Login:
                <label>
                        Email
                        <input value={this.state.email} onChange={this.handleEmailChange} />
                    </label>
                    <label>
                        Password
                        <input value={this.state.password} onChange={this.handlePasswordChange} />
                    </label>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}