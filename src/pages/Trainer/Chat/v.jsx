// // // import React from 'react';
// // // // import { makeStyles } from '@mui/styles';
// // // import Paper from '@mui/material/Paper';
// // // import Grid from '@mui/material/Grid';
// // // import Box from '@mui/material/Box';
// // // import Divider from '@mui/material/Divider';
// // // import TextField from '@mui/material/TextField';
// // // import Typography from '@mui/material/Typography';
// // // import List from '@mui/material/List';
// // // import ListItem from '@mui/material/ListItem';
// // // import ListItemIcon from '@mui/material/ListItemIcon';
// // // import ListItemText from '@mui/material/ListItemText';
// // // import Avatar from '@mui/material/Avatar';
// // // import Fab from '@mui/material/Fab';
// // // import SendIcon from '@mui/icons-material/Send';

// // // // const useStyles = makeStyles((theme) => ({
// // // //   chatSection: {
// // // //     width: '100%',
// // // //     height: '80vh'
// // // //   },
// // // //   headBG: {
// // // //     backgroundColor: '#e0e0e0'
// // // //   },
// // // //   borderRight500: {
// // // //     borderRight: '1px solid #e0e0e0'
// // // //   },
// // // //   messageArea: {
// // // //     height: '70vh',
// // // //     overflowY: 'auto'
// // // //   },
// // // //   headerMessage: {
// // // //     marginBottom: theme.spacing(2)
// // // //   },
// // // //   searchField: {
// // // //     padding: theme.spacing(1)
// // // //   },
// // // //   textField: {
// // // //     marginBottom: theme.spacing(2)
// // // //   },
// // // //   sendButton: {
// // // //     marginLeft: theme.spacing(1)
// // // //   },
// // // //   listItemText: {
// // // //     display: 'flex',
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'center'
// // // //   }
// // // // }));

// // // const Chat = () => {
// // // //   const classes = useStyles();

// // //   return (
// // //     <div>
// // //       <Grid container>
// // //         <Grid item xs={12}>
// // //           <Typography variant="h5">Chat</Typography>
// // //         </Grid>
// // //       </Grid>
// // //       <Grid container component={Paper} sx={{ width: '100%',height: '80vh'}}>
// // //         <Grid item xs={3} sx={{borderRight: '1px solid #e0e0e0'}}>
// // //           <List>
// // //             <ListItem  key="RemySharp">
// // //               <ListItemIcon>
// // //                 <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
// // //               </ListItemIcon>
// // //               <ListItemText primary="John Wick" />
// // //             </ListItem>
// // //           </List>
// // //           <Divider />
// // //           <Grid item xs={12}>
// // //             <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />
// // //           </Grid>
// // //           <Divider />
// // //           <List>
// // //             <ListItem button key="RemySharp">
// // //               <ListItemIcon>
// // //                 <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
// // //               </ListItemIcon>
// // //               <ListItemText
// // //                 primary="Remy Sharp"
// // //                 secondaryTypographyProps={{ align: 'right' }}
// // //                 secondary="online"
// // //               />
// // //             </ListItem>
// // //             <ListItem  key="Alice">
// // //               <ListItemIcon>
// // //                 <Avatar alt="Alice" src="https://mui.com/static/images/avatar/3.jpg" />
// // //               </ListItemIcon>
// // //               <ListItemText primary="Alice" />
// // //             </ListItem>
// // //             <ListItem  key="CindyBaker">
// // //               <ListItemIcon>
// // //                 <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/2.jpg" />
// // //               </ListItemIcon>
// // //               <ListItemText primary="Cindy Baker" />
// // //             </ListItem>
// // //           </List>
// // //         </Grid>
// // //         <Grid item xs={9}>
// // //           <List sx={{height:"100%",overflowY:"auto"}} >
// // //             <ListItem key="1">
// // //               <Grid container>
// // //                 <Grid item xs={12}>
// // //                   <ListItemText align="right" primary="Hey man, What's up ?" />
// // //                 </Grid>
// // //                 <Grid item xs={12}>
// // //                   <ListItemText align="right" secondary="09:30" />
// // //                 </Grid>
// // //               </Grid>
// // //             </ListItem>
// // //             <ListItem key="2">
// // //               <Grid container>
// // //                 <Grid item xs={12}>
// // //                   <ListItemText align="left" primary="Hey, I am Good! What about you ?" />
// // //                 </Grid>
// // //                 <Grid item xs={12}>
// // //                   <ListItemText align="left" secondary="09:31" />
// // //                 </Grid>
// // //               </Grid>
// // //             </ListItem>
// // //             <ListItem key="3">
// // //               <Grid container>
// // //                 <Grid item xs={12}>
// // //                   <ListItemText align="right" primary="Cool. I am good, let's catch up!" />
// // //                 </Grid>
// // //                 <Grid item xs={12}>
// // //                   <ListItemText align="right" secondary="10:30" />
// // //                 </Grid>
// // //               </Grid>
// // //             </ListItem>
// // //           </List>
// // //           <Divider />
// // //           <Grid container style={{ padding: '20px' }}>
// // //             <Grid item xs={11}>
// // //               <TextField id="outlined-basic-email" label="Type Something" fullWidth  />
// // //             </Grid>
// // //             <Grid xs={1} align="right">
// // //               <Fab color="primary" aria-label="add" >
// // //                 <SendIcon />
// // //               </Fab>
// // //             </Grid>
// // //           </Grid>
// // //         </Grid>
// // //       </Grid>
// // //     </div>
// // //   );
// // // }

// // // export default Chat;



// // // import React from 'react';
// // // import './chat.css'; // Import the corresponding CSS file

// // // class Chat extends React.Component {
// // //   render() {
// // //     // const { user, threads } = this.props;

// // //     return (
// // //       <div className="container-fluid h-100">
// // //         {/* {user.is_authenticated && (
// // //           <>
// // //             <h1 style={{ textAlign: 'end', paddingRight: '10px' }}>
// // //               Logged in as: {user.username}
// // //             </h1>
// // //             <input type="hidden" id="logged-in-user" value={user.id} />
// // //           </>
// // //         )} */}
// // //         <div className="row justify-content-center h-100">
// // //           <div className="col-md-4 col-xl-3 chat h-100 mt-4">
// // //             <div className="card mb-sm-3 mb-md-0 contacts_card">
// // //               <div className="card-header">
// // //                 <div className="input-group">
// // //                   <input
// // //                     type="text"
// // //                     placeholder="Search..."
// // //                     name=""
// // //                     className="form-control search"
// // //                   />
// // //                   <div className="input-group-prepend">
// // //                     <span className="input-group-text search_btn">
// // //                       <i className="fas fa-search"></i>
// // //                     </span>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //               <div className="card-body contacts_body">
// // //                 <ul className="contacts">
// // //                   {threads.map((thread, index) => (
// // //                     <li
// // //                       key={thread.id}
// // //                       className={`${
// // //                         index === 0 ? 'active' : ''
// // //                       } contact-li`}
// // //                       chat-id={`chat_${thread.id}`}
// // //                       style={{ cursor: 'pointer' }}
// // //                     >
// // //                       <div className="d-flex bd-highlight">
// // //                         <div className="img_cont">
// // //                           <img
// // //                             src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
// // //                             className="rounded-circle user_img"
// // //                           />
// // //                           <span className="online_icon"></span>
// // //                         </div>
// // //                         <div className="user_info">
// // //                           {thread.first_person === user ? (
// // //                             <span>{thread.second_person.username}</span>
// // //                           ) : (
// // //                             <span>{thread.first_person.username}</span>
// // //                           )}
// // //                         </div>
// // //                       </div>
// // //                     </li>
// // //                   ))}
// // //                 </ul>
// // //               </div>
// // //               <div className="card-footer"></div>
// // //             </div>
// // //           </div>
// // //           <div className="col-md-8 col-xl-6 chat h-100 mt-4">
// // //             <div className="card">
// // //               {threads.map((thread, index) => (
// // //                 <div
// // //                   key={thread.id}
// // //                   className={`messages-wrapper ${
// // //                     index === 0 ? 'hide is_active' : 'hide'
// // //                   }`}
// // //                   chat-id={`chat_${thread.id}`}
// // //                   other-user-id={
// // //                     thread.first_person === user
// // //                       ? thread.second_person.id
// // //                       : thread.first_person.id
// // //                   }
// // //                 >
// // //                   <div className="card-header msg_head">
// // //                     <div className="d-flex bd-highlight">
// // //                       <div className="img_cont">
// // //                         <img
// // //                           src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
// // //                           className="rounded-circle user_img"
// // //                         />
// // //                         <span className="online_icon"></span>
// // //                       </div>
// // //                       <div className="user_info">
// // //                         {thread.first_person === user ? (
// // //                           <span>Chat with {thread.second_person.username}</span>
// // //                         ) : (
// // //                           <span>Chat with {thread.first_person.username}</span>
// // //                         )}
// // //                         <p>{thread.chatmessage_thread.length} messages</p>
// // //                       </div>
// // //                       <div className="video_cam">
// // //                         <span>
// // //                           <i className="fas fa-video"></i>
// // //                         </span>
// // //                         <span>
// // //                           <i className="fas fa-phone"></i>
// // //                         </span>
// // //                       </div>
// // //                     </div>
// // //                     <span id="action_menu_btn">
// // //                       <i className="fas fa-ellipsis-v"></i>
// // //                     </span>
// // //                     <div className="action_menu">
// // //                       <ul>
// // //                         <li>
// // //                           <i className="fas fa-user-circle"></i> View profile
// // //                         </li>
// // //                         <li>
// // //                           <i className="fas fa-users"></i> Add to close friends
// // //                         </li>
// // //                         <li>
// // //                           <i className="fas fa-plus"></i> Add to group
// // //                         </li>
// // //                         <li>
// // //                           <i className="fas fa-ban"></i> Block
// // //                         </li>
// // //                       </ul>
// // //                     </div>
// // //                   </div>
// // //                   <div className="card-body msg_card_body">
// // //                     {thread.chatmessage_thread.map((chat) => (
// // //                       <div
// // //                         key={chat.id}
// // //                         className={`d-flex mb-4 ${
// // //                           chat.user === user ? 'replied' : 'received'
// // //                         }`}
// // //                       >
// // //                         <div className="img_cont_msg">
// // //                           <img
// // //                             src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
// // //                             className="rounded-circle user_img_msg"
// // //                           />
// // //                         </div>
// // //                         <div className={`msg_cotainer${chat.user === user ? '_send' : ''}`}>
// // //                           {chat.message}
// // //                           <span className={`msg_time${chat.user === user ? '_send' : ''}`}>
// // //                             {chat.timestamp}
// // //                           </span>
// // //                         </div>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //               <div className="card-footer">
// // //                 <form id="send-message-form">
// // //                   <div className="input-group">
// // //                     <div className="input-group-append">
// // //                       <span className="input-group-text attach_btn">
// // // //                         <i className="fas fa-paperclip"></i>
// // // //                       </span>
// // // //                     </div>
// // // //                     <input
// // // //                       type="text"
// // // //                       name=""
// // // //                       id="input-message"
// // // //                       className="form-control type_msg"
// // // //                       placeholder="Type your message..."
// // // //                     />
// // // //                     <div className="input-group-append">
// // // //                       <button className="btn btn-secondary" type="submit">
// // // //                         <span className="input-group-text send_btn">
// // // //                           <i className="fas fa-location-arrow"></i>
// // // //                         </span>
// // // //                       </button>
// // // //                     </div>
// // // //                   </div>
// // // //                 </form>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }
// // // // }

