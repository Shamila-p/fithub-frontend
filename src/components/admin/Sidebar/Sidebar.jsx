
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Sidebar.css';
import AdminUserData from '../UserData/AdminUserData';
import { SidebarData } from './data';
import AdminTrainerData from '../TrainerData/AdminTrainerData';
import PlanData from '../PlanData/PlanData';
import AdminNotification from '../../../pages/Admin/Notification/AdminNotification';
import ChallengeCategory from '../../../pages/Admin/Challenges/ChallengeCategory';
import CategoryForChallenge from '../Challenges/CategoryForChallenge';
import { logoutAdmin } from '../../../redux/adminAuthSlice'
import { useDispatch } from 'react-redux';
import HomeIcon from '@mui/icons-material/Home';
import AdminMemberData from '../MemberData/AdminMemberData';



function Sidebar() {
  const location = useLocation(); // Get the current location
  const [selected, setSelected] = useState(0); // Initialize the selected state with 0
  const dispatch=useDispatch()
  const navigate=useNavigate()

  // Find the index of the current path in the SidebarData array
  const activeIndex = SidebarData.findIndex(item => item.path === location.pathname);
  const handleLogout =()=>{
    dispatch(logoutAdmin())
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
          <Route path="/admin/dashboard" />
          <Route path="/admin/users" element={<AdminUserData />} />
          <Route path="/admin/fithub-members" element={<AdminMemberData/>} />
          <Route path="/admin/trainers" element={<AdminTrainerData/>}/>
          <Route path="/admin/plan" element={<PlanData/>}/>
          <Route path="/admin/challenges" element={<CategoryForChallenge/>}/>
          {/* Add routes for other pages */}
        </Routes>
      </div>
    </div>
  );
}

export default Sidebar;
