'use client'
import { useEffect } from 'react';


const BotpressWebchat = () => {
  useEffect(() => {
    window.botpressWebChat.init({
      "composerPlaceholder": "Chat with RBK ",
      "botId": "5d7a71d0-8c0a-4544-84b8-fff1969c069e",
      "hostUrl": "https://cdn.botpress.cloud/webchat/v0",
      "messagingUrl": "https://messaging.botpress.cloud",
      "clientId": "5d7a71d0-8c0a-4544-84b8-fff1969c069e",
      "botName": "RBK ",
      "avatarUrl": "https://img.freepik.com/premium-vector/bot-icon-chatbot-icon-concept-vector-illustration_230920-1482.jpg?w=740",
      "phoneNumber": "+216 71 85 85 85",
      "emailAddress": "hello@rbk.tn",
      "website": "https://www.rbktunisia.com/",
      "stylesheet": "https://webchat-styler-css.botpress.app/prod/code/9bf63e59-6d6c-42a5-bbb3-8d88b7c17270/v98720/style.css",
      "useSessionStorage": true,
      "showBotInfoPage": true,
      "enableConversationDeletion": false
  });

  }, []);

  return null; 
};

export default BotpressWebchat;



