import React from "react";
import { MessageCardStyle } from "./style";

const MessageCard = ({img, name, msg, date, active, width, margin, bdradius}) => {
  return (
    <MessageCardStyle active={active} width={width} margin={margin} bdradius={bdradius}>
        {img}
        <div className="contenttexts" >
            <h3>{name}</h3>
            <h5>{msg}</h5>
            <h5 className="msgcarddate">{date}</h5>
        </div>
    </MessageCardStyle>
  );
};

export default MessageCard;
