import React, { useState } from 'react';
import Button from '@mui/material/Button';

const Notification = () => {
  const [notificationText, setNotificationText] = useState('');

  const handleTextChange = (event) => {
    setNotificationText(event.target.value);
  };

  const handleSendClick = () => {
    console.log('Sending notification:', notificationText);
    
    setNotificationText('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <textarea
        rows={10}
        value={notificationText}
        onChange={handleTextChange}
        placeholder="Enter notification text"
        style={{
          marginBottom: '10px',
          borderRadius: '10px',
          border: 'none',
          padding: '10px',
          width: '350px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          marginTop:"200px",
          fontFamily:"monospace",
          fontSize:"18px"
        }}
      />
      <Button variant="contained" color="primary" style={{padding:"10px 43px"}} onClick={handleSendClick} >
      SEND
    </Button>
    </div>
  );
};

export default Notification;
