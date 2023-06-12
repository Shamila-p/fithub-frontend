import React from 'react'
import Navbar from '../../../components/User/Navbar/Navbar'
import DisplayVideo from '../../../components/User/Video/DisplayVideo'

function WorkoutVideos() {
  return (
    <div>
        <Navbar/>
        <div style={{marginTop:"100px"}}>
        <DisplayVideo />

        </div>
    </div>
  )
}

export default WorkoutVideos