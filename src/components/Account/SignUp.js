import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../css/login.css";

function SignUp(props) {
  return (
    <div className='sign-up container frame'>
      <form>
        <h1 className='UI'>Регистрация</h1>
        <input type='text' name='name' placeholder='Имя' />
        <input type='text' name='email' placeholder='Email' />
        <input type='password' name='password' placeholder='Пароль' />
        <input type='submit' value='Зарегистрироваться' />
        <div className='social'>
          <div className='hr left'></div>
          <p className='UI caption'>
            Зарегистрироваться
            <br /> с помощью
          </p>
          <div className='hr right'></div>
        </div>
        <button className='google btn-icon'></button>
        <p className='UI caption'>
          Уже есть аккаунт?{" "}
          <button className='sign-up' onClick={props.onClick}>
            Войдите!
          </button>{" "}
        </p>
      </form>
    </div>
  );
}

export default SignUp;
