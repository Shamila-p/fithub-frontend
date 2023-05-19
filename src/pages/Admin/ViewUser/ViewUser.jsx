import React from 'react'
import Sidebar from '../../../components/admin/Sidebar/Sidebar'
import '../Dashboard/Dashboard.css'
import ViewDetails from '../../../components/admin/ViewDetails/ViewDetails'

function ViewUser() {
  return (
    <div className="Dashboard">
      
        <div className='Inner-dashboard'>
          <Sidebar/>
          <div className='main-dash'>
            <ViewDetails/>
          </div>
        </div>
        
    </div>
  )
}

export default ViewUser

