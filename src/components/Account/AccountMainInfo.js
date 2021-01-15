import React, { useState, useEffect } from "react";
import userPhoto from "../../images/user_photo.png";

function AccountMainInfo({ name, surname, email }) {
  const [isLogOut, setIsLogOut] = useState(false);
  useEffect(() => {
    if (isLogOut) {
      localStorage.removeItem("token");
      document.location.reload();
      setIsLogOut(false);
    }
  }, [isLogOut]);
  return (
    <div className='frame main-info'>
      <div className='right-side'>
        <img src={userPhoto} alt='User' />
        <div>
          <h2 className='UI'>{name + " " + surname}</h2>
          <p className='UI email'>{email}</p>
        </div>
      </div>
      <button
        className='std logout'
        onClick={() => {
          setIsLogOut(true);
        }}>
        Выйти из аккаунта
      </button>
    </div>
  );
}

export default AccountMainInfo;
