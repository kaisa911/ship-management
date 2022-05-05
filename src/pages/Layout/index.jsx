import React from "react";
import { Outlet } from "react-router-dom";
import RequiredLogin from "@/components/RequiredLogin";
import useLogin from "@/hooks/useLogin";

const Layout = (props) => {
  const isLogin = useLogin();
  console.log(isLogin);
  return isLogin ? (
    <div className="layout">
      <Outlet />
    </div>
  ) : (
    // handle if token outdate
    <RequiredLogin />
  );
};

export default Layout;
