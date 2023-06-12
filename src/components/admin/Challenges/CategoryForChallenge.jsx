// import React,{useEffect, useState} from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { categories,addCategory } from '../../../Utils/urls';
// import axios from '../../../Utils/axios'
// import Modal from '@mui/material/Modal';
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import Input from "@mui/material/Input";
// import MenuItem from "@mui/material/MenuItem";
// import { Paper } from "@mui/material";
// import { useNavigate, useParams } from 'react-router-dom';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// // const bull = (
// //   <Box
// //     component="span"
// //     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
// //   >
// //     •
// //   </Box>
// // );

// export default function CategoryForChallenge() {
//     const [data,setData]=useState([])
//     const [openModal, setOpenModal] = useState(false);
//     // const [openEditModal, setOpenEditModal] = useState(false);
//     const [category,setCategory]=useState('')

    
//     const authTokens = JSON.parse(localStorage.getItem('authTokens'))
//     const access = authTokens.access;
//     const body={
//         category_name:category
//     }
//     const handleOpenModal = ()=>{
//         setOpenModal(true)
//     }

//     // const handleOpenEditModal=()=>{
//     //   setOpenEditModal(true)
//     // }
//     // const handleCloseEditModal=()=>{
//     //   setOpenEditModal(false)
//     // }
    
//     const handleCloseModal =()=>{
//         setOpenModal(false)

//     }
//     const navigate=useNavigate()
//     const handleVideo=(categoryId)=>{
//         navigate(`/admin/challenges/${categoryId}/videos`)
//     }
//     // const handleAdd =()=>{  
//     //   console.log("body",body)
//     //    axios.post(addCategory,body,{
//     //     headers: {
//     //         Authorization: `Bearer ${access}`,
//     //         'Content-Type': 'application/json'
//     //       }
//     //    }).then((response)=>{
//     //         handleCloseModal()
//     //    }
//     //    )
//     // }
//     // const categoryId=useParams()
//     // const handleEdit=(categoryId)=>{
//     //   const EditBody = {
//     //     category_name: category,
//     //     id: categoryId
//     //   };
//     //   axios.post(addCategory,EditBody,{
//     //     headers: {
//     //         Authorization: `Bearer ${access}`,
//     //         'Content-Type': 'application/json'
//     //       }
//     //    }).then((response)=>{
//     //     handleCloseEditModal()
//     //    }
//     //    )
//     // }

//     useEffect(()=>{
//       axios.get(categories,{
//         headers: {"Authorization": `Bearer ${access}`,"Content-Type": "application/json" }},
//         ).then((response)=>{
//             setData(response.data)
//             // dispatch(setCategories({categories:response.data}))
//         })

//     },[])

   

     
//   return (
//     <div className="challenge" style={{ display: 'flex', flexDirection: 'column' }}>
//       {/* <Button
//         size="small"
//         variant="contained"
//         onClick={handleOpenModal}
//         sx={{ alignSelf: 'flex-end', margin: '30px 24px', padding: '10px', minWidth: 50, maxWidth: 250 }}
//       >
//         Add Category
//       </Button>
//       <Modal open={openModal} onClose={handleCloseModal} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
//             <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '400px', height: '400px' }}>
//               <Box sx={{ padding: '1rem', width: '100%' }}>
//                 <FormControl fullWidth>
//                   <InputLabel id="trainer-label">Category Name</InputLabel>
//                   <Input type="text" id="category" label="category" value={category} onChange={(e) => setCategory(e.target.value)}/>
//                 </FormControl>
//                 <Button onClick={handleAdd} variant="contained" sx={{margin:"12px 40%"}}>
//                   Add
//                 </Button>
//               </Box>
//             </Paper>
//         </Modal> */}

//       <div
//         className="category-container"
//         style={{
//           display: 'flex',
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'center',
//           height: '90vh',
//         }}
//       >
//         {data.map((category) => (
//             <Card key={category.id} sx={{ minWidth: 50, maxWidth: 250, padding: '38px', marginRight: '10px' }}>
//           <CardContent>
//             <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
//               {category.category_name}
//             </Typography>
//           </CardContent>
//           <CardActions>
//           <div style={{display:"flex",gap:"3px"}}>
//           <Button
//             size="small"
//             variant="outlined"
//             sx={{ padding: '6px' }}
//             onClick={() => handleVideo(category.id)}
//           >
//             Show videos
//           </Button>
          
