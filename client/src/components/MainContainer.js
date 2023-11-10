import { useState } from 'react';
import './styles.css';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';
import Users_Groups from './Users_Groups';

const MainContainer = () => {
  const [conversations, setConversations] = useState([
    {
        name: "Test#1",
        lastMessage: "Last message 1",
        timeStamp: "today"
    },
    {
        name: "Test#2",
        lastMessage: "Last message 2",
        timeStamp: "today"
    },
    {
        name: "Test#3",
        lastMessage: "Last message 3",
        timeStamp: "today"
    },
  ]);

  return (
    <div className="main-container">
        <Sidebar />
        <Users_Groups />
        {/* <Welcome /> */}
        {/* <CreateGroups /> */}
        {/* <ChatArea props={conversations[0]}/> */}
    </div>
  )
}

export default MainContainer