import Sidebar from './Sidebar';
import WorkArea from './WorkArea';
import './styles.css';

const MainContainer = () => {
  return (
    <div className="main-container">
        <Sidebar />
        <WorkArea />
    </div>
  )
}

export default MainContainer