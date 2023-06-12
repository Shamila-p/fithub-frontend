import React, { useState } from 'react'
import './Category.css'
import PricingPlan from '../Payment/Payment'
import Navbar from '../Navbar/Navbar'



export default function Category() {

    const [isWeightLose,setIsWeightLose] = useState(false)
    const [isBodyToning,setIsBodyToning] = useState(false)
    const [isWeightGain,setIsWeightGain] = useState(false)
    const [isPcod,setIsPcod] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('');


    const handleWeightLose = () =>{
        setSelectedCategory('Weight Loss');
        setIsWeightLose(true)
    };

    const renderWeightLose = () =>{
        return (

            <div className="category-main">
                <Navbar/>

              <div className="category-row">
                <div className="category-col1">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/003/025/522/small_2x/fit-cartoon-weight-loss-women-before-and-after-diet-vector.jpg"
                    alt="Image 1"
                  
                  />
                </div>
                <div className="category-col2" style={{ alignSelf: "center" }}>
                <h1 style={{ textAlign: "center", color: "black" }}>Weight Loss</h1>

                  <p>
                    "How to lose weight?" is one of the most trending and common queries people have all the time. In fact, losing weight is a great idea for having a better, healthy lifestyle.
                  </p>
                  <p>
                    Weight loss to a healthy weight for a person's height can promote health benefits. These include lower cholesterol and blood sugar levels, lower blood pressure, less stress on bones and joints, and less work for the heart. It is vital to maintain weight loss to obtain health benefits over a lifetime. The term weight loss specifies the body fat and hence it’s measured by a measuring tape and not a weighing machine. Most importantly, it provides a better mood and sleep.
                  </p>
                  <p>
                    Keeping extra weight off takes effort and commitment, just as losing weight does. Weight loss goals are reached by a combination of changes in diet, eating habits, and exercise. The qualities of a maintained body weight don't end here, but it surprisingly benefits you in different ways.
                  </p>
                </div>
              </div>
              <div className="category-base" style={{  textAlign: "center",marginTop:"60px",marginBottom:"60px" }}>
                <h2 style={{  padding: "15px", color:"red",fontSize:"33px"}}>
                  Its not late to grab your membership!!<br/>
                  Choose Your plan a nd be a part..
                </h2>
              </div>
              <div className="plan-container">
                <PricingPlan selectedCategory={selectedCategory}/>

              </div>
            </div>
          );
    }

    const handleBodyToning = () => {
        setSelectedCategory('Body Toning');
        setIsWeightLose(false)
        setIsBodyToning(true)
    };

    const renderBodyToning = () =>{
        return(
            <div className="category-main">
                <Navbar/>

              <div className="category-row">
                <div className="category-col1">
                  <img
                    src="https://fitreatcouple.com/public/assets/web/images/packages/4.jpg"
                    alt="Image 1"
                  
                  />
                </div>
                <div className="category-col2" style={{ alignSelf: "center" }}>
                <h1 style={{ textAlign: "center", color: "black" }}>Body Toning</h1>

                  <p>
                  Body toning is recommended when you are strictly interested in having noticeable muscle definition and shape. Your body will attain the required shape once you set your foot for the same. It not only benefits your body shape but gives you better stamina, improved posture, peaceful mental health, and also an enjoyable life. Once you sign up for the same, you will be stunned to see the magical changes in your body and lifestyle.     </p>
                  <p>
                  Lifestyle changes in recent decades have led people to adopt a sedentary lifestyle. Lot many activities are done by most of them that don't make their muscles work properly and only allow them to burn a small amount of calories. Even if you simply want to get a toned body, regular physical workoutscan bring a great deal of benefits. Significant changes can already be seen after a few weeks.</p>
                  <p>
                  A toned musculature is also important to support and protect the joints from incorrect movements and biomechanical loads. A joint supported by strong, toned muscles will suffer fewer injuries than a joint supported by weak muscles. Body toning is recommended when you are strictly interested in having noticeable muscle definition and shape. </p>
                </div>
              </div>
              <div className="category-base" style={{  textAlign: "center",marginTop:"60px",marginBottom:"60px" }}>
                <h2 style={{  padding: "15px", color:"red",fontSize:"33px"}}>
                  Its not late to grab your membership!!<br/>
                  Choose Your plan a nd be a part..
                </h2>
              </div>
              <div className="plan-container">
                <PricingPlan selectedCategory={selectedCategory}/>

              </div>
            </div>
        )
    }

    const handleWeightGain = () => {
        setSelectedCategory('Weight Gain');
        setIsBodyToning(false)
        setIsWeightGain(true)
    };

    const renderWeightGain = () =>{
        return(
            <div className="category-main">
            <Navbar/>

          <div className="category-row">
            <div className="category-col1">
              <img
                src="https://fitreatcouple.com/public/assets/web/images/packages/8.jpeg"
                alt="Image 1"
              
              />
            </div>
            <div className="category-col2" style={{ alignSelf: "center" }}>
            <h1 style={{ textAlign: "center", color: "black" }}>Weight Gain</h1>

              <p>
              Are you tired of the question "why don’t you eat anything"? Well, let's see what causes underweight and its consequences, and how we can help you with that. </p>
              <p>
              An underweight person is often faced with malnourishment, which may be due to family history, or due to any illness, poor intake of food, or high metabolic rate. Malnourishment leads to various health conditions like anaemia, frequent infection, dry skin, dental problems, thinning and breakage of hair, and irregular periods. These are all due to the low level of nutrients in the body. Our team will guide you about your healthy weight gain for 30 days by giving a proper diet plan, and ensuring daily nutrient intake.</p>
              {/* <p>
                Keeping extra weight off takes effort and commitment, just as losing weight does. Weight loss goals are reached by a combination of changes in diet, eating habits, and exercise. The qualities of a maintained body weight don't end here, but it surprisingly benefits you in different ways.
              </p> */}
            </div>
          </div>
          <div className="category-base" style={{  textAlign: "center",marginTop:"60px",marginBottom:"60px" }}>
            <h2 style={{  padding: "15px", color:"red",fontSize:"33px"}}>
              Its not late to grab your membership!!<br/>
              Choose Your plan a nd be a part..
            </h2>
          </div>
          <div className="plan-container">
            <PricingPlan selectedCategory={selectedCategory}/>

          </div>
        </div>
        )
    }

    const handlePcod = () => {
        setSelectedCategory('PCOD');
        console.log("k",selectedCategory)
        setIsWeightGain(false)
        setIsPcod(true)
    };

    const renderPcod = () =>{
        return(
            <div className="category-main">
                <Navbar/>

              <div className="category-row">
                <div className="category-col1">
                  <img
                    src="https://fitreatcouple.com/public/assets/web/images/pcod.jpg"
                    alt="Image 1"
                  
                  />
                </div>
                <div className="category-col2" style={{ alignSelf: "center" }}>
                <h1 style={{ textAlign: "center", color: "black" }}>PCOD</h1>

                  <p>
                  PCOD is an endocrinal disorder faced by women in the reproductive age group. It is characterized by a disorder in the menstrual cycle, increased androgen levels, insulin resistance in the body, infertility, male pattern baldness, hair overgrowth in the face and body, acne breakouts, etc. PCOD may not be completely cured, but it can be better managed through lifestyle modification, diet, exercise, decreasing stress levels, and improving sleep patterns.</p>
                  <p>
                  Reducing weight for the obese individual with PCOD and increasing anti-inflammatory food intake has a significant impact on changing PCOD condition and also thereby infertility. We, the fitreat team, will give you the best treatment for 40 days for your PCOD management. We will give you an evidence-based diet and workout in which you can enjoy your life with no more stress or mood swings.  </p>
                  {/* <p>
                    Keeping extra weight off takes effort and commitment, just as losing weight does. Weight loss goals are reached by a combination of changes in diet, eating habits, and exercise. The qualities of a maintained body weight don't end here, but it surprisingly benefits you in different ways.
                  </p> */}
                </div>
              </div>
              <div className="category-base" style={{  textAlign: "center",marginTop:"60px",marginBottom:"60px" }}>
                <h2 style={{  padding: "15px", color:"red",fontSize:"33px"}}>
                  Its not late to grab your membership!!<br/>
                  Choose Your plan a nd be a part..
                </h2>
              </div>
              <div className="plan-container">
                <PricingPlan selectedCategory={selectedCategory}/>

              </div>
            </div>
        );
    }




  return (

    <div className='white-bg' >
    {isWeightLose?(
        renderWeightLose()
    ):isBodyToning?(
        renderBodyToning()
    ):isWeightGain?(
        renderWeightGain()
    ):isPcod?(
        renderPcod()
    ):
    <>
    <div className='container'>
     <div className="row">
      <div className="box" onClick={handleWeightLose}>
        <img src="https://fitreatcouple.com/public/assets/web/images/icons/1.svg" alt="Image 1" className="image" />
        <h2>Weight Lose</h2>
      </div>
      <div className="box" onClick={handleBodyToning}>
        <img src="https://fitreatcouple.com/public/assets/web/images/icons/2.svg" alt="Image 2" className="image" />
        <h2>Body Toning</h2>
      </div>
    </div>
    <div className="row" onClick={handleWeightGain}>
      <div className="box">
        <img src="https://fitreatcouple.com/public/assets/web/images/icons/3.svg" alt="Image 3" className="image" />
        <h2>Weight Gain</h2>
      </div>
      <div className="box" onClick={handlePcod}>
        <img src="https://fitreatcouple.com/public/assets/web/images/icons/4.svg" alt="Image 4" className="image" />
        <h2>PCOD Plan</h2>
      </div>
    </div>
    </div>
    </>
    }
  </div>
  )
}
