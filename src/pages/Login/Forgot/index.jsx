import React from "react";
import { EnterpriseLogo, Input, Form, Button } from "../../../components/index";
import { ForgotStyle } from "./style";
import useForm from "../../../Hooks/useForm";

const Forgot = () => {
  const email = useForm("email");

  return (
    <ForgotStyle>
      <header>
        <EnterpriseLogo />
        <p>
          Enter the email address associated with your account and we’ll send
          you a link to reset your password.
        </p>
      </header>
      <Form>
        <Input type="email" placeholder="E-mail" {...email}/>
        <Button type="submit" width="80%" height="30px" >    
          Send password reset instructions
        </Button>
      </Form>
    </ForgotStyle>
  );
};

export default Forgot;