// // // // export default Chat;





// // // import React, { useEffect, useRef,useState } from 'react';



// // // const ChatComponent = () => {
// // //   const handleSendMessage = (event) => {
// // //     event.preventDefault();

// // //     // Replace with your logic to send the message via WebSocket
// // //     console.log('Sending message:', message);

// // //     // Clear the message input
// // //     setMessage('');
// // //   };
// // //   const [message, setMessage] = useState('');
// // // const [activeContact, setActiveContact] = useState(null);
// // // const [threads, setThreads] = useState([]);
// // //   const newMessage = (message, sent_by_id, thread_id) => {
// // //     // Logic to update the message list with the new message
// // //     // ...
// // //   };

// // //   const handleContactClick = (threadId) => {
// // //     // Logic to handle contact click and update the active contact
// // //     // ...
// // //   };
// // //   const Message = ({ message, sentByUser }) => {
// // //     return (
// // //       <div className={`d-flex mb-4 ${sentByUser ? 'replied' : 'received'}`}>
// // //         {/* Render message details */}
// // //       </div>
// // //     );
// // //   };
// // //   const Thread = ({ thread, isActive }) => {
// // //     return (
// // //       <div
// // //         className={`messages-wrapper ${isActive ? 'hide is_active' : 'hide'}`}
// // //         chat-id={`chat_${thread.id}`}
// // //         other-user-id="1"
// // //       >
// // //         <div className="card-header msg_head">
// // //           {/* Render thread header */}
// // //         </div>
// // //         <div className="card-body msg_card_body">
// // //           {/* Render messages */}
// // //         </div>
// // //         {/* Render message input form */}
// // //       </div>
// // //     );
// // //   };

// //   // const inputMessageRef = useRef(null);
// //   // const messageBodyRef = useRef(null);
// //   // const sendFormRef = useRef(null);
// //   // const loggedInUserRef = useRef(null);
// //   // const socketRef = useRef(null);

// //   // useEffect(() => {
// //   //   let loc = window.location;
// //   //   let wsStart = 'ws://';

// //   //   if (loc.protocol === 'https:') {
// //   //     wsStart = 'wss://';
// //   //   }

// //   //   let endpoint = wsStart + loc.host + loc.pathname;

// //   //   socketRef.current = new WebSocket(endpoint);

// //   //   socketRef.current.onopen = (e) => {
// //   //     console.log('open', e);
// //   //     sendFormRef.current.addEventListener('submit', handleSubmit);
// //   //   };

// //   //   socketRef.current.onmessage = (e) => {
// //   //     console.log('message', e);
// //   //     let data = JSON.parse(e.data);
// //   //     let message = data.message;
// //   //     let sentById = data.sent_by;
// //   //     let threadId = data.thread_id;
// //   //     newMessage(message, sentById, threadId);
// //   //   };

// //   //   socketRef.current.onerror = (e) => {
// //   //     console.log('error', e);
// //   //   };

// //   //   socketRef.current.onclose = (e) => {
// //   //     console.log('close', e);
// //   //   };

// //   //   return () => {
// //   //     socketRef.current.close();
// //   //   };
// //   // }, []);

// //   // const handleSubmit = (e) => {
// //   //   e.preventDefault();
// //   //   let message = inputMessageRef.current.value;
// //   //   let sendTo = getActiveOtherUserId();
// //   //   let threadId = getActiveThreadId();

// //   //   let data = {
// //   //     message: message,
// //   //     sent_by: loggedInUserRef.current.value,
// //   //     send_to: sendTo,
// //   //     thread_id: threadId,
// //   //   };

// //   //   socketRef.current.send(JSON.stringify(data));
// //   //   sendFormRef.current.reset();
// //   // };

// //   // const newMessage = (message, sentById, threadId) => {
// //   //   if (message.trim() === '') {
// //   //     return false;
// //   //   }
// //   //   let messageElement;
// //   //   let chatId = 'chat_' + threadId;

// //   //   if (sentById === loggedInUserRef.current.value) {
// //   //     messageElement = (
// //   //       <div className="d-flex mb-4 replied">
// //   //         <div className="msg_cotainer_send">
// //   //           {message}
// //   //           <span className="msg_time_send">8:55 AM, Today</span>
// //   //         </div>
// //   //         <div className="img_cont_msg">
// //   //           <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBgaGBcXFxgXFxgdFxcXHRcXGhcYHSggGBolHRYVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGyslHyUtLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0.
// //   //           tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/x..."></img>
// //   //           </div>
// //   //         </div>
// //   //       );
// //   //     } else {
// //   //       messageElement = (
// //   //         <div className="d-flex mb-4">
// //   //           <div className="img_cont_msg">
// //   //             <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QA2..."></img>
// //   //           </div>
// //   //           <div className="msg_cotainer">
// //   //             {message}
// //   //             <span className="msg_time">8:55 AM, Today</span>
// //   //           </div>
// //   //         </div>
// //   //       );
// //   //     }
  
// //   //     let chatBody = messageBodyRef.current;
// //   //     let isScrolledToBottom =
// //   //       chatBody.scrollHeight - chatBody.clientHeight <= chatBody.scrollTop + 1;
  
// //   //     let chatElement = document.getElementById(chatId);
  
// //   //     if (chatElement) {
// //   //       chatElement.innerHTML += messageElement;
// //   //     }
  
// //   //     if (isScrolledToBottom) {
// //   //       chatBody.scrollTop = chatBody.scrollHeight - chatBody.clientHeight;
// //   //     }
// //   //   };
  
// //   //   const getActiveOtherUserId = () => {
// //   //     // Return the active other user's ID
// //   //   };
  
// //   //   const getActiveThreadId = () => {
// //   //     // Return the active thread ID
// //   //   };
  



	
// //   import React, { useState, useEffect } from 'react';
// //   import './chat.css'
  
// //   const Chat = () => {
// //     const [message, setMessage] = useState('');
// //     const [activeContact, setActiveContact] = useState(null);
// //     const [threads, setThreads] = useState([]);
  
// //     useEffect(() => {
// //       // WebSocket connection setup and event listeners
// //       const socket = new WebSocket('ws://localhost:8000'); // Replace with your WebSocket endpoint
  
// //       socket.onopen = () => {
// //         console.log('WebSocket connection opened');
// //       };
  
// //       socket.onmessage = (event) => {
// //         const data = JSON.parse(event.data);
// //         const { message, sent_by, thread_id } = data;
// //         newMessage(message, sent_by, thread_id);
// //       };
  
// //       socket.onerror = (error) => {
// //         console.error('WebSocket error:', error);
// //       };
  
// //       socket.onclose = () => {
// //         console.log('WebSocket connection closed');
// //       };
  
// //       // Cleanup function to close the WebSocket connection
// //       return () => {
// //         socket.close();
// //       };
// //     }, []);
  
// //     const handleSendMessage = (event) => {
// //       event.preventDefault();
  
// //       // Replace with your logic to send the message via WebSocket
// //       console.log('Sending message:', message);
  
// //       // Clear the message input
// //       setMessage('');
// //     };
  
// //     const newMessage = (message, sent_by_id, thread_id) => {
// //       // Logic to update the message list with the new message
// //       // ...
// //     };
  
// //     const handleContactClick = (threadId) => {
// //       // Logic to handle contact click and update the active contact
// //       // ...
// //     };
  
