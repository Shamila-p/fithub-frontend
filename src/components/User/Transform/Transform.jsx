import React from 'react';
import { useNavigate } from 'react-router-dom';

function Transform() {
  const navigate=useNavigate()
  return (
    <div className='transform-container'>
        <h1 style={{color:'red',textAlign:'center',paddingTop:'30px',fontSize:'40px'}}>Unleash your inner athlet and redefine your limits</h1>
        <p style={{color:'white',textAlign:'center',fontSize:"22px",lineHeight: "2.5rem",marginTop: "-12px"}}>Click the button below to experience the difference.<br/> Your Transformation begins now</p>
        <button style={{background:"#df0a0a",color:"black",textAlign:"center",padding:"16px 35px",border:"1px",borderRadius:"27px",fontSize:"16px",marginLeft:"45%",marginBottom:"30px"}} onClick={()=>{navigate('/signup')}}><b>Get Started</b></button>
    </div>
  )
}

export default Transform