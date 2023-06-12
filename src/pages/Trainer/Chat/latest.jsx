







// // import { makeStyles } from '@mui/styles';
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
// import {assignedUsers,getSingleTrainer,viewUser} from '../../../Utils/urls'
// import axios from '../../../Utils/axios'
// import { useSelector } from 'react-redux';


// const Chat = () => {
//   const [inputMessage, setInputMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [activeChat, setActiveChat] = useState(null);
//   const [userId, setUserId] = useState(null);
//   const [trainerId, setTrainerId] = useState(null);
//   const [socket, setSocket] = useState(null);
//   // const authTokens = JSON.parse(localStorage.getItem('trainer_authTokens'))
//   // // const access = authTokens.access;
//   // const decoded_token = jwt_decode(access)
//   // const trainerId=decoded_token.user_id
//   const [messageElement, setMessageElements] = useState([]);
//   const [users,setUsers]=useState([])
//   const [activeUser, setActiveUser] = useState(null);
//   const user = useSelector(state=>state.user.user)
//   console.log(user)
//   const trainer = useSelector(state=>state.trainer.trainer)
// //  setTrainerId(trainer.id)
// //  console.log("aar",trainerId)
//   console.log("ith",userId)
//   let access;
//   // useEffect(() => {
//   //   let access;
//   //   if (trainer) {
//   //     const trainer_authTokens = JSON.parse(localStorage.getItem('trainer_authTokens'));
//   //     access = trainer_authTokens.access;
//   //     const decoded_token = jwt_decode(access);
//   //     const trainerId = decoded_token.user_id;
//   //     setUserId(trainerId);
//   //   } else {
//   //     const authTokens = JSON.parse(localStorage.getItem('user_authTokens'));
//   //     access = authTokens.access;
//   //     const decoded_token = jwt_decode(access);
//   //     const userId = decoded_token.user_id;
//   //     setUserId(userId);
//   //   }
//   // }, [trainer]);
//   // console.log("check",userId)


//   useEffect(() => {
//     // const access=null; // Declare access variable here

//     if (trainer) {
//       const trainer_authTokens = JSON.parse(localStorage.getItem('trainer_authTokens'));
//       const access = trainer_authTokens.access;
//       const decoded_token = jwt_decode(access);
//       const trainerId = decoded_token.user_id;
//       setUserId(trainerId);
//     } else {
//       const authTokens = JSON.parse(localStorage.getItem('user_authTokens'));
//       // const trainer_authTokens = JSON.parse(localStorage.getItem('trainer_authTokens'));
//       // const trainer_access=trainer_authTokens.access
//       // const decoded_token_trainer = jwt_decode(trainer_access);
//       // setTrainerId(decoded_token_trainer.user_id)
//       const access = authTokens.access;
//       const decoded_token = jwt_decode(access);
//       const userId = decoded_token.user_id;
//       setUserId(userId);
//       axios.get(`${viewUser}${userId}`,{
//         headers: {
//           "Authorization": `Bearer ${access}`,
//           'Content-Type': 'application/json',
//         },
//       }).then((response)=>{
//         setTrainerId(response.data.trainer_id)
//       })
//     }
  
//     if (userId) {
//       const fetchData = async () => {
//         try {
//           if (trainer) {
//             const trainer_authTokens = JSON.parse(localStorage.getItem('trainer_authTokens'));
//             const access = trainer_authTokens.access;
//             const response = await axios.get(`${assignedUsers}${userId}`, {
//               headers: {
//                 "Authorization": `Bearer ${access}`,
//                 'Content-Type': 'application/json',
//               },
//             });
//             setUsers(response.data);
//           } else {
//             const authTokens = JSON.parse(localStorage.getItem('user_authTokens'));
//             const access = authTokens.access;
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
//       // const newSocket = new WebSocket(`ws://127.0.0.1:8000/${trainer ? 'trainer' : 'user'}/chat/${userId}/${trainerId}`);
//       // const newSocket = new WebSocket(`ws://127.0.0.1:8000/${trainer ? 'trainer/chat/${userId}' : `user/chat/${userId}/${trainerId}`}`);
//       // const newSocket = new WebSocket(`ws://127.0.0.1:8000/${trainer ? `trainer/chat/${userId}/` : `user/chat/${userId}/${trainerId}`}`);



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
//     ...prevMessages,
//     { text: message },
//   ]);
//         // newMessage(message,sentById);
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
//   }, [userId, trainer]);

//   const handleSendMessage = (e) => {
//     console.log("reached here")
//     e.preventDefault();

//     if (!inputMessage.trim()) {
//       return;
//     }

//   let sendTo; // Declare sendTo variable here

//   if (trainer) {
//     sendTo = activeChat;
//   } else {
//     sendTo = trainerId;
//   }

//   console.log("activeChat:", activeChat);
//   console.log("trainerId:", trainerId);
//   console.log("sendTo:", sendTo);
//   console.log(users)

//     const threadId = getActiveThreadId();

//     const data = {
//       message: inputMessage,
//       send_to:sendTo,
//       send_by:userId
     
//     };
//     console.log(data)
//     console.log("what",JSON.stringify(data))
//     socket.send(JSON.stringify(data));
//     setInputMessage('');
//   };

  
  
// console.log("input",inputMessage)

