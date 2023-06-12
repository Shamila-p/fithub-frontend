import React,{useState,useEffect} from 'react'
import MUIDataTable from "mui-datatables";
import {getSingleTrainer,blockTrainer,deleteTrainer} from '../../../Utils/urls'
import axios from '../../../Utils/axios'
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { useParams } from "react-router-dom"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';


function SingleTrainerData() {
    const columns = ["Name","Username","email","phone","status", "","",""];
    const [isBlocked, setIsBlocked] = useState(false)
    const { trainerId } = useParams();
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
     
    
      const handleEditButtonClick=(trainerId)=>{
        navigate(`/admin/trainer/edit/${trainerId}`)
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
        console.log(trainerId)
        console.log(getSingleTrainer)
        const url = `${getSingleTrainer}${trainerId}`
        axios.get(url,{
          headers: {"Authorization": `Bearer ${access}`,'Content-Type': 'application/json' },
        }).then((response)=>{
            const extractedData=response.data.map(trainer=>[
                trainer.first_name,
                trainer.username,
                trainer.email,
                trainer.phone,
                <button className={trainer.is_active?"green-button":"red-button"}>{trainer.is_active ? "Active" : "Blocked"}</button>,
                
                    <Button variant="outlined" color="primary" size="medium" startIcon={<EditIcon />}   onClick={() => handleEditButtonClick(trainer.id)}>Edit</Button>,
                    <Button variant="outlined" color="secondary" size="medium" onClick={() => handleBlock(trainer.id)}>Block/unblock
            </Button>,
    
                    <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={() => handleDelete(trainer.id)}>Delete</Button>,
            ])
            setData(extractedData)
        })
    
    
    
      },[access,handleBlock]);
    
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

export default SingleTrainerData