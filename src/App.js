import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import HomePage from './Home/HomePage.js';
import PrivateRoute from './PrivateRoute.js';
import Header from './Header.js';
import LoginPage from './Auth/LoginPage.js';
import SignupPage from './Auth/SignupPage.js';
import ToDosList from './ToDo/ToDosList.js';
import CreateToDo from './ToDo/CreateToDo.js';
import { getUserFromLocalStorage, putUserInLocalStorage } from './localStorage-utils.js';

export const USER = 'USER';


export default class App extends React.Component {
  state = {
    user: getUserFromLocalStorage()

    // user: {
    //   id: '',
    //   email: '',
    //   token: ''
    // }
  }


  handleUserChange = (user) => {
    this.setState({ user });
    putUserInLocalStorage(user);
  }


  handleLogout = () => {
    this.handleUserChange({});
  }


  render() {
    return (
      <div>
        <Router>
          <Header user={this.state.user} handleLogout={this.handleLogout} />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <HomePage {...routerProps} />}
            />
            <Route
              path="/login"
              exact
              render={(routerProps) => <LoginPage handleUserChange={this.handleUserChange} {...routerProps} />}
            />
            <Route
              path="/signup"
              exact
              render={(routerProps) => <SignupPage handleUserChange={this.handleUserChange} {...routerProps} />}
            />
            <PrivateRoute //PrivateRoute
              path="/api/plans"
              exact
              token={this.state.user && this.state.user.token} //PrivateRoute component says that this is to redirect to LoginPage
              render={(routerProps) => <ToDosList user={this.state.user} {...routerProps} />}
            />
            {/* <Route
              path="/plans/:id"
              exact
              render={(routerProps) => <ToDoItem {...routerProps} />}
            /> */}
            <Route
              path="/create"
              exact
              token={this.state.user && this.state.user.token}
              render={(routerProps) => <CreateToDo user={this.state.user} {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}



// email: "major@cool.com"
// id: 5
// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjE0Nzc2MDAxfQ.jCEGEwhNSuAfnbTxys19lfuBaeO7IhkTXaODNUgyz0s"







