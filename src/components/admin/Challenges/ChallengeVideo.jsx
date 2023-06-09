import React,{useEffect, useState} from 'react'
import MUIDataTable from "mui-datatables";
import Button from '@mui/material/Button';
import Sidebar from '../Sidebar/Sidebar';
import '../../../pages/Admin/Dashboard/Dashboard.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../Utils/axios'
import Modal from '@mui/material/Modal';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import MenuItem from "@mui/material/MenuItem";
import { Paper,TextField } from "@mui/material";
import Box from '@mui/material/Box';
import { addVideo,deleteVideo,getVideos,editVideo } from '../../../Utils/urls';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditIcon from '@mui/icons-material/Edit';


function ChallengeVideo() {
    const columns = ["Title",{
      name: "Url",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value) => (
          <a href={value} target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        ),
      },
    },"",""];
    const {categoryId}=useParams()
    const [data,setData]=useState([])
    const [title,setTitle]=useState([])
    const [url,setUrl]=useState([])
    const [openModal,setOpen]=useState(false)
    const [openEditModal,setOpenEditModal]=useState(false)
    const [selectedVideoId, setSelectedVideoId] = useState("");

    const handleOpenModal =( )=> {
      setOpen(true)
    }
    const handleCloseModal=()=>{
      setOpen(false)
    }
    const handleEditOpenModal =(videoId)=> {
      setSelectedVideoId(videoId)
      setOpenEditModal(true);

    }
    const handleEditCloseModal=()=>{
      setOpenEditModal(false)
    }
    const authTokens = JSON.parse(localStorage.getItem('authTokens'))
    const access = authTokens.access;
    const body={
      title:title,
      url:url,
      category_id:categoryId
    }
    console.log(body)

    const handleAdd=()=>{
      console.log("add")
      const url=`${addVideo}${categoryId}`
      axios.post(url,body,{
        headers: {
          Authorization: `Bearer ${access}`,
          'Content-Type': 'application/json'
        }
      }).then((response)=>{
        setUrl('')
        setTitle('')
        handleCloseModal()
      })
    }

   const handleEdit = ()=>{
    const url=`${editVideo}${selectedVideoId}`
    axios.post(url,body,{
      headers: {
        Authorization: `Bearer ${access}`,
        'Content-Type': 'application/json'
      }
    }).then((response)=>{
      console.log("success")
      setOpenEditModal(false)

    })

   }

    const handleDelete = (videoId)=>{
      console.log("video",videoId)
      axios.post(`${deleteVideo}${videoId}`,{
        headers: {
          Authorization: `Bearer ${access}`,
          'Content-Type': 'application/json'
        }
      }).then((response)=>{
        console.log(response)
      })

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
      const categoryUrl=`${getVideos}${categoryId}`
      console.log(categoryUrl)
      useEffect(()=>{
        axios.get(categoryUrl,{
        headers: {"Authorization": `Bearer ${access}`,"Content-Type": "application/json" },

        }
          ).then(((response)=>{
            const extractedData = response.data.map(video=>[
              video.title,
              video.url,
              <EditIcon onClick={()=>{
                handleEditOpenModal(video.id)
              }}/>,
              
              <DeleteRoundedIcon  onClick={() => handleDelete(video.id)}/>,
              setTitle(video.title),
              setUrl(video.url)

            ]

            )
            setData(extractedData)
            
          }))
      },[handleDelete
      ])
      
  return (
    <div className="Dashboard">
            <div className='Inner-dashboard'>
                <Sidebar/>
                <div className="main-dash">
                    

<div className="button-wrapper">
<Button variant="contained" color="success" onClick={handleOpenModal} style={{marginTop:"100px"}}>
  ADD VIDEO
</Button>
<Modal open={openModal} onClose={handleCloseModal} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '400px', height: '400px' }}>
              <Box sx={{ padding: '1rem', width: '100%' }}>
                <FormControl fullWidth>
                  <InputLabel id="trainer-label">Video Title</InputLabel>
                  <Input type="text" id="title"  onChange={(e) => setTitle(e.target.value)}/>
                  <InputLabel id="trainer-label">Video url</InputLabel>

                  <TextField
                    fullWidth
                    id="url"
                    label="YouTube Video URL"
                    onChange={(e) => setUrl(e.target.value)}
                    style={{ marginTop: '1rem' }}
                  />
                </FormControl>
                <Button onClick={handleAdd} variant="contained" sx={{margin:"12px 40%"}}>
                  Add
                </Button>
              </Box>
            </Paper>
        </Modal>
        <Modal open={openEditModal} onClose={handleEditCloseModal} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '400px', height: '400px' }}>
              <Box sx={{ padding: '1rem', width: '100%' }}>
                <FormControl fullWidth style={{padding:"10px"}}>
                  <InputLabel id="trainer-label">Video Title</InputLabel>
                  <Input type="text" id="title"  value={title} onChange={(e) => setTitle(e.target.value)}/>

                  <TextField
                    fullWidth
                    id="url"
                    label="YouTube Video URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    style={{ marginTop: '1rem' }}
                  />
                </FormControl>
                <Button onClick={handleEdit} variant="contained" sx={{margin:"12px 40%"}}>
                  Edit
                </Button>
              </Box>
            </Paper>
        </Modal>

</div>
<div className="datatable-wrapper" style={{marginTop:"10px"}}>
      <MUIDataTable
        data={data}
        columns={columns}
        title={"Employee List"}
        options={options}
      />
</div>
</div>
                </div>
            </div>

  )
}

export default ChallengeVideo