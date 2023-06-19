import './TrainerProfile.css'
import React, { useEffect,useState } from 'react'
// import Navbar from '../components/Navbar/Navbar'
// import './profile.css'
// import 'font-awesome/css/font-awesome.min.css';
import Swal from 'sweetalert2';
import axios from '../../../Utils/axios'
import {baseUrl, getSingleTrainer,editTrainer,imageupload, changePassword} from '../../../Utils/urls'
import jwt_decode from "jwt-decode";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import { Paper } from "@mui/material";
import Box from '@mui/material/Box';


// import axios from '../utils/axios';


function TrainerDashboardContainer() {
    
      const [first_name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [image, setImage] = useState("");
      const [username, setUsername] = useState("");
      const [phone, setPhone] = useState("");
      const [fullimage,setfullimage]=useState(true);
      const [isActive,setisActive] = useState(false);
      const [heart,setheart]=useState(true);
      const [editMode, setEditMode] = useState(false);
      const [currentPassword, setCurrentPassword] = useState("");
      const [newPassword, setNewPassword] = useState("");
      const [confirmPassword, setConfirmPassword] = useState("");
      const [openModal, setOpenModal] = useState(false);
      const authTokens = JSON.parse(localStorage.getItem('trainer_authTokens'))
      const access = authTokens?.access
      const decoded_token = jwt_decode(access)
      const trainerId=decoded_token.user_id
      const body={
        useranme:username,
        first_name:first_name,
        phone:phone,
        email:email,
        profile_image:image,
      }
     const handleEditClick = () => {
        setEditMode(true);
        
      };
      const handleOpenModal = ()=>{
        console.log("yes")
        setOpenModal(true)
    }

    
    const handleCloseModal =()=>{
        setOpenModal(false)

    }
      const bodyPassword={
        current_password:currentPassword,
        new_password:newPassword,
        confirm_password:confirmPassword,
        id:trainerId
      }
      const handleChangePasword=()=>{
        axios.post(`${changePassword}`,bodyPassword,{
          headers: { "Authorization": `Bearer ${access}`,"Content-Type": "application/json" },

        })
        setOpenModal(false)

      }

      const handleSaveClick = () => {
        axios.post(`${editTrainer}${trainerId}`,body,{
          headers: { "Authorization": `Bearer ${access}`,"Content-Type": "application/json" },

        }).then((response)=>{
          console.log('success')
        })
        setEditMode(false);
        // Save the changes to the server or perform necessary actions
      };
      useEffect(() =>{
      
        console.log(trainerId)
          axios
          .get(`${getSingleTrainer}${trainerId}`,{
            headers: { "Authorization": `Bearer ${access}`},
          })
          .then((response) => {
            console.log("data", response.data);
      console.log("fn", response.data[0].first_name);
      setName(response.data[0].first_name);
      setUsername(response.data[0].username);
      setEmail(response.data[0].email);
      setPhone(response.data[0].phone);
      setImage(response.data[0]?.profile_image);
          });
    },[])
    console.log("name",first_name)
    

    // const ImageClick = () =>{
    //     if(isActive){
    //         setisActive(false);
    //         }else{
    //         setisActive(true);
    //         }
    //     }

    // const FullImage=()=>{
    //     if(fullimage){
    //         setfullimage(false);
    //         }
    //         else{
    //         setfullimage(true);
    //         }
    //     }
    //      const imageUrl = `${baseUrl}${image}`;


    //     const addImage = async () => {
    //         const { value: file } = await Swal.fire({
    //           title: "Select image",
    //           input: "file",
        
    //           inputAttributes: {
    //             accept: "image/*",
    //             "aria-label": "Upload your profile picture",
    //           },
    //         });
        
    //         if (file) {
    //           const reader = new FileReader();
    //           reader.onload = (e) => {
    //             Swal.fire({
    //               title: "img",
    //               imageUrl: e.target.result,
    //               imageHeight: 400,
    //               showDenyButton: true,
    //               showCancelButton: true,
    //               confirmButtonText: "Update",
    //               denyButtonText: `Change`,
    //             }).then((result) => {
    //               /* Read more about isConfirmed, isDenied below */
    //               if (result.isConfirmed) {
    //                 uploading(file);
    //               } else if (result.isDenied) {
    //                 addImage();
    //               }
    //             });
    //           };
    //           reader.readAsDataURL(file);
    //         }
    //         function uploading(file) {
    //             const authTokens = JSON.parse(localStorage.getItem('authTokens'))
    //             const access = authTokens?.access
    //             const formData = new FormData();
    //             formData.append('image', file);
    //             axios
    //                 .post(`${imageupload}${trainerId}`, formData,{
    //                     headers: { "Authorization": `Bearer ${access}`,
    //                 }
    //                 })
    //                 .then((response) => {
    //                 console.log(response)
    //                 setImage(response.data?.profile_image);
    //                 // setImage(`localhost:8000${res.data?.image}`);
    //                 })
    //                 .catch((err) => {
    //                 console.log(err);
    //                 });
    //         }
    //       };
          
    // const Heart=()=>{
    // if(heart){
    // setheart(false);
    // }
    // else{
    // setheart(true);
    // }
    // }

   

  return (

    <div className="container-profile">
    <div className={`card ${isActive ? "black" : "" }`}>
      
    {/* <div className={`top_part ${isActive ? "font_icons" : "" }`}>
                <div className="icons">
                    <i onClick={ImageClick} className="fa fa-moon-o"></i>    
                </div>
            </div>
            <div className={`overlay ${fullimage ? "d-none" : "" }`}>
                <small onClick={FullImage} className="fa fa-close"></small>
                <img src={imageUrl} />
            </div>
            <div className="circle">
                <span onClick={FullImage}><img src={`http://localhost:8000${image}`} alt="Profile" />
</span>
            
            </div> */}
        <div className="prof-details">

        <input
          type='text'
          className='name-input'
          placeholder='Name'
          value={first_name}
          onChange={(event) => setName(event.target.value)}
          disabled={!editMode}
        />
        <input
          type='text'
          className='username-input'
          placeholder='Username'
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          disabled={!editMode}
        />
        <input
          type='text'
          className='username-input'
          placeholder='Email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          // disabled={!editMode}
        />
        
        <input
          type='text'
          className='username-input'
          placeholder='Phone'
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          disabled={!editMode}
        />
        </div>
        {editMode ? (
              <div className="button-profile-container">
                <button className='button' style={{padding:"10px 40px",background:"black",color:"white",borderRadius:"10px"}} onClick={handleSaveClick}>
                  Save
                </button>
              </div>
            ) : (
                <div className="button-profile-container">
                {/* <div className="button">
                    <button onClick={addImage}  >Update Image </button>
                </div> */}
                <div className="button">
                    <button onClick={handleEditClick} >Edit Profile </button>
                </div>
                <div className="button">
                    <button onClick={handleOpenModal}>Change Password </button>
                    <Modal open={openModal} onClose={handleCloseModal} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '400px', height: '400px' }}>
                        <Box sx={{ padding: '1rem', width: '100%' }}>
                          <FormControl fullWidth>
                            <InputLabel id="trainer-label">Current Password</InputLabel>
                            <Input type="text" id="current_password" label="current_password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)}/>
                            </FormControl>
                            <FormControl fullWidth>
                            <InputLabel id="trainer-label">New Password</InputLabel>
                            <Input type="text" id="current_password" label="new_password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                            </FormControl>
                            <FormControl>
                            <InputLabel id="trainer-label">Confirm Password</InputLabel>
                            <Input type="text" id="current_password" label="confirm_password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                          </FormControl>
                          <Button onClick={handleChangePasword} variant="contained" sx={{margin:"12px 40%"}}>
                            Add
                          </Button>
                        </Box>
                      </Paper>
                    </Modal>
                </div>
                </div>
            )}
        
       
    </div>

</div>
  )
}

export default TrainerDashboardContainer