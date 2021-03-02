import React, { Component } from 'react'
//import request from 'superagent'
//import { completeToDo, createToDo, getAllToDos } from './API-utils.js'

export default class LoginPage extends Component {
    // state = {
    //     email: '',
    //     password: ''
    // }


    // handleEmailChange = (e) => this.setState({
    //     email: e.target.value
    // });

    // handlePasswordChange = (e) => this.setState({
    //     password: e.target.value
    // });

    // handleSubmit = (e) => {
    //     e.preventDefault();

    //     const user = await loginUser(this.state.email, this.state.password);
    //     //parent component (App) needs this >>> callback

    //     this.props.handleUserChange(user); //this lets us pass the user/token 'up' to the parent (App)

    //     this.props.history.push('/todos'); //redirect to ToDos.js
    // }


    render() {



        return (
            <div>
                Please Login to Your Account
                {/* <label>
                    <input value={this.state.email} onChange={this.handleEmailChange} />
                </label>
                <label>
                    <input value={this.state.password} onChange={this.handlePasswordChange} />
                </label>
                <button>Submit Plan</button> */}

            </div>
        )
    }
}