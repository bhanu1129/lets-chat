import "./styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";

import ConversationItems from "./ConversationItems";

const Sidebar = () => {
  const navigate = useNavigate();

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

  return (
    <div className="sidebar-container">
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton onClick={()=>navigate("/app/users")}>
            <PersonAddIcon />
          </IconButton>
          <IconButton onClick={()=>navigate("/app/groups")}>
            <GroupAddIcon />
          </IconButton>
          <IconButton onClick={()=>navigate("/app/create-groups")}>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <NightlightIcon />
          </IconButton>
        </div>
      </div>

      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder="Search" className="search-box" />
      </div>

      <div className="sb-conversations">
        {conversations.map((conversations) => {
          return (
            <ConversationItems props={conversations} key={conversations.name} />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
