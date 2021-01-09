import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to='/'>
        <img className='logo' src='../../images/Logo.svg' alt='logo'></img>
      </Link>
      <nav>
        <ul className='nav-menu'>
          <li>
            <Link to='/lecture'>
              <button className='btn-text-icon'>
                <div className='btn-icon course'></div>
                Курс
              </button>
            </Link>
          </li>
          <li>
            <Link to='/gallery'>
              <button className='btn-text-icon'>
                <div className='btn-icon gallery'></div>
                Галерея
              </button>
            </Link>
          </li>
        </ul>
      </nav>
      <div className='log_in'>
        <Link to='/login'>
          <button>Войти</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
