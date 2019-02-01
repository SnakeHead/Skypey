import React from "react";
import store from '../store';
import _ from 'lodash';
import Header from '../components/Header';
import Chats from '../components/Chats';
import './ChatWindow.css';
import MessageInput from './MessageInput';

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMessages = state.messages[activeUserId];
  const { typing } = state;

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMessages)}/>
      <MessageInput value={typing} />
    </div>
  );
};

export default ChatWindow;