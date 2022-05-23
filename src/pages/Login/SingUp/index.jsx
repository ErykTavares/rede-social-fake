import React from "react";
import { Form, Button, EnterpriseLogo, Input } from "../../../components";
import { SingUpStyle } from "./style";
import useForm from "../../../Hooks/useForm";
import { ReactComponent as GoogleSvg } from "../../../assets/svg/google-icon.svg";
import { ReactComponent as GitHubSvg } from "../../../assets/svg/github-icon.svg";

const SingUp = () => {
  const name = useForm();
  const lastname = useForm();
  const email = useForm("email");
  const username = useForm();
  const password = useForm("password");

  return (
    <SingUpStyle>
      <header>
        <EnterpriseLogo />
        <div className="socialbuttons">
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
        <h5>OR</h5>
      </header>
      <Form>
        <div className="doubleInput">
          <Input type="text" placeholder="Name" {...name} />
          <Input type="text" placeholder="LastName" {...lastname} />
        </div>
        <Input type="email" placeholder="E-Mail" {...email} />
        <div className="username">
            <Input type="text" placeholder="UserName" {...username} />
            <p>(only letters, numbers, and underscores)</p>
        </div>
        <div className="password">
            <Input type="password" placeholder="Password" {...password} />
                <p>(min. 8 char)</p>
        </div>
        <Button type="Submit" width="80%" height="30px">
            Create
        </Button>
      </Form>
      <h6>By joining, you agree to the <span>Terms</span> and <span>Privacy Policy</span>.</h6>
    </SingUpStyle>
  );
};

export default SingUp;
