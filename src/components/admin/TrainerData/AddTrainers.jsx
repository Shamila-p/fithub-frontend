import React,{useState} from 'react'
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link,useParams } from "react-router-dom"
import Sidebar from '../Sidebar/Sidebar';
import { addTrainer } from '../../../Utils/urls';
import axios from '../../../Utils/axios'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function AddTrainers() {
    const [first_name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
   

    const navigate=useNavigate()

    const formData = new FormData();
          formData.append('username', username);
          formData.append('email', email);
          formData.append('password', password);
          formData.append('phone', phone);
          formData.append('first_name', first_name);

   
    const handleSubmit = (event) =>{
      event.preventDefault();
        
      const authTokens = JSON.parse(localStorage.getItem('authTokens'))
      const access = authTokens.access;
        axios
        .post(addTrainer,formData,{ headers: {"Authorization": `Bearer ${access}`},'Content-Type': 'application/json'})
        .then((response)=>{
            Swal.fire({
                title: 'Success!',
                text: 'The Trainer details added',
                icon: 'success'
              })
            //   console.log('swal')
              .then(() => {
                // redirect to login after success
                navigate(`/admin/trainers`);
              });
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
                            label="Name"
                            onChange={e => setName(e.target.value)}
                            value={first_name}
                            fullWidth
                            required
                        />
                        <TextField
                            type="email"
                            variant='outlined'
                            color='secondary'
                            label="Email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            fullWidth
                            required
                        />
                    </Stack>
                    <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="phone"
                            onChange={e => setPhone(e.target.value)}
                            value={phone}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="username"
                            onChange={e => setUserName(e.target.value)}
                            value={username}
                            fullWidth
                            required
                        />
                    </Stack>
                    <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="password"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
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

export default AddTrainers