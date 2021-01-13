import React, { Component, useState } from "react";
import "../../css/account.css";

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: props.token,
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
      registrationDate: "",
      residenceCity: "",
    };
  }

  componentDidMount() {
    fetch("http://85.208.208.156:5000/api/user?Token=" + this.props.token)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          name: data["name"],
          surname: data["surname"] !== "string" ? data["surname"] : "",
          email: data["email"] !== "string" ? data["email"] : "",
          phoneNumber: data["email"] !== "string" ? data["phoneNumber"] : "",
          registrationDate: data["registrationDate"],
          residenceCity: data["residenceCity"] ? data["residenceCity"] : "",
        });
      });
  }

  render() {
    return (
      <div className='account container'>
        <div className='frame main-info'>
          <img src='../../images/user_photo.png' alt='User' />
          <div>
            <h2 className='UI'>{this.state.name + " " + this.state.surname}</h2>
            <p className='UI email'>{this.state.email}</p>
          </div>
        </div>
        <div className='frame full-info'>
          <h2 className='UI'>Персональная информация</h2>
          <form>
            <label for='userName'>
              <p className='UI caption'>Имя</p>
            </label>
            <input id='userName' type='text' value={this.state.name} />
            <label for='userSurname'>
              <p className='UI caption'>Фамилия</p>
            </label>
            <input id='userSurname' type='text' value={this.state.surname} />
            <label for='userPhone'>
              <p className='UI caption'>Номер телефона</p>
            </label>
            <input id='userPhone' type='text' value={this.state.phoneNumber} />
            <input type='submit' value='Сохранить' />
          </form>
        </div>
        <div className='frame change-password'>
          <h2 className='UI'>Изменение пароля</h2>
          <form>
            <label for='userPassword'>
              <p className='UI caption'>Текущий пароль</p>
            </label>
            <input id='userPassword' type='password' autocomplete='current-password' />
            <label for='newPassword'>
              <p className='UI caption'>Новый пароль</p>
            </label>
            <input id='newPassword' type='password' autocomplete='new-password' />
            <input type='submit' value='Изменить пароль' />
          </form>
        </div>
      </div>
    );
  }
}
