import React ,{useState} from 'react'
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link,useNavigate,useParams } from "react-router-dom"
import Swal from "sweetalert2";
import axios from '../../../Utils/axios'
import {editTrainer} from '../../../Utils/urls'
import Sidebar from '../Sidebar/Sidebar';

function EditTrainer() {
const [selected,setSelected]=useState(0)
  const [first_name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUserName] = useState('')
  const authTokens = JSON.parse(localStorage.getItem('authTokens'))
  const access = authTokens.access;
  const { trainerId } = useParams();
  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
        username,
        first_name,
        email,
        phone,
      };
      console.log(body)
      const url = `${editTrainer}${trainerId}`

      axios
        .put(url, body, {
          headers: { "Authorization": `Bearer ${access}`,"Content-Type": "application/json" },
        })
        .then ((response) => {

            console.log(response)
            navigate(`/admin/trainers`)
                 
        
        }).catch((err) => {
          console.log(err)
          Swal.fire({
              position: "center",
              icon: "warning",
              title: "Invalid Credentials",
              showConfirmButton: false,
              timer: 1500,
              });
        });
   };
  return (
    <div className="Dashboard">
            <div className='Inner-dashboard'>
                <Sidebar/>
                <div className="main-dash form-container">
                <React.Fragment>
                 <h2>Register Form</h2>
                 <form onSubmit={handleSubmit} sx={{"padding":"10px"}} >
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
    
                    <Button variant="outlined" color="secondary" type="submit">EDIT</Button>
                </form>
                {/* <small>Already have an account? <Link to="/login">Login Here</Link></small> */}
         
            </React.Fragment>
                </div>
            </div>
        </div>
  )
}

export default EditTrainer