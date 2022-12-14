import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../../../src/context/AuthContext";
import { ChatContext } from "../../../../src/context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`messageChat ${message.senderId === currentUser.uid && "ownerChat"}`}
    >
      <div className="messageInfoChat">
        {/* <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        /> */}
        <span>-</span>
      </div>
      <div className="messageContentChat">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
