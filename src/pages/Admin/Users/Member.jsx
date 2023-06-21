import React from 'react'
import Sidebar from '../../../components/admin/Sidebar/Sidebar'
import '../Dashboard/Dashboard.css'
import AdminMemberData from '../../../components/admin/MemberData/AdminMemberData'

function Member() {
  return (
    <div className="Dashboard">
        <div className='Inner-dashboard'>
          <Sidebar/>
          <div className='main-dash'>
          <AdminMemberData/>
          </div>
        </div>
    </div>
      
  )
}

export default Member