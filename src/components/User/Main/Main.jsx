import { styled } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const StyledTypography1 = styled(Typography)({
  textAlign: 'center',
  marginTop: '40px',
});

const StyledTypography2 = styled(Typography)({
  color: 'red',
  fontSize: '24px',
  marginTop: '20px',
  textAlign: 'center',
});
const StyledTypography3 = styled(Typography)({
  fontSize: '18px',
  marginTop: '20px',
  textAlign: 'center',
});

const StyledBox = styled(Box)({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  padding:'20px',
  marginTop:'40px',
  

});

const StyledImage = styled('img')({
  height: '250px',
  width: '250px',
  borderRadius: '50%',
  boxShadow: '7px 0px 10px rgba(0,0,0,0.5)',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  marginTop:'-20px',

});

const StyledImage1 = styled(StyledImage)({
  height: '380px',
  width: '380px',
  top: '30%',
  left: '40%',
  boxShadow: '7px 0px 10px rgba(0,0,0,0.5)',

});

const StyledImage2 = styled(StyledImage)({
  height: '300px',
  width: '300px',
  top: '50%',
  left: '75%',
  boxShadow: '7px 0px 10px rgba(0,0,0,0.5)',

});

const StyledImage3 = styled(StyledImage)({
  height: '230px',
  width: '230px',
  top: '100%',
  left: '60%',
  boxShadow: '7px 0px 10px rgba(0,0,0,0.5)',

});
const StyledButton=styled(Button)({
  marginLeft:'285px',
  padding: '8px 21px'
})

export default function BasicGrid() {
const navigate=useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} sx={{ justifyContent: 'center', p: '50px', marginTop: '50px' }}>
      <Grid item xs={12} sm={6} >
        <StyledTypography3 variant="body1" gutterBottom>One stop for your healthy life..</StyledTypography3>
  
        <StyledTypography1 variant='h3' gutterBottom>Transform your fitness journey today!</StyledTypography1>
        <StyledTypography2 variant="h6" gutterBottom>Redefine your limits and experience the difference.</StyledTypography2>
        <StyledButton onClick={()=>{navigate('/signup')}} variant="contained" sx={{ mt: 2, backgroundColor: '#a24868', color: '#fff', '&:hover': { backgroundColor: '#ff4081' } }}> Get started</StyledButton>
      </Grid>
      <Grid item xs={12} sm={6}>
        <StyledBox>
          <StyledImage1 src="https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?cs=srgb&dl=pexels-the-lazy-artist-gallery-2247179.jpg&fm=jpg/250x250" alt="image1" />
          <StyledImage2 src="https://www.phillymag.com/wp-content/uploads/sites/3/2018/01/fitness-events-yoga-istock-Antonio_Diaz-900x600.jpg" alt="image2" />
          <StyledImage3 src="https://media1.popsugar-assets.com/files/thumbor/u95iFIZAJAHRnSsC5OGWBpZML-w/1038x739:6598x4399/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2022/08/05/731/n/1922729/9c424d5262ed46603ba080.12584565_/i/Upper-Body-Workout-Women-Gym.jpg" alt="image3" />
        </StyledBox>
      </Grid>
    </Grid>
  </Box>
  
  );
}




// import { styled } from '@mui/material/styles';
// import { Box, Grid, Typography } from '@mui/material';

// const StyledTypography1 = styled(Typography)({
//   textAlign: 'center',
//   marginTop: '20px',
// });

// const StyledTypography2 = styled(Typography)({
//   color: 'red',
//   fontSize: '24px',
//   marginTop: '20px',
//   textAlign: 'center',
// });

// const StyledTypography3 = styled(Typography)({
//   fontSize: '18px',
//   marginTop: '20px',
//   textAlign: 'center',
// });

// const StyledImageWrapper = styled(Box)({
//   position: 'relative',
//   width: '250px',
//   height: '250px',
//   borderRadius: '50%',
//   margin: '0 auto',
//   overflow: 'hidden',
//   transition: 'transform .3s ease-out',
//   '&:hover img': {
//     transform: 'scale(1.2)',
//   },
// });

// const StyledImage = styled('img')({
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   zIndex: '1',
//   width: '80%',
//   height: '80%',
//   borderRadius: '50%',
//   objectFit: 'cover',
//   boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
// });

// const StyledImageOverlay = styled(Box)({
//   position: 'absolute',
//   top: '0',
//   left: '0',
//   width: '100%',
//   height: '100%',
//   borderRadius: '50%',
//   boxShadow: '0 0 0 10px rgba(255, 255, 255, 0.6)',
// });

// export default function BasicGrid() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2} sx={{ justifyContent: 'center', p: '50px' }}>
//         <Grid item xs={12} sm={6}>
//           <StyledTypography3 variant="body1" gutterBottom>
//             One stop for your healthy life..
//           </StyledTypography3>

//           <StyledTypography1 variant="h3" gutterBottom>
//             Transform your fitness journey today!
//           </StyledTypography1>
//           <StyledTypography2 variant="h6" gutterBottom>
//             redefine your limits and experience the difference.
//           </StyledTypography2>
//         </Grid>
//         <Grid item xs={12} sm={6} sx={{ position: 'relative' }}>
//           <StyledImageWrapper sx={{ top: '10%', left: '20%' }}>
//             <StyledImage
//               src="https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?cs=srgb&dl=pexels-the-lazy-artist-gallery-2247179.jpg&fm=jpg"
//               alt="Fitness"
//             />
//             <StyledImageOverlay />
//           </StyledImageWrapper>
//           <StyledImageWrapper sx={{ top: '10%', left: '20%' }}>
//             <StyledImage
//               src="https://images.unsplash.com/photo-1596921307095-b2e2c5a82d4c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGZpdG5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format"
//               alt="Fitness"
//             />
//             <StyledImageOverlay />
//           </StyledImageWrapper>
//           <StyledImageWrapper sx={{ top: '10%', left: '20%' }}>
//             <StyledImage
//               src="https://images.unsplash.com/photo-1596921307095-b2e2c5a82d4c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGZpdG5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format"
//               alt="Fitness"
//             />
//             <StyledImageOverlay />
//           </StyledImageWrapper>




        {/* <Grid item xs={12} sm={6}>

          <StyledImageWrapper>
            <StyledImage1 src="https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?cs=srgb&dl=pexels-the-lazy-artist-gallery-2247179.jpg&fm=jpg" />
            <StyledImage2 src="https://image.shutterstock.com/image-photo/woman-exercise-workout-gym-fitness-260nw-749969473.jpg" />
            <StyledImage3 src="https://www.phillymag.com/wp-content/uploads/sites/3/2018/01/fitness-events-yoga-istock-Antonio_Diaz-900x600.jpg" />
            <StyledImageOverlay />
          </StyledImageWrapper> */}
        {/* </Grid>
      </Grid>
    </Box>
  );
} */}

