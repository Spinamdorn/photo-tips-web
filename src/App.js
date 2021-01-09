import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Main/Header";
import Login from "./components/Main/Login";
import Footer from "./components/Main/Footer";
import Menu from "./components/Menu/Menu";
import Gallery from "./components/Gallery/Gallery";
import Lecture from "./components/Lecture/Lecture";
import "./App.css";
import "./css/lesson.css";
import "./css/menu.css";
import "./css/gallery.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Menu} />
        <Route exact path='/lecture' component={Lecture} />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/login' component={Login} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
