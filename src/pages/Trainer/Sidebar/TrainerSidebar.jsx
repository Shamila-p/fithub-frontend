import React,{ useState } from 'react'
import { SidebarData } from './data';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation, useNavigate } from 'react-router-dom';
import TrainerUsers from '../Users/TrainerUsers';
import TrainerDashboardContainer from '../../../components/Trainer/TrainerDashboardContainer/TrainerDashboardContainer';
import TrainerDashboard from '../Dashboard/TrainerDashboard';
import { useDispatch } from 'react-redux';
import { logoutTrainer } from '../../../redux/trainerAuthSlice';
import HomeIcon from '@mui/icons-material/Home';
import Chat from '../Chat/Chat'

function TrainerSidebar() {
    const location = useLocation(); // Get the current location
    const [selected, setSelected] = useState(0); 
    // Initialize the selected state with 0
    const dispatch = useDispatch();
    const navigate=useNavigate()

  // Find the index of the current path in the SidebarData array
  const activeIndex = SidebarData.findIndex(item => item.path === location.pathname);
  const handleLogout =()=>{
      dispatch(logoutTrainer())
      navigate("/trainer/login")

  }
  // Set the selected state based on the active index
  if (activeIndex !== -1 && selected !== activeIndex) {
    setSelected(activeIndex);
  }
  return (
    <div className='Sidebar'>
    <div className="logo">
      {/* <img src="https://uxwing.com/wp-content/themes/uxwing/download/fitness-gym-yoga-spa/fitness-icon.png" alt="" /> */}
      <span>FitHub</span>
    </div>
    <div className="menu">
      {SidebarData.map((item, index) => (
        <NavLink
          to={item.path}
          className={selected === index ? "menuItem actives" : "menuItem"}
          onClick={() => setSelected(index)}
          key={index}
        >
          <item.icon/>
          <span>{item.heading}</span>
        </NavLink>
      ))}

          <NavLink
          className="menuItem "
          onClick={handleLogout}
        >
          <HomeIcon/>
          <span>Logout</span>
        </NavLink>
  
    </div>
    <div className='MainContent'>
      <Routes>
        <Route path="/trainer/dashboard" element={<TrainerDashboard/>} />
        <Route path="/trainer/users" element={<TrainerUsers/>} />
        <Route path="/trainer/chat" element={<Chat/>}/>
        {/* Add routes for other pages */}
      </Routes>
    </div>
  </div>
  )
}

export default TrainerSidebar