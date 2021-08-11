import React from 'react';
import { Icon, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const ChatItem = ({ id, name, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  }
  return (
    <ListItem>
      <Link className="chatList__link" to={`/Chats/${id}`}>{name}</Link>
      <button className="deleteChat" onClick={handleDelete} >{<Icon >delete</Icon>}</button>
    </ListItem>
  );
}