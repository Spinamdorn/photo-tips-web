import React, { Component } from "react";
import "../../css/App.css";

export default class AccountPage extends Component {
  render() {
    return (
      <div className='frame container'>
        <h1 className='UI'>Иванов Кирилл</h1>
        <p className='UI email'>example@gmail.com</p>
      </div>
    );
  }
}
