/* eslint-disable no-undef */
import React from "react";
import { MessageCard, SearchBar } from "../../../components";
import {
  MessageLeftContentStyle,
  MessageRightContentStyle,
  MessageStyle,
} from "./style";
import { ReactComponent as ChatSvg } from "../../../assets/svg/chat-icon.svg";

const Message = () => {
  return (
    <MessageStyle>
      <MessageLeftContentStyle>
        <header className="leftheader">
          <div className="msg">
            <h4>Message</h4>
            <ChatSvg />
          </div>
          <SearchBar width="90%" placeholder="Search" />
        </header>
        <div className="msgcontent">
          <MessageCard
            img={
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/post-pisture-user-woman.webp`}
                alt="userimg"
              />
            }
            name="Woman user 1"
            msg="Me: hi, how is the new project going?"
            date="May 16"
            width="95%"
          />
          <MessageCard
            img={
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/post-pisture-user-man.webp`}
                alt="userimg"
              />
            }
            name="Man user 1"
            msg="Man user 1: i'm finishing now."
            date="May 15"
            active={true}
            width="95%"
          />
        </div>
      </MessageLeftContentStyle>
      <MessageRightContentStyle>
        <div className="chat">
          <MessageCard
            img={
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/post-pisture-user-man.webp`}
                alt="userimg"
              />
            }
            name="Man user 1"
            msg="Man user 1: i'm finishing now."
            date="May 15"
            width="300px"
            margin="5rem 0"
            bdradius=".1rem .5rem .5rem 1.5rem"
          />
          <MessageCard
            img={
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/ryuga-profile-img circulo.webp`}
                alt="userimg"
              />
            }
            name="ErykTavares"
            msg="How is the progress of the project?"
            date="May 15"
            width="300px"
            bdradius=".5rem .1rem 1.5rem .5rem"
          />
        </div>
        <div className="write">
          <p>write your message</p>
          <div className="icones">
            
          </div>
        </div>
      </MessageRightContentStyle>
    </MessageStyle>
  );
};

export default Message;
