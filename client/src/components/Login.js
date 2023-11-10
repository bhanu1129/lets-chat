import { Button, TextField } from "@mui/material";
import logo from "../images/live-chat.png";

const Login = () => {
  return (
    <div className="login-container">
        <div className="image-container">
            <img src={logo} alt="logo" className="welcome-logo" />
        </div>
        <div className="login-box">
            <p className="login-text">Login to your Account!</p>
            <TextField id="standard-basic" label="Enter Username" variant="outlined" />
            <TextField id="standard-password-input" label="Enter Password" type="password" variant="outlined" />
            <Button variant="outlined">Login</Button>
        </div>
    </div>
  )
}

export default Login