import React ,{useState} from 'react'
// import Dashboard from '../../../pages/Admin/Dashboard/Dashboard'
import Sidebar from '../Sidebar/Sidebar'
import '../../../pages/Admin/Dashboard/Dashboard.css'
import { SidebarData } from '../Sidebar/data';
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link,useParams } from "react-router-dom"
import { editUser } from '../../../Utils/urls'
import Swal from "sweetalert2";
import axios from '../../../Utils/axios';



function EditUser() {
  const [selected,setSelected]=useState(0)
  const [first_name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUserName] = useState('')
  const authTokens = JSON.parse(localStorage.getItem('authTokens'))
  const access = authTokens.access;
  const { userId } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
        username,
        first_name,
        email,
        phone,
      };
      console.log(body)
      const url = `${editUser}${userId}`

      axios
        .post(url, body, {
          headers: { "Authorization": `Bearer ${access}`,"Content-Type": "application/json" },
        })
        .then ((response) => {

            console.log(response)
                 
        
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
//   function handleSubmit(event) {

//       event.preventDefault();
      
//       console.log(body)
//       axios
//         .post(editUser, body, {
//           headers: { "Authorization": `Bearer ${access}`,"Content-Type": "application/json" },
//         }).then(response => {
//             console.log(response)})}
//   });


  return (
    
        <div className="Dashboard">
            <div className='Inner-dashboard'>
                <Sidebar/>
                <div className="main-dash form-container">
                <React.Fragment>
                 <h2>Register Form</h2>
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
    
                    {/* <TextField
                        type="email"
                        variant='outlined'
                        color='secondary'
                        label="Email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        fullWidth
                        required
                        sx={{mb: 4}}
                    /> */}
                    {/* <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="username"
                        onChange={e => setUserName(e.target.value)}
                        value={username}
                        required
                        fullWidth
                        sx={{mb: 4}}
                    /> */}
                    {/* <TextField
                        type="date"
                        variant='outlined'
                        color='secondary'
                        label="Date of Birth"
                        onChange={e => setDateOfBirth(e.target.value)}
                        value={dateOfBirth}
                        fullWidth
                        required
                        sx={{mb: 4}}
                    /> */}
                    <Button variant="outlined" color="secondary" type="submit">EDit</Button>
                </form>
                {/* <small>Already have an account? <Link to="/login">Login Here</Link></small> */}
         
            </React.Fragment>
                </div>
            </div>
        </div>
      )

    
  
}

export default EditUser