import React from "react";
import { EnterpriseLogoStyle, MinEnterpriseLogoStyle } from "./style";
import { ReactComponent as KeyBoard } from "../../assets/svg/keyboard.svg";

const EnterpriseLogo = ({ activeminlogo }) => {
  return (
    <>
      {activeminlogo ? (
        <MinEnterpriseLogoStyle>
          SD
          <span>
            <KeyBoard />
          </span>
        </MinEnterpriseLogoStyle>
      ) : (
        <EnterpriseLogoStyle>
          SocialDev
          <span>
            <KeyBoard />
          </span>
        </EnterpriseLogoStyle>
      )}
    </>
  );
};

export default EnterpriseLogo;
