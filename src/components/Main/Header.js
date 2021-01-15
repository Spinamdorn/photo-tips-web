import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
function Header(props) {
  var btnValue = props.isLogin ? "Аккаунт" : "Войти";
  return (
    <header>
      <Link to='/photo-tips-web/'>
        <img className='logo' src={logo} alt='logo'></img>
      </Link>
      <nav>
        <ul className='nav-menu'>
          <li>
            <Link to='/photo-tips-web/lecture/1'>
              <button className='btn-text-icon'>
                <div className='btn-icon course'></div>
                Курс
              </button>
            </Link>
          </li>
          <li>
            <Link to='/photo-tips-web/gallery'>
              <button className='btn-text-icon'>
                <div className='btn-icon gallery'></div>
                Галерея
              </button>
            </Link>
          </li>
        </ul>
      </nav>
      <div className='log_in'>
        <Link to='/photo-tips-web/account'>
          <button>{btnValue}</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
