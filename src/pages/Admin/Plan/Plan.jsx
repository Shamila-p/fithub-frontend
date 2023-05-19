import React from 'react'
import '../Dashboard/Dashboard.css'
import Sidebar from '../../../components/admin/Sidebar/Sidebar'
import PlanData from '../../../components/admin/PlanData/PlanData'
function Trainers() {
  return (
    <div className="Dashboard">
      
    <div className='Inner-dashboard'>
      <Sidebar/>
      <div className='main-dash'>
        <PlanData/>
      </div>
    </div>
   
</div>
  )
}

export default Trainers