//          {/* <div>
//          <EditIcon style={{marginTop:"5px"}}
//            onClick={handleOpenEditModal}
//           />
//           <Modal open={openEditModal} onClose={handleCloseEditModal} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
//             <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '400px', height: '400px' }}>
//               <Box sx={{ padding: '1rem', width: '100%' }}>
//                 <FormControl fullWidth>
//                   <InputLabel id="trainer-label">Category Name</InputLabel>
                  
//                   <Input type="text" id="category" label="category" value={categoryItem.category_name} defaultValue={categoryItem.category_name} onChange={(e) => setCategory(e.target.value)}/>
//                 </FormControl>
//                 <Button onClick={handleEdit(categoryItem.id)} variant="contained" sx={{margin:"12px 40%"}}>
//                   Edit
//                 </Button>
                
//               </Box>
//             </Paper>
//         </Modal>
//          </div> */}
//           {/* <EditIcon style={{marginTop:"5px"}}
//           />
//           <DeleteIcon style={{marginTop:"5px"}}/> */}
//           </div>
//           </CardActions>
//         </Card>
//   ))}
        
//       </div>
//     </div>
//   );
// }
// import React,{useState} from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { categories,addCategory } from '../../../Utils/urls';
// import axios from '../../../Utils/axios'
// import Modal from '@mui/material/Modal';
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import Input from "@mui/material/Input";
// import MenuItem from "@mui/material/MenuItem";
// import { Paper } from "@mui/material";
// import { useNavigate } from 'react-router-dom';

// // const bull = (
// //   <Box
// //     component="span"
// //     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
// //   >
// //     •
// //   </Box>
// // );

// export default function CategoryForChallenge() {
//     const [data,setData]=useState([])
//     const [openModal, setOpenModal] = useState(false);
//     const [category,setCategory]=useState('')

    
//     const authTokens = JSON.parse(localStorage.getItem('authTokens'))
//     const access = authTokens.access;
//     const body={
//         category_name:category
//     }
//     const handleOpenModal = ()=>{
//         setOpenModal(true)
//     }
    
//     const handleCloseModal =()=>{
//         setOpenModal(false)

//     }
//     const navigate=useNavigate()
//     const handleVideo=(categoryId)=>{
//         navigate(`/admin/challenges/${categoryId}/videos`)
//     }
//     const handleAdd =()=>{  
//        axios.post(addCategory,body,{
//         headers: {
//             "Authorization": `Bearer ${access}`,
//             'Content-Type': 'application/json'
//           }
//        }).then((response)=>{
//             handleCloseModal()
//        }
//        )
//     }


   

//       axios.get(categories,{
//         headers: {"Authorization": `Bearer ${access}`,"Content-Type": "application/json" }},
//         ).then((response)=>{
//             console.log(response.data)
//             setData(response.data)
//         })

//   return (
//     <div className="challenge" style={{ display: 'flex', flexDirection: 'column' }}>
//       <Button
//         size="small"
//         variant="contained"
//         onClick={handleOpenModal}
//         sx={{ alignSelf: 'flex-end', margin: '30px 24px', padding: '10px', minWidth: 50, maxWidth: 250 }}
//       >
//         Add Category
//       </Button>
//       <Modal open={openModal} onClose={handleCloseModal} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
//             <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '400px', height: '400px' }}>
//               <Box sx={{ padding: '1rem', width: '100%' }}>
//                 <FormControl fullWidth>
//                   <InputLabel id="trainer-label">Category Name</InputLabel>
//                   <Input type="text" id="category" label="category" value={category} onChange={(e) => setCategory(e.target.value)}/>
//                 </FormControl>
//                 <Button onClick={handleAdd} variant="contained" sx={{margin:"12px 40%"}}>
//                   Add
//                 </Button>
//               </Box>
//             </Paper>
//         </Modal>

//       <div
//         className="category-container"
//         style={{
//           display: 'flex',
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'center',
//           height: '90vh',
//         }}
//       >
//         {data.map((category) => (
//             <Card sx={{ minWidth: 50, maxWidth: 250, padding: '38px', marginRight: '10px' }}>
//           <CardContent>
//             <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
//               {category.category_name}
//             </Typography>
//           </CardContent>
//           <CardActions>
//           <Button
//   size="small"
//   variant="outlined"
//   sx={{ marginLeft: '24px', padding: '4px' }}
//   onClick={() => handleVideo(category.id)}
// >
//   Show videos
// </Button>
//           </CardActions>
//         </Card>
//   ))}
        
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { categories, addCategory, editCategory, deleteCategory } from '../../../Utils/urls';
import axios from '../../../Utils/axios';
import Modal from '@mui/material/Modal';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

