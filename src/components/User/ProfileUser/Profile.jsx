import React, { useEffect, useState } from 'react';
import CardProfile from './CardProfile';
import ProfileDetails from './ProfileDetails';
import { useSelector } from 'react-redux';

function Profile() {
  const [direction, setDirection] = useState(1);
  
  return (
    <>
    <div
      style={{
        position: 'relative',
        height: '50vh',
        width: '100vw',
        backgroundImage: `url('https://demos.famethemes.com/wellness/wp-content/uploads/sites/36/2016/06/sports-731506_1920-1-1140x600.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1 style={{ color: '#ffffff', fontSize: '60px' }}>Grow with Fithub</h1>
      <div style={{ position: 'absolute', top: 'calc(50% + 60px)', transform: 'translateY(-50%)' }}>
        <MovingText direction={direction} setDirection={setDirection} />
      </div>
    </div>
    <div
      style={{
        position: 'absolute',
        top: '40%',
        left: '11%',
        transform: 'translateY(8%)',
        zIndex: 1,
      }}
    >
      <div style={{display:"flex",flexDirection:"row"}}>
        <CardProfile />
        <ProfileDetails/>
      </div>
    </div>
  </>
  );
}

function MovingText({ direction, setDirection }) {
  const user= useSelector(state=>state.user.user)
  const text = `Hi ${user.username}!! Stay fit and healthy always`;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex === text.length - 1 && direction === 1) {
          setDirection(-1);
        } else if (prevIndex === 0 && direction === -1) {
          setDirection(1);
        }
        return prevIndex + direction;
      });
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, [direction, text.length, setDirection]);

  return (
    <span style={{ color: '#ffffff', fontSize: '30px', marginTop: '10px', display: 'inline-block' }}>
      {text.slice(0, index)}
    </span>
  );
}

export default Profile;


// `Hi ${user.username} !! Stay fit and healthy always`