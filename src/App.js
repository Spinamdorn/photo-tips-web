import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Lecture from "./components/Lecture";
import "./App.css";
import "./css/lesson.css";
import "./css/menu.css";

function App() {
  return (
    <div className='App'>
      <Header />

      <Switch>
        <Route exact path='/' component={Menu} />
        <Route exact path='/lecture' component={Lecture} />
        <Route exact path='/login' component={Login} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
