import React, { useCallback } from "react";
import "./Message.css";

export const Message = ({ text, author }) => {

  return (
    <div className="mess">
      <span className="messAutor">{author}:</span><span className="messText">{text}</span>
    </div>
  );
};





