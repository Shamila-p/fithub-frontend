import React, { useState,useEffect,useMemo } from 'react';
import MUIDataTable from "mui-datatables";
import '../UserData/AdminUserData.css'
import axios from '../../../Utils/axios';
import { getUsers,userBlock,deleteUser,assignedUsers } from '../../../Utils/urls';
import { useNavigate } from 'react-router-dom'
import EditUser from '../EditUser/EditUser';
import Icon from '@mui/material/Icon';
import Swal from "sweetalert2";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useParams } from "react-router-dom"


function AssignedUsers() {
    const navigate = useNavigate()
  // const [ownPlan, setOwnPlan] = useState(true);
  const columns = ["Name","Username","email","phone","status","own plan", "","","",""];
  // const columns = useMemo(() => {
  //   const baseColumns = ["Name", "Username", "Email", "Phone", "Status", "Own Plan"];
  
  //   if (ownPlan) {
  //     baseColumns.push("Is Assigned");
  //   }
  
  //   baseColumns.push("View Details", "Edit", "Block/Unblock", "Delete");
  
  //   return baseColumns;
  // }, [ownPlan]);
  const [data,setData]=useState([])
  const [isBlocked, setIsBlocked] = useState(false)
  

  const handleViewButtonClick = (userId)=>{
    navigate(`/admin/users/view/${userId}`);
  };
  // const [showEditForm, setShowEditForm] = useState(false);
  const handleEditButtonClick = (userId) => {
    // Navigate to the edit form page with the user ID as a parameter
    navigate(`/admin/users/edit/${userId}`);
    // setShowEditForm(true);
  };


  
  const handleBlock = (userId, isBlocked) => {
    let confirmationText = isBlocked
      ? "Are you sure you want to block this user?"
      : "Are you sure you want to unblock this user?";
  
    Swal.fire({
      title: 'Confirmation',
      text: confirmationText,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `${userBlock}${userId}`;
        axios
          .post(url, {
            headers:  {"Authorization": `Bearer ${access}`,'Content-Type': 'application/json' },
          })
          .then((response) => {
            setIsBlocked(!isBlocked); // Update the isBlocked state
          })
          .catch((error) => {
            console.log("error", error);
          });
      }
    });
  };
  
  const handleDelete=(userId) =>{
    Swal.fire({
      title: 'Confirmation',
      text: "Are you sure you want to delete",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
    }).then((result)=>{
      if(result.isConfirmed){
      const url=`${deleteUser}${userId}`

        axios.post(url, {
          headers:  {"Authorization": `Bearer ${access}`,'Content-Type': 'application/json' },
        }).then((response)=>{
            console.log("success");
          })
          .catch((error)=>{
            console.log("error", error);

          });
      }
    });
    
  }

  const options = {
    filterType: "checkbox",
    rowsPerPage: [5],
    rowsPerPageOptions: [5,10, 15, 25, 50, 100],
    jumpToPage: true,
    textLabels: {
      pagination: {
        next: "Next >",
        previous: "< Previous",
        rowsPerPage: "Total items Per Page",
        displayRows: "OF",
      },
    },
    fixedHeader: true,
    onChangePage(currentPage) {
      console.log({ currentPage });
    },
    onChangeRowsPerPage(numberOfRows) {
      console.log({ numberOfRows });
    },
  };
  const authTokens = JSON.parse(localStorage.getItem('authTokens'))
  const access = authTokens.access;
  console.log(access)
  const { trainerId } = useParams();


  useEffect(() => {
    const url= `${assignedUsers}${trainerId}`

    axios.get(url,{
      headers: {"Authorization": `Bearer ${access}`,'Content-Type': 'application/json' },
    })
      .then(response => {
        console.log(response)
        // Extract the desired columns from the response data
        const extractedData = response.data.map(user => [
          user.first_name,
          user.username,
          user.email,
          user.phone,
          <button className={user.is_active ? "green-button" : "red-button"}>
  {user.is_active ? "Active" : "Blocked"}
</button>,
          <p style={{"textAlign":"center"}}>{user.own_plan?"yes":"No"}</p>,
          // user.own_plan ? (user.assigned_trainer ? "Yes":"NO"):setOwnPlan(true),
          // ownPlan ? (user.assigned_trainer ? <p style={{ "textAlign": "center" }}>Yes</p> : <p style={{ "textAlign": "center" }}>No</p>) : null,
          // <p style={{"textAlign":"center"}}>{user.assigned_trainer?"yes":"No"}</p>,
          
          
          <Button variant='outlined' color="success" size="medium" style={{minWidth:"154px"}} onClick={() => handleViewButtonClick(user.id)}>View Details</Button>,
          <Button variant="outlined" color="primary" size="medium" startIcon={<EditIcon />} onClick={() => handleEditButtonClick(user.id)}>Edit</Button>,
          // <button onClick={() => navigate("/admin/users/edit/${userId}")}>Edit</button>,
          <Button variant="outlined" color="secondary" size="medium" onClick={() => handleBlock(user.id, user.is_active)}>
  {user.is_active ? "Block" : "Unblock"}
</Button>,

          <Button variant="outlined" color="error" startIcon={<DeleteIcon />} size="medium" onClick={() => handleDelete(user.id)}>Delete</Button>,
          
        ]);
        setData(extractedData);
      })
      .catch(error => {
        console.error(error);
      });
  }, [access,handleBlock]);
  return (
    <div className="datatable-wrapper" style={{marginTop:"100px",maxWidth:"90%",marginLeft:"20px"}}>
    <MUIDataTable
      data={data}
      columns={columns}
      title={"Employee List"}
      options={options}
    />
</div>
  )
}

export default AssignedUsers