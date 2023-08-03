'use client'
import { useEffect } from 'react';


const BotpressWebchat = () => {
  useEffect(() => {
    window.botpressWebChat.init({
      "composerPlaceholder": "Chat with RBK ",
      "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
      "botId": "5d7a71d0-8c0a-4544-84b8-fff1969c069e",
      "hostUrl": "https://cdn.botpress.cloud/webchat/v0",
      "messagingUrl": "https://messaging.botpress.cloud",
      "clientId": "5d7a71d0-8c0a-4544-84b8-fff1969c069e",
      "botName": "RBK ",
      "avatarUrl": "https://static.wixstatic.com/media/1e24fd_87de25913d9f49468b0e12f017ad98a5~mv2.png",
      "phoneNumber": "+216 71 85 85 85",
      "emailAddress": "hello@rbk.tn",
      "website": "https://www.rbktunisia.com/",
      "stylesheet": "https://webchat-styler-css.botpress.app/prod/code/9bf63e59-6d6c-42a5-bbb3-8d88b7c17270/v37290/style.css",
      "useSessionStorage": true,
      "showBotInfoPage": true,
      "enableConversationDeletion": true
  });

  }, []);

  return null; 
};

export default BotpressWebchat;



