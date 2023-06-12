import React from 'react'
import '../../../pages/Admin/Dashboard/Dashboard.css'
import TrainerSidebar from '../Sidebar/TrainerSidebar'
import TrainerDashboardContainer from '../../../components/Trainer/TrainerDashboardContainer/TrainerDashboardContainer'
// import DashboardContainer from '../../../components/admin/Sidebar/DashboardContainer'
// import MainDash from '../../../components/admin/MainDash/MainDash'
import NavBar from '../../../components/User/Navbar/Navbar'
function TrainerDashboard() {
  return (
    <div className="Dashboard">
      
        <div className='Inner-dashboard'>
          <TrainerSidebar/>
         
        <div className="main-dash">
          <TrainerDashboardContainer/>
        </div>
    </div>
    </div>

  )
}

export default TrainerDashboard