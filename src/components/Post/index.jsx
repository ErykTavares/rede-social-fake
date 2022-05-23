/* eslint-disable no-undef */
import React from "react";
import { PostStyle } from "./style";
import { ReactComponent as LikeSvg } from "../../assets/svg/like-icon.svg";
import { ReactComponent as ComentSvg } from "../../assets/svg/comment-icon.svg";
import { ReactComponent as ShareSvg } from "../../assets/svg/share-icon.svg";
import ReactItem from "./ReactItem";

const Post = ({ img, name, title, hour, content, contentimg }) => {
  return (
    <PostStyle>
      <header className="postheader">
        <div className="userdata">
          {img}
          <div className="texts">
            <h4>{name}</h4>
            <h5>{title}</h5>
            <h5>{hour}</h5>
          </div>
        </div>
        <h6>+ Follow</h6>
      </header>
      <div className="postcontent">
        {content}
        {contentimg}
      </div>
      <div className="reactnumber">
        <ReactItem width="65px" small={true}>
          <LikeSvg />
          <p>100 liked</p>
        </ReactItem>
        <ReactItem width="100px" small={true}>
          <ComentSvg />
          <p>20 comments</p>
        </ReactItem>
        <ReactItem width="65px" small={true}>
          <ShareSvg />
          <p>5 shares</p>
        </ReactItem>
      </div>
      <div className="reactbar">
        <ReactItem width="85px">
          <LikeSvg />
          <p>i liked it</p>
        </ReactItem>
        <ReactItem width="105px">
          <ComentSvg />
          <p>comment</p>
        </ReactItem>
        <ReactItem width="70px">
          <ShareSvg />
          <p>share</p>
        </ReactItem>
      </div>
    </PostStyle>
  );
};

export default Post;
