import { useChat } from "context"

export const ChatList = () => {
    const {
        myChats,
        chaatConfig,
        selectedChat,
        selectedChatClick,
        deleteChatClick,
    } = useChat();

    return(
        <div className="chat-list">
            {myChats.map((c, index) => (
                <div className={`chat-list-item ${
                    selectedChat?.id === c.id ? 'selected-chat-item' : ''
                }`}>
                    key={index}
                </div>
            ))}
        </div>
    )
}