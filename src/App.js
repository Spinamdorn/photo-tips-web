import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Main/Header";
import Login from "./components/Account/Login";
import Menu from "./components/Menu/Menu";
import Gallery from "./components/Gallery/Gallery";
import Lecture from "./components/Lecture/Lecture";
import useToken from "./components/useToken";
import "./css/App.css";
import "./css/lesson.css";
import "./css/menu.css";
import Account from "./components/Account/Account";

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return (
      <div>
        <Header isLogin={token} />
        <Login setToken={setToken} />
      </div>
    );
  }
  return (
    <div className='App'>
      <Header isLogin={token} />
      <Switch>
        <Route exact path='/' component={Menu} />
        <Route exact path='/lecture' component={Lecture} />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/account'>
          <Account isLogin={token} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
