import React, { useState,useEffect } from 'react'
import './UserData.css'
import axios from '../../../Utils/axios'
import {editUser, userEntry} from '../../../Utils/urls'
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { useSelector } from 'react-redux';



function UserData() {
        const [age,setAge] = useState("")
        const [gender,setGender] = useState("")
        const [height,setHeight] = useState("")
        const [weight,setWeight] = useState("")
        const [isShowAge,setIsShowAge] = useState(false)
        const [isShowGender,setIsShowGender] = useState(false)
        const [isShowHeight,setIsShowHeight] = useState(false)
        const [isShowWeight,setIsShowWeight] = useState(false)
        const [isFinal,setIsFinal] = useState(false)
        const user = useSelector(state=>state.user.user)

        const navigate=useNavigate()

        const handleShowPage = () => {
            setIsShowAge(true)
        };

        const handleAge = () => {
            setIsShowAge(false)
            setIsShowGender(true)
        };

        const handleGender = () => {
            setIsShowGender(false)
            setIsShowHeight(true)
        };

        const handleHeight = () => {
            setIsShowHeight(false)
            setIsShowWeight(true)
        };

        const handleWeight = () => {
            setIsShowWeight(false)
            setIsFinal(true)
        };

        const handlePrevious1 = () => {
            setIsShowGender(false)
            setIsShowAge(true)
        };

        const handlePrevious2 = () => {
            setIsShowHeight(false)
            setIsShowGender(true)
        };

        const handlePrevious3 = () => {
            setIsShowHeight(true)
            setIsShowWeight(false)
        };

        const handlePrevious4 = () => {
            setIsShowAge(true)
            setIsFinal(false)
        };
        const handlePrevious5 = () => {
            setIsShowAge(false)
        };

        const authTokens = JSON.parse(localStorage.getItem('user_authTokens'))
        const access = authTokens?.access
        const decoded_token = jwt_decode(access)
        const userId=decoded_token.user_id
        const heights=decoded_token.height
        console.log(heights)
        const body={
            height:height,
            weight:weight,
            age:age,
            gender:gender,
            user_id:userId
          }
        const handleSubmit= () => {
           axios.post(`${userEntry}${userId}`,body,{
          headers: { "Authorization": `Bearer ${access}`,"Content-Type": "application/json" },
           }).then((response)=>{
            console.log('success')
            navigate(`/user/profile`)
          })
        };
        const renderAgeInput  = () => {
            return (
            <div className="box_container">
                    <h1>How old are you?</h1>

                <div className="home-container">
                <input
                    className="create-task-input"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    
                />
                 <div className="button-container">
                            <button className="previous-button" onClick={handlePrevious5}>Cancel</button>
                            <button className="next-button" onClick={handleAge}>Next</button>
                </div>
                </div>
             </div>
            );
        };

        const renderGenderInput  = () => {
            return (
                <div className="box_container">
                    <h1>Type your gender<br/><span style={{fontSize:"18px"}}>(Female/Male/Other</span>)</h1>
                    <div className="home-container">

                        <input
                            className="create-task-input"
                            type="text"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}

                            
                        />
                         <div className="button-container">
                            <button className="previous-button" onClick={handlePrevious1} >Previous</button>
                            <button className="next-button" onClick={handleGender}>Next</button>
                        </div>
                    </div>
                </div>
            );
        };

        const renderHeightInput  = () => {
            return (
                <div className="box_container">
                    <h1>Enter your height (in cm)</h1>
                    <div className="home-container">
                        <input
                            className="create-task-input"
                            type="number"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}

                        />
                        <div className="button-container">
                            <button className="previous-button" onClick={handlePrevious2}>Previous</button>
                            <button className="next-button" onClick={handleHeight}>Next</button>
                        </div>
                    </div>
                </div>
            );
        };

        const renderWeightInput  = () => {
            return (
                <div className="box_container">
                    <h1>Enter your weight (in kg)</h1>
                    <div className="home-container">
                        <input
                            className="create-task-input"
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        />
                        <div className="button-container">
                            <button className="previous-button" onClick={handlePrevious3}>Previous</button>
                            <button className="next-button" onClick={handleWeight}>Next</button>
                        </div>
                    </div>
                </div>
            );
        };
        const renderFinal  = () => {
            return (
                <div className="box_container">
                    <div className="home-container">
                        <h4>Age: {age}</h4>
                        <h4>Gender: {gender}</h4>
                        <h4>Height: {height}</h4>
                        <h4>Weight: {weight}</h4>
                        <div className="button-container">
                            <button className="previous-button" onClick={handlePrevious4}>Cancel</button>
                            <button className="next-button" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            );
        };


       
  return (
    <div className="background_container">
        <div className="first_view_container">
            {/* <div style={{backgroundColor:"black",height:"100vh"}}> */}
        {isShowAge?(
            renderAgeInput()
        ):
        isShowGender?(
            renderGenderInput()
        ):isShowHeight?(
            renderHeightInput()
        ):isShowWeight?(
            renderWeightInput()
        ):isFinal?(
            renderFinal()
        ):(
            <>
                <p className='fv_heading'>Welcome to <span> FitHub </span> family</p>
                <p className="fv_tagline">Only a few step left!!<br/> We need to know you more. Click on below and complete your survey to enjoy a new experience</p>
                <button className="fv_button" onClick={handleShowPage}>Click me</button>

            </>
        )

        }
     
    </div>
    </div>
    // </div>
  )
}

export default UserData



{/* <div className="box_container">
<h2>How old are you?</h2>
  <form onSubmit={handleAge} className="form-container">
    <input className="create-task-input" type="number"
    placeholder="Age"
    value={age}  onChange={(e) => setAge(e.target.value)}/>
    <button className="create-task-button" type="submit">Next</button>
 </form>
</div> */}