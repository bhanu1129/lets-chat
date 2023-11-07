import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';

const ChatArea = ({ props }) => {
  return (
    <div className="chatArea-container">

        <div className="chatArea-header">
            <p className="con-icon">T</p>
            <div className="header-text">
                <p className="con-title">Test#1</p>
                <p className="con-timeStamp">today</p>
            </div>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </div>

        <div className="messages-container">
            
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