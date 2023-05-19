import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';

export default function ButtonAppBar() {
  const trigger = useScrollTrigger({
    threshold: 0, // adjust this value as needed
    disableHysteresis: true,
  });

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
            }}
          >
            <b>FitHUb</b>
          </Typography>
          <Button>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
