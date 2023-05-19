import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react';
import Swal from "sweetalert2";
import { login } from '../../../Utils/urls';
import axios from '../../../Utils/axios';

const theme = createTheme();

export default function SignIn() {

  const navigate = useNavigate()
    // const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
   

    useEffect(() =>{
      if (localStorage.getItem("user_authTokens")){
        const prevUrl = localStorage.getItem("user_prevUrl");
        navigate(prevUrl);
      }
    },[navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
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
                  localStorage.setItem('user_authTokens', JSON.stringify(response.data))
                  navigate("/");
                  Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Login Successfully",
                      showConfirmButton: false,
                      timer: 1500,
                    });
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


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                    }} 
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                    }} 
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}