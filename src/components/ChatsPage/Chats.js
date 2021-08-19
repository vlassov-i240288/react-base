import "../../App.css";
import "../../components/MessageList/messageList.css";
import { useCallback } from "react";
import { MessageList } from "../../components/MessageList/messageList";
import { Form } from "../../components/Form/form";
import { useParams } from "react-router-dom";
import ChatList from "../../components/ChatList/ChatList";
import { useDispatch, useSelector } from "react-redux";
import { deleteChat, sendMessageWithReply } from "../../store/chats/action";
import { selectName } from "../../store/profile/selector";
import { ChatsRender } from "./ChatsRender";

function Chats() {
  const heading = "Чаты REACT";
  const { chatId } = useParams();
  const name = useSelector(selectName);
  const chats = useSelector(state => state.chats);
  const dispatch = useDispatch();

  const handleSendMessage = useCallback(
    (newMessage) => {
      dispatch(sendMessageWithReply(chatId, newMessage, { author: name }));
    },
    [chatId]
  );

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
    // <ChatsRender />
  );
}

export default Chats;