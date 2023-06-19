import React ,{useState,useEffect} from 'react'
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link,useNavigate,useParams } from "react-router-dom"
import Swal from "sweetalert2";
import axios from '../../../Utils/axios'
import {editTrainer,getSingleTrainer} from '../../../Utils/urls'
import Sidebar from '../Sidebar/Sidebar';

function EditTrainer() {
  const [selected, setSelected] = useState(0);
  const [first_name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const authTokens = JSON.parse(localStorage.getItem('authTokens'));
  const access = authTokens.access;
  const { trainerId } = useParams();
  const navigate = useNavigate();

  // Fetch the trainer's data and prefill the form
  useEffect(() => {
    const url = `${getSingleTrainer}${trainerId}`; // Replace with your endpoint to fetch trainer data

    axios
      .get(url, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        const dataArray = response.data; // Assuming response.data is an array

        if (dataArray.length > 0) {
          const dataObject = dataArray[0]; // Assuming the desired object is at index 0
          console.log(dataObject); // Log the object to verify its structure
          console.log(dataObject.first_name); // Log the value of first_name
          console.log(dataObject.phone); // Log the value of phone
          console.log(dataObject.email); // Log the value of email
          console.log(dataObject.username); // Log the value of username
      
          // Set the values in the state variables
          setName(dataObject.first_name);
          setPhone(dataObject.phone);
          setEmail(dataObject.email);
          setUserName(dataObject.username);
        }
      })
      .catch((err) => {
        console.log(err);
        // Handle error while fetching trainer data
      });
  }, [access, trainerId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      username,
      first_name,
      email,
      phone,
    };

    const url = `${editTrainer}${trainerId}`;

    axios
      .post(url, body, {
        headers: {
          Authorization: `Bearer ${access}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        navigate(`/admin/trainers`);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Invalid Credentials",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="Dashboard">
      <div className="Inner-dashboard">
        <Sidebar />
        <div className="main-dash ">
          <div className="form-container" style={{ margin: "100px" }}>
            <React.Fragment>
              <h2 style={{ marginBottom: "33px" }}>Edit Trainer</h2>
              <form onSubmit={handleSubmit} sx={{ padding: "10px" }}>
                <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                  <TextField
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={first_name}
                    fullWidth
                    required
                  />
                  <TextField
                    type="email"
                    variant="outlined"
                    color="secondary"
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    fullWidth
                    required
                  />
                </Stack>
                <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                  <TextField
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Phone"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    fullWidth
                    required
                  />
                  <TextField
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Username"
                    onChange={(e) => setUserName(e.target.value)}
                    value={username}
                    fullWidth
                    required
                  />
                </Stack>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    style={{ padding: "10px 43px" }}
                  >
                    SAVE
                  </Button>
                </div>
              </form>
            </React.Fragment>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTrainer;