export default function CategoryForChallenge() {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [category, setCategory] = useState('');
  const [editCategoryName, setEditCategoryName] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const authTokens = JSON.parse(localStorage.getItem('authTokens'));
  const access = authTokens.access;
  const body = {
    category_name: category,
  };
 

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleEditModalOpen  =(categoryId)=>{
    setSelectedCategoryId(categoryId);
    setOpenEditModal(true);
    const selectedCategory = data.find((category) => category.id === categoryId);
    if (selectedCategory) {
      setEditCategoryName(selectedCategory.category_name);
    }

  }
  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

  const navigate = useNavigate();
  const handleVideo = (categoryId) => {
    navigate(`/admin/challenges/${categoryId}/videos`);
  };

  const handleAdd = () => {
    axios
      .post(addCategory, body, {
        headers: {
          Authorization: `Bearer ${access}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        handleCloseModal();
      });
  };

  const handleEdit=(categoryId)=>{
    const editBody = {
      category_name: editCategoryName,
    };
    console.log(categoryId)
    const url=`${editCategory}${categoryId}`
    console.log("ee",url)
        axios
      .post(url, editBody, {
        headers: {
          Authorization: `Bearer ${access}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        handleCloseEditModal();
      });
  };
  const handleDelete = (categoryId)=>{
      axios.post(`${deleteCategory}${categoryId}`,{
        headers: {
          Authorization: `Bearer ${access}`,
          'Content-Type': 'application/json',
        },
      }).then((response)=>{
        console.log(response)
      })
  }

  useEffect(() => {
    axios
      .get(categories, {
        headers: {
          Authorization: `Bearer ${access}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setData(response.data);
      });
  }, [handleEdit,handleDelete]);

  return (
    <div className="challenge" style={{ display: 'flex', flexDirection: 'column' }}>
      <Button
        size="small"
        variant="contained"
        onClick={handleOpenModal}
        sx={{ alignSelf: 'flex-end', margin: '30px 24px', padding: '10px', minWidth: 50, maxWidth: 250 }}
      >
        Add Category
      </Button>
      <Modal open={openModal} onClose={handleCloseModal} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '400px', height: '400px' }}>
          <Box sx={{ padding: '1rem', width: '100%' }}>
            <FormControl fullWidth>
              <InputLabel id="trainer-label">Category Name</InputLabel>
              <Input type="text" id="category" label="category" value={category} onChange={(e) => setCategory(e.target.value)} />
            </FormControl>
            <Button onClick={handleAdd} variant="contained" sx={{ margin: '12px 40%' }}>
              Add
            </Button>
          </Box>
        </Paper>
      </Modal>
      <div className="scroll-container" style={{ height: '90vh', overflowY: 'auto' }}>
      <div
        className="category-container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'center',
          height: '90vh',
          gap: '10px',
        }}
      >
        {data.map((category) => (
          <Card key={category.id} sx={{ width: 300, marginBottom: '20px',padding:'10px' }}>
            <CardContent>
              <Typography variant="h6" component="div" sx={{textAlign:"center"}}>
                {category.category_name}
              </Typography>
            </CardContent>
            <CardActions sx={{justifyContent:"center"}}>
              <Button size="small" variant='outlined' onClick={() => handleVideo(category.id)}>
                View Videos
              </Button>
                <EditIcon onClick={()=>{
                  handleEditModalOpen(category.id)
                }}/>
                    
                <DeleteRoundedIcon onClick={()=>{
                  handleDelete(category.id)}}/>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
    {selectedCategoryId && (
    <Modal open={openEditModal} onClose={handleCloseEditModal} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '400px', height: '400px' }}>
                  <Box sx={{ padding: '1rem', width: '100%' }}>
                    <FormControl fullWidth>
                      <InputLabel id="trainer-label">Category Name</InputLabel>
                      <Input type="text" id="category" value={editCategoryName} label="category" onChange={(e) => setEditCategoryName(e.target.value)}/>
                    </FormControl>
                    <Button  onClick={() => handleEdit(selectedCategoryId)} variant="contained" sx={{ margin: '12px 40%' }}>
                      Edit
                    </Button>
                  </Box>
                </Paper>
              </Modal>
               )}
    </div>
  );
}
