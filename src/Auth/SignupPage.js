import React from 'react'
//import request from 'superagent'
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
        this.props.history.push('/plans');
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

//signup:
//{"id":3,"email":"moon@moon.com","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjE0NzM2NDExfQ.Qd4oqI6WZiFc5Ykf5nvdCSkwwEwxxV9QwzLmesCkgAY"}
//signin:
//{"id":3,"email":"moon@moon.com","name":"Sam","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjE0NzM2ODk5fQ.sdduND6DjHGA_RBFUNdLr-haFrdX3xjs0tCu_4x60wM"}

// email: "sweet@cool.com"
// id: 4
// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjE0Nzc1NDc1fQ.eAMKEJjwhgwv0eV02T7G4e2onlM_imS7jz6ld0gk9tI"






