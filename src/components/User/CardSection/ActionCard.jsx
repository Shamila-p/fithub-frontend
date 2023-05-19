// import * as React from 'react';
// import { styled } from '@mui/material/styles';



// const Card = styled('div')({
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'flex-end',
//     height: '100%',
//     backgroundImage: (props) => `url(${props.image})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//   });
  
//   const Title = styled('h2')(({ theme }) => ({
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.common.white,
//     padding: theme.spacing(2),
//   }));
  
//   function ActionCard({ title, image }) {
//     return (
//       <Card image={image}>
//         <Title>{title}</Title>
//       </Card>
//     );
//   }
  
//   export default ActionCard


import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Card.css';


export default function ActionAreaCard() {
  return (
   <div className='second-portion'>
    <div className='second-portion-head' >
    <h1 className="goals">Our Goals</h1>
    </div>
    <div className='card-container'>
    <Card sx={{ maxWidth: 300 ,marginRight:8}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="https://static.wixstatic.com/media/aba349_3aecf4991bb149e68f8ffa4154654dc4~mv2.png/v1/fill/w_950,h_688,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/aba349_3aecf4991bb149e68f8ffa4154654dc4~mv2.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Elevate Your Workout and Boost Your Energy
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 300,marginRight:8 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="https://static.wixstatic.com/media/aba349_a5bac8d5066c4ed4a0317db04cc5ac16~mv2.png/v1/fill/w_950,h_688,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/aba349_a5bac8d5066c4ed4a0317db04cc5ac16~mv2.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Experience the FitHub difference
          </Typography>
          
        </CardContent>
      </CardActionArea>
      
    </Card>
    <Card sx={{ maxWidth: 300,marginRight:8}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="https://www.uab.edu/news/media/k2/items/cache/575fa6a87437965e56b7031ca07a30ac_XL.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Good Health starts with what you eat
          </Typography>
          
        </CardContent>
      </CardActionArea>
      
    </Card>
    </div>
    </div>
    
  );
}