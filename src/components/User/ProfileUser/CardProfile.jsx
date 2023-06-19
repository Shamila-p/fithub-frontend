import React from 'react';
import './CardProfile.css';
import { useSelector } from 'react-redux';


function CardProfile() {
  const user= useSelector(state=>state.user.user)
  console.log(user)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <div className="card-profile">
      {/* <div className="profile-image">
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Profile" />
      </div> */}
      <div className="profile-details">
        <h2>Username: <span>{user.username}</span></h2>
        {/* <div className="key-value-pair">
          <div className="profile-status">
            <button className="profile-active-button">Active</button>
          </div>
        </div> */}
        <div className="created-date">
          <p>Member From:</p>
          <p>{formatDate(user.date_joined)}</p>
        </div>
      </div>
    </div>
  );
}

export default CardProfile;
