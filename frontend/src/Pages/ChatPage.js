import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatPage = () => {

    const [chats, setChats] = useState([]);

    useEffect(() => {
        fetchChats();
    });

    const fetchChats = async() => {
        const response = await axios.get('/api/chat');
        setChats(response.data);
    }

    return (
        <div>
            {chats.map(chat => <div key={chat._id}>{chat.chatName}</div>)}
        </div>
    )
};

export default ChatPage;
