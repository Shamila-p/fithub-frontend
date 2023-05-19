import React from 'react'
import '../Dashboard/Dashboard.css'
import Sidebar from '../../../components/admin/Sidebar/Sidebar'
import SingleTrainerData from '../../../components/admin/TrainerData/SingleTrainerData'
function Trainers() {
  return (
    <div className="Dashboard">
      
    <div className='Inner-dashboard'>
      <Sidebar/>
      <div className='main-dash'>
        <SingleTrainerData/>
      </div>
    </div>
   
</div>
  )
}

export default Trainers