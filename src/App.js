import "./App.css";
import "./components/MessageList/messageList.css";
import { useRef, useEffect, useState, useCallback } from "react";
import { Message } from "./components/Message/message";
import { MessageList } from "./components/MessageList/messageList";
import { Form } from "./components/Form/form";
import { AUTHORS } from "./constants";
import Test from "./components/TestComp/TestComp";
import FolderList from "./components/ChatList/ChatList";

function App() {
  const heading = "Чат REACT";
  const [messages, setMessages] = useState([]);
  

  const handleSendMessage = useCallback(
    (newMessage) => {
      setMessages([...messages, newMessage]);
      console.log(newMessage);
    },
    [messages]
  );

  useEffect(() => {
    if (
      !messages.length ||
      messages[messages.length - 1].author === AUTHORS.robot
    ) {
      return;
    }

    const timeout = setTimeout(() => {
      const newMessage = {
        text: "Я робот!",
        author: AUTHORS.robot,
        id: Date.now(),
      };

      setMessages([...messages, newMessage]);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [messages]);

  return (
    <div className="App-header">

      <div className="container">
        <div className="Heading">
          <h1>{ heading }</h1>
        </div>

        <div className="header__center">
        
          <div className="header__left">
            <Form onSendMessage={handleSendMessage} />    
            <FolderList />
          </div>

          <div className="header__right">
            <div className="MessageList">
              <MessageList messages={messages} />
            </div>
          </div>

        </div>
      </div>
        
        
    </div>
    
  );
}

export default App;
