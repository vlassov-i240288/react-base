import { Icon } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../../store/chats/action";
import { useInput } from "../../utils/useinput";

// export const AddChat = ({onAddChat}) => {
//     const dispatch = useDispatch();
//     const { value, handleChange, reset } = useState("");

//     // const handleChange = (e) => {
//     //     setValue(e.target.value);
//     // };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!value) {
//             return;
//         }

//         const newId = `chat-${Date.now()}`;
//         (onAddChat(newId, value));
//         reset();
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input className="addChatInput" onChange={handleChange} value={value} />
//             <button className="addChat" onSubmit={handleSubmit}>{<Icon>add_circle_outline</Icon>}</button>
//         </form>
//     );
// };

export const AddChat = ({ onAddChat }) => {
    const dispatch = useDispatch();
  
    const { value, handleChange, reset } = useInput("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!value) {
        return;
      }
  
      const newId = `chat-${Date.now()}`;
      onAddChat(newId, value);
      reset();
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input className="addChatInput" onChange={handleChange} value={value} />
        <button className="addChat" onSubmit={handleChange}>{<Icon>add_circle_outline</Icon>}</button>
      </form>
    );
  };