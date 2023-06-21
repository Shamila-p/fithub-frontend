import React,{useState,useEffect}from 'react'
import MUIDataTable from "mui-datatables";
import axios from '../../../Utils/axios'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import { getMembers } from '../../../Utils/urls';

function AdminMemberData() {
  const navigate = useNavigate()
  const columns = ["Name","Username","email","phone","own plan", "",""];
  const [data,setData]=useState([])
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

  const handleViewButtonClick = (userId)=>{
    navigate(`/admin/users/view/${userId}`);
  };

  const authTokens = JSON.parse(localStorage.getItem('authTokens'))
  const access = authTokens.access;
  console.log(access)
  useEffect(() => {
    axios.get(getMembers,{
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
         
          <p style={{"textAlign":"center"}}>{user.own_plan?"yes":"No"}</p>,
          // user.own_plan ? (user.assigned_trainer ? "Yes":"NO"):setOwnPlan(true),
          // ownPlan ? (user.assigned_trainer ? <p style={{ "textAlign": "center" }}>Yes</p> : <p style={{ "textAlign": "center" }}>No</p>) : null,
          // <p style={{"textAlign":"center"}}>{user.assigned_trainer?"yes":"No"}</p>,
          
          
          <Button variant='outlined' color="success" size="medium" style={{minWidth:"154px"}} onClick={() => handleViewButtonClick(user.id)}>View Details</Button>,
          // <Button variant="outlined" color="primary" size="medium" startIcon={<EditIcon />} onClick={() => handleEditButtonClick(user.id)}>Edit</Button>,
          // <button onClick={() => navigate("/admin/users/edit/${userId}")}>Edit</button>,
        

          // <Button variant="outlined" color="error" startIcon={<DeleteIcon />} size="medium" onClick={() => handleDelete(user.id)}>Delete</Button>,
          
        ]);
        setData(extractedData);
      })
      .catch(error => {
        console.error(error);
      });
  }, [access]);
  return (
   
        <div className='user'>
         <h1 className='item-heading'>Fithub Members</h1>
    
        <div className="button-wrapper">
        {/* <Button variant="contained" color="success"  >
          ADD USER
        </Button> */}
        </div>
        <div className="datatable-wrapper" style={{maxWidth:"90%"}}>
              <MUIDataTable
                data={data}
                columns={columns}
                options={options}
              />
        </div>
      </div>
  )
}

export default AdminMemberData