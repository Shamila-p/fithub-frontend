import React, { useState } from 'react'
import './UserData.css'

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
        const handleSubmit= () => {
           //save to databse
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
                    <h1>Select your gender</h1>
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