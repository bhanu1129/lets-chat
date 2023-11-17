import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
import { useState } from 'react';

const ChatArea = () => {
    const [conversations, setConversations] = useState([
      {
        name: "Test#1",
        lastMessage: "Last message 1",
        timeStamp: "today",
      },
      {
        name: "Test#2",
        lastMessage: "Last message 2",
        timeStamp: "today",
      },
      {
        name: "Test#3",
        lastMessage: "Last message 3",
        timeStamp: "today",
      },
    ]);

  var props = conversations[0];

  return (
    <div className="chatArea-container">

        <div className="chatArea-header">
            <p className="con-icon">{props.name[0]}</p>
            <div className="header-text">
                <p className="con-title">{props.name}</p>
                <p className="con-timeStamp">{props.timeStamp}</p>
            </div>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </div>

        <div className="messages-container">
            <MessageOthers />
            <MessageSelf />
            <MessageOthers />
            <MessageSelf />
            <MessageOthers />
            <MessageSelf />
            <MessageOthers />
            <MessageSelf />
        </div>

        <div className="text-input-area">
            <input placeholder="type a message..." className="search-box"/>
            <IconButton>
                <SendIcon />
            </IconButton>
        </div>
    </div>
  )
}

export default ChatArea