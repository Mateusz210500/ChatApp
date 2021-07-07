import {useChat} from "context"
import { useEffect } from "react";
import {LeftRail} from 'components'
import { getChats, ChatEngine } from "react-chat-engine";

export const Chat = () => {
   const { myChats, setMyChats, chatConfig, selectedChat} = useChat();

   useEffect(() => {
       console.log('My chats:', myChats);
   }, [myChats]);

   return( 
   <>
   <LeftRail/>
    {/* {!!chatConfig && (
            <ChatEngine
            hideUI={true}
            userName={chatConfig.userName}
            projectID={chatConfig.projectID}
            userSecret={chatConfig.userSecret}
            onConnect={() => {
                getChats(chatConfig, setMyChats);
            }}
        />
    )} */}

        <div className='chat-container'>
            <div className='current-chat'>
                    {selectedChat ? <></> : <div className='no-chat-selected'>
                    <img src="/img/pointLeft.png" className="point-left" alt="point-left" />    
                    </div>}
            </div>
        </div>
   </>
   );
};


