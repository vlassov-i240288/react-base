import React, { useCallback } from "react";
import { Message } from "../Message/message";

export const MessageList = ({ messages }) => {

  const renderMessage = useCallback((mess) => (
    <Message text={mess.text} author={mess.author} key={mess.id} />
  ), []);

  return messages.map(renderMessage);
};
