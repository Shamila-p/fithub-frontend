import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutAdmin } from '../../../redux/adminAuthSlice';
import { logoutTrainer } from '../../../redux/trainerAuthSlice';
import { logoutUser } from '../../../redux/authSlice';

export default function ButtonAppBar() {
  const trigger = useScrollTrigger({
    threshold: 0, // adjust this value as needed
    disableHysteresis: true,
  });

  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleChat =()=>{
    navigate('/chat')

  }
 
  const handleLogout = () => {
    if (user) {
      dispatch(logoutUser());
      navigate('/login');
    }
  };

  const handleClick = () => {
    navigate('/login');
  };
  // useEffect(() => {
    
  // }, [handleLogout]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          background: trigger ? 'black' : 'transparent',
          color: trigger ? 'white' : 'black',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: 'revert-layer',
              fontSize: '30px',
              marginLeft: '0px',
            }}
          >
            <b>FitHUb</b>
          </Typography>
          {user ? (
            <Button style={{ backgroundColor: trigger ? 'white' : 'black', padding: '6px 20px' }} onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button style={{ backgroundColor: trigger ? 'white' : 'black', padding: '6px 20px' }} onClick={handleClick}>
              Login
            </Button>
          )}
          {user && user.assigned_trainer && <Button onClick={handleChat}>Chat</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
