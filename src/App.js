import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import HomePage from './Home/HomePage.js';
//import PrivateRoute from './PrivateRoute.js';
import Header from './Header.js';
import LoginPage from './Auth/LoginPage.js';
import SignupPage from './Auth/SignupPage.js';
import ToDosList from './ToDo/ToDosList.js';
//import CreateToDo from './ToDo-files/CreateToDo.js';
//import { getUserFromLocalStorage, putUserInLocalStorage } from './localStorage-utils.js';

//const USER = 'USER';

export default class App extends React.Component {

  // state = {
  //   user: getUserFromLocalStorage();

  //   // user: {
  //   //   id: '',
  //   //   email: '',
  //   //   token: ''
  //   // }
  // }
  // // empty user

  // handleUserChange = (user) => {

  //   this.setState({ user });

  //   //send user to localstorage
  //   //localStorage.setItem(USER, JSON.stringify(user)); -- now that line goes in this function:
  //   putUserInLocalStorage(user);

  // }

  // handleLogout = () => {
  //   this.handleUserChange({});
  //   //updates state and puts something in localStorage -- puts empty user into localStorage;
  // }


  render() {
    return (
      <div>
        <Router>
          <Header handleLogout={this.handleLogout} />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <HomePage {...routerProps} />}
            />
            <Route
              path="/login" //token resides here...ToDos nees this token...ToDos and Login are siblings
              exact

              render={(routerProps) => <LoginPage
                // handleUserChange={this.handleUserChange}
                {...routerProps} />}
            />
            <Route
              path="/signup" //token resides here...ToDos nees this token...ToDos and Login are siblings
              exact
              render={(routerProps) => <SignupPage
                // handleUserChange={this.handleUserChange}
                {...routerProps} />}
            />
            <Route //make this a PrivateRoute when ready...
              path="/plans"
              exact
              // token={this.state.user && this.state.user.token} //PrivateRoute component says that this is to redirect to LoginPage
              // render={(routerProps) => <ToDosList
              // user={this.state.user} {...routerProps} />}
              render={(routerProps) => <ToDosList {...routerProps} />}
            />
            {/* <Route
              path="/plans/:id"
              exact
              render={(routerProps) => <ToDoItem {...routerProps} />}
            /> */}
            {/* <Route
              path="/create"
              exact
              render={(routerProps) => <CreateToDo {...routerProps} />}
            /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}