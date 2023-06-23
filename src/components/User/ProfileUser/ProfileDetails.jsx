import React, { useEffect, useState } from 'react';
import './CardProfile.css';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import { Paper } from "@mui/material";
import Box from '@mui/material/Box';
import axios from '../../../Utils/axios'
import { changePassword, editUser, getUsers } from '../../../Utils/urls'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

function ProfileDetails() {
  const [editMode, setEditMode] = useState(false);
  const [changePasswordModalOpen, setChangePasswordModalOpen] = useState(false);
  const [knowStatusModalOpen, setKnowStatusModalOpen] = useState(false);
  const [first_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [ownPlan, setOwnPlan] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [emailEdit, setEmailEdit] = useState("");

  console.log("currently", isActive)
  const authTokens = JSON.parse(localStorage.getItem('user_authTokens'))
  const access = authTokens?.access
  const decoded_token = jwt_decode(access)
  const userId = decoded_token.user_id
  const assignedTrainer = decoded_token.assigned_trainer
  console.log("trass",assignedTrainer)
  const navigate = useNavigate()

  const handleEditClick = () => {
    setEditMode(true);
  };

  const editBody = {
    username: username,
    first_name: first_name,
    email: email,
    phone: phone,
    height: height,
    weight: weight,
    age: age,
    gender, gender
  }

  const handleSaveClick = () => {
    if (validateFields()) {
      axios.post(`${editUser}${userId}`, editBody, {
        headers: { "Authorization": `Bearer ${access}`, "Content-Type": "application/json" },
      }).then((response) => {
        console.log('success',response.data)
        fetchData();
      setEditMode(false);

      })

    }
  };

  const handleOpenKnowStatusModal = () => {
    setKnowStatusModalOpen(true);
  };

  const handleCloseKnowStatusModal = () => {
    setKnowStatusModalOpen(false);
  };

  const handleOpenChangePasswordModal = () => {
    setChangePasswordModalOpen(true);
  };

  const handleCloseChangePasswordModal = () => {
    setChangePasswordModalOpen(false);
  };

  const handleChat = () => {
    navigate('/chat')
    handleCloseKnowStatusModal()
  }

  const bodyPassword = {
    current_password: currentPassword,
    new_password: newPassword,
    confirm_password: confirmPassword,
    id: userId
  }

  const handleChangePasword = () => {
    axios.post(`${changePassword}`, bodyPassword, {
      headers: { "Authorization": `Bearer ${access}`, "Content-Type": "application/json" },
    })
    setChangePasswordModalOpen(false)
  }

  const fetchData = () => {
    axios
      .get(`${getUsers}`, {
        headers: { "Authorization": `Bearer ${access}` },
      })
      .then((response) => {
        console.log("data", response.data);
        console.log("fn", response.data[0].first_name);
        setName(response.data[0].first_name);
        setUsername(response.data[0].username);
        setEmail(response.data[0].email);
        setPhone(response.data[0].phone);
        setHeight(response.data[0].height);
        setWeight(response.data[0].weight);
        setAge(response.data[0].age);
        setGender(response.data[0].gender);
        setOwnPlan(response.data[0].own_plan);
        response.data[0].is_active ? setIsActive(true) : setIsActive(false);
      });
  };


  useEffect(() => {
    fetchData();
  }, []);

  const validateFields = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    setValidationError("Invalid email address");
    return false;
  }


  
  if (phone === "0000000000") {
    setValidationError("Invalid phone number");
    return false;
  }

  if (phone.startsWith("0")) {
    setValidationError("Invalid phone number");
    return false;
  }
    if (Number(height) < 0) {
      setValidationError("Height cannot be negative");
      return false;
    }
    if (Number(weight) < 0) {
      setValidationError("Weight cannot be negative");
      return false;
    }
    if (Number(age) < 0) {
      setValidationError("Age cannot be negative");
      return false;
    }
    setValidationError("");
    return true;
  }

  return (
    <div className='card-profile' style={{ width: "850px", height: "360px", backgroundColor: "#e4cfcec7", marginTop: "30px" }}>
      <div className="form-prof-container" style={{ marginTop: "60px" }}>
        <div className="main-profile-data" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
          <div className="profile-data" style={{ display: "flex", flexDirection: "row" }}>
            <input
              type='text'
              className='name-input'
              placeholder='Name'
              value={first_name}
              defaultValue={first_name}
              onChange={(event) => setName(event.target.value)}
              disabled={!editMode}
            />
            <input
              type='text'
              className='username-input'
              placeholder='Username'
              value={username}
              defaultValue={username}
              onChange={(event) => setUsername(event.target.value)}
              disabled={!editMode}
            />
          </div>
          <div className="profile-data" style={{ display: "flex", flexDirection: "row" }}>
            <input
              type='text'
              className='name-input'
              placeholder='Email'
              value={email}
              defaultValue={email}
              onChange={(event) => setEmail(event.target.value)}
              disabled={!editMode}
            />
            <input
              type='text'
              className='username-input'
              placeholder='Phone'
              value={phone}
              defaultValue={phone}
              onChange={(event) => setPhone(event.target.value)}
              disabled={!editMode}
            />
          </div>
          <div className="profile-data" style={{ display: "flex", flexDirection: "row" }}>
            <input
              type='text'
              className='name-input'
              placeholder='Age'
              value={age}
              defaultValue={age}
              onChange={(event) => setAge(event.target.value)}
              disabled={!editMode}
            />
            <input
              type='text'
              className='username-input'
              placeholder='Gender'
              value={gender}
              defaultValue={gender}
              onChange={(event) => setGender(event.target.value)}
              disabled={!editMode}
            />
          </div>
          <div className="profile-data" style={{ display: "flex", flexDirection: "row" }}>
            <input
              type='text'
              className='name-input'
              placeholder='Height'
              value={height}
              defaultValue={height}
              onChange={(event) => setHeight(event.target.value)}
              disabled={!editMode}
            />
            <input
              type='text'
              className='username-input'
              placeholder='Weight'
              value={weight}
              defaultValue={weight}
              onChange={(event) => setWeight(event.target.value)}
              disabled={!editMode}
            />
          </div>
        </div>
      </div>
      {editMode ? (
        <div className="button-profile-container" style={{ paddingBottom: "0px" }}>
          <button type='submit' className='button' style={{ padding: "10px 40px", background: "black", color: "white", borderRadius: "10px", marginTop: "10px" }} onClick={handleSaveClick}>
            Save
          </button>
        </div>
      ) : (
          <div className="button-profile-container">
             {/* <div className="button">
                    <button  >Update Image </button>
                </div> */}
            <div className="button">
              <button onClick={handleEditClick} >Edit Profile </button>
            </div>
            <div className="button">
              <button onClick={handleOpenChangePasswordModal}>Change Password </button>
              <Modal open={changePasswordModalOpen} onClose={handleCloseChangePasswordModal} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '400px', height: '400px' }}>
                  <Box sx={{ padding: '1rem', width: '100%' }}>
                    <FormControl fullWidth>
                      <InputLabel id="trainer-label">Current Password</InputLabel>
                      <Input type="password" id="current_password" label="current_password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
                    </FormControl>
                    <FormControl fullWidth>
                      <InputLabel id="trainer-label">New Password</InputLabel>
                      <Input type="password" id="current_password" label="new_password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    </FormControl>
                    <FormControl fullWidth>
                      <InputLabel id="trainer-label">Confirm Password</InputLabel>
                      <Input type="password" id="current_password" label="confirm_password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </FormControl>
                    <Button onClick={handleChangePasword} variant="contained" sx={{ margin: "12px 40%" }}>
                      Add
                    </Button>
                  </Box>
                </Paper>
              </Modal>
            </div>
            <div className="button">
              <button onClick={() => {
                navigate(`/workout-videos`)
              }} >Watch Videos</button>
            </div>

            {ownPlan?(<div className="button">
                    <button onClick={handleOpenKnowStatusModal} >Know Status </button>
                    <Modal open={knowStatusModalOpen} onClose={handleCloseKnowStatusModal} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '400px', height: '400px' }}>
                        <Box sx={{ padding: '1rem', width: '100%' }}>
                         {assignedTrainer?<div>
                            <p style={{ textAlign: 'center', marginBottom: '1rem',fontSize:"20px" }}>Trainer  assigned</p> 
                            <Button onClick={handleChat} variant="contained" sx={{
                                margin: '12px 37%',
                                fontSize: '0.8rem',
                                padding: '8px 12px',
                                minWidth: '103px'
                            }}>
                            Go to Chat
                            </Button>
                         </div>
                         :
                         <>
                         <p style={{ textAlign: 'center', marginBottom: '1rem',fontSize:"20px" }}>
            The trainer will be assigned shortly. Once the trainer is assigned, you can chat with them using the chat option displayed on your screen.
          </p>
          <Button  onClick={handleCloseKnowStatusModal} variant="contained"small sx={{margin:"12px 40%"}}>
          Ok
        </Button></>
                         } 
                        
                         
                        </Box>
                      </Paper>
                    </Modal>
                    <div className="button">
              <button style={{marginTop:"-69px"}} onClick={() => {{navigate('/upgrade-plan')}
              }} >Change Plan</button>
            </div>
                </div>
                ):(<div className="button">
                    <button onClick={()=>{navigate('/category')}} >Own Plan </button>
                </div>)}
              
          </div>
        )}
      {validationError && (
        <div className="error-message" style={{color:"red",fontSize:"20px"}}>
          {validationError}
        </div>
      )}
    </div>
  );
}

export default ProfileDetails;
