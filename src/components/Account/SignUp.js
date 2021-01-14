import React, { useState, useEffect } from "react";

function SignUp({ setToken, onClick }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [signUpBody, setSignUpBody] = useState();
  useEffect(() => {
    setSignUpBody({
      name: username,
      surname: "string",
      email: email,
      phoneNumber: "string",
      password: password,
    });
  }, [username, email, password]);

  const submitSignUp = (e) => {
    e.preventDefault();
    async function fetchSignUp() {
      setIsError(false);
      setIsLoading(true);
      try {
        let response = await fetch("http://85.208.208.156:5000/api/user/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signUpBody),
        });
        setIsLoading(false);
      } catch (error) {
        console.log("Error registration");
        setIsError(true);
      }
    }
    fetchSignUp();
  };
  return (
    <div className='sign-up container frame'>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <form onSubmit={submitSignUp}>
          <h1 className='UI'>Регистрация</h1>
          {isError && <div>Something went wrong ...</div>}
          <input
            type='text'
            name='name'
            placeholder='Имя'
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='text'
            name='email'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            name='password'
            placeholder='Пароль'
            onChange={(e) => setPassword(e.target.value)}
          />

          <input type='submit' value='Зарегистрироваться' />
          {/* <div className='social'>
            <div className='hr left'></div>
            <p className='UI caption'>
              Зарегистрироваться
              <br /> с помощью
            </p>
            <div className='hr right'></div>
          </div>
          <button className='google btn-icon'></button> */}
          <p className='UI caption'>
            Уже есть аккаунт?{" "}
            <button className='sign-up' onClick={onClick}>
              Войдите!
            </button>{" "}
          </p>
        </form>
      )}
    </div>
  );
}

export default SignUp;
