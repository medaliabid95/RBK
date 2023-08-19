"use client"
import React, { useState, useEffect, createContext } from "react";
import dynamic from "next/dynamic";
import "./chat.css"
const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

const AdminChat = () => {
  const location = sessionStorage.getItem('location');
  const image = sessionStorage.getItem('image');
  const name = sessionStorage.getItem('name');
  const username = sessionStorage.getItem("name")
  console.log(username);
  const secret = "admin";
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    if (typeof document !== undefined) {
      setShowChat(true);
    }
  }, []);

  useEffect(() => {
    if (username === "" || secret === "") {
      return
    }
  }, [username, secret]);

  if (!showChat) return <div />;

  if (!location && !image && !name) {
    return (<div className='not-found'>404 not found</div>)
  }
  else {
    return (
      <div className="background">
        <div className="shadow">
          <ChatEngine
            height="calc(100vh)"
            projectID="0467645f-9db4-43e7-b8cd-a018f562e1e6"
            userName={username}
            userSecret={secret}
            renderNewMessageForm={() => <MessageFormSocial />}
          />
        </div>
      </div>
    );
  };
}

  export default AdminChat;
