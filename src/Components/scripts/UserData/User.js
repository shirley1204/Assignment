import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Card, CardContent, Button } from "@material-ui/core";
import Headernav from "../../Reuseable/Headernav";

import { connect } from "react-redux";


class User extends Component {
  constructor(props) {
  
    super(props);
    this.state = {
      isPasswordChange: false,
      isnewPasswordSubmited: false,
      showContent: true,
      newpassword: "",
    };
  }

  _onHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  _onPasswordChange = () => {
    this.setState({
      isPasswordChange: true,
    });
  };
  _onPasswordChangeSubmit = (e) => {
    const { newpassword } = this.state;

    this.setState({
      showContent: false,
      isnewPasswordSubmited: true,
      isPasswordChange: false,
      newpassword,
    });
  };

  _onLogout = () => {
  
    this.props.history.push("/");
  };

  render() {
    const { user } = this.props.auth;
    const { username, password } = user;
    const {
      isPasswordChange,
      newpassword,
      isnewPasswordSubmited,
      showContent,
    } = this.state;

    return (
      <React.Fragment>
        <Headernav />
        <React.Fragment>
          <div className={showContent ? "d-block container mt-5" : "d-none"}>
            <div className="row mt-5">
              {/* <div className="col-md-4" /> */}
              <div
                className="col-lg-6 
            
            
            col-md-6 col-sm-6"
              >
                <Card>
                  <CardContent>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="d-flex">
                          <span className="">Username:</span>
                          <span className="ml-4">{username}</span>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div
                      className={isPasswordChange ? "d-none" : "d-block row"}
                    >
                      <div className="col-md-6">
                        <div className="d-flex">
                          <span>Password:</span>
                          <span className="ml-4">
                            {password.replace(/./g, "*")}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={isPasswordChange ? "d-block" : "d-none row"}
                    >
                      <div className="col-md-6">
                        <div className="d-flex">
                          <span>Password:</span>
                          <input
                            type="password"
                            name="newpassword"
                            onChange={this._onHandleChange}
                            className="ml-4"
                            required
                          />
                        </div>
                      </div>{" "}
                    </div>
                    <br />
                    <br /> <br />
                    <div className="d-flex">
                      <Button
                        className={isPasswordChange ? "d-none" : "d-block "}
                        variant="outlined"
                        color="secondary"
                        onClick={this._onPasswordChange}
                      >
                        Change Password
                      </Button>

                      <Button
                        className={isPasswordChange ? "d-block" : "d-none "}
                        variant="outlined"
                        color="secondary"
                        onClick={this._onPasswordChangeSubmit}
                      >
                        Save Password
                      </Button>
                      <Button
                        className="ml-5"
                        variant="outlined"
                        color="secondary"
                        onClick={this._onLogout}
                      >
                        Logout
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-md-4" />
        </React.Fragment>

        <React.Fragment>
          <div className={!showContent ? "d-block container mt-5" : "d-none"}>
            <div className="row mt-5">
              {/* <div className="col-md-4" /> */}
              <div className="col-lg-6 col-md-6 col-sm-6">
                <Card>
                  <CardContent>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="d-flex">
                          <span className="ml-2">Username:</span>
                          <span className="ml-4">{username}</span>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div
                      className={
                        isnewPasswordSubmited ? "d-block" : "d-none row"
                      }
                    >
                      <div className="col-md-6">
                        <div className="d-flex">
                          <span>Password:</span>
                          <span className="ml-4">
                            {newpassword.replace(/./g, "*")}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={isPasswordChange ? "d-block" : "d-none row"}
                    >
                      <div className="col-md-6">
                        <div className="d-flex">
                          <span>NewPassword:</span>
                          <input
                            type="password"
                            name="newpassword"
                            onChange={this._onHandleChange}
                            className="ml-4"
                            required
                          />
                        </div>
                      </div>{" "}
                    </div>
                    <br />
                    <br /> <br />
                    <div className="d-flex">
                      <Button
                        className={isPasswordChange ? "d-none" : "d-block "}
                        variant="outlined"
                        color="secondary"
                        onClick={this._onPasswordChange}
                      >
                        Change Password
                      </Button>

                      <Button
                        className={isPasswordChange ? "d-block" : "d-none "}
                        variant="outlined"
                        color="secondary"
                        onClick={this._onPasswordChangeSubmit}
                      >
                        Save Password
                      </Button>
                      <Button
                        className="ml-5"
                        variant="outlined"
                        color="secondary"
                        onClick={this._onLogout}
                      >
                        Logout
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-md-4" />
        </React.Fragment>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, {})(withRouter(User));
