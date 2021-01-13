import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Main/Header";
import Menu from "./components/Menu/Menu";
import Gallery from "./components/Gallery/Gallery";
import Lecture from "./components/Lecture/Lecture";
import useToken from "./components/useToken";
import Account from "./components/Account/Account";
import Authentication from "./components/Account/Authentication";

import "./css/App.css";

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return (
      <div>
        <Header isLogin={token} />
        <Authentication setToken={setToken} />
      </div>
    );
  }
  return (
    <div className='App'>
      <Header isLogin={token} />

      <Switch>
        <Route path='/gallery' component={Gallery} />
        <Route path='/account'>
          <Account token={token} />
        </Route>
        <Route path='/lecture/:lessonId'>
          <Lecture />
        </Route>
        <Route path='/' component={Menu} />
      </Switch>
    </div>
  );
}

export default App;
