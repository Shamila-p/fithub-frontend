import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2';
import axios from '../../../Utils/axios';
import { statistics } from '../../../Utils/urls';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

const ChartData = () => {
  const [chartData, setChartData] = useState({});
  const authTokens = JSON.parse(localStorage.getItem('authTokens'));
  const access = authTokens.access;

  useEffect(() => {
    axios
      .get(statistics, {
        headers: {
          Authorization: `Bearer ${access}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('chart', response.data);
        setChartData(response.data);
      })
      .catch((error) => {
        // Handle error if needed
        console.error(error);
      });
  }, []);



  const data = {

    labels: chartData.packages, // Use package types as labels
    datasets: [
      {
        label: 'Number of Users',
        data: chartData.userCounts, // Use user counts as data
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor:'black',
        borderWidth:1
      },
    ],
  };

  const options={

  }

  return (
    <div style={{padding:"10px",width:"80%",marginLeft:"100px",marginTop:"10px"}}>
        <Bar data={data} options={options} >

        </Bar>
    </div>
  );
};

export default ChartData;
