import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import "./ChatList.css";
import { Link } from 'react-router-dom';
import { AddChat } from "./AddChat";
import { useSelector } from 'react-redux';
import { ChatItem } from './deleteChat';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ChatList({ chats, onDeleteChat }) {
  const classes = useStyles();
  const heading = "Список чатов";
  return (
    <List className="chatList__list">
      <h3 className="heading__chatList">{heading}</h3>
      {Object.values(chats).map((c) => (
        <ListItem key={c.id}>
          <ChatItem
            name={c.name}
            key={c.id}
            id={c.id}
            onDelete={onDeleteChat}
          />
         
        </ListItem>
        
      ))}
      <ListItem>
        <AddChat />
      </ListItem>
    </List>
  );
};