import React, { useState } from "react";

function useLogin() {
  const [isLogin, setIsLogin] = useState(false);

  const token = window.localStorage.getItem("token");
  if (token) {
    setIsLogin(true);
  } else {
    setIsLogin(false);
  }

  return isLogin;
}

export default useLogin;
