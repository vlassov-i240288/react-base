import React from "react";
import "./Message.css";

export const Message = ({ text, author }) => (
    <div className="mess">
      <span className="messAutor">{author}:</span><span className="messText">{text}</span> 
    </div>
);