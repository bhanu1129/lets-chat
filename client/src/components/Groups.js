import "./styles.css";
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../images/groups.png";

const Groups = () => {
  return (
    <div className="list-container">

        <div className="ug-header">
            <img src={logo} alt="logo" style={{ height:"2rem", width: "2rem" }} />
            <p className="ug-title">Available Groups</p>
        </div>

        <div className="sb-search">
            <IconButton>
                <SearchIcon />
            </IconButton>
            <input type="text" placeholder="Search" className="search-box" />
        </div>

        <div className="ug-list">
            <div className="list-tem">
                <p className="con-icon">T</p>
                <p className="con-title">Test Group</p>
            </div>
            <div className="list-tem">
                <p className="con-icon">T</p>
                <p className="con-title">Test Group</p>
            </div>
            <div className="list-tem">
                <p className="con-icon">T</p>
                <p className="con-title">Test Group</p>
            </div>
            <div className="list-tem">
                <p className="con-icon">T</p>
                <p className="con-title">Test Group</p>
            </div>
            <div className="list-tem">
                <p className="con-icon">T</p>
                <p className="con-title">Test Group</p>
            </div>
            <div className="list-tem">
                <p className="con-icon">T</p>
                <p className="con-title">Test Group</p>
            </div>
            <div className="list-tem">
                <p className="con-icon">T</p>
                <p className="con-title">Test Group</p>
            </div>
            <div className="list-tem">
                <p className="con-icon">T</p>
                <p className="con-title">Test Group</p>
            </div>
            <div className="list-tem">
                <p className="con-icon">T</p>
                <p className="con-title">Test Group</p>
            </div>
        </div>
    </div>
  )
}

export default Groups