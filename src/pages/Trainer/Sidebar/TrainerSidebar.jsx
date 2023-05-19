import React,{ useState } from 'react'
import { SidebarData } from './data';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import TrainerUsers from '../Users/TrainerUsers';
import TrainerDashboardContainer from '../../../components/Trainer/TrainerDashboardContainer/TrainerDashboardContainer';
import TrainerDashboard from '../Dashboard/TrainerDashboard';


function TrainerSidebar() {
    const location = useLocation(); // Get the current location
    const [selected, setSelected] = useState(0); // Initialize the selected state with 0

  // Find the index of the current path in the SidebarData array
  const activeIndex = SidebarData.findIndex(item => item.path === location.pathname);

  // Set the selected state based on the active index
  if (activeIndex !== -1 && selected !== activeIndex) {
    setSelected(activeIndex);
  }
  return (
    <div className='Sidebar'>
    <div className="logo">
      <img src="https://uxwing.com/wp-content/themes/uxwing/download/fitness-gym-yoga-spa/fitness-icon.png" alt="" />
      <span>FitHub</span>
    </div>
    <div className="menu">
      {SidebarData.map((item, index) => (
        <NavLink
          to={item.path}
          className={selected === index ? "menuItem active" : "menuItem"}
          onClick={() => setSelected(index)}
          key={index}
        >
          <item.icon/>
          <span>{item.heading}</span>
        </NavLink>
      ))}
    </div>
    <div className='MainContent'>
      <Routes>
        <Route path="/trainer/dashboard" element={<TrainerDashboard/>} />
        <Route path="/trainer/users" element={<TrainerUsers/>} />
        <Route path="/admin/notification" />
        {/* Add routes for other pages */}
      </Routes>
    </div>
  </div>
  )
}

export default TrainerSidebar