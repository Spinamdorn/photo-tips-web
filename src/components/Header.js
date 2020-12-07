import React from "react";
import logo from "../images/Logo.svg";

function Header() {
  return (
    <header>
      {/* <a href="#"> */}
      <img className='logo' src={logo} alt='logo'></img>
      {/* </a> */}
      <nav>
        <ul className='nav-menu'>
          <li>
            <button className='btn-text-icon'>
              {/* <a href="#"> */}
              <div className='btn-icon course'></div>
              Курс
              {/* </a> */}
            </button>
          </li>
          <li>
            <button className='btn-text-icon'>
              {/* <a href="#"> */}
              <div className='btn-icon gallery'></div>
              Галерея
              {/* </a> */}
            </button>
          </li>
        </ul>
      </nav>
      <div className='log_in'>
        {/* <a href="#"> */}
        <button>Войти</button>
        {/* </a> */}
      </div>
    </header>
  );
}

export default Header;
