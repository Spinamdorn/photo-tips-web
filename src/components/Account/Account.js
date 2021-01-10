import React, { Component } from "react";
import AccountPage from "./AccountPage";
import Login from "./Login";
import SignUp from "./SignUp";

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginMode: true,
      isLogin: this.props.isLogin,
      //   isLogin: false,
    };
    this.handleClickToRegister = this.handleClickToRegister.bind(this);
    this.handleClickToLogin = this.handleClickToLogin.bind(this);
  }

  handleClickToLogin() {
    console.log("to login mode");
    this.setState((state) => ({
      isLoginMode: true,
      isLogin: false,
    }));
  }
  handleClickToRegister() {
    console.log("to register mode");
    this.setState((state) => ({
      isLoginMode: false,
      isLogin: false,
    }));
  }
  render() {
    var formMode = this.state.isLoginMode ? (
      <Login name='AAA' onClick={this.state.handleClickToRegister} />
    ) : (
      <SignUp onClick={this.state.handleClickToLogin} />
    );
    return (
      <div>
        {this.state.isLogin ? <AccountPage /> : ""}
        {!this.state.isLogin ? formMode : ""}
      </div>
    );
  }
}
