import "../../App.css";
import "../../components/MessageList/messageList.css";
import { useEffect, useState, useCallback } from "react";
import { MessageList } from "../../components/MessageList/messageList";
import { Form } from "../../components/Form/form";
import { AUTHORS } from "../../constants";
import { useParams } from "react-router-dom";
import ChatList from "../../components/ChatList/ChatList";
import { useDispatch, useSelector } from "react-redux";
import { deleteChat, sendMessage } from "../../store/chats/action";
import { selectName } from "../../store/profile/selector";

function Chats() {
  const heading = "Чаты REACT";
  const { chatId } = useParams();
  const name = useSelector(selectName);
  const chats = useSelector(state => state.chats);
  const dispatch = useDispatch();

  const handleSendMessage = useCallback(
    (newMessage) => {
      dispatch(sendMessage(chatId, newMessage, { author: name }));
    },
    [chatId]
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
        author: AUTHORS.robot,
        text: "Я робот!",
        id: Date.now(),
      };

      handleSendMessage(newMessage);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [chats]);

  const handleDeleteChat = useCallback((id) => {
    dispatch(deleteChat(id));
  }, []);

  return (

    <div className="container">
      <div className="Heading">
        <h2>{heading}</h2>
      </div>
      <div className="header__center">
        <div className="header__left">
          {/* <ChatList chats={chats} /> */}
          <ChatList chats={chats} onDeleteChat={handleDeleteChat} />
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