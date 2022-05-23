import React from "react";
import EnterpriseLogo from "../EnterpriseLogo";
import {
  HeaderStyle,
  HeaderLeftContentStyle,
  HeaderRightContentStyle,
} from "./style";
import { Button, SearchBar } from "../index";
import ProfileHeaderMenu from "./ProfileHeaderMenu";
import { NavLink } from "react-router-dom";
import { ReactComponent as Homesvg } from "../../assets/svg/home-icon.svg";
import { ReactComponent as Msgsvg } from "../../assets/svg/chat-icon.svg";
import { ReactComponent as MenuMobilesvg } from "../../assets/svg/MenuMobile.svg";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [toglemenumobile, setTogleMenuMobile] = React.useState(false);
  const [menumobileanimation, setMenuMobileAnimation] = React.useState(false);

  return (
    <HeaderStyle>
      <HeaderLeftContentStyle>
        <NavLink to="/">
          <EnterpriseLogo activeminlogo={true} />
        </NavLink>
        <SearchBar width="80%" placeholder="Search" />
      </HeaderLeftContentStyle>
      <Button
        type="button"
        className="menumobile"
        onClick={() => {
          toglemenumobile
            ? (setMenuMobileAnimation(false),
              setTimeout(() => setTogleMenuMobile(false), 1000))
            : (setMenuMobileAnimation(true), setTogleMenuMobile(true));
        }}
      >
        <MenuMobilesvg />
      </Button>
      <HeaderRightContentStyle
        className={
          toglemenumobile
            ? `rightcontentMenuMobile ${
                menumobileanimation ? "slit-in-vertical" : "slit-out-vertical"
              }`
            : ""
        }
      >
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/">
                <Homesvg />
                <h5>Home</h5>
              </NavLink>
            </li>
            <li>
              <NavLink to="/message">
                <Msgsvg />
                <h5>Message</h5>
              </NavLink>
            </li>
          </ul>
        </nav>
        <ProfileHeaderMenu className="profile" />
      </HeaderRightContentStyle>
    </HeaderStyle>
  );
};

export default Header;
