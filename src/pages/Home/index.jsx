/* eslint-disable no-undef */
import React from "react";
import { Header, SearchBar, Button } from "../../components";
import HomeSubRoutes from "../../routes/HomeSubRoutes";
import Feed from "./Feed";
import {
  ContentStyle,
  HomeStyle,
  LeftContentStyle,
  RightContentStyle,
} from "./style";
import { ReactComponent as ArrowDownsvg } from "../../assets/svg/arrow-down-icon.svg";
import Message from "./Message";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [leftmenubar, setLeftMenuBar] = React.useState(false);
  const [leftmenubaranimation, setFeftMenuBarAnimation] = React.useState(false);

  function handleTogleLeftMenu() {
    leftmenubar
      ? (setFeftMenuBarAnimation(false),
        setTimeout(() => setLeftMenuBar(false), 1000))
      : (setFeftMenuBarAnimation(true), setLeftMenuBar(true));
  }

  return (
    <HomeStyle>
      <Header />
      <ContentStyle>
        <Button
          type="button"
          width="30px"
          height="30px"
          className="leftmenubutton"
          onClick={handleTogleLeftMenu}
        >
          <ArrowDownsvg />
        </Button>
        <LeftContentStyle
          className={
            leftmenubaranimation
              ? "leftmenu fade-in-left"
              : leftmenubar && "fade-out-left"
          }
        >
          <header>
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/banner-user.webp`}
              alt="userbanner"
              className="banner"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/ryuga-profile-img circulo.webp`}
              alt="user profile img"
              className="userimg"
            />
            <div className="texts">
              <h2>ErykTavares</h2>
              <h4>Front-End Software Engineer</h4>
            </div>
          </header>
          <div className="projects">
            <div className="row">
              <h5>My projects</h5> <h5>15</h5>
            </div>
            <div className="row">
              <h5>My articles</h5> <h5>18</h5>
            </div>
            <div className="row">
              <h5>My connections</h5> <h5>200</h5>
            </div>
          </div>
          <div className="friends">
            <SearchBar width="80%" placeholder="Search People" />
            <div className="peoplecards">
              <div className="people">
                <div className="peopledata">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/post-pisture-user-woman.webp`}
                    alt="userimg"
                  />
                  <div className="text">
                    <h4>Woman user 1</h4>
                    <h5>Developer Frontend</h5>
                  </div>
                </div>
                <h6>+ Follow</h6>
              </div>
              <div className="people">
                <div className="peopledata">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/post-pisture-user-man.webp`}
                    alt="userimg"
                  />
                  <div className="text">
                    <h4>Man user 1</h4>
                    <h5>Developer Frontend</h5>
                  </div>
                </div>
                <h6>+ Follow</h6>
              </div>
              <div className="people">
                <div className="peopledata">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/post-pisture-user-woman.webp`}
                    alt="userimg"
                  />
                  <div className="text">
                    <h4>Woman user 2</h4>
                    <h5>Developer Frontend</h5>
                  </div>
                </div>
                <h6>+ Follow</h6>
              </div>
              <div className="people">
                <div className="peopledata">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/post-pisture-user-man.webp`}
                    alt="userimg"
                  />
                  <div className="text">
                    <h4>Man user 2</h4>
                    <h5>Developer Frontend</h5>
                  </div>
                </div>
                <h6>+ Follow</h6>
              </div>
            </div>
          </div>
        </LeftContentStyle>
        <RightContentStyle>
          <HomeSubRoutes Feed={<Feed />} Message={<Message />} />
        </RightContentStyle>
      </ContentStyle>
    </HomeStyle>
  );
};

export default Home;
