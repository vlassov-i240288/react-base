import "../../App.css";
import "../../components/MessageList/messageList.css";
import { useEffect, useState, useCallback } from "react";
import { MessageList } from "../../components/MessageList/messageList";
import { Form } from "../../components/Form/form";
import { AUTHORS } from "../../constants";
import { useParams } from "react-router-dom";
import ChatList from "../../components/ChatList/ChatList";

const initialChats = {
  chat1: { name: "Chat 1", id: "chat1", messages: [] },
  chat2: { name: "Chat 2", id: "chat2", messages: [] },
  chat3: { name: "Chat 3", id: "chat3", messages: [] },
};

function Chats() {
  const heading = "Чаты REACT";

  const { chatId } = useParams();
  console.log(chatId);
  const [chats, setChats] = useState(initialChats);

  const handleSendMessage = useCallback(
    (newMessage) => {
      setChats({
        ...chats,
        [chatId]: {
          ...chats[chatId],
          messages: [...chats[chatId].messages, newMessage],
        },
      });
    },
    [chats, chatId]
  );

  useEffect(() => {
    if (
      !chatId ||
      !chats[chatId]?.messages.length ||
      chats[chatId].messages[chats[chatId].messages.length - 1].author ===
      AUTHORS.robot
    ) {
      return;
    }

    const timeout = setTimeout(() => {
      const newMessage = {
        text: "Я робот!",
        author: AUTHORS.robot,
        id: Date.now(),
      };

      handleSendMessage(newMessage);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [chats]);

  return (
    
      <div className="container">
        <div className="Heading">
          <h2>{heading}</h2>
        </div>

        <div className="header__center">

          <div className="header__left">
            <ChatList chats={chats} />
          </div>
          {!!chatId && (
            <div className="header__right">
              <Form onSendMessage={handleSendMessage} />
              <div className="MessageList">
                <MessageList messages={chats[chatId].messages} />
              </div>
            </div>
          )
          }
        </div>
      </div>
  );
}

export default Chats;