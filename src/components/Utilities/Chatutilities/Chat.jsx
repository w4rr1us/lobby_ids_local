import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../../../../src/context/ChatContext";

const Chat = () => {

  const { data } = useContext(ChatContext);

  return (
    <div className="chatChat">
      <div className="chatInfoChat">
        <span>{data.user?.displayName}</span>
        <div className="chatIconsChat">
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
