import React from 'react'
import Sidebar from '../../../components/admin/Sidebar/Sidebar'
import '../Dashboard/Dashboard.css'
import Notification from '../../../components/admin/Notification/Notification'

function AdminNotification() {
  return (
    <div className="Dashboard">
      
    <div className='Inner-dashboard'>
      <Sidebar/>
      <div className='main-dash'>
        <Notification/>
      </div>
    </div>
</div>
  )
}

export default AdminNotification