// const handleInputChange = (e) => {
// setInputMessage(e.target.value);
// };

// const getActiveOtherUserId = (userId) => {
//   setActiveChat(userId);
//   const selectedUser = users.find((user) => user.id === userId);
//   setActiveUser(selectedUser);
// };

// const getActiveThreadId = () => {
// // Replace this with the logic to retrieve the ID of the active chat thread
// return null;
// };

// return (
//   <>
//    <div className="ccontainer">
//       <div className="chat-container">
//         <div className="sidebar">
//           <div className="search-container">
//             <input type="text" placeholder="Search..." className="search" />
//             <i className="fas fa-search search-icon"></i>
//           </div>
//           <ul className="contacts-list">
//               {users.map((user) => (
//                 <li
//                   key={user.id}
//                   onClick={() => getActiveOtherUserId(user.id)}
//                   className={activeUser && activeUser.id === user.id ? "active" : ""}
//                 >
//                 <div className="contact">
//                     <img src={user.profileImage} className="user-img" alt={user.username} />
//                     <div className="user-info">
//                       <span className="user-name">{user.username}</span>
//                       <p className="user-status">{user.status}</p>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
      
//         </div>
//         <div className="chat">
//           <div className="chat-header">
//           <div className="contact">
//                 {activeUser ? (
//                   <>
//                     <img src={activeUser.profileImage} className="user-img" alt={activeUser.username} />
//                     <div className="user-info">
//                       <span className="user-name">{activeUser.username}</span>
//                       {/* ... */}
//                     </div>
//                   </>
//                 ) : null}
//               </div>
//             {/* <div className="contact">
//               <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="user-img" />
//               <div className="user-info">
//                 <span className="user-name">Chat with Khalid</span>
//                 <p className="message-count">1767 Messages</p>
//               </div>
//             </div> */}
//           </div>
//           {/* <div className="chat-body">
//               {messages.map((message, index) => (
//                 <div key={index} className="message">
//                   <div className="message-text">{message.text}</div>
//                   <div className="message-time">{message.timestamp}</div>
//                 </div>
//               ))}
//             </div> */}
//            <div className="chat-body">
//   {messages.map((message, index) => (
//     <div
//       key={index}
//       className={`message ${message.sender === userId ? 'sent-by-user' : 'sent-by-trainer'}`}
//     >
//       <div className="message-text">{message.text}</div>
//       <div className="message-time">{message.timestamp}</div>
//     </div>
//   ))}
// </div>
//           <div className="chat-footer" >
//             <form id="send-message-form" onSubmit={handleSendMessage}>
//               <div className="input-container">
//                 <input type="text" placeholder="Type your message..." className="message-input" onChange={handleInputChange}/>
//                 <button type="submit" className="send-btn">
//                   <i className="fas fa-location-arrow"></i>Send
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
// )
// }
// export default Chat;



  // const handleSendMessage = (e) => {
  //   e.preventDefault();
  
  //   if (!inputMessage.trim()) {
  //     return;
  //   }
  
  //   let sendTo;
  //   if (trainer) {
  //     sendTo = activeChat;
  //     const data = {
  //       message: inputMessage,
  //       sent_by: userId,
  //       send_to: sendTo,
  //       user: userId,
  //       thread_id: threadIds,
  //     };
  //     socket.send(JSON.stringify(data));
  //     setMessages((prevMessages) => [
  //       ...prevMessages,
  //       { text: inputMessage, sentBy: userId, sendTo: sendTo, threadIs: threadIds },
  //     ]);
  //   } else {
  //     sendTo = trainerId;
  //     const data = {
  //       message: inputMessage,
  //       sent_by: userId,
  //       send_to: sendTo,
  //       user: userId,
  //       thread_id: threadIds,
  //     };
  //     socket.send(JSON.stringify(data));
  //     setMessages((prevMessages) => [
  //       ...prevMessages,
  //       { text: inputMessage, sentBy: userId, sendTo: sendTo, threadIs: threadIds },
  //     ]);
  //   }
  
  //   setInputMessage('');
  // };
  


//   final



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
        const timestamp = data['timeStamp']
        setMessages((prevMessages) => [
          ...prevMessages,
          console.log("prev",prevMessages),
          { message: message, sender: sentById ,thread:threadID,timestamp:timestamp},
        ]);
        console.log("state",messages)
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
        console.log("prev",prevMessages),

        { message: inputMessage, sender: userId, sendTo: sendTo, thread: threadIds },
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
        { message: inputMessage, sender: userId, sendTo: sendTo, thread: threadIds },

      ]);
    }
  
    setInputMessage('');
  };
  


  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

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
  
  {messages.slice(0, -1).map((message, index)=> (
   console.log("ith undo",{message})
  ))}
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
        
          <div className="chat-body">
  {messages
    .filter((message, index, self) => {
      // Check if the message is not undefined and is unique
      return message !== undefined && self.findIndex(m => m.id === message.id) === index;
    })
    .map((message, index) => (
      <div
        key={index}
        className={`message ${message.sender === userId ? 'sent-by-user' : 'sent-by-trainer'}`}
      >
        <div className="message-text">{message.message}</div>
        <div className="message-time">{message.timestamp}</div>
      </div>
    ))}
</div>


         
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



