import React, { Component } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import "../../css/login.css";

export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginMode: true,
    };
    this.handleClickMode = this.handleClickMode.bind(this);
  }

  handleClickMode() {
    console.log("this button was clicked");
    this.setState((state) => ({
      isLoginMode: !this.state.isLoginMode,
    }));
  }
  render() {
    var content = this.state.isLoginMode ? (
      <Login onClick={this.handleClickMode} setToken={this.props.setToken} />
    ) : (
      <SignUp onClick={this.handleClickMode} setToken={this.props.setToken} />
    );
    return <div>{content}</div>;
  }
}
