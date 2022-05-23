import React from "react";
import { ProfileHeaderMenuStyle, UserMenuStyle } from "./style";
import { Button } from "../../index";
import { ReactComponent as ArrowDownsvg } from "../../../assets/svg/arrow-down-icon.svg";

const ProfileHeaderMenu = ({className}) => {
  // eslint-disable-next-line no-unused-vars
  const [profilemenu, setProfileMenu] = React.useState(false);
  const [profilemenuanimation, setProfileMenuAnimation] = React.useState(false);

  function handleTogleProfileMenu() {
    profilemenu
      ? (setProfileMenuAnimation(false),
        setTimeout(() => setProfileMenu(false), 1000))
      : (setProfileMenu(true), setProfileMenuAnimation(true));
  }

  return (
    <ProfileHeaderMenuStyle className={className}>
      <img
        // eslint-disable-next-line no-undef
        src={`${process.env.PUBLIC_URL}/assets/img/ryuga-profile-img circulo.webp`}
        alt="user-profile-img"
      />
      <Button type="button" onClick={handleTogleProfileMenu}>
        <ArrowDownsvg />
      </Button>
      <h6>Me</h6>
      {profilemenu && (
        <UserMenuStyle className={profilemenuanimation ? "scale-in profilemenu" : "scale-out profilemenu"}>
          <nav>
            <ul>
              <li>
                <h5>Configurations</h5>
              </li>
              <li>
                <h5>Logout</h5>
              </li>
            </ul>
          </nav>
        </UserMenuStyle>
      )}
    </ProfileHeaderMenuStyle>
  );
};

export default ProfileHeaderMenu;
