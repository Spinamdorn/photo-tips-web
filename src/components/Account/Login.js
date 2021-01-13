import React, { useState } from "react";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  var value = "?Email=" + credentials["username"] + "&Password=" + credentials["password"];
  var url = "http://85.208.208.156:5000/api/user/token";
  let response = await fetch(url + value, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
  let res = response.text();
  return res;
}

export default function Login({ setToken, onClick }) {
  // export default function Login(props) {
  // console.log(props.name);
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    if (token !== "User not found") {
      setToken(token);
    }
  };
  return (
    <div className='login container frame'>
      <form onSubmit={handleSubmit}>
        <h1 className='UI'>Вход</h1>
        <input
          type='text'
          name='email'
          placeholder='Email'
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type='password'
          name='password'
          placeholder='Пароль'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='forget-password'>
          <p className='UI caption'>Забыли пароль?</p>
        </button>
        <input type='submit' value='Войти' />
        <div className='social'>
          <div className='hr left'></div>
          <p className='UI caption'>Войти с помощью</p>
          <div className='hr right'></div>
        </div>
        <button className='google btn-icon'></button>
        <p className='UI caption'>
          Нет аккаунта?
          <br />
          <button className='sign-up' onClick={onClick}>
            Зарегистрируйтесь!
          </button>
        </p>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
  // onClick: PropTypes.func.isRequired,
};
