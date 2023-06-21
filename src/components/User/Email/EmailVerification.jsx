import React from 'react'
import { Link,useNavigate,useParams } from "react-router-dom"
import { verifyEmail } from '../../../Utils/urls';
import axios from '../../../Utils/axios'

function EmailVerification() {
    const navigate=useNavigate()
    const { verificationId } = useParams();
    const authTokens = JSON.parse(localStorage.getItem('user_authTokens'))
    const access = authTokens?.access
    const handleEditClick=()=>{
        console.log("ver",verificationId)
        const url=`${verifyEmail}${verificationId}`
        axios.post(url,{
            headers: { "Authorization": `Bearer ${access}`,"Content-Type": "application/json" },
        }).then((response)=>{
            console.log('success')
            navigate(`/user/profile`)
          })
    }
  return (
    <div>
        Are you trying to change your email. if yes please click confrm button
        <button onClick={handleEditClick}>Confirm</button>
    </div>
  )
}

export default EmailVerification