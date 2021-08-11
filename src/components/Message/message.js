import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { selectName } from "../../store/profile/selector";
import "./Message.css";
import { AUTHORS } from "../../constants";

export const Message = ({ text, author }) => {
  // const name = useSelector(selectName);

  return (
    <div className="mess">
      <span className="messAutor">{author}:</span><span className="messText">{text}</span>
      {/* {author === AUTHORS.human ? name : author}: {text} */}
    </div>
  );
};
  // const name = useSelector(selectName);





