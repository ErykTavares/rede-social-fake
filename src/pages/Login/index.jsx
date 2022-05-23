/* eslint-disable no-undef */
import React from "react";
import LoginSubRoutes from "../../routes/LoginSubRoutes";
import Forgot from "./Forgot";
import SingIn from "./SingIn";
import SingUp from "./SingUp";
import { LoginStyle } from "./styles";

const Login = () => {
  const backgroundImg = `${process.env.PUBLIC_URL}/assets/img/LoginBackground.webp`;
  return (
    <LoginStyle bg={backgroundImg}>
      <div className="background_darkblue">
        <LoginSubRoutes
          SingIn={<SingIn />}
          SingUp={<SingUp />}
          Forgot={<Forgot />}
        />
      </div>
    </LoginStyle>
  );
};

export default Login;
