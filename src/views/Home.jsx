import './Home.css';
import SideBar from '../containers/SideBar';
import Dashboard from '../containers/Dashboard'

function Home() {
  


  return (
    <div className='home-fragment'>
      <SideBar />
      <Dashboard />
    </div>
  );
}

export default Home;