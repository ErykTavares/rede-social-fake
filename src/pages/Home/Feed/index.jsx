/* eslint-disable no-undef */
import React from "react";
import { FeedPoststyle, FeedStyle, PostBarStyle } from "./style";
import { Input, Button, Post } from "../../../components";
import useForm from "../../../Hooks/useForm";
import { ReactComponent as PictureSvg } from "../../../assets/svg/picture-icon.svg";
import { ReactComponent as VideoSvg } from "../../../assets/svg/video-icon.svg";
import { ReactComponent as UpFileSvg } from "../../../assets/svg/Vector.svg";
import { ReactComponent as DotsSvg } from "../../../assets/svg/3-dots-horizontal-svgrepo-com.svg";

const Feed = () => {
  const post = useForm();
  const [dotmenu, setDotMenu] = React.useState(false);
  const [dotmenuanimation, setDotMenuAnimation] = React.useState(false);

  function togleDotMenu() {
    dotmenu
      ? (setDotMenuAnimation(false), setTimeout(() => setDotMenu(false), 1000))
      : (setDotMenu(true), setDotMenuAnimation(true));
  }

  return (
    <FeedStyle>
      <PostBarStyle>
        <div className="contentleft">
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/ryuga-profile-img circulo.webp`}
            alt="userimg"
          />
          <Input
            type="test"
            placeholder="What are you working on?"
            width="80%"
            {...post}
          />
        </div>
        <Button
          type="button"
          width="50px"
          height="50px"
          className="dotsbutton"
          onClick={togleDotMenu}
        >
          <DotsSvg />
        </Button>
        <div
          className={
            dotmenuanimation ? "postoptions dotmenu fade-in-right" : (dotmenu ? "postoptions dotmenu fade-out-right" : "postoptions" )
          }
        >
          <Button type="button" width="50px" height="50px">
            <PictureSvg />
            picture
          </Button>
          <Button type="button" width="50px" height="50px">
            <VideoSvg />
            video
          </Button>
          <Button type="button" width="100px" height="50px">
            <UpFileSvg />
            publish
          </Button>
        </div>
      </PostBarStyle>
      <FeedPoststyle>
        <Post
          img={
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/post-pisture-user-woman.webp`}
              alt="userimg"
            />
          }
          name="Woman user 1"
          title="Developer Frontend"
          hour="5h"
          content="I started working on a new project."
        />
        <Post
          img={
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/post-pisture-user-man.webp`}
              alt="userimg"
            />
          }
          name="Woman user 1"
          title="Developer BackEnd"
          hour="5h"
          content="This is my new project, I’m happy."
          contentimg={
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/image 1.webp`}
              alt="postimg"
            />
          }
        />
      </FeedPoststyle>
    </FeedStyle>
  );
};

export default Feed;
