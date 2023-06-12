import React,{useState,useEffect} from 'react'
import MUIDataTable from "mui-datatables";
import '../../admin/UserData/AdminUserData.css'
import { getUsers } from '../../../Utils/urls';
import axios from '../../../Utils/axios';




function TrainerUserData() {
  const [data,setData]=useState([])

  const columns = ["Name","Username","email","phone","age","height","weight","plan"];
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
  const authTokens = JSON.parse(localStorage.getItem('trainer_authTokens'))
  const access = authTokens.access;
  useEffect(() => {
    axios.get(getUsers,{
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
          user.age,
          user.height,
          user.weight,
          user.plan_type
         
          
          
        ]);
        setData(extractedData);
      })
      .catch(error => {
        console.error(error);
      });
  }, [access]);
  return (
    <div className='user'>
     <h1 className='item-heading'>Users</h1>

    <div className="button-wrapper">
    </div>
    <div className="datatable-wrapper" style={{maxWidth:"90%",marginLeft:"12px"}}>
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

export default TrainerUserData