// //     return (
// //       <div className="container-fluid h-100">
// //        <div class="container-fluid h-100">
// //               <div class="row justify-content-center h-100 ">
// //                   <div class="col-md-4 col-xl-3 chat h-100 mt-4">
// //                       <div class="card mb-sm-3 mb-md-0 contacts_card">
// //                       <div class="card-header">
// //                           <div class="input-group">
// //                               <div class="input-group-prepend">
// //                                   <span class="input-group-text search_btn"><i class="fas fa-search"></i></span>
// //                               </div>
// //                           </div>
// //                       </div>
// //                       <div class="card-body contacts_body">
// //                           <ui class="contacts">
// //                           <li class="active">
// //                               <div class="d-flex bd-highlight">
// //                                   <div class="img_cont">
// //                                       <span class="online_icon"></span>
// //                                   </div>
// //                                   <div class="user_info">
// //                                       <span>Khalid</span>
// //                                       <p>Kalid is online</p>
// //                                   </div>
// //                               </div>
// //                           </li>
// //                           <li>
// //                               <div class="d-flex bd-highlight">
// //                                   <div class="img_cont">
// //                                       <span class="online_icon offline"></span>
// //                                   </div>
// //                                   <div class="user_info">
// //                                       <span>Taherah Big</span>
// //                                       <p>Taherah left 7 mins ago</p>
// //                                   </div>
// //                               </div>
// //                           </li>
// //                           <li>
// //                               <div class="d-flex bd-highlight">
// //                                   <div class="img_cont">
// //                                       <span class="online_icon"></span>
// //                                   </div>
// //                                   <div class="user_info">
// //                                       <span>Sami Rafi</span>
// //                                       <p>Sami is online</p>
// //                                   </div>
// //                               </div>
// //                           </li>
// //                           <li>
// //                               <div class="d-flex bd-highlight">
// //                                   <div class="img_cont">
// //                                       <span class="online_icon offline"></span>
// //                                   </div>
// //                                   <div class="user_info">
// //                                       <span>Nargis Hawa</span>
// //                                       <p>Nargis left 30 mins ago</p>
// //                                   </div>
// //                               </div>
// //                           </li>
// //                           <li>
// //                               <div class="d-flex bd-highlight">
// //                                   <div class="img_cont">
// //                                       <span class="online_icon offline"></span>
// //                                   </div>
// //                                   <div class="user_info">
// //                                       <span>Rashid Samim</span>
// //                                       <p>Rashid left 50 mins ago</p>
// //                                   </div>
// //                               </div>
// //                           </li>
// //                           </ui>
// //                       </div>
// //                       <div class="card-footer"></div>
// //                   </div></div>
// //                   <div class="col-md-8 col-xl-6 chat h-100 mt-4">
// //                       <div class="card">
// //                           <div class="card-header msg_head">
// //                               <div class="d-flex bd-highlight">
// //                                   <div class="img_cont">
// //                                       <span class="online_icon"></span>
// //                                   </div>
// //                                   <div class="user_info">
// //                                       <span>Chat with Khalid</span>
// //                                       <p>1767 Messages</p>
// //                                   </div>
// //                                   <div class="video_cam">
// //                                       <span><i class="fas fa-video"></i></span>
// //                                       <span><i class="fas fa-phone"></i></span>
// //                                   </div>
// //                               </div>
// //                               <span id="action_menu_btn"><i class="fas fa-ellipsis-v"></i></span>
// //                               <div class="action_menu">
// //                                   <ul>
// //                                       <li><i class="fas fa-user-circle"></i> View profile</li>
// //                                       <li><i class="fas fa-users"></i> Add to close friends</li>
// //                                       <li><i class="fas fa-plus"></i> Add to group</li>
// //                                       <li><i class="fas fa-ban"></i> Block</li>
// //                                   </ul>
// //                               </div>
// //                           </div>
// //                           <div class="card-body msg_card_body">
// //                               <div class="d-flex mb-4 received">
// //                                   <div class="img_cont_msg">
// //                                   </div>
// //                                   <div class="msg_cotainer">
// //                                       Hi, how are you samim?
// //                                       <span class="msg_time">8:40 AM, Today</span>
// //                                   </div>
// //                               </div>
// //                               <div class="d-flex mb-4 replied">
// //                                   <div class="msg_cotainer_send">
// //                                       Hi Khalid i am good tnx how about you?
// //                                       <span class="msg_time_send">8:55 AM, Today</span>
// //                                   </div>
// //                                   <div class="img_cont_msg">
// //                                   </div>
// //                               </div>
// //                           </div>
// //                           <div class="card-footer">
// //                               <form id="send-message-form">
// //                                   <div class="input-group">
// //                                       <div class="input-group-append">
// //                                           <span class="input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
// //                                       </div>
// //                                       <div class="input-group-append">
// //                                           <button class="btn btn-secondary" type="submit">
// //                                               <span class="input-group-text send_btn">
// //                                                   <i class="fas fa-location-arrow"></i>
// //                                               </span>
// //                                           </button>
  
// //                                       </div>
// //                               </div>
// //                               </form>
// //                           </div>
// //                       </div>
// //                   </div>
// //               </div>
// //           </div>
  
         
// //       </div>
// //     );
// //   };
  
// //   export default Chat;
  
// // const useStyles = makeStyles((theme) => ({
// //   chatSection: {
// //     width: '100%',
// //     height: '80vh'
// //   },
// //   headBG: {
// //     backgroundColor: '#e0e0e0'
// //   },
// //   borderRight500: {
// //     borderRight: '1px solid #e0e0e0'
// //   },
// //   messageArea: {
// //     height: '70vh',
// //     overflowY: 'auto'
// //   },
// //   headerMessage: {
// //     marginBottom: theme.spacing(2)
// //   },
// //   searchField: {
// //     padding: theme.spacing(1)
// //   },
// //   textField: {
// //     marginBottom: theme.spacing(2)
// //   },
// //   sendButton: {
// //     marginLeft: theme.spacing(1)
// //   },
// //   listItemText: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center'
// //   }
// // }));

// // import React, { useEffect } from 'react';

// // const Chat = () => {
// //   useEffect(() => {
// //     // const loc = window.location;
// //     // let wsStart = 'ws://';
  
// //     // if (loc.protocol === 'https:') {
// //     //   wsStart = 'wss://';
// //     // }
  
// //     const endpoint = 'ws://localhost:8000/trainer/chat/';

// //     const socket = new WebSocket(endpoint);
  
// //     // WebSocket event handlers
// //     socket.onopen = () => {
// //       console.log('WebSocket connection established.');
// //       // Perform any necessary operations when the connection is open
// //     };
  
// //     // socket.onmessage = (event) => {
// //     //   console.log('Received message:', event.data);
// //     //   // Process incoming messages from the server
// //     // };
  
// //     socket.onclose = () => {
// //       console.log('WebSocket connection closed.');
// //       // Perform any necessary cleanup or reconnection attempts
// //     };
  
// //     // Clean up the WebSocket connection when the component is unmounted
// //     return () => {
// //       socket.close();
// //     };
// //   }, []);

// //   // Rest of your component code
// //   return (
// //     // JSX code for your component
// //     <div>
// //       {/* Component content */}
// //     </div>
// //   );
// // };

// // export default Chat;
//     {/* <ul className="contacts-list">
//               {users.map((user) => (
//                 <li key={user.id}
//                 onClick={() => getActiveOtherUserId(user.id)}>
//                   <div className="contact">
//                     <img src={user.profileImage} className="user-img" alt={user.username} />
//                     <div className="user-info">
//                       <span className="user-name">{user.username}</span>
//                       <p className="user-status">{user.status}</p>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul> */}
//               // const newMessage = (message) => {
//   //   if (!message.trim()) {
//   //     return;
//   //   }
  
//   //   const timestamp = Date.now(); // Get the current timestamp
  
//   //   const messageElement = (
//   //     <div className="d-flex mb-4 replied" key={`${message}-${timestamp}`}>
//   //       <div className="msg_cotainer_send">
//   //         {message}
//   //         <span className="msg_time_send">8:55 AM, Today</span>
//   //       </div>
//   //     </div>
//   //   );
  
//   //   setMessageElements((prevMessageElements) => [...prevMessageElements, messageElement]);
//   // };
  
  
  
  
  
  
  


// // // import { makeStyles } from '@mui/styles';
// // import React, { useEffect, useRef, useState } from 'react';
// // import Paper from '@mui/material/Paper';
// // import Grid from '@mui/material/Grid';
// // import Box from '@mui/material/Box';
// // import Divider from '@mui/material/Divider';
// // import TextField from '@mui/material/TextField';
// // import Typography from '@mui/material/Typography';
// // import List from '@mui/material/List';
// // import ListItem from '@mui/material/ListItem';
// // import ListItemIcon from '@mui/material/ListItemIcon';
// // import ListItemText from '@mui/material/ListItemText';
// // import Avatar from '@mui/material/Avatar';
// // import Fab from '@mui/material/Fab';
// // import SendIcon from '@mui/icons-material/Send';
// // import jwt_decode from "jwt-decode";
// // import './chat.css'
// // import {assignedUsers,getSingleTrainer,viewUser} from '../../../Utils/urls'
// // import axios from '../../../Utils/axios'
// // import { useSelector } from 'react-redux';


