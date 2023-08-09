'use client'
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import axios from 'axios';

const AnalyticsPage = () => {
  const [chartData, setChartData] = useState([]);

  const botId = '5d7a71d0-8c0a-4544-84b8-fff1969c069e';
  const token = 'bp_pat_MHD5dH9nCSNrBXvPO7KqbSkCHqQHPIB4duFU';
  const headers = {
    'x-bot-id': botId,
    'Authorization': `Bearer ${token}`
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, conversationsResponse, messagesResponse] = await Promise.all([
          axios.get('https://api.botpress.cloud/v1/chat/users', { headers }),
          axios.get('https://api.botpress.cloud/v1/chat/conversations', { headers }),
          axios.get('https://api.botpress.cloud/v1/chat/messages', { headers })
        ]);

        const usersData = usersResponse.data;
        const conversationsData = conversationsResponse.data;
        const messagesData = messagesResponse.data;
          
        const processedData = usersData.users.map(user => {
          const matchingConversation = conversationsData.conversations.find(conversation => {
            return conversation.tags && conversation.tags['webchat:id'] === user.id;
          });

          const matchingMessage = messagesData.messages.find(message => {
            return message.conversationId === matchingConversation?.id;
          });

          return {
            name: new Date(user.createdAt).toLocaleDateString(),
            users: 1,
            conversations: matchingConversation ? matchingConversation.conversationCount : 0,
            messages: matchingMessage ? matchingMessage.messageCount : 0
          };
        });

        // Aggregate statistics for total users, conversations, and messages
        const totalUsers = processedData.length;
        const totalConversations = processedData.reduce((sum, entry) => sum + entry.conversations, 0);
        const totalMessages = processedData.reduce((sum, entry) => sum + entry.messages, 0);
      console.log(totalConversations);

        // Add aggregated data to the chart data
        setChartData([
          ...processedData,
          {
            name: 'Total',
            users: totalUsers,
            conversations: totalConversations,
            messages: totalMessages
          }
        ]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Chatbot Analytics</h1>
      <BarChart width={800} height={400} data={chartData}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Legend />
        <Bar dataKey='users' fill='#8884d8' name='Users' />
        <Bar dataKey='conversations' fill='#82ca9d' name='Conversations' />
        <Bar dataKey='messages' fill='#ffc658' name='Messages' />
      </BarChart>
    </div>
  );
};

export default AnalyticsPage;
