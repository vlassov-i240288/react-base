import "../../App.css";
import "../../components/MessageList/messageList.css";
import { useCallback, useEffect, useState } from "react";
import { MessageList } from "../../components/MessageList/messageList";
import { Form } from "../../components/Form/form";
import { useParams } from "react-router-dom";
import { ChatList } from "../../components/ChatList/ChatList";
import { useSelector } from "react-redux";
import { selectName } from "../../store/profile/selector";
import firebase from "firebase";

function Chats() {
  const heading = "Чаты REACT";
  const { chatId } = useParams();
  const [chats, setChats] = useState({});
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const db = firebase.database();
    db.ref("chats").on("value", (snapshot) => {
      let newChats = {};
      snapshot.forEach((snap) => {
        const currentChat = snap.val();
        newChats[currentChat.id] = currentChat;
      });

      setChats(newChats);
    });
  }, []);

  useEffect(() => {
    const db = firebase.database();
    db.ref("messages").on("value", (snapshot) => {
      let newMessages = {};
      if (!snapshot) {
        return;
      }
      snapshot.forEach((snap) => {
        const currentMsgs = snap.val();
        if (newMessages[snap.key]) {
          newMessages[snap.key].concat(Object.values(currentMsgs));
        } else {
          newMessages[snap.key] = Object.values(currentMsgs);
        }
      });

      setMessages(newMessages);
    });

    return db.ref("messages").off;
  }, []);

  const addChat = (id, name) => {
    const db = firebase.database();
    db.ref("chats").child(id).set({
      name,
      id,
    });
  };

  const removeChat = (id) => {
    const db = firebase.database();
    db.ref("chats").child(id).remove();
  };

  const name = useSelector(selectName);

  const handleSendMessage = useCallback(
    (newMessage) => {
      const db = firebase.database();
      db.ref("messages")
        .child(chatId)
        .push({
          ...newMessage,
          author: name,
          id: `${chatId}-${Date.now()}`,
          chatId,
        });
    },
    [chatId, name]
  );

  return (
    <div className="container">
      <div className="Heading">
        <h2>{heading}</h2>
      </div>
      <div className="header__center">
        <div className="header__left">
          <ChatList chats={chats} onDeleteChat={removeChat} onAddChat={addChat} />
        </div>
        {!!chatId && (
          <div className="header__right">
            <Form onSendMessage={handleSendMessage} />
            <div className="MessageList">
              <MessageList messages={messages[chatId] || []} />
            </div>
          </div>
        )
        }
      </div>
    </div>
  );
}

export default Chats;



