// import React, { useState } from 'react';
// import './Sidebar.css';
// import { SidebarData } from './data';
// import MainDash from '../MainDash/MainDash';

// function Sidebar() {
//   const [selected,setSelected]=useState(0)
  
//   return (
//     <>
//     <div className='Sidebar'>
//         <div className="logo">
//             <img src="https://uxwing.com/wp-content/themes/uxwing/download/fitness-gym-yoga-spa/fitness-icon.png" alt="" />
//             <span>FitHub</span>
//         </div>
//     <div className="menu">
//         {SidebarData.map((item, index) => {
//           return (
//             <div
//             className={selected === index ? "menuItem active" : "menuItem"}
//             key={index}
//             onClick={() => setSelected(index)}
//           >
//               <item.icon />
//               <span>{item.heading}</span>
//             </div>
//           );
//         })}
//       </div>
//     </div>
   
//     {/* <div className='main-dash'>
//     <MainDash selectedItem={SidebarData[selected]} />



    
//   </div> */}


//     </>
    
//   )
// }

// export default Sidebar

// import React, { useState } from 'react';
// import './Sidebar.css';
// import { SidebarData } from './data';
// import MainDash from '../MainDash/MainDash';
// import SidebarItem from './SidebarItem';

// function Sidebar() {
//   const [selected, setSelected] = useState(0);

//   return (
//     <>
//       <div className='Sidebar'>
//         <div className="logo">
//           <img src="https://uxwing.com/wp-content/themes/uxwing/download/fitness-gym-yoga-spa/fitness-icon.png" alt="" />
//           <span>FitHub</span>
//         </div>
//         <div className="menu">
//           {SidebarData.map((item, index) => (
//             <SidebarItem
//               key={index}
//               item={item}
//               index={index}
//               selected={selected}
//               setSelected={setSelected}
//             />
//           ))}
//         </div>
//       </div>

//       <div className='main-dash'>
//         <MainDash selectedItem={SidebarData[selected]} />
//       </div>
//     </>
//   );
// }

// export default Sidebar;

// import React, { useState } from 'react';
// import './Sidebar.css';
// import { SidebarData } from './data';
// import MainDash from '../MainDash/MainDash';
// // import UsersPage from '../UsersPage/UsersPage';
// // import TrainersPage from '../TrainersPage/TrainersPage';
// import AdminUserData from '../UserData/AdminUserData'
// // Import other page components

// function Sidebar() {
//   const [selected, setSelected] = useState(0);
  
//   // Function to render the corresponding component based on the selected item
//   const renderPage = () => {
//     switch (selected) {
//       case 0:
//         return <MainDash />;
//       case 1:
//         return <AdminUserData/>;
//       case 2:
//         return <AdminUserData />;
//       // Add cases for other pages/components
//       default:
//         return <MainDash />;
//     }
//   };
  
//   return (
//     <>
//       <div className='Sidebar'>
//          <div className="logo">
//              <img src="https://uxwing.com/wp-content/themes/uxwing/download/fitness-gym-yoga-spa/fitness-icon.png" alt="" />
//              <span>FitHub</span>
//          </div>
//      <div className="menu">
//          {SidebarData.map((item, index) => {
//           return (
//             <div
//             className={selected === index ? "menuItem active" : "menuItem"}
//             key={index}
//             onClick={() => setSelected(index)}
//           >
//               <item.icon />
//               <span>{item.heading}</span>
//             </div>
//           );
//         })}
//       </div>
//       </div>
      
//       <div className='main-dash'>
//         {renderPage()}
//       </div>
//       </>
//   );
// }

// export default Sidebar;

// import React, { useState } from 'react';
// import './Sidebar.css';
// import { SidebarData } from './data';
// import MainDash from '../MainDash/MainDash';
// import AdminUserData from '../UserData/AdminUserData'

// function Sidebar() {
//   const [selected, setSelected] = useState(0);

//   // const renderPage = () => {
//   //   switch (selected) {
//   //     case 0:
//   //       return <MainDash />;
//   //     case 1:
//   //       return <AdminUserData />;
//   //     case 2:
//   //       return <AdminUserData />;
//   //     // Add cases for other pages/components
//   //     default:
//   //       return <MainDash />;
//   //   }
//   // };

//   return (
//     <>
//       <div className='Sidebar'>
//         <div className="logo">
//           <img src="https://uxwing.com/wp-content/themes/uxwing/download/fitness-gym-yoga-spa/fitness-icon.png" alt="" />
//           <span>FitHub</span>
//         </div>
//         <div className="menu">
//           {SidebarData.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <div
//                 className={selected === index ? "menuItem active" : "menuItem"}
//                 key={index}
//                 onClick={() => setSelected(index)}
//               >
//                 <Icon style={{ marginRight: '8px' }} /> {/* Render the icon component */}
//                 <span>{item.heading}</span>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* <div className='MainContent'>
//         {renderPage()}
//       </div> */}
//     </>
//   );
// }

// export default Sidebar;

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
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/fitness-gym-yoga-spa/fitness-icon.png" alt="" />
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
          <Route path="/admin/trainers" element={<AdminTrainerData/>}/>
          <Route path="/admin/plan" element={<PlanData/>}/>
          <Route path="/admin/challenges" element={<CategoryForChallenge/>}/>
          <Route path="/admin/notification" element={<AdminNotification/>}/>
          {/* Add routes for other pages */}
        </Routes>
      </div>
    </div>
  );
}

export default Sidebar;
