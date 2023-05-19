import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { categories,addCategory } from '../../../Utils/urls';
import axios from '../../../Utils/axios'
import Modal from '@mui/material/Modal';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import MenuItem from "@mui/material/MenuItem";
import { Paper } from "@mui/material";
import { useNavigate } from 'react-router-dom';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function CategoryForChallenge() {
    const [data,setData]=useState([])
    const [openModal, setOpenModal] = useState(false);
    const [category,setCategory]=useState('')

    
    const authTokens = JSON.parse(localStorage.getItem('authTokens'))
    const access = authTokens.access;
    const body={
        category_name:category
    }
    const handleOpenModal = ()=>{
        setOpenModal(true)
    }
    
    const handleCloseModal =()=>{
        setOpenModal(false)

    }
    const navigate=useNavigate()
    const handleVideo=(categoryId)=>{
        navigate(`/admin/challenges/${categoryId}/videos`)
    }
    const handleAdd =()=>{  
       axios.post(addCategory,body,{
        headers: {
            Authorization: `Bearer ${access}`,
            'Content-Type': 'application/json'
          }
       }).then((response)=>{
            handleCloseModal()
       }
       )
    }


   

      axios.get(categories,{
        headers: {"Authorization": `Bearer ${access}`,"Content-Type": "application/json" }},
        ).then((response)=>{
            console.log(response.data)
            setData(response.data)
        })

  return (
    <div className="challenge" style={{ display: 'flex', flexDirection: 'column' }}>
      <Button
        size="small"
        variant="contained"
        onClick={handleOpenModal}
        sx={{ alignSelf: 'flex-end', margin: '30px 24px', padding: '10px', minWidth: 50, maxWidth: 250 }}
      >
        Add Category
      </Button>
      <Modal open={openModal} onClose={handleCloseModal} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '400px', height: '400px' }}>
              <Box sx={{ padding: '1rem', width: '100%' }}>
                <FormControl fullWidth>
                  <InputLabel id="trainer-label">Category Name</InputLabel>
                  <Input type="text" id="category" label="category" value={category} onChange={(e) => setCategory(e.target.value)}/>
                </FormControl>
                <Button onClick={handleAdd} variant="contained" sx={{margin:"12px 40%"}}>
                  Add
                </Button>
              </Box>
            </Paper>
        </Modal>

      <div
        className="category-container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: '90vh',
        }}
      >
        {data.map((category) => (
            <Card sx={{ minWidth: 50, maxWidth: 250, padding: '38px', marginRight: '10px' }}>
          <CardContent>
            <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
              {category.category_name}
            </Typography>
          </CardContent>
          <CardActions>
          <Button
  size="small"
  variant="outlined"
  sx={{ marginLeft: '24px', padding: '4px' }}
  onClick={() => handleVideo(category.id)}
>
  Show videos
</Button>
          </CardActions>
        </Card>
  ))}
        
      </div>
    </div>
  );
}
