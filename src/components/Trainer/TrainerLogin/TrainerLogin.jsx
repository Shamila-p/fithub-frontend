import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react';
import Swal from "sweetalert2";
import { login } from '../../../Utils/urls';
import axios from '../../../Utils/axios';
import jwt_decode from "jwt-decode";
import { useDispatch } from 'react-redux';
import { setLogin } from '../../../redux/trainerAuthSlice';


const theme = createTheme();

export default function SignInSide() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch=useDispatch()

  useEffect(() =>{
    if (localStorage.getItem("trainer_authTokens")){
      const prevUrl = localStorage.getItem("trainer_prevUrl");
      navigate(prevUrl);
    }
  },[navigate])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {

      const body = JSON.stringify({
        username,
        password,
      });
      console.log(body)
      axios
        .post(login, body, {
          headers: { "Content-Type": "application/json" },
        })
        .then ((response) => {

          if (response.status === 200) {
            const decoded_token = jwt_decode(response.data.access)
            console.log(decoded_token)
            if(decoded_token){
              localStorage.setItem('trainer_authTokens', JSON.stringify(response.data))
              dispatch(setLogin({trainer:jwt_decode(response.data.access)}))
              navigate("/trainer/dashboard");
              Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Login Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
            }else {
              Swal.fire({
                  position: "center",
                  icon: "warning",
                  title: "Invalid Credentials",
                  showConfirmButton: false,
                  timer: 1500,
                  });
                }        
          }
        else {
              Swal.fire({
                  position: "center",
                  icon: "warning",
                  title: "Invalid Credentials",
                  showConfirmButton: false,
                  timer: 1500,
                  });
                }
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
    }
   };
  return (
    <ThemeProvider theme={theme} >
      <Grid container component="main" sx={{ height: '100vh' 
    }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ backgroundColor: '#424242' }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop:'120px'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h4">
              Trainer Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate  sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 ,backgroundColor:'#2c1d35'}}
              >
                 Login
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
 }