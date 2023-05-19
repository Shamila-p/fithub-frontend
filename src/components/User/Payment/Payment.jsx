import React,{useEffect, useState} from 'react';
import './Payment.css';
import { assignPlan, getPlans } from '../../../Utils/urls';
import axios from '../../../Utils/axios'
 // Import CSS file for styling

const PricingPlan = () => {

      const [plans,setPlans]=useState([])
      
      const [amount, setamount] = useState('');
      const authTokens = JSON.parse(localStorage.getItem('user_authTokens'))
      const access = authTokens.access;

      useEffect(()=>{
        
        axios.get(getPlans,{
          headers: {"Authorization": `Bearer ${access}`,'Content-Type': 'application/json' },
        }).then((response)=>{
           // Assuming plans is an array in the response
          setPlans(response.data);
        })
      },[access])
      console.log(plans)

      const handlePayment=(planId,amount)=>{
        const body = {
          plan_id: planId,
        };
        // e.preventDefault();
        console.log(amount)
        var options = {
          key: "rzp_test_H7p4bvniKS3x9a",
          key_secret:"NQhqYTUmV6i3Q1hQTHiia1f1",
          amount: amount*100,
          currency:"INR",
          name:"STARTUP_PROJECTS",
          description:"for testing purpose",
          handler: function(response){
            axios.post(assignPlan,body,{
                headers: {"Authorization": `Bearer ${access}`,'Content-Type': 'application/json' },
            }).then((response)=>{
              console.log(response)
            })
          },
          prefill: {
            name:"Shamila P",
            email:"lulushamila@gmail.com",
            contact:"7025692630"
          },
          notes:{
            address:"Razorpay Corporate office"
          },
          theme: {
            color:"#3399cc"
          }
        };
        var pay = new window.Razorpay(options);
        pay.open();
      }
      
  return (
    <div className="pricing-plans-container">
      {plans.map(plan => (
        <div className="pricing-plan" key={plan.id}>
          <h2 className="plan-title">{plan.type}</h2>
          <div className="plan-price">
            <span className="currency">$</span>
            <span className="amount">{plan.amount}</span>
            <span className="period">/month</span>
          </div>
          <ul className="plan-features">
          {plan.features.map(feature => (
            <li key={feature.id}>{feature.feature_text}</li>
          ))}
        </ul>
          <button className="plan-button" onClick={(()=>{handlePayment(plan.id,plan.amount)})}>Buy Now</button>
        </div>
      ))}
    </div>
  )
          }

export default PricingPlan;