// // const Chat = () => {
// //   const [inputMessage, setInputMessage] = useState('');
// //   const [messages, setMessages] = useState([]);
// //   const [activeChat, setActiveChat] = useState(null);
// //   const [userId, setUserId] = useState(null);
// //   const [trainerId, setTrainerId] = useState(null);
// //   const [socket, setSocket] = useState(null);
// //   // const authTokens = JSON.parse(localStorage.getItem('trainer_authTokens'))
// //   // // const access = authTokens.access;
// //   // const decoded_token = jwt_decode(access)
// //   // const trainerId=decoded_token.user_id
// //   const [messageElement, setMessageElements] = useState([]);
// //   const [users,setUsers]=useState([])
// //   const [activeUser, setActiveUser] = useState(null);
// //   const user = useSelector(state=>state.user.user)
// //   console.log(user)
// //   const trainer = useSelector(state=>state.trainer.trainer)
// // //  setTrainerId(trainer.id)
// // //  console.log("aar",trainerId)
// //   console.log("ith",userId)
// //   let access;
// //   // useEffect(() => {
// //   //   let access;
// //   //   if (trainer) {
// //   //     const trainer_authTokens = JSON.parse(localStorage.getItem('trainer_authTokens'));
// //   //     access = trainer_authTokens.access;
// //   //     const decoded_token = jwt_decode(access);
// //   //     const trainerId = decoded_token.user_id;
// //   //     setUserId(trainerId);
// //   //   } else {
// //   //     const authTokens = JSON.parse(localStorage.getItem('user_authTokens'));
// //   //     access = authTokens.access;
// //   //     const decoded_token = jwt_decode(access);
// //   //     const userId = decoded_token.user_id;
// //   //     setUserId(userId);
// //   //   }
// //   // }, [trainer]);
// //   // console.log("check",userId)


// //   useEffect(() => {
// //     // const access=null; // Declare access variable here

// //     if (trainer) {
// //       const trainer_authTokens = JSON.parse(localStorage.getItem('trainer_authTokens'));
// //       const access = trainer_authTokens.access;
// //       const decoded_token = jwt_decode(access);
// //       const trainerId = decoded_token.user_id;
// //       setUserId(trainerId);
// //     } else {
// //       const authTokens = JSON.parse(localStorage.getItem('user_authTokens'));
// //       // const trainer_authTokens = JSON.parse(localStorage.getItem('trainer_authTokens'));
// //       // const trainer_access=trainer_authTokens.access
// //       // const decoded_token_trainer = jwt_decode(trainer_access);
// //       // setTrainerId(decoded_token_trainer.user_id)
// //       const access = authTokens.access;
// //       const decoded_token = jwt_decode(access);
// //       const userId = decoded_token.user_id;
// //       setUserId(userId);
// //       axios.get(`${viewUser}${userId}`,{
// //         headers: {
// //           "Authorization": `Bearer ${access}`,
// //           'Content-Type': 'application/json',
// //         },
// //       }).then((response)=>{
// //         setTrainerId(response.data.trainer_id)
// //       })
// //     }
  
// //     if (userId) {
// //       const fetchData = async () => {
// //         try {
// //           if (trainer) {
// //             const trainer_authTokens = JSON.parse(localStorage.getItem('trainer_authTokens'));
// //             const access = trainer_authTokens.access;
// //             const response = await axios.get(`${assignedUsers}${userId}`, {
// //               headers: {
// //                 "Authorization": `Bearer ${access}`,
// //                 'Content-Type': 'application/json',
// //               },
// //             });
// //             setUsers(response.data);
// //           } else {
// //             const authTokens = JSON.parse(localStorage.getItem('user_authTokens'));
// //             const access = authTokens.access;
// //             const response = await axios.get(`${getSingleTrainer}${trainer.id}`, {
// //               headers: {
// //                 "Authorization": `Bearer ${access}`,
// //                 'Content-Type': 'application/json',
// //               },
// //             });
// //             setUsers([response.data]);
// //           }
// //         } catch (error) {
// //           console.error('Failed to fetch users:', error);
// //         }
// //       };
  
// //       fetchData();
// //     }

// //     if (userId) {
// //       const newSocket = new WebSocket(`ws://127.0.0.1:8000/${trainer ? 'trainer' : 'user'}/chat/${userId}/`);
// //       // const newSocket = new WebSocket(`ws://127.0.0.1:8000/${trainer ? 'trainer' : 'user'}/chat/${userId}/${trainerId}`);
// //       // const newSocket = new WebSocket(`ws://127.0.0.1:8000/${trainer ? 'trainer/chat/${userId}' : `user/chat/${userId}/${trainerId}`}`);
// //       // const newSocket = new WebSocket(`ws://127.0.0.1:8000/${trainer ? `trainer/chat/${userId}/` : `user/chat/${userId}/${trainerId}`}`);



// //       setSocket(newSocket);

// //       newSocket.onopen = (e) => {
// //         console.log('WebSocket connection established');
// //       };

// //       newSocket.onmessage = (e) => {
// //         console.log('WebSocket message received:', e.data);
// //         const data = JSON.parse(e.data);
// //         const message = data['message'];
// //         const sentById = data['sent_by'];
// //         setMessages((prevMessages) => [
// //     ...prevMessages,
// //     { text: message },
// //   ]);
// //         // newMessage(message,sentById);
// //       };

// //       newSocket.onerror = (e) => {
// //         console.error('WebSocket error:', e);
// //       };

// //       newSocket.onclose = (e) => {
// //         console.log('WebSocket connection closed:', e);
// //       };

// //       return () => {
// //         newSocket.close();
// //       };
// //     }
// //   }, [userId, trainer]);

// //   const handleSendMessage = (e) => {
// //     console.log("reached here")
// //     e.preventDefault();

// //     if (!inputMessage.trim()) {
// //       return;
// //     }

// //   let sendTo; // Declare sendTo variable here

// //   if (trainer) {
// //     sendTo = activeChat;
// //   } else {
// //     sendTo = trainerId;
// //   }

// //   console.log("activeChat:", activeChat);
// //   console.log("trainerId:", trainerId);
// //   console.log("sendTo:", sendTo);
// //   console.log(users)

// //     const threadId = getActiveThreadId();

// //     const data = {
// //       message: inputMessage,
// //       send_to:sendTo,
// //       user:userId
     
// //     };
// //     console.log(data)

// //     socket.send(JSON.stringify(data));
// //     setInputMessage('');
// //   };

  
  
// // console.log("input",inputMessage)

// // const handleInputChange = (e) => {
// // setInputMessage(e.target.value);
// // };

// // const getActiveOtherUserId = (userId) => {
// //   setActiveChat(userId);
// //   const selectedUser = users.find((user) => user.id === userId);
// //   setActiveUser(selectedUser);
// // };

// // const getActiveThreadId = () => {
// // // Replace this with the logic to retrieve the ID of the active chat thread
// // return null;
// // };

// // return (
// //   <>
// //    <div className="ccontainer">
// //       <div className="chat-container">
// //         <div className="sidebar">
// //           <div className="search-container">
// //             <input type="text" placeholder="Search..." className="search" />
// //             <i className="fas fa-search search-icon"></i>
// //           </div>
// //           <ul className="contacts-list">
// //               {users.map((user) => (
// //                 <li
// //                   key={user.id}
// //                   onClick={() => getActiveOtherUserId(user.id)}
// //                   className={activeUser && activeUser.id === user.id ? "active" : ""}
// //                 >
// //                 <div className="contact">
// //                     <img src={user.profileImage} className="user-img" alt={user.username} />
// //                     <div className="user-info">
// //                       <span className="user-name">{user.username}</span>
// //                       <p className="user-status">{user.status}</p>
// //                     </div>
// //                   </div>
// //                 </li>
// //               ))}
// //             </ul>
      
// //         </div>
// //         <div className="chat">
// //           <div className="chat-header">
// //           <div className="contact">
// //                 {activeUser ? (
// //                   <>
// //                     <img src={activeUser.profileImage} className="user-img" alt={activeUser.username} />
// //                     <div className="user-info">
// //                       <span className="user-name">{activeUser.username}</span>
// //                       {/* ... */}
// //                     </div>
// //                   </>
// //                 ) : null}
// //               </div>
// //             {/* <div className="contact">
// //               <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="user-img" />
// //               <div className="user-info">
// //                 <span className="user-name">Chat with Khalid</span>
// //                 <p className="message-count">1767 Messages</p>
// //               </div>
// //             </div> */}
// //           </div>
// //           <div className="chat-body">
// //               {messages.map((message, index) => (
// //                 <div key={index} className="message">
// //                   <div className="message-text">{message.text}</div>
// //                   <div className="message-time">{message.timestamp}</div>
// //                 </div>
// //               ))}
// //             </div>
// //           <div className="chat-footer" >
// //             <form id="send-message-form" onSubmit={handleSendMessage}>
// //               <div className="input-container">
// //                 <input type="text" placeholder="Type your message..." className="message-input" onChange={handleInputChange}/>
// //                 <button type="submit" className="send-btn">
// //                   <i className="fas fa-location-arrow"></i>Send
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //     </>
// // )
// // }
// // export default Chat;

// // import { makeStyles } from '@mui/styles';
// import React, { useEffect, useState } from 'react';
// import jwt_decode from "jwt-decode";
// import './chat.css'
// import { assignedUsers, getSingleTrainer, viewUser } from '../../../Utils/urls'
// import axios from '../../../Utils/axios'
// import { useSelector } from 'react-redux';

// // const Chat = () => {
// //   const [inputMessage, setInputMessage] = useState('');
// //   const [messages, setMessages] = useState([]);
// //   const [activeChat, setActiveChat] = useState(null);
// //   const [userId, setUserId] = useState(null);
// //   const [trainerId, setTrainerId] = useState(null);
// //   const [socket, setSocket] = useState(null);
// //   const [messageElement, setMessageElements] = useState([]);
// //   const [users, setUsers] = useState([]);
// //   const [activeUser, setActiveUser] = useState(null);
// //   const user = useSelector(state => state.user.user);
// //   const trainer = useSelector(state => state.trainer.trainer);
// //   const [username,setUsername]=useState('')

// //   useEffect(() => {
// //     let access;

