import React from 'react'
import '../Dashboard/Dashboard.css'
import Sidebar from '../../../components/admin/Sidebar/Sidebar'
import AssignedUsers from '../../../components/admin/TrainerData/AssignedUsers'

function AssignedUserPage() {
  return (
    <div className="Dashboard">
      
    <div className='Inner-dashboard'>
      <Sidebar/>
      <div className='main-dash'>
        <AssignedUsers/>
      </div>
    </div>
   
</div>
  )
}

export default AssignedUserPage