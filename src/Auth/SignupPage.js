import React from 'react'
import { signupUser } from '../API-utils.js'

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


    handleSubmit = async (e) => {
        e.preventDefault();
        const user = await signupUser(this.state.email, this.state.password);
        this.props.handleUserChange(user); //this lets us pass the user/token 'up' to the parent (App)
        this.props.history.push('/api/plans');
    }


    render() {
        console.log(this.state.email);
        console.log(this.state.password);

        return (
            <div>
                <form>
                    Sign Up for Planning:
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
