import { Icon } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../../store/chats/action";

export const AddChat = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!value) {
            return;
        }

        const newId = `chat-${Date.now()}`;
        dispatch(addChat(newId, value));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input className="addChatInput" onChange={handleChange} value={value} />
            <button className="addChat" onSubmit={handleSubmit}>{<Icon>add_circle_outline</Icon>}</button>
        </form>
    );
};