// //     if (trainer) {
// //       const trainer_authTokens = JSON.parse(localStorage.getItem('trainer_authTokens'));
// //       access = trainer_authTokens.access;
// //       const decoded_token = jwt_decode(access);
// //       const trainerId = decoded_token.user_id;
// //       setUserId(trainerId);
// //     } else {
// //       const authTokens = JSON.parse(localStorage.getItem('user_authTokens'));
// //       access = authTokens.access;
// //       const decoded_token = jwt_decode(access);
// //       const userId = decoded_token.user_id;
// //       setUserId(userId);
// //       axios.get(`${viewUser}${userId}`, {
// //         headers: {
// //           "Authorization": `Bearer ${access}`,
// //           'Content-Type': 'application/json',
// //         },
// //       }).then((response) => {
// //         setTrainerId(response.data.trainer_id);
// //         setUsername(response.data.username)
// //       });
// //     }

// //     if (userId) {
// //       const fetchData = async () => {
// //         try {
// //           if (trainer) {
// //             console.log("trainer")
// //             const trainer_authTokens = JSON.parse(localStorage.getItem('trainer_authTokens'));
// //             access = trainer_authTokens.access;
// //             const response = await axios.get(`${assignedUsers}${userId}`, {
// //               headers: {
// //                 "Authorization": `Bearer ${access}`,
// //                 'Content-Type': 'application/json',
// //               },
// //             });
// //             setUsers(response.data);
// //             console.log("what",users)

// //           } else {
// //             console.log("user")

// //             const authTokens = JSON.parse(localStorage.getItem('user_authTokens'));
// //             access = authTokens.access;
// //             const response = await axios.get(`${getSingleTrainer}${trainer.id}`, {
// //               headers: {
// //                 "Authorization": `Bearer ${access}`,
// //                 'Content-Type': 'application/json',
// //               },
// //             });
// //             setUsers(response.data);
// //             console.log("ehat",users)
// //           }
// //         } catch (error) {
// //           console.error('Failed to fetch users:', error);
// //         }
// //       };

// //       fetchData();
// //     }

// //     if (userId) {
// //       const newSocket = new WebSocket(`ws://127.0.0.1:8000/${trainer ? 'trainer' : 'user'}/chat/${userId}/`);

// //       setSocket(newSocket);

// //       newSocket.onopen = (e) => {
// //         console.log('WebSocket connection established');
// //       };

// //       newSocket.onmessage = (e) => {
// //         console.log('WebSocket message received:', e.data);
// //         const data = JSON.parse(e.data);
// //         const message = data['message'];
// //         const sentById = data['sent_by'];
// //         setMessages((prevMessages) => [
// //           ...prevMessages,
// //           { text: message, sentBy: sentById },
// //         ]);
// //       };

// //       newSocket.onerror = (e) => {
// //         console.error('WebSocket error:', e);
// //       };

// //       newSocket.onclose = (e) => {
// //         console.log('WebSocket connection closed:', e);
// //       };

// //       return () => {
// //         newSocket.close();
// //       };
// //     }
// //   }, [userId, trainer]);

// //   const handleSendMessage = (e) => {
// //     e.preventDefault();

// //     if (!inputMessage.trim()) {
// //       return;
// //     }

// //     let sendTo;

// //     if (trainer) {
// //       sendTo = activeChat;
// //     } else {
// //       sendTo = trainerId;
// //     }

// //     const threadId = getActiveThreadId();

// //     const data = {
// //       message: inputMessage,
// //       sent_by: userId,
// //       send_to: sendTo,
// //       user: userId
// //     };

// //     socket.send(JSON.stringify(data));
// //     setInputMessage('');
// //   };

// //   const handleInputChange = (e) => {
// //     setInputMessage(e.target.value);
// //   };

// //   const getActiveOtherUserId = (userId) => {
// //     setActiveChat(userId);
// //     const selectedUser = users.find((user) => user.id === userId);
// //     setActiveUser(selectedUser);
// //   };

// //   const getActiveThreadId = () => {
// //     return null;
// //   };

// //   return (
// //     <div className="ccontainer">
// //       <div className="chat-container">
// //         {trainer&&<div className="sidebar">
// //           <div className="search-container">
// //             <input type="text" placeholder="Search..." className="search" />
// //             <i className="fas fa-search search-icon"></i>
// //           </div>
// //           <ul className="contacts-list">
// //             {users.map((user) => (
// //               <li
// //                 key={user.id}
// //                 onClick={() => getActiveOtherUserId(user.id)}
// //                 className={activeUser && activeUser.id === user.id ? "active" : ""}
// //               >
// //                 <div className="contact">
// //                   <img src={user.profileImage} className="user-img" alt={user.username} />
// //                   <div className="user-info">
// //                     <span className="user-name">{user.username}</span>
// //                     <p className="user-status">{user.status}</p>
// //                   </div>
// //                 </div>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>}
// //         <div className="chat">
// //           <div className="chat-header">
// //             <div className="contact">
// //               {activeUser ? (
// //                 <>
// //                   <img src={activeUser.profileImage} className="user-img" alt={activeUser.username} />
// //                   <div className="user-info">
// //                     <span className="user-name">{activeUser.username}</span>
// //                   </div>
// //                 </>
// //               ) : username}
// //             </div>
// //           </div>
// //           <div className="chat-body">
// //             {messages.map((message, index) => (
// //               <div
// //                 key={index}
// //                 className={`message ${message.sentBy === userId ? 'sent-by-user' : 'sent-by-trainer'}`}
// //               >
// //                 <div className="message-text">{message.text}</div>
// //                 <div className="message-time">{message.timestamp}</div>
// //               </div>
// //             ))}
// //           </div>
// //           <div className="chat-footer">
// //             <form id="send-message-form" onSubmit={handleSendMessage}>
// //               <div className="input-container">
// //                 <input type="text" placeholder="Type your message..." className="message-input" onChange={handleInputChange} value={inputMessage} />
// //                 <button type="submit" className="send-btn">
// //                   <i className="fas fa-location-arrow"></i>Send
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Chat;


// import React, { useEffect, useRef, useState } from 'react';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Divider from '@mui/material/Divider';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Avatar from '@mui/material/Avatar';
// import Fab from '@mui/material/Fab';
// import SendIcon from '@mui/icons-material/Send';
// import jwt_decode from "jwt-decode";
// import './chat.css'
// import { assignedUsers, getSingleTrainer, viewUser } from '../../../Utils/urls'
// import axios from '../../../Utils/axios'
// import { useSelector } from 'react-redux';

// const Chat = () => {
//   const [inputMessage, setInputMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [activeChat, setActiveChat] = useState(null);
//   const [userId, setUserId] = useState(null);
//   const [trainerId, setTrainerId] = useState(null);
//   const [socket, setSocket] = useState(null);
//   const [messageElement, setMessageElements] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [threads, setThreads] = useState([]);
//   const [activeUser, setActiveUser] = useState(null);
//   const user = useSelector(state => state.user.user);
//   const trainer = useSelector(state => state.trainer.trainer);
//   const [activeThread, setActiveThread] = useState(null);

//   useEffect(() => {
//     let access;
//     let trainerId;

//     if (trainer) {
//       const trainer_authTokens = JSON.parse(localStorage.getItem('trainer_authTokens'));
//       access = trainer_authTokens.access;
//       const decoded_token = jwt_decode(access);
//       const trainerId = decoded_token.user_id;
//       setUserId(trainerId);
//       setTrainerId(trainerId);
//     } else {
//       const authTokens = JSON.parse(localStorage.getItem('user_authTokens'));
//       access = authTokens.access;
//       const decoded_token = jwt_decode(access);
//       const userId = decoded_token.user_id;
//       setUserId(userId);
//       axios.get(`${viewUser}${userId}`, {
//         headers: {
//           "Authorization": `Bearer ${access}`,
//           'Content-Type': 'application/json',
//         },
//       }).then((response) => {
//         setTrainerId(response.data.trainer_id);
//       });
//     }

//     if (userId) {
//       const fetchData = async () => {
//         try {
//           if (trainer) {
//             const trainer_authTokens = JSON.parse(localStorage.getItem('trainer_authTokens'));
//             access = trainer_authTokens.access;
//             const response = await axios.get(`${assignedUsers}${userId}`, {
//               headers: {
//                 "Authorization": `Bearer ${access}`,
//                 'Content-Type': 'application/json',
//               },
//             });
//             setUsers(response.data);
//           } else {
//             const authTokens = JSON.parse(localStorage.getItem('user_authTokens'));
//             access = authTokens.access;
//             const response = await axios.get(`${getSingleTrainer}${trainer.id}`, {
//               headers: {
//                 "Authorization": `Bearer ${access}`,
//                 'Content-Type': 'application/json',
//               },
//             });
//             setUsers([response.data]);
//           }
         
//         } catch (error) {
//           console.error('Failed to fetch users:', error);
//         }
//       };

//       fetchData();
//     }

//     if (userId) {
//       const newSocket = new WebSocket(`ws://127.0.0.1:8000/${trainer ? 'trainer' : 'user'}/chat/${userId}/`);

//       setSocket(newSocket);

//       newSocket.onopen = (e) => {
//         console.log('WebSocket connection established');
//       };

//       newSocket.onmessage = (e) => {
//         console.log('WebSocket message received:', e.data);
//         const data = JSON.parse(e.data);
//         const message = data['message'];
//         const sentById = data['sent_by'];
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { text: message, sentBy: sentById },
//         ]);
//       };

//       newSocket.onerror = (e) => {
//         console.error('WebSocket error:', e);
//       };

//       newSocket.onclose = (e) => {
//         console.log('WebSocket connection closed:', e);
//       };

//       return () => {
//         newSocket.close();
//       };
//     }

