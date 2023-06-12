import React from 'react'
import UserData from '../../../components/User/UserData/UserData'
// import Logined from '../../../components/User/Logined/Logined'
import NavBar from '../../../components/User/Navbar/Navbar'

function LoginedPage() {
  return (
    <div>
        <NavBar/>
        {/* <Logined/> */}
        <UserData/>
    </div>
  )
}

export default LoginedPage