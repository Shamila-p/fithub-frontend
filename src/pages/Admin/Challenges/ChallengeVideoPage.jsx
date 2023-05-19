import React from 'react'
import ChallengeVideo from '../../../components/admin/Challenges/ChallengeVideo'
import '../Dashboard/Dashboard.css'
import Sidebar from '../../../components/admin/Sidebar/Sidebar'

function ChallengeVideoPage() {
  return (
    <div className="Dashboard">
      
    <div className='Inner-dashboard'>
      <Sidebar/>
      <div className='main-dash'>
        <ChallengeVideo/>
      </div>
    </div>
   
</div>
  )
}

export default ChallengeVideoPage