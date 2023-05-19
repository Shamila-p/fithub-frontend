import React ,{useState,useEffect}from 'react'
import '../UserData/AdminUserData.css'
import MUIDataTable from "mui-datatables";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {getPlans,deletePlan} from '../../../Utils/urls'
import axios from '../../../Utils/axios';
import Swal from 'sweetalert2';


function PlanData() {
    const columns = ["type","amount","features", "",""];
    const [data,setData]=useState([])
    const navigate=useNavigate()
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
        navigate(`/admin/plan/add`)
      }
      const handleEdit = (planId)=>{
        navigate(`/admin/plan/edit/${planId}`)


      }
      const handleDelete = (planId)=>{
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
        const url=`${deletePlan}${planId}`

          axios.post(url,{
            headers: {"Authorization": `Bearer ${access}`,'Content-Type': 'application/json' },
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

      useEffect(()=>{
        axios.get(getPlans,{
          headers: {"Authorization": `Bearer ${access}`,'Content-Type': 'application/json' },
        }).then((response)=>{
            const extractedData=
            response.data.map(plan=>[
                plan.type,
                plan.amount,
                plan.features.map(feature => feature.feature_text).join(','),
                    <button onClick={() => handleEdit(plan.id)}>Edit</button>,
                  
                    <button onClick={() => handleDelete(plan.id)}>Delete</button>,
            ])
            setData(extractedData)
        })
    
    
    
      },[access,handleDelete]);
    
    
      
  return (
    <div className='user'>
    <h1 className='item-heading'>Plans</h1>

   <div className="button-wrapper">
   <Button variant="contained" color="success" onClick={handleAdd} >
     ADD PLAN
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

export default PlanData