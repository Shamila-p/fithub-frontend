import React,{useState} from 'react'
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link,useParams } from "react-router-dom"
import Sidebar from '../Sidebar/Sidebar';
import axios from '../../../Utils/axios'
import { useNavigate } from 'react-router-dom';
import {editPlan} from '../../../Utils/urls'


function EditPlan() {
    const [type, setType] = useState('')
    const [amount, setAmount] = useState('')
    const [features, setFeatures] = useState([])
    const authTokens = JSON.parse(localStorage.getItem('authTokens'))
    const access = authTokens.access;

    const navigate=useNavigate()
    const { planId } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        const featuresData = features.map((feature) => ({ feature_text: feature }));
    
        const body = {
            type,
            amount,
            features: featuresData,
          };
          console.log(body)
          const url = `${editPlan}${planId}`
    
          axios
            .post(url, body, {
              headers: { "Authorization": `Bearer ${access}`,"Content-Type": "application/json" },
            })
            .then ((response) => {
    
                console.log(response)
                navigate(`/admin/plans`)
                     
            
            }).catch((err) => {
              console.log(err)
          
            });
       };

  return (
    <div className="Dashboard">
    <div className='Inner-dashboard'>
        <Sidebar/>
        <div className="main-dash ">
          <div className="form-container">
        <React.Fragment>
         <h2 style={{marginBottom:"33px"}}>Edit Plan</h2>
         <form onSubmit={handleSubmit} sx={{"padding":"10px"}} action={<Link to="/login" />}>
            
            <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
            <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="type"
                    onChange={e => setType(e.target.value)}
                    value={type}
                    fullWidth
                    required
                />
                <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="amount"
                    onChange={e => setAmount(e.target.value)}
                    value={amount}
                    fullWidth
                    required
                />
            </Stack>
            <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
            <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="features"
                    onChange={e => setFeatures(e.target.value.split(',').map(feature => feature.trim()))}
                    inputProps={{ style: { textTransform: 'none' } }}
                    value={features.join(', ')} 
                    fullWidth
                    required
                />
               
            </Stack>

           
            <div style={{display:"flex",justifyContent:"center"}}>
            
            <Button variant="contained" color="secondary" type="submit" style={{padding:"10px 43px"}}>EDIT</Button>
        </div>
        </form>
        {/* <small>Already have an account? <Link to="/login">Login Here</Link></small> */}
 
    </React.Fragment>
    </div>
        </div>
    </div>
</div>
  )
}

export default EditPlan