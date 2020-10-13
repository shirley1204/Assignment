import { TextField, Card, CardContent, Button } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { onLogin } from "../../Redux/Authentication/AuthAction";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors:"",
    };
  }
validateForm = () =>{
  const { username, password } = this.state;
  return username.length > 0 && password.length > 0;

}
  _onHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  _onSubmit = () => {
    const { username, password } = this.state;
    const newUser = {
      username,
      password,
    };
 
    this.props.onLogin(newUser, this.props.history);
  };

  render() {
    const { username, password } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row mt-5 ">
            {/* <div className="col-md-4" /> */}
            <div
              className="col-lg-6 col-md-6 col-sm-6 mx-auto" >
              <Card>
                <CardContent>
                  <h2 className="text-center">Login</h2>

                  <div className="row">
                    <div className="col-md-6">
                      <TextField
                        type="text"
                        label="Enter Username"
                        value={username}
                        name="username"
                        onChange={this._onHandleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <TextField
                        type="password"
                        label="Enter Password"
                        value={password}
                        name="password"
                        onChange={this._onHandleChange}
                      />
                    </div>
                  </div>
                  <br />
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={this._onSubmit}
                    disabled={!this.validateForm()}
                  >
                    Login
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="col-md-4" />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
 
  return {
    //fetching data from AuthReducer
    auth: state.auth,
  };
}

export default connect(mapStateToProps, { onLogin })(withRouter(Login));
