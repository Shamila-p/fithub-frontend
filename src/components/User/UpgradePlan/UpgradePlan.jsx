import React, { useEffect, useState } from 'react';
import './UpgradePlan.css';
import NavBar from '../../../components/User/Navbar/Navbar'
import '../Payment/Payment.css'
import { assignPlan, getPlans } from '../../../Utils/urls';
import axios from '../../../Utils/axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import jwtDecode from 'jwt-decode';
import { getCurrentPlan,UpgradedPlan } from '../../../Utils/urls';

function UpgradePlan() {
    const [plans, setPlans] = useState([]);
    const navigate = useNavigate();
    const [currentPlan, setCurrentPlan] = useState(null);
    const authTokens = JSON.parse(localStorage.getItem('user_authTokens'));
    const access = authTokens.access;
    const decoded_token=jwtDecode(access)
    const userId=decoded_token.user_id
    console.log(userId)
   
      const handlePayment = (planId, amount) => {
        const body = {
          plan_id: planId,
          user_id: userId,
        };
        console.log(body)
        var options = {
          key: "rzp_test_H7p4bvniKS3x9a",
          key_secret: "NQhqYTUmV6i3Q1hQTHiia1f1",
          amount: amount * 100,
          currency: "INR",
          name: "STARTUP_PROJECTS",
          description: "for testing purpose",
          handler: function (response) {
            axios.post(UpgradedPlan, body, {
              headers: { "Authorization": `Bearer ${access}`, 'Content-Type': 'application/json' },
            }).then((response) => {
              console.log(response);
              showSuccessAlert();
            });
          },
          prefill: {
            name: "Shamila P",
            email: "lulushamila@gmail.com",
            contact: "7025692630"
          },
          notes: {
            address: "Razorpay Corporate office"
          },
          theme: {
            color: "#3399cc"
          }
        };
    
        var pay = new window.Razorpay(options);
        pay.open();
      };
      useEffect(() => {
        axios.get(getPlans, {
          headers: { "Authorization": `Bearer ${access}`, 'Content-Type': 'application/json' },
        }).then((response) => {
          setPlans(response.data);
        });

        axios.get(`${getCurrentPlan}${userId}`, {
            headers: { "Authorization": `Bearer ${access}`, 'Content-Type': 'application/json' },
          }).then((response) => {
            console.log(response.data)
            setCurrentPlan(response.data);
          });
      }, [access,userId]);

      const showSuccessAlert = () => {
        Swal.fire({
          title: 'Payment Successful',
          text: 'Thank you for your purchase!',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          navigate('/user/profile');
        });
      };
    const otherPlans = plans.filter((plan) => plan.type !== (currentPlan ? currentPlan.type : ''));


  return (
    <>
    <div>
        <NavBar/>
    </div>
    
    <div className='upgrade-plan'>
      <div className='current-plan'>
      <h2>Current Plan: {currentPlan ? currentPlan.type : 'N/A'}</h2> {/* Display current plan name */}
          {currentPlan && (
            <div style={{textAlign:"center"}}>
            <ul className='plan-feature'>
              {currentPlan.features.map((feature) => (
                <li key={feature.id}>{feature.feature_text}</li>
              ))}
            </ul>
            </div>
          )}
      </div>
      <div className='upgrade-heading'>
        <h3>Change Plan</h3>
        <div className="pricing-plans-container">
        {otherPlans.map((plan) => (
              <div className="pricing-plan" style={{width:"42%"}} key={plan.id}>
                <h2 className="plan-title">{plan.type}</h2>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.amount}</span>
                  <span className="period">/month</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature) => (
                    <li key={feature.id}>{feature.feature_text}</li>
                  ))}
                </ul>
                <button className="plan-button" onClick={() => { handlePayment(plan.id, plan.amount) }}>Buy Now</button>
              </div>
            ))}
    </div>
      </div>
    </div>
    </>
  );
}

export default UpgradePlan;