//     const fetchThreads = async () => {
//       try {
//         const response = await axios.get('/api/chat/', {
//           headers: {
//             "Authorization": `Bearer ${access}`,
//             'Content-Type': 'application/json',
//           },
//         });
//         const threads = response.data;
//         console.log("response",threads)
//         // Process the retrieved threads as needed
//         setThreads(threads);
//       } catch (error) {
//         console.error('Failed to fetch threads:', error);
//       }
//     };
  
//     fetchThreads();
//   }, [userId, trainer]);

//   // useEffect(()=>{
//   //   const authTokens = JSON.parse(localStorage.getItem('user_authTokens'));
//   //   const access = authTokens.access;
   
//   // },[])

//   const handleSendMessage = (e) => {
//     e.preventDefault();

//     if (!inputMessage.trim()) {
//       return;
//     }

//     let sendTo;

//     if (trainer) {
//       sendTo = activeChat;
//     } else {
//       sendTo = trainerId;
//     }

//     const threadId = getActiveThreadId();

//     const data = {
//       message: inputMessage,
//       sent_by: userId,
//       send_to: sendTo,
//       user: userId,
//       // first
//       thread_id: activeThread,
//     };

//     socket.send(JSON.stringify(data));
//     setInputMessage('');
//   };

//   const handleInputChange = (e) => {
//     setInputMessage(e.target.value);
//   };

//   // const getActiveOtherUserId = (userId) => {
//   //   setActiveChat(userId);
//   //   const selectedUser = users.find((user) => user.id === userId);
//   //   setActiveUser(selectedUser);
//   // };
//   console.log("tra",trainerId)
//   const getActiveOtherUserId = async (userId) => {
//     const selectedUser = users.find((user) => user.id === userId);
//     setActiveUser(selectedUser);
  
//     const data = {
//       users: [selectedUser.id, trainerId],
//     };
  
//     const response = await axios.post('/api/threads/', data);
//     const threadId = response.data.id;
//     setActiveThread(threadId);
  
//     setActiveChat(userId);
//   };

//   const getActiveThreadId = () => {

//       return activeChat;
//   };

//   return (
//     <div className="ccontainer">
//       <div className="chat-container">
//         <div className="sidebar">
//           <div className="search-container">
//             <input type="text" placeholder="Search..." className="search" />
//             <i className="fas fa-search search-icon"></i>
//           </div>
//           <ul className="contacts-list">
//             { users.map((user) => (
//               <li
//                 key={user.id}
//                 onClick={() => getActiveOtherUserId(user.id)}
//                 className={activeUser && activeUser.id === user.id ? "active" : ""}
//               >
//                 <div className="contact">
//                   <img src={user.profileImage} className="user-img" alt={user.username} />
//                   <div className="user-info">
//                     <span className="user-name">{user.username}</span>
//                     <p className="user-status">{user.status}</p>
//                   </div>
//                 </div>
//               </li>
//             )) }
//           </ul>
//         </div>
//         <div className="chat">
//           <div className="chat-header">
//             <div className="contact">
//               {activeUser ? (
//                 <>
//                   <img src={activeUser.profileImage} className="user-img" alt={activeUser.username} />
//                   <div className="user-info">
//                     <span className="user-name">{activeUser.username}</span>
//                   </div>
//                 </>
//               ) : null}
//             </div>
//           </div>
//           <div className="chat-body">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`message ${message.sentBy === userId ? 'sent-by-user' : 'sent-by-trainer'}`}
//               >
//                 <div className="message-text">{message.text}</div>
//                 <div className="message-time">{message.timestamp}</div>
//               </div>
//             ))}
//           </div>
     
//           <div className="chat-footer">
//             <form id="send-message-form" onSubmit={handleSendMessage}>
//               <div className="input-container">
//                 <input type="text" placeholder="Type your message..." className="message-input" onChange={handleInputChange} value={inputMessage} />
//                 <button type="submit" className="send-btn">
//                   <i className="fas fa-location-arrow"></i>Send
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;



