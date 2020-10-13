import React, { Component } from "react";

import {
  BrowserRouter as Router,Route,} from "react-router-dom";
import { Redirect } from "react-router-dom";
import Login from "./Components/scripts/Auth/Login";
import Home from "./Components/scripts/HomePage/Home";
import User from "./Components/scripts/UserData/User";
import Task from "./Components/scripts/TaskData/Task";
import { connect } from "react-redux";


class App extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    console.log(isAuthenticated);
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Login} />
        </React.Fragment>

        {isAuthenticated ? (
          <React.Fragment>
            <Route exact path="/home" component={Home} />
            <Route exact path="/tasks" component={Task} />

            <Route exact path="/user" component={User} />
            <Redirect to="/home" />
          </React.Fragment>
        ) : (
          <Redirect to="/" />
        )}
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(App);
