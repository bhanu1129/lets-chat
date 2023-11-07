import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import './styles.css';

const MainContainer = () => {
  return (
    <div className="main-container">
        <Sidebar />
        <ChatArea />
    </div>
  )
}

export default MainContainer