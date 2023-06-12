import React, {useEffect, useState} from 'react'
import '../UserData/AdminUserData.css'
import MUIDataTable from "mui-datatables";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import { getTrainers,blockTrainer,deleteTrainer,assignedUsers } from '../../../Utils/urls';
import axios from '../../../Utils/axios'
import Swal from "sweetalert2";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function AdminTrainerData() {
  const columns = ["Name","Username","email","phone","status","User Assigned", "","",""];
  const [data,setData]=useState([])
  const [users,setUsers]=useState([])
  const [isBlocked, setIsBlocked] = useState(false)

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

  const handleAdd=()=>{
    console.log('add')
    navigate(`/admin/trainers/add`)
  }

  const handleEditButtonClick=(trainerId)=>{
    navigate(`/admin/trainer/edit/${trainerId}`)
  }

  const handleViewUsers=(trainerId)=>{
    navigate(`/admin/trainers/assigned-users/${trainerId}`)
    //  const url= `${assignedUsers}${trainerId}`
    //   axios
    //       .get(url,{headers:{"Authorization": `Bearer ${access}`,'Content-Type': 'application/json' },})
    //       .then((response)=>{
    //         console.log(response.data)
    //         setUsers(response.data)
    //       }
    //       ) .catch((error) => {
    //           console.log("error", error);
    //       });
}

  const handleBlock=(trainerId)=>{
    let confirmationText = isBlocked
    ? "Are you sure you want to unblock this user?"
    : "Are you sure you want to block this user?";


    
        Swal.fire({
            title: 'Confirmation',
            text: confirmationText,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
        }).then((result)=>{
            if (result.isConfirmed){
                const url=`${blockTrainer}${trainerId}`

                axios
                .post(url,{headers:{"Authorization": `Bearer ${access}`,'Content-Type': 'application/json' },})
                .then((response)=>{
                    setIsBlocked(!isBlocked); 
                }
                ) .catch((error) => {
                    console.log("error", error);
                  });
           
            }

  })
}

const handleDelete=(trainerId)=>{

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
        const url =`${deleteTrainer}${trainerId}`
        axios.post(url,{ headers:  {"Authorization": `Bearer ${access}`,'Content-Type': 'application/json' },
        }).then((response)=>{
            console.log("success");

        }
        ).catch((error)=>{
            console.log("error", error);

          });
      }
})

}


  const authTokens = JSON.parse(localStorage.getItem('authTokens'))
  const access = authTokens.access;
  const navigate=useNavigate()


  useEffect(()=>{
    axios.get(getTrainers,{
      headers: {"Authorization": `Bearer ${access}`,'Content-Type': 'application/json' },
    }).then((response)=>{
        const extractedData=response.data.map(trainer=>[
            trainer.first_name,
            trainer.username,
            trainer.email,
            trainer.phone,
            <button className={trainer.is_active?"green-button":"red-button"}>{trainer.is_active ? "Active" : "Blocked"}</button>,
            trainer.assigned_user ? (
                <>
                  <div style={{ textAlign: 'center' }}>Yes</div>
                  <Button variant='outlined' color="success" size="medium" style={{minWidth:"154px"}} className="view-users-button" onClick={() => handleViewUsers(trainer.id)}>View Users</Button>
                </>
              ) : (
                <div style={{ textAlign: 'center' }}>No</div>
              ),
                <Button variant="outlined" color="primary" size="medium" startIcon={<EditIcon />} onClick={() => handleEditButtonClick(trainer.id)}>Edit</Button>,
                <Button variant="outlined" color="secondary" size="medium" onClick={() => handleBlock(trainer.id)}>Block/unblock
        </Button>,

                <Button variant="outlined" color="error" startIcon={<DeleteIcon />} size="medium" onClick={() => handleDelete(trainer.id)}>Delete</Button>,
        ])
        setData(extractedData)
    })



  },[access,handleBlock]);




  
  return (
    <div className='user'>
     <h1 className='item-heading'>Trainers</h1>

    <div className="button-wrapper">
    <Button variant="contained" color="success" onClick={handleAdd} >
      ADD TRAINER
    </Button>
    </div>
    <div className="datatable-wrapper">
          <MUIDataTable
            data={data}
            columns={columns}
            title={"Employee List"}
            options={options}
          />
    </div>
  </div>
  )
}

export default AdminTrainerData