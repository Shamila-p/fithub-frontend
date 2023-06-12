import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { getCount } from '../../../Utils/urls';
import axios from '../../../Utils/axios';
import ChartData from '../../../components/admin/Chart/ChartData'
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { Paper } from "@mui/material";

function ChartNumber() {
  const [numberOfTotalUsers, setNumberOfTotalUsers] = useState(0);
  const [numberOfTrainers, setNumberOfTrainers] = useState(0);
  const [numberOfMembers, setNumberOfMembers] = useState(0);
  const authTokens = JSON.parse(localStorage.getItem('authTokens'));
  const access = authTokens.access;

  useEffect(() => {
    axios.get(getCount, {
      headers: { "Authorization": `Bearer ${access}`, "Content-Type": "application/json" },
    }).then((response) => {
      setNumberOfTotalUsers(response.data.user_count);
      setNumberOfTrainers(response.data.trainer_count);
      setNumberOfMembers(response.data.member_count);
    });
  }, []);

  // Sample chart data
//   const data = [
//     { argument: 'Monday', value: 30 },
//     { argument: 'Tuesday', value: 20 },
//     { argument: 'Wednesday', value: 10 },
//     { argument: 'Thursday', value: 50 },
//     { argument: 'Friday', value: 60 },
//   ];

  return (
    <div>
      <Grid container spacing={2} justifyContent="center" sx={{ marginTop: "16px" }}>
        <Grid item xs={6} sm={3}>
          <Card style={{ background: 'linear-gradient(to bottom, #ff9a9e, #fad0c4)' }}>
            <CardContent>
              <Typography variant="h6" component="div">
                Total Users
              </Typography>
              <Typography variant="h4" component="div">
                {numberOfTotalUsers}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card style={{ background: 'linear-gradient(to bottom, #c6ffdd, #fbd786)' }}>
            <CardContent>
              <Typography variant="h6" component="div">
                Trainers
              </Typography>
              <Typography variant="h4" component="div">
                {numberOfTrainers}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card style={{ background: 'linear-gradient(to bottom, #a18cd1, #fbc2eb)' }}>
            <CardContent>
              <Typography variant="h6" component="div">
                Fithub Members
              </Typography>
              <Typography variant="h4" component="div">
                {numberOfMembers}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <ChartData/>
      </Grid>
      {/* <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Paper>
                <Chart data={chartData}>
                  <ArgumentAxis />
                  <ValueAxis />

                  <BarSeries valueField="value" argumentField="argument" />
                </Chart>
              </Paper>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Paper>
                <Chart data={chartData}>
                  <ArgumentAxis />
                  <ValueAxis />

                  <BarSeries valueField="value" argumentField="argument" />
                </Chart>
              </Paper>
            </CardContent>
          </Card>
        </Grid>
      </Grid> */}
      {/* <Paper>
    <Chart
      data={data}
    >
      <ArgumentAxis />
      <ValueAxis />
  
      <BarSeries valueField="value" argumentField="argument" />
    </Chart>
  </Paper> */}
  
    </div>
  );
}

export default ChartNumber;
