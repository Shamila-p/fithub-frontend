import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Paper, Grid, Button } from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { viewUser,getTrainers,assignTrainer } from "../../../Utils/urls";
import axios from '../../../Utils/axios'
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import Modal from '@mui/material/Modal';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";



const UserProfile = styled(Box)({
  display: "flex",
  alignItems: "center",
  "& > *": {
    marginRight: "10px",
  },
});

const ProfileAvatar = styled(Avatar)({
  width: "70px",
  height: "70px",
});

const UserDetails = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const UserDetailsItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginTop: "5px",
});

const UserIcon = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  marginRight: "10px",
});

const UserName = styled(Typography)({
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "24px",
});

const UserEmail = styled(Typography)({
  fontSize: "14px",
  lineHeight: "20px",
});

const UserPhone = styled(Typography)({
  fontSize: "14px",
  lineHeight: "20px",
});


function ViewDetails() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState("");
  const [trainers,setTrainers]=useState([])
  const {userId}=useParams()
  // const trainers = [
  //   { id: 1, name: "Shamia" },
  //   { id: 2, name: "New Trainer" },
  // ];
    const navigate = useNavigate()
    const [user,setUser]=useState({});
    const authTokens = JSON.parse(localStorage.getItem('authTokens'))
    const access = authTokens.access;
    const handleOpenModal = () => {
      setOpenModal(true);
      axios.get(getTrainers,
        {"Authorization": `Bearer ${access}`,'Content-Type': 'application/json' }
        ).then(response =>{
            setTrainers(response.data)
        })

    };
    console.log(trainers)

    const handleCloseModal = () => {
      setOpenModal(false);
    };
    const data = {
      user_id: userId, // Assuming userId is defined and represents the ID of the user
      trainer_id: selectedTrainer // Assuming selectedTrainer is the ID of the selected trainer
    };
    const handleAssignTrainer = ()=>{
      const assignData=`${assignTrainer}${userId}`
      axios.post(assignData, data, {
        headers: {
          Authorization: `Bearer ${access}`,
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          // Handle the response if needed
          console.log(response.data);
          handleCloseModal()
          // Perform any additional actions after assigning the trainer, such as updating the UI or navigating to another page
        })
        .catch(error => {
          // Handle the error if needed
          console.error(error);
        });
    }
    const url=`${viewUser}${userId}`
    console.log("view",url)
        
   useEffect(()=>{
        axios.get(url,
            {"Authorization": `Bearer ${access}`,'Content-Type': 'application/json' }
            ).then(response =>{
                console.log("data",response)
                setUser(response.data)
            })
            .catch(error => {
                console.error(error);
              });
            },[])
  const handleViewButtonClick=(trainerId)=>{
    navigate(`/admin/trainer/${trainerId}`)
  }
  console.log(selectedTrainer)
    
  return (
    <Paper variant="outlined" sx={{ textAlign: "center", padding: "1rem",width:"50%",margin:"100px auto"}}>
      <Grid container sx={{display:"flex",justifyContent:"space-between",padding:"10px",marginLeft: "33px",width: "68%",lineHeight:"0px"}}>
        <Grid item xs={12} sm={8} md={10} >
          <UserProfile >
            <UserDetails>
              <UserDetailsItem >
                <UserIcon>
                  <PersonIcon />
                </UserIcon>
                <UserName>{user.first_name}</UserName>
              </UserDetailsItem>
              <UserDetailsItem>
                <UserIcon>
                  <PhoneIcon />
                </UserIcon>
                <UserPhone>{user.phone}</UserPhone>
              </UserDetailsItem>
              <UserDetailsItem sx={{marginBottom:"2px"}}>
                  <h4 style={{marginLeft:"50px",fontSize:"27px"}}>Age:</h4>
                <UserPhone sx={{fontSize:"20px",marginTop:"5px",padding:"10px"}}>{user.age}</UserPhone>
              </UserDetailsItem>
              <UserDetailsItem sx={{marginBottom:"2px"}}>
                  <h4 style={{fontSize:"27px",marginLeft:"50px"}}>Weight:</h4>
                <UserPhone sx={{fontSize:"20px",marginTop:"5px",padding:"10px"}}>{user.weight}</UserPhone>
              </UserDetailsItem>
              <UserDetailsItem sx={{marginBottom:"2px"}}>
                  <h4 style={{fontSize:"22px",marginLeft:"50px"}}>Assigned Trainer:</h4>
                <UserPhone sx={{fontSize:"20px",marginTop:"5px",padding:"10px"}}>{user.assigned_trainer?"Yes":"NO"}</UserPhone>
              </UserDetailsItem>
              <UserDetailsItem sx={{marginBottom:"2px"}}>
                  <h4 style={{ fontSize: "20px", marginTop: "5px",marginLeft:"45px", padding: "10px" }}>Plan Type: {user.plan_type}</h4>
                 
              </UserDetailsItem>

            </UserDetails>
          </UserProfile>
        </Grid>
        <Grid item xs={12} sm={4} md={2} sx={{ textAlign: "left" }}>
        <UserProfile>
          <UserDetails>
          <UserDetailsItem>
              <UserIcon>
                <EmailIcon />
              </UserIcon>
              <UserEmail>{user.email}</UserEmail>
            </UserDetailsItem>
          </UserDetails>
        </UserProfile>
        <UserProfile>
          <UserDetails>
          <UserDetailsItem>
              <UserIcon>
              <PersonIcon />
              </UserIcon>
              <UserEmail>{user.username}</UserEmail>
            </UserDetailsItem>
            <UserDetailsItem sx={{marginBottom:"2px"}}>
                  <h4 style={{fontSize:"27px"}}>Height:</h4>
                <UserPhone sx={{fontSize:"20px",marginTop:"5px",padding:"10px"}}>{user.height}cm</UserPhone>
              </UserDetailsItem>
              <UserDetailsItem sx={{marginBottom:"2px"}}>
                  <h4 style={{fontSize:"27px"}}>Gender:</h4>
                <UserPhone sx={{fontSize:"20px",marginTop:"5px",padding:"10px"}}>{user.gender}</UserPhone>
              </UserDetailsItem>
              
              <UserDetailsItem sx={{marginBottom:"2px"}}>
              <UserPhone sx={{ fontSize: "20px", marginTop: "5px", padding: "10px" }}>
  {user.assigned_trainer ? (
    <Button onClick={() => handleViewButtonClick(user.trainer_id)} size="small" variant="contained">
      View Trainer
    </Button>
  ) : (
    <Button size="small" variant="contained" onClick={handleOpenModal}>
      Assign Trainer
    </Button>
  )}
</UserPhone>

          <Modal open={openModal} onClose={handleCloseModal} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '400px', height: '400px' }}>
              <Box sx={{ padding: '1rem', width: '100%' }}>
                <FormControl fullWidth>
                  <InputLabel id="trainer-label">Select Trainer</InputLabel>
                  <Select
                    labelId="trainer-label"
                    value={selectedTrainer}
                    onChange={(e) => setSelectedTrainer(e.target.value)}
                    
                  >
                    {trainers.map((trainer) => (
                      <MenuItem key={trainer.id} value={trainer.id}>
                        {trainer.first_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button onClick={handleAssignTrainer} variant="contained" sx={{margin:"12px 40%"}}>
                  Assign
                </Button>
              </Box>
            </Paper>
        </Modal>
        


              </UserDetailsItem>
          </UserDetails>
        </UserProfile>
        </Grid>
      </Grid>
    </Paper>
  );
  }
export default ViewDetails;
