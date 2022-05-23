import React from "react";
import { ButtonsDivStyle, SingINStyle } from "./style";
import { Button, EnterpriseLogo, Form, Input } from "../../../components/index";
import useForm from "../../../Hooks/useForm";
import { ReactComponent as GoogleSvg } from "../../../assets/svg/google-icon.svg";
import { ReactComponent as GitHubSvg } from "../../../assets/svg/github-icon.svg";
import { useNavigate } from "react-router-dom";

const SingIn = () => {
  const email = useForm("email");
  const password = useForm("password");
  const navigate = useNavigate();

  return (
    <SingINStyle>
        <div className="title">
          <EnterpriseLogo />
        </div>
        <Form>
          <Input placeholder="E-mail" type="email" {...email} />
          <div className="password">
            <Input placeholder="Password" type="password" {...password} />
            <a href="#">Forgot your password?</a>
          </div>
          <ButtonsDivStyle>
            <div className="social">
              <Button type="Button" width="180px" height="30px">
                <GoogleSvg />
                <a href="#" target="_blank">
                  Login with Google
                </a>
              </Button>
              <Button type="Button" width="180px" height="30px">
                <GitHubSvg />
                <a href="#" target="_blank">
                  Login with Github
                </a>
              </Button>
            </div>
            <Button type="Button" width="100%" height="30px">
              Login
            </Button>
          </ButtonsDivStyle>
        </Form>
        <Button type="button" width="80%" height="60px" onClick={()=>{navigate("/login/singup")}}>
          Create your account
        </Button>
    </SingINStyle>
  );
};

export default SingIn;
