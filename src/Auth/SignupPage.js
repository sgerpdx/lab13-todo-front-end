import React from 'react'
//import request from 'superagent'
//import { completeToDo, createToDo, getAllToDos } from './API-utils.js'

export default class SignupPage extends React.Component {
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

    // handleSubmit = (e) => {
    //     e.preventDefault();

    //     const user = await signupUser(this.state.email, this.state.password);
    //     //parent component (App) needs this >>> callback
    //     //user is resdult of dir-abv API call, and dir-blw is used:
    //     this.props.handleUserChange(user); //this lets us pass the user/token 'up' to the parent (App)

    //     this.props.history.push('/todos'); //redirect to ToDos.js
    // }


    render() {



        return (
            <div>
                <form>
                    Sign Up for Planning:
                <label>
                        Email
                    <input />
                        <input value={this.state.email} onChange={this.handleEmailChange} />
                    </label>
                    <label>
                        Password
                <input />
                        <input value={this.state.password} onChange={this.handlePasswordChange} />
                    </label>
                    <button>Submit Plan</button>
                </form>


            </div>
        )
    }
}