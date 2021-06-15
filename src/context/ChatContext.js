import {fb} from 'service';
import { createContext, useState } from 'react';
import { deleteChat, getMessages, leaveChat, newChat} from 'react-chat-engine'

export const ChatContext = createContext();

export const ChatProvider = ({ children, authUser }) => {
    const [myChats, setMyChats] = useState();
    const [chatConfig, setChatConfig] = useState();
    const [selectedChat, setSelectedChat] = useState();

    const createChatClick = () => {
        newChat(chatConfig, {title: ''});
    }

    const deleteChatClick = chat => {
        const isAdmin = chat.admin == chatConfig.userName;

        if(
            isAdmin && 
            window.confirm('Are you sure you want to delete this chat?')
        ){
            deleteChat(chatConfig, chat.id);
        } else if(window.confirm('Are you sure you want to leave this chat?')){
            leaveChat(chatConfig, chat.id, chatConfig.userName)
        }
    }

    const selectChatClick = chat => {
        getMessages(chatConfig, chat.id, messages => {
            setSelectedChat({
                ...chat,
                messages,
            });
        });
    };

    return(
        <ChatContext.Provider
        value={{

        }}
        >

        </ChatContext.Provider>
    )
};