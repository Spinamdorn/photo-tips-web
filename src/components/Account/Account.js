import React, { useState, useEffect } from "react";
import "../../css/account.css";

export default function Account({ token, setToken }) {
  const [currentToken, setCurrentToken] = useState(token);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [newInfo, setNewInfo] = useState({
    token: currentToken,
    name: name,
    surname: surname,
    email: email,
    phoneNumber: phoneNumber,
  });

  useEffect(() => {
    async function fetchData() {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await fetch("https://phototips.xyz/api/user?Token=" + currentToken);
        const json = await response.json();
        setName(json.name);
        setSurname(json.surname);
        setEmail(json.email);
        setPhoneNumber(json.phoneNumber);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    }
    fetchData();
  }, [currentToken]);

  useEffect(() => {
    setNewInfo({
      token: currentToken,
      name: name,
      surname: surname,
      email: email,
      phoneNumber: phoneNumber,
    });
  }, [currentToken, name, surname, email, phoneNumber]);

  const submitUpdateInfo = (e) => {
    e.preventDefault();
    async function fetchUpdateInfo() {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await fetch("https://phototips.xyz/api/user/updateInfo", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newInfo),
        });
        const json = await response.json();
        var newToken = json.token;
        if (newToken !== "User not found") {
          setCurrentToken(newToken);
          setToken(newToken);
        }
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    }
    fetchUpdateInfo();
  };

  const [oldPassword, setOldPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [changePasswordBody, setChangePasswordBody] = useState({
    token: currentToken,
    oldPassword: oldPassword,
    newPassword: newPassword,
  });
  useEffect(() => {
    setChangePasswordBody({
      token: currentToken,
      oldPassword: oldPassword,
      newPassword: newPassword,
    });
  }, [currentToken, oldPassword, newPassword]);
  const submitChangePasword = (e) => {
    async function fetchChangePassword() {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await fetch("http://85.208.208.156:5000/api/user/updatePassword", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(changePasswordBody),
        });
        const json = await response.json();
        var newToken = json.token;
        if (newToken !== "User not found") {
          setCurrentToken(newToken);
          setToken(newToken);
        }
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    }
    e.preventDefault();
    fetchChangePassword();
  };

  const logout = () => {
    localStorage.removeItem("token");
    document.location.reload();
  };
  return (
    <div className='account container'>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          <div className='frame main-info'>
            <div className='right-side'>
              <img src='../../images/user_photo.png' alt='User' />
              <div>
                <h2 className='UI'>{name + " " + surname}</h2>
                <p className='UI email'>{email}</p>
              </div>
            </div>
            <button className='std logout' onClick={logout}>
              Выйти из аккаунта
            </button>
          </div>
          <div className='frame full-info'>
            <h2 className='UI'>Персональная информация</h2>
            <form onSubmit={submitUpdateInfo}>
              <label htmlFor='userName'>
                <p className='UI caption'>Имя</p>
              </label>
              <input
                id='userName'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor='userSurname'>
                <p className='UI caption'>Фамилия</p>
              </label>
              <input
                id='userSurname'
                type='text'
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
              <label htmlFor='userPhone'>
                <p className='UI caption'>Номер телефона</p>
              </label>
              <input
                id='userPhone'
                type='text'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {isError && <div>Something went wrong ...</div>}
              <input type='submit' value='Сохранить' />
            </form>
          </div>
          <div className='frame change-password'>
            <h2 className='UI'>Изменение пароля</h2>
            <form onSubmit={submitChangePasword}>
              <label htmlFor='userPassword'>
                <p className='UI caption'>Текущий пароль</p>
              </label>
              <input
                id='userPassword'
                type='password'
                autoComplete='current-password'
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <label htmlFor='newPassword'>
                <p className='UI caption'>Новый пароль</p>
              </label>
              <input
                id='newPassword'
                type='password'
                autoComplete='new-password'
                onChange={(e) => setNewPassword(e.target.value)}
              />
              {isError && <div>Something went wrong ...</div>}
              <input type='submit' value='Изменить пароль' />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
