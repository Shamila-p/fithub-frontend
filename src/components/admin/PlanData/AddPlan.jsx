import React,{useState} from 'react'
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link,useParams } from "react-router-dom"
import Sidebar from '../Sidebar/Sidebar';
import axios from '../../../Utils/axios'
import {addPlan} from '../../../Utils/urls'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function AddPlan() {
    const [type, setType] = useState('')
    const [amount, setAmount] = useState('')
    const [features, setFeatures] = useState([])
    const authTokens = JSON.parse(localStorage.getItem('authTokens'))
    const access = authTokens.access;

    const navigate=useNavigate()
    const formData = new FormData();
        formData.append('type', type);
        formData.append('amount', amount);
        formData.append('features', features.join(','));
    const handleSubmit=(event)=>{
        event.preventDefault();
        const url=`${addPlan}`
        axios.post(url,formData,{
            headers: {"Authorization": `Bearer ${access}`,'Content-Type': 'multipart/form-data' },
        }).then((response)=>{
            navigate(`/admin/plan`)
        })
    }    

  return (
    <div className="Dashboard">
    <div className='Inner-dashboard'>
        <Sidebar/>
        <div className="main-dash form-container">
        <React.Fragment>
         <h2>Add Trainer</h2>
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

           
            
            <Button variant="outlined" color="secondary" type="submit">ADD</Button>
        </form>
        {/* <small>Already have an account? <Link to="/login">Login Here</Link></small> */}
 
    </React.Fragment>
        </div>
    </div>
</div>
  )
}

export default AddPlan