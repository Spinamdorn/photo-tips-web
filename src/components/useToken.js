import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const userToken = localStorage.getItem("token");
    // const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("token", userToken);
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}