import React, { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import './chat.css'
import { assignedUsers, getSingleTrainer, viewUser } from '../../../Utils/urls'
import axios from '../../../Utils/axios'
import { useSelector } from 'react-redux';
const Chat = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [userId, setUserId] = useState(null);
  const [trainerId, setTrainerId] = useState(null);
  const [threadIds, setThreadId] = useState(null);
  const [socket, setSocket] = useState(null);
  const [messageElement, setMessageElements] = useState([]);
  const [users, setUsers] = useState([]);
  const [threads, setThreads] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const user = useSelector(state => state.user.user);
  const trainer = useSelector(state => state.trainer.trainer);
  const [activeThread, setActiveThread] = useState(null);

  useEffect(() => {
    let access;
    let trainerId;

    if (trainer) {
      const trainer_authTokens = JSON.parse(localStorage.getItem('trainer_authTokens'));
      access = trainer_authTokens.access;
      const decoded_token = jwt_decode(access);
      const trainerId = decoded_token.user_id;
      setUserId(trainerId);
      setTrainerId(trainerId);
    } else {
      const authTokens = JSON.parse(localStorage.getItem('user_authTokens'));
      access = authTokens.access;
      const decoded_token = jwt_decode(access);
      const userId = decoded_token.user_id;
      setUserId(userId);
      axios.get(`${viewUser}${userId}`, {
        headers: {
          "Authorization": `Bearer ${access}`,
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        setTrainerId(response.data.trainer_id);
        const trainerId=response.data.trainer_id
        console.log("fetch",userId)
        console.log("fetchtr",trainerId)


        axios.get('/api/chat/',{
            headers: {
              "Authorization": `Bearer ${access}`,
              'Content-Type': 'application/json',
            },
          }).then((thisreponse)=>{
            const threadId = thisreponse.data[0].id;
            setThreadId(threadId)
            axios.get(`/api/get-message/${userId}/${trainerId}/${threadId}`,{
              headers: {
                "Authorization": `Bearer ${access}`,
                'Content-Type': 'application/json',
              },
            }).then((newreponse)=>{
              const chats = newreponse.data;
              console.log("testngher",chats)
              setMessages(chats)
              // Process the retrieved threads as needed
              // setThreads(threads);
            });
            // Process the retrieved threads as needed
            // setThreads(threads);
          });

        
          
        


      });
     
    //   axios.get(`/api/messages/${userId}/${trainerId}`, {
    //             headers: {
    //               "Authorization": `Bearer ${access}`,
    //               'Content-Type': 'application/json',
    //             },
    //           });
    //           const existingMessages = response.data;
      
    //           // Update the messages state with the existing messages
    //           setMessages(existingMessages);

    }

    if (userId) {
      const fetchData = async () => {
        try {
          if (trainer) {
            const trainer_authTokens = JSON.parse(localStorage.getItem('trainer_authTokens'));
            access = trainer_authTokens.access;
            const response = await axios.get(`${assignedUsers}${userId}`, {
              headers: {
                "Authorization": `Bearer ${access}`,
                'Content-Type': 'application/json',
              },
            });
            setUsers(response.data);
          } else {
            const authTokens = JSON.parse(localStorage.getItem('user_authTokens'));
            access = authTokens.access;
            const response = await axios.get(`${getSingleTrainer}${trainer.id}`, {
              headers: {
                "Authorization": `Bearer ${access}`,
                'Content-Type': 'application/json',
              },
            });
            setUsers([response.data]);
          }
        } catch (error) {
          console.error('Failed to fetch users:', error);
        }
      };

      fetchData();
    }
    
    // if (userId && trainerId) {
    //   const fetchMessages = async () => {
    //     try {
    //       let access;
    //       if (trainer) {
    //         const trainer_authTokens = JSON.parse(localStorage.getItem('trainer_authTokens'));
    //         access = trainer_authTokens.access;
    //       } else {
    //         const authTokens = JSON.parse(localStorage.getItem('user_authTokens'));
    //         access = authTokens.access;
    //       }
  
    //       // Fetch existing messages from the database
          
    //       const response = await axios.get(`/api/messages/${userId}/${trainerId}`, {
    //         headers: {
    //           "Authorization": `Bearer ${access}`,
    //           'Content-Type': 'application/json',
    //         },
    //       });
    //       const existingMessages = response.data;
  
    //       // Update the messages state with the existing messages
    //       setMessages(existingMessages);
    //     } catch (error) {
    //       console.error('Failed to fetch messages:', error);
    //     }
    //   };
  
    //   fetchMessages();
    // }
  
   

    if (userId) {
      const newSocket = new WebSocket(`ws://127.0.0.1:8000/${trainer ? 'trainer' : 'user'}/chat/${userId}/`);

      setSocket(newSocket);

      newSocket.onopen = (e) => {
        console.log('WebSocket connection established');
      };

      newSocket.onmessage = (e) => {
        console.log('WebSocket message received:', e.data);
        const data = JSON.parse(e.data);
        const message = data['message'];
        const sentById = data['sent_by'];
        const sendToId = data['sent_by']
        const threadID = data['thread_id']
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: message, sentBy: sentById ,sendTo:sendToId,threadIs:threadID},
        ]);
      };

      newSocket.onerror = (e) => {
        console.error('WebSocket error:', e);
      };

      newSocket.onclose = (e) => {
        console.log('WebSocket connection closed:', e);
      };

      return () => {
        newSocket.close();
      };
    }

    const fetchThreads = async () => {
      try {
        const response = await axios.get('/api/chat/',{
          headers: {
            "Authorization": `Bearer ${access}`,
            'Content-Type': 'application/json',
          },
        });
        const threads = response.data;
        console.log(threads)
        // Process the retrieved threads as needed
        setThreads(threads);
      } catch (error) {
        console.error('Failed to fetch threads:', error);
      }
    };
  
    fetchThreads();
   
  }, [userId, trainer]);
  console.log("aal",threads)

  // const handleSendMessage = (e) => {
  //   e.preventDefault();

  //   if (!inputMessage.trim()) {
  //     return;
  //   }

  //   let sendTo;
  //   let threadId;
  //   if (trainer) {
  //     sendTo = activeChat;
  //     const threadId = threadIds
  //     console.log("sendmessagetrainer",sendTo)
  //     console.log("sendmessagetrainerthread",threadId)
  //     const data = {
  //       message: inputMessage,
  //       sent_by: userId,
  //       send_to: sendTo,
  //       user: userId,
  //       // first
  //       thread_id: threadId,
  //     };
  //     console.log("ithano",data)
  //     socket.send(JSON.stringify(data));
  //     setInputMessage('');

  //   } else {
  //     sendTo = trainerId;
  //     const threadId = threadIds;
  //     console.log("sendmessageuser",sendTo)
  //     console.log("sendmessageuserthread",threadId)
  //     const data = {
  //       message: inputMessage,
  //       sent_by: userId,
  //       send_to: sendTo,
  //       user: userId,
  //       // first
  //       thread_id: threadId,
  //     };
  //     console.log("ithano",data)
  //     socket.send(JSON.stringify(data));
  //     setInputMessage('');


  //   }


    

   
  // };

  const handleSendMessage = (e) => {
    e.preventDefault();
  
    if (!inputMessage.trim()) {
      return;
    }
  
    let sendTo;
    if (trainer) {
      sendTo = activeChat;
      const data = {
        message: inputMessage,
        sent_by: userId,
        send_to: sendTo,
        user: userId,
        thread_id: threadIds,
      };
      socket.send(JSON.stringify(data));
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputMessage, sentBy: userId, sendTo: sendTo, threadIs: threadIds },
      ]);
    } else {
      sendTo = trainerId;
      const data = {
        message: inputMessage,
        sent_by: userId,
        send_to: sendTo,
        user: userId,
        thread_id: threadIds,
      };
      socket.send(JSON.stringify(data));
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputMessage, sentBy: userId, sendTo: sendTo, threadIs: threadIds },
      ]);
    }
  
    setInputMessage('');
  };
  

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };
  // const getActiveOtherUserId = (userId) => {
  //   setActiveChat(userId);
  //   const selectedUser = users.find((user) => user.id === userId);
  //   setActiveUser(selectedUser);
  // };
  console.log("tra",trainerId)
  const getActiveOtherUserId = async (userId) => {
    const trainer_authTokens = JSON.parse(localStorage.getItem('trainer_authTokens'));
    const access = trainer_authTokens.access;
    const selectedUser = users.find((user) => user.id === userId);
    setActiveUser(selectedUser);
    console.log("trainer",activeUser)
  
    const data = {
      users: [selectedUser.id, trainerId],
    };
    console.log("trainer",data)

  
    const response = await axios.post('/api/threads/', data);
    const threadId = response.data.id;
    setThreadId(threadId)
    console.log("thisthread",threadId)
    console.log("thisuseris",userId)
    console.log("this trainer",trainerId)
    setActiveChat(userId);

   
    axios.get(`/api/get-message/${userId}/${trainerId}/${threadId}`,{
      headers: {
        "Authorization": `Bearer ${access}`,
        'Content-Type': 'application/json',
      },
    }).then((newreponse)=>{
      const chats = newreponse.data;
      console.log("testngher",chats)
      setMessages(chats)
      // Process the retrieved threads as needed
      // setThreads(threads);
    });
    // setActiveThread(threadId);
    // console.log("trainer",activeThread)
    // console.log("trainer",activeChat)
    
  };
  
  // const getActiveThreadId = () => {

  //     return threadId;
  // };

  return (
    <div className="ccontainer">
      <div className="chat-container">
        <div className="sidebar">
          <div className="search-container">
            <input type="text" placeholder="Search..." className="search" />
            <i className="fas fa-search search-icon"></i>
          </div>
          <ul className="contacts-list">
            { users.map((user) => (
              <li
                key={user.id}
                onClick={() => getActiveOtherUserId(user.id, trainerId)}
                className={activeUser && activeUser.id === user.id ? "active" : ""}
              >
                <div className="contact">
                  <img src={user.profileImage} className="user-img" alt={user.username} />
                  <div className="user-info">
                    <span className="user-name">{user.username}</span>
                    <p className="user-status">{user.status}</p>
                  </div>
                </div>
              </li>
            )) }
          </ul>
        </div>
        <div className="chat">
          <div className="chat-header">
            <div className="contact">
              {activeUser ? (
                <>
                  <img src={activeUser.profileImage} className="user-img" alt={activeUser.username} />
                  <div className="user-info">
                    <span className="user-name">{activeUser.username}</span>
                  </div>
                </>
              ) : null}
            </div>
          </div>
          {/* <div className="chat-body">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.sentBy === userId ? 'sent-by-user' : 'sent-by-trainer'}`}
              >
                <div className="message-text">{message.text}</div>
                <div className="message-time">{message.timestamp}</div>
              </div>
            ))}
          </div> */}
          <div className="chat-body">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender === userId ? 'sent-by-user' : 'sent-by-trainer'}`}
            >
              <div className="message-text">{message.message}</div>
              <div className="message-time">{message.timestamp}</div>
            </div>
          ))}
        </div>
          {/* <div className="chat-body">
          {threads.map((thread) => (
  <div key={thread.id}>
    {thread.chatmessage_thread.map((message) => (
      <div
        key={message.id}
        className={`message ${
          message.user === userId ? 'sent-by-user' : 'sent-by-trainer'
        }`}
      >
        <div className="message-text">{message.message}</div>
        <div className="message-time">{message.timestamp}</div>
      </div>
    ))}
  </div>
))}
</div> */}
          <div className="chat-footer">
            <form id="send-message-form" onSubmit={handleSendMessage}>
              <div className="input-container">
                <input type="text" placeholder="Type your message..." className="message-input" onChange={handleInputChange} value={inputMessage} />
                <button type="submit" className="send-btn">
                  <i className="fas fa-location-arrow"></i>Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

// latest



// import React, { useEffect, useState } from 'react';
// import jwt_decode from "jwt-decode";
// import './chat.css'
// import { assignedUsers, getSingleTrainer, viewUser } from '../../../Utils/urls'
// import axios from '../../../Utils/axios'
// import { useSelector } from 'react-redux';
// const Chat = () => {
//   const [inputMessage, setInputMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [activeChat, setActiveChat] = useState(null);
//   const [userId, setUserId] = useState(null);
//   const [trainerId, setTrainerId] = useState(null);
//   const [threadIds, setThreadId] = useState(null);
//   const [socket, setSocket] = useState(null);
//   const [messageElement, setMessageElements] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [threads, setThreads] = useState([]);
//   const [activeUser, setActiveUser] = useState(null);
//   const user = useSelector(state => state.user.user);
//   const trainer = useSelector(state => state.trainer.trainer);
//   const [activeThread, setActiveThread] = useState(null);

//   useEffect(() => {
//     let access;
//     let trainerId;

//     if (trainer) {
//       const trainer_authTokens = JSON.parse(localStorage.getItem('trainer_authTokens'));
//       access = trainer_authTokens.access;
//       const decoded_token = jwt_decode(access);
//       const trainerId = decoded_token.user_id;
//       setUserId(trainerId);
//       setTrainerId(trainerId);
//     } else {
//       const authTokens = JSON.parse(localStorage.getItem('user_authTokens'));
//       access = authTokens.access;
//       const decoded_token = jwt_decode(access);
//       const userId = decoded_token.user_id;
//       setUserId(userId);
//       axios.get(`${viewUser}${userId}`, {
//         headers: {
//           "Authorization": `Bearer ${access}`,
//           'Content-Type': 'application/json',
//         },
//       }).then((response) => {
//         setTrainerId(response.data.trainer_id);
//         const trainerId=response.data.trainer_id
//         console.log("fetch",userId)
//         console.log("fetchtr",trainerId)


//         axios.get('/api/chat/',{
//             headers: {
//               "Authorization": `Bearer ${access}`,
//               'Content-Type': 'application/json',
//             },
//           }).then((thisreponse)=>{
//             const threadId = thisreponse.data[0].id;
//             setThreadId(threadId)
//             axios.get(`/api/get-message/${userId}/${trainerId}/${threadId}`,{
//               headers: {
//                 "Authorization": `Bearer ${access}`,
//                 'Content-Type': 'application/json',
//               },
//             }).then((newreponse)=>{
//               const chats = newreponse.data;
//               console.log("testngher",chats)
//               setMessages(chats)
//               // Process the retrieved threads as needed
//               // setThreads(threads);
//             });
//             // Process the retrieved threads as needed
//             // setThreads(threads);
//           });

        
          
        


//       });
     
//     //   axios.get(`/api/messages/${userId}/${trainerId}`, {
//     //             headers: {
//     //               "Authorization": `Bearer ${access}`,
//     //               'Content-Type': 'application/json',
//     //             },
//     //           });
//     //           const existingMessages = response.data;
      
//     //           // Update the messages state with the existing messages
//     //           setMessages(existingMessages);

//     }

//     if (userId) {
//       const fetchData = async () => {
//         try {
//           if (trainer) {
//             const trainer_authTokens = JSON.parse(localStorage.getItem('trainer_authTokens'));
//             access = trainer_authTokens.access;
//             const response = await axios.get(`${assignedUsers}${userId}`, {
//               headers: {
//                 "Authorization": `Bearer ${access}`,
//                 'Content-Type': 'application/json',
//               },
//             });
//             setUsers(response.data);
//           } else {
//             const authTokens = JSON.parse(localStorage.getItem('user_authTokens'));
//             access = authTokens.access;
//             const response = await axios.get(`${getSingleTrainer}${trainer.id}`, {
//               headers: {
//                 "Authorization": `Bearer ${access}`,
//                 'Content-Type': 'application/json',
//               },
//             });
//             setUsers([response.data]);
//           }
//         } catch (error) {
//           console.error('Failed to fetch users:', error);
//         }
//       };

//       fetchData();
//     }
    
//     // if (userId && trainerId) {
//     //   const fetchMessages = async () => {
//     //     try {
//     //       let access;
//     //       if (trainer) {
//     //         const trainer_authTokens = JSON.parse(localStorage.getItem('trainer_authTokens'));
//     //         access = trainer_authTokens.access;
//     //       } else {
//     //         const authTokens = JSON.parse(localStorage.getItem('user_authTokens'));
//     //         access = authTokens.access;
//     //       }
  
//     //       // Fetch existing messages from the database
          
//     //       const response = await axios.get(`/api/messages/${userId}/${trainerId}`, {
//     //         headers: {
//     //           "Authorization": `Bearer ${access}`,
//     //           'Content-Type': 'application/json',
//     //         },
//     //       });
//     //       const existingMessages = response.data;
  
//     //       // Update the messages state with the existing messages
//     //       setMessages(existingMessages);
//     //     } catch (error) {
//     //       console.error('Failed to fetch messages:', error);
//     //     }
//     //   };
  
//     //   fetchMessages();
//     // }
  
   

//     if (userId) {
//       const newSocket = new WebSocket(`ws://127.0.0.1:8000/${trainer ? 'trainer' : 'user'}/chat/${userId}/`);

