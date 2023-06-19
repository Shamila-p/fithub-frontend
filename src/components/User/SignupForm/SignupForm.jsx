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
import { signup } from '../../../Utils/urls';
import Swal from "sweetalert2";
import axios from '../../../Utils/axios';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import { useForm } from "react-hook-form";




const theme = createTheme();

export default function SignUp() {

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const phonePrefix = "+91"
  const navigate = useNavigate();
  const {register,handleSubmit,formState:{errors},watch}=useForm()

  const onSubmit = (event) => {
      event.preventDefault();
      const fullPhone = phonePrefix + phone;
    
    Swal.fire({
      title: 'Are you sure?',
      text: 'The Details are valid?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('phone', fullPhone);
        formData.append('name', name);
  
        axios.post(signup, formData, {
          headers: {'Content-Type': 'application/json' },
        })
          .then((response) => {
            if (response.status === 201) {
              Swal.fire({
                title: 'Success!',
                text: 'The user details have been updated.',
                icon: 'success'
              }).then(() => {
                // redirect to login after success
                navigate('/login');
              });
            } else {
              console.log(response)
              Swal.fire({
                title: 'Error!',
                text: 'Invalid Details',
                icon: 'error'
              })
            }
          })
          .catch((error) => {
            console.log(error.response.data.username);
            Swal.fire({
              title: 'Error!',
              text: error.response.data.username,
              icon: 'error'
            });
          });
      }
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="name"
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                        }}
                  inputProps={register("name", {
                    required: true,
                    minLength: 3,
                  })}
                />
                {errors.name && errors.name.type === "required" && (
                  <p className="text-xs italic text-red-500">
                    This Field is Required
                  </p>
                )}
                {errors.name && errors.name.type === "minLength" && (
                  <p className="text-xs italic text-red-500">
                    Minimum 3 Characters Required
                  </p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Username"
                  label="Username"
                  name="username"
                  autoComplete="family-name"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                        }}
                  inputProps={register("username", {
                    required: true,
                    maxLength: 10,
                    minLength: 3,
                  })}
                />
                  {errors.username && errors.username.type === "required" && (
                  <p className="text-xs italic text-red-500">
                    This Field is Required
                  </p>
                )}
                {errors.username && errors.username.type === "minLength" && (
                  <p className="text-xs italic text-red-500">
                    Minimum 3 Characters Required
                  </p>
                )}
                {errors.username && errors.username.type === "maxLength" && (
                  <p className="text-xs italic text-red-500">
                    Maximum Length Exceeded
                  </p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                        }}
                  inputProps={register("email", {
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
                 {errors.email && errors.email.type === "required" && (
                    <p className="text-xs italic text-red-500">
                      This Field is Required
                    </p>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <p className="text-xs italic text-red-500">
                      You have entered an invalid email address.Please try again
                    </p>
                  )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="Phone"
                  value={phone}
                  autoComplete="phone"
                  onChange={(e) => {
                    setPhone(e.target.value);
                        }}
                    inputProps={register("phone", {
                        required:true,
                        pattern: /^([1-9]\d*)$/,
                        maxLength: 10,
                      })}
                />
                 {errors.phone && errors.phone.type === "required" && (
                    <p className="text-xs italic text-red-500">
                      This Field is Required
                    </p>
                  )}
                  {errors.phone && errors.phone.type === "pattern" && (
                    <p className="text-xs italic text-red-500">
                      You have entered an invalid phone. Please try again
                    </p>
                  )}
                  {errors.phone && errors.phone.type === "maxLength" && (
                  <p className="text-xs italic text-red-500">
                    Not a valid phone.maximum 10 characters only.
                  </p>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  autoComplete="new-password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                        }}
                  inputProps={register("password", {
                    required: true,
                    pattern: /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{5,}$/,
                    maxLength: 10,
                    minLength: 5,
                  })}
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="text-xs italic text-red-500">
                    Enter a Valid Password
                  </p>
                )}
                {errors.password && errors.password.type === "pattern" && (
                  <p className="text-xs italic text-red-500">
                    Password Should Contain At Least One Capital Letter One
                    Small Letter and one digit
                  </p>
                )}
                {errors.password && errors.password.type === "maxLength" && (
                  <p className="text-xs italic text-red-500">
                    Exceeds Maximum Length
                  </p>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <p className="text-xs italic text-red-500">
                    Minimum 5 Characters Required
                  </p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirm password"
                  label="Confirm Password"
                  type="password"
                  id="ConfirmPassword"
                  value={confirmPassword}
                  autoComplete="new-password"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                        }}
                  inputProps={register("ConfirmPassword", {
                    validate: (value) => value === watch("password"),
                  })}
                />
                  {errors.ConfirmPassword && (
                    <p className="text-xs italic text-red-500">
                      Passwords do not match
                    </p>
                  )}
              </Grid>
              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}