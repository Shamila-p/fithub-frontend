import React, { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import './chat.css'
import { assignedUsers, getSingleTrainer, viewUser } from '../../../Utils/urls'
import axios from '../../../Utils/axios'
import { useSelector } from 'react-redux';
import moment from "moment";


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

//   const formatTimestamp = (timestamp) => {
//     const formattedTimestamp = moment(timestamp).fromNow();
//     return formattedTimestamp
// }

const newTimestamp = (timestamp) => {
  const newTimestamp = moment(timestamp).format('h:mm A');
  return newTimestamp;
};


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
    

   

    if (userId) {
      console.log("theredsid",threadIds)
      const newSocket = new WebSocket(`ws://127.0.0.1:8000/${trainer ? 'trainer' : 'user'}/chat/${userId}/${threadIds}/`);

      setSocket(newSocket);

      newSocket.onopen = (e) => {
        console.log('WebSocket connection established');
      };

      newSocket.onmessage = (e) => {
        console.log('WebSocket message received:', e.data);
        const data = JSON.parse(e.data);
        const message = data['message'];
        console.log("here message",message)
        const sentById = data['sent_by'];
        const sendToId = data['sent_by']
        const threadID = data['thread_id']
        setMessages((prevMessages) => [
          ...prevMessages,
          { message: message, sentBy: sentById ,sendTo:sendToId,threadIs:threadID},
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
   
  }, [userId, trainer,threadIds]);
  console.log("aal",threads)

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!inputMessage.trim()) {
      return;
    }

    let sendTo;
    let threadId;
    if (trainer) {
      sendTo = activeChat;
      console.log("trait",threadIds)

      // const threadId = threadIds
      console.log("sendmessagetrainer",sendTo)
      console.log("sendmessagetrainerthread",threadId)
      const data = {
        message: inputMessage,
        sent_by: userId,
        send_to: sendTo,
        user: userId,
        // first
        thread_id: threadIds,
      };
      console.log("ithano",data)
      socket.send(JSON.stringify(data));
      setInputMessage('');

    } else {
      sendTo = trainerId;
      console.log("ehat",threadIds)
      // const threadId = threadIds;
      console.log("sendmessageuser",sendTo)
      console.log("sendmessageuserthread",threadId)
      const data = {
        message: inputMessage,
        sent_by: userId,
        send_to: sendTo,
        user: userId,
        // first
        thread_id: threadIds,
      };
      console.log("ithano",data)
      socket.send(JSON.stringify(data));
      setInputMessage('');


    }


    

   
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
    
    
  };
  

  return (
    <div className="container-chat-style" style={{marginTop:"16px"}}>
      <div className="chat-container">
        {trainer&&
        <div className="sidebar">
          <div className="search-container">
            
          </div>
          <ul className="contacts-list">
            { users.map((user) => (
              <li
                key={user.id}
                onClick={() => getActiveOtherUserId(user.id, trainerId)}
                className={activeUser && activeUser.id === user.id ? "active" : ""}
              >
                <div className="contact">
                  {/* <img src={user.profileImage} className="user-img" alt={user.username} /> */}
                  <div className="user-info">
                    <span className="user-name">{user.username}</span>
                    <p className="user-status">{user.status}</p>
                  </div>
                </div>
              </li>
            )) }
          </ul>
        </div>}
        <div className="chat">
          <div className="chat-header">
            <div className="contact">
              {activeUser&&trainer&& (
                <>
                  {/* <img src={activeUser.profileImage} className="user-img" alt={activeUser.username} /> */}
                  <div className="user-info">
                    <span className="user-name">{activeUser.username}</span>
                  </div>
                </>
              ) }
               {user &&(
                <>
                  {/* <img src={activeUser.profileImage} className="user-img" alt={activeUser.username} /> */}
                  <div className="user-info">
                    <span className="user-name">{user.username}</span>
                  </div>
                </>
              ) }
            </div>
          </div>
        
          <div className="chat-body">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender === userId ? 'sent-by-user' : 'sent-by-trainer'}`}
            >
              <div className="message-text">{message.message}</div>
              <div className="message-time">{newTimestamp(message.timestamp)}</div>
            </div>
          ))}
        </div>
         
          <div className="chat-footer">
            <form id="send-message-form" style={{width:"100%"}} onSubmit={handleSendMessage}>
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

