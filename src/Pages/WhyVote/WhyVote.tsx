import { Box, ImageList, Typography } from "@mui/material";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"; //need to "npm install recharts"

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

export function WhyVote() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "65vh",
      }}
    >
      <Typography variant="h2">
        Democracy is fueled by participation.
      </Typography>
      <Typography sx={{ marginBottom: "50px" }}></Typography>
      <Typography align="justify" gutterBottom sx={{ marginBottom: "50px" }}>
        Voting is importance and vital for a healthy democracy. It provides
        citizens the power to choose their representatives, express their
        opinions, and shape the future of their country. By participating in
        voting, one not only becomes an active member of society, but one has
        the power to choose how they want to live their life within the society.
        One vote can truly make the difference!!
      </Typography>
      <Typography variant="h2" align="center" sx={{ marginBottom: "50px" }}>Through voting, we hold our power.</Typography>
      <Typography sx={{ marginBottom: "10px" }}></Typography>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Times New Roman",
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "30px",
        }}
      >
        One Vote Can Make a Difference!
      </Typography>
      <Box
        component="img"
        sx={{
          width: "40%",
          maxHeight: "auto",
          marginBottom: "20px",
        }}
        alt="To encourage voting!"
        src="https://thefulcrum.us/media-library/mobile-voting.jpg?id=27732364&width=1200&height=600&coordinates=0%2C992%2C0%2C639"
      />
      <Box width="100%" height={400}>
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 10 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </Box>
    </Box>
  );
}
