import { IconButton } from '@mui/material';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import logo from "../images/groups.png";

const CreateGroups = () => {
  return (
    <div className="createGroups-main-container">
      <div className="createGroups-text">
        <img src={logo} alt="logo" style={{ height:"2rem", width: "2rem" }} />
        <h1>Create a New Group!</h1>
      </div>
      <div className="createGroups-container">
        <input placeholder="Enter Group Name" className="search-box" />
        <IconButton>
            <DoneOutlineIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default CreateGroups