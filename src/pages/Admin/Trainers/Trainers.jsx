import React from 'react'
import '../Dashboard/Dashboard.css'
import Sidebar from '../../../components/admin/Sidebar/Sidebar'
import AdminTrainerData from '../../../components/admin/TrainerData/AdminTrainerData'

function Trainers() {
  return (
    <div className="Dashboard">
      
    <div className='Inner-dashboard'>
      <Sidebar/>
      <div className='main-dash'>
        <AdminTrainerData/>
      </div>
    </div>
   
</div>
  )
}

export default Trainers