//       setSocket(newSocket);

//       newSocket.onopen = (e) => {
//         console.log('WebSocket connection established');
//       };

//       newSocket.onmessage = (e) => {
//         console.log('WebSocket message received:', e.data);
//         const data = JSON.parse(e.data);
//         const message = data['message'];
//         const sentById = data['sent_by'];
//         const sendToId = data['sent_by']
//         const threadID = data['thread_id']
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { text: message, sentBy: sentById ,sendTo:sendToId,threadIs:threadID},
//         ]);
//         console.log("state",messages)
//       };

//       newSocket.onerror = (e) => {
//         console.error('WebSocket error:', e);
//       };

//       newSocket.onclose = (e) => {
//         console.log('WebSocket connection closed:', e);
//       };

//       return () => {
//         newSocket.close();
//       };
//     }

//     const fetchThreads = async () => {
//       try {
//         const response = await axios.get('/api/chat/',{
//           headers: {
//             "Authorization": `Bearer ${access}`,
//             'Content-Type': 'application/json',
//           },
//         });
//         const threads = response.data;
//         console.log(threads)
//         // Process the retrieved threads as needed
//         setThreads(threads);
//       } catch (error) {
//         console.error('Failed to fetch threads:', error);
//       }
//     };
  
//     fetchThreads();
   
//   }, [userId, trainer]);
//   console.log("aal",threads)

//   // const handleSendMessage = (e) => {
//   //   e.preventDefault();

//   //   if (!inputMessage.trim()) {
//   //     return;
//   //   }

//   //   let sendTo;
//   //   let threadId;
//   //   if (trainer) {
//   //     sendTo = activeChat;
//   //     const threadId = threadIds
//   //     console.log("sendmessagetrainer",sendTo)
//   //     console.log("sendmessagetrainerthread",threadId)
//   //     const data = {
//   //       message: inputMessage,
//   //       sent_by: userId,
//   //       send_to: sendTo,
//   //       user: userId,
//   //       // first
//   //       thread_id: threadId,
//   //     };
//   //     console.log("ithano",data)
//   //     socket.send(JSON.stringify(data));
//   //     setInputMessage('');

//   //   } else {
//   //     sendTo = trainerId;
//   //     const threadId = threadIds;
//   //     console.log("sendmessageuser",sendTo)
//   //     console.log("sendmessageuserthread",threadId)
//   //     const data = {
//   //       message: inputMessage,
//   //       sent_by: userId,
//   //       send_to: sendTo,
//   //       user: userId,
//   //       // first
//   //       thread_id: threadId,
//   //     };
//   //     console.log("ithano",data)
//   //     socket.send(JSON.stringify(data));
//   //     setInputMessage('');


//   //   }


    

   
//   // };

//   const handleSendMessage = (e) => {
//     e.preventDefault();
  
//     if (!inputMessage.trim()) {
//       return;
//     }
  
//     let sendTo;
//     if (trainer) {
//       sendTo = activeChat;
//       const data = {
//         message: inputMessage,
//         sent_by: userId,
//         send_to: sendTo,
//         user: userId,
//         thread_id: threadIds,
//       };
//       socket.send(JSON.stringify(data));
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { text: inputMessage, sentBy: userId, sendTo: sendTo, threadIs: threadIds },
//       ]);
//     } else {
//       sendTo = trainerId;
//       const data = {
//         message: inputMessage,
//         sent_by: userId,
//         send_to: sendTo,
//         user: userId,
//         thread_id: threadIds,
//       };
//       socket.send(JSON.stringify(data));
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { text: inputMessage, sentBy: userId, sendTo: sendTo, threadIs: threadIds },
//       ]);
//     }
  
//     setInputMessage('');
//   };
  

//   const handleInputChange = (e) => {
//     setInputMessage(e.target.value);
//   };
//   // const getActiveOtherUserId = (userId) => {
//   //   setActiveChat(userId);
//   //   const selectedUser = users.find((user) => user.id === userId);
//   //   setActiveUser(selectedUser);
//   // };
//   console.log("tra",trainerId)
//   const getActiveOtherUserId = async (userId) => {
//     const trainer_authTokens = JSON.parse(localStorage.getItem('trainer_authTokens'));
//     const access = trainer_authTokens.access;
//     const selectedUser = users.find((user) => user.id === userId);
//     setActiveUser(selectedUser);
//     console.log("trainer",activeUser)
  
//     const data = {
//       users: [selectedUser.id, trainerId],
//     };
//     console.log("trainer",data)

  
//     const response = await axios.post('/api/threads/', data);
//     const threadId = response.data.id;
//     setThreadId(threadId)
//     console.log("thisthread",threadId)
//     console.log("thisuseris",userId)
//     console.log("this trainer",trainerId)
//     setActiveChat(userId);

   
//     axios.get(`/api/get-message/${userId}/${trainerId}/${threadId}`,{
//       headers: {
//         "Authorization": `Bearer ${access}`,
//         'Content-Type': 'application/json',
//       },
//     }).then((newreponse)=>{
//       const chats = newreponse.data;
//       console.log("testngher",chats)
//       setMessages(chats)
//       // Process the retrieved threads as needed
//       // setThreads(threads);
//     });
//     // setActiveThread(threadId);
//     // console.log("trainer",activeThread)
//     // console.log("trainer",activeChat)
    
//   };
  
//   // const getActiveThreadId = () => {

//   //     return threadId;
//   // };

//   return (
//     <div className="ccontainer">
//       <div className="chat-container">
//         <div className="sidebar">
//           <div className="search-container">
//             <input type="text" placeholder="Search..." className="search" />
//             <i className="fas fa-search search-icon"></i>
//           </div>
//           <ul className="contacts-list">
//             { users.map((user) => (
//               <li
//                 key={user.id}
//                 onClick={() => getActiveOtherUserId(user.id, trainerId)}
//                 className={activeUser && activeUser.id === user.id ? "active" : ""}
//               >
//                 <div className="contact">
//                   <img src={user.profileImage} className="user-img" alt={user.username} />
//                   <div className="user-info">
//                     <span className="user-name">{user.username}</span>
//                     <p className="user-status">{user.status}</p>
//                   </div>
//                 </div>
//               </li>
//             )) }
//           </ul>
//         </div>
//         <div className="chat">
//           <div className="chat-header">
//             <div className="contact">
//               {activeUser ? (
//                 <>
//                   <img src={activeUser.profileImage} className="user-img" alt={activeUser.username} />
//                   <div className="user-info">
//                     <span className="user-name">{activeUser.username}</span>
//                   </div>
//                 </>
//               ) : null}
//             </div>
//           </div>
//           {/* <div className="chat-body">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`message ${message.sentBy === userId ? 'sent-by-user' : 'sent-by-trainer'}`}
//               >
//                 <div className="message-text">{message.text}</div>
//                 <div className="message-time">{message.timestamp}</div>
//               </div>
//             ))}
//           </div> */}
//           <div className="chat-body">
//           {messages.map((message, index) => (
//             <div
//               key={index}
//               className={`message ${message.sender === userId ? 'sent-by-user' : 'sent-by-trainer'}`}
//             >
//               <div className="message-text">{message.message}</div>
//               <div className="message-time">{message.timestamp}</div>
//             </div>
//           ))}
//         </div>
//           {/* <div className="chat-body">
//           {threads.map((thread) => (
//   <div key={thread.id}>
//     {thread.chatmessage_thread.map((message) => (
//       <div
//         key={message.id}
//         className={`message ${
//           message.user === userId ? 'sent-by-user' : 'sent-by-trainer'
//         }`}
//       >
//         <div className="message-text">{message.message}</div>
//         <div className="message-time">{message.timestamp}</div>
//       </div>
//     ))}
//   </div>
// ))}
// </div> */}
//           <div className="chat-footer">
//             <form id="send-message-form" onSubmit={handleSendMessage}>
//               <div className="input-container">
//                 <input type="text" placeholder="Type your message..." className="message-input" onChange={handleInputChange} value={inputMessage} />
//                 <button type="submit" className="send-btn">
//                   <i className="fas fa-location-arrow"></i>Send
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;