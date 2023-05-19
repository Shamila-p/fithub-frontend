import React from 'react'
import '../Dashboard/Dashboard.css'
import Sidebar from '../../../components/admin/Sidebar/Sidebar'
import CategoryForChallenge from '../../../components/admin/Challenges/CategoryForChallenge'

function ChallengeCategory() {
  return (
    <div className="Dashboard">
      
    <div className='Inner-dashboard'>
      <Sidebar/>
      <div className='main-dash'>
        <CategoryForChallenge/>
      </div>
    </div>
    
</div>
  )
}

export default ChallengeCategory