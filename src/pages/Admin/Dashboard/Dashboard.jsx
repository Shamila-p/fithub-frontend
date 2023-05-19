import React from 'react'
import './Dashboard.css'
import Sidebar from '../../../components/admin/Sidebar/Sidebar'
// import DashboardContainer from '../../../components/admin/Sidebar/DashboardContainer'
// import MainDash from '../../../components/admin/MainDash/MainDash'

function Dashboard() {
  return (
    <div className="Dashboard">
      
        <div className='Inner-dashboard'>
          <Sidebar/>
          {/* <DashboardContainer/> */}
        </div>
    </div>
  )
}

export default Dashboard