import { Box, Typography } from "@mui/material";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"; //need to "npm install recharts"

const techstyle = {
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "#CDCDCD",
    transition: "all 0.5s ease-in-out",
    transform: "scale(1.05)",
  },
};

const handleBoxClickOne = () => {
  window.open("https://www.google.com/", "_blank");
};

const handleBoxClickTwo = () => {
  window.open("https://www.google.com/", "_blank");
};

const handleBoxClickThree = () => {
  window.open("https://www.google.com/", "_blank");
};

const dataBySex = [
  { name: "1990", Female: 45.4, Male: 44.6 },
  { name: "1992", Female: 62.3, Male: 60.2 },
  { name: "1994", Female: 45.3, Male: 44.7 },
  { name: "1996", Female: 55.5, Male: 52.8 },
  { name: "1998", Female: 42.4, Male: 41.4 },
  { name: "2000", Female: 56.2, Male: 53.1 },
  { name: "2002", Female: 43.0, Male: 41.4 },
  { name: "2004", Female: 60.1, Male: 56.3 },
  { name: "2006", Female: 44.7, Male: 42.4 },
  { name: "2008", Female: 60.4, Male: 55.7 },
  { name: "2010", Female: 42.7, Male: 40.9 },
  { name: "2012", Female: 58.5, Male: 54.4 },
  { name: "2014", Female: 39.6, Male: 37.2 },
  { name: "2016", Female: 58.1, Male: 53.8 },
  { name: "2018", Female: 50.6, Male: 47.2 },
  { name: "2020", Female: 63.0, Male: 59.5 },
  { name: "2022", Female: 48.8, Male: 46.6 },
];

const dataByRace = [
  { name: "1990", White: 46.7, Black: 39.2, Asian: 20.3, Hispanic: 21.0 },
  { name: "1992", White: 63.6, Black: 54.0, Asian: 27.3, Hispanic: 28.9 },
  { name: "1994", White: 47.3, Black: 37.1, Asian: 21.8, Hispanic: 20.2 },
  { name: "1996", White: 56.0, Black: 50.6, Asian: 25.7, Hispanic: 26.7 },
  { name: "1998", White: 43.3, Black: 39.6, Asian: 19.2, Hispanic: 20.0 },
  { name: "2000", White: 56.4, Black: 53.5, Asian: 25.4, Hispanic: 27.5 },
  { name: "2002", White: 44.1, Black: 39.7, Asian: 19.4, Hispanic: 18.9 },
  { name: "2004", White: 60.3, Black: 56.3, Asian: 29.8, Hispanic: 28.0 },
  { name: "2006", White: 45.8, Black: 38.6, Asian: 21.8, Hispanic: 19.3 },
  { name: "2008", White: 59.6, Black: 60.8, Asian: 32.1, Hispanic: 31.6 },
  { name: "2010", White: 43.4, Black: 40.7, Asian: 21.3, Hispanic: 20.5 },
  { name: "2012", White: 57.6, Black: 62.0, Asian: 31.3, Hispanic: 31.8 },
  { name: "2014", White: 40.3, Black: 37.3, Asian: 19.1, Hispanic: 18.4 },
  { name: "2016", White: 58.2, Black: 55.9, Asian: 33.9, Hispanic: 32.5 },
  { name: "2018", White: 51.1, Black: 48.0, Asian: 28.9, Hispanic: 28.5 },
  { name: "2020", White: 63.7, Black: 58.7, Asian: 42.8, Hispanic: 38.8 },
  { name: "2022", White: 50.6, Black: 42.3, Asian: 29.5, Hispanic: 26.7 },
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
        marginTop: "20px",
        padding: "40px",
      }}
    >
      <Box>
        <Typography variant="h2" sx={{ marginBottom: "50px" }}>
          Democracy is fueled by participation.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignLeft: "center",
            flexDirection: { xs: "column", sm: "column", md: "row" },
          }}
        >
          <Box
            component="img"
            sx={{
              width: "35%",
              maxHeight: "auto",
              marginBottom: "20px",
              borderRadius: "30px", // Add border radius to round the image
            }}
            alt="To encourage voting!"
            src="https://thefulcrum.us/media-library/mobile-voting.jpg?id=27732364&width=1200&height=600&coordinates=0%2C992%2C0%2C639"
          />
          <Typography
            align="justify"
            sx={{
              marginBottom: "20px",
              marginLeft: "20px",
              fontSize: "1.3rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            Voting is importance and vital for a healthy democracy. It provides
            citizens the power to choose their representatives, express their
            opinions, and shape the future of their country. By participating in
            voting, one not only becomes an active member of society, but one
            has the power to choose how they want to live their life within the
            society. One vote can truly make the difference!
          </Typography>
        </Box>
      </Box>

      <Typography variant="h2" align="center" sx={{ marginBottom: "20px" }}>
        Through voting, we hold our power.
      </Typography>
      <Typography sx={{ marginBottom: "10px" }}></Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            ...techstyle,
            backgroundColor: "#FFFFFF",
            color: "primary.main",
            padding: "20px",
            borderRadius: "30px",
          }}
          onClick={handleBoxClickOne}
        >
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Voting has been pivotal in advancing civil rights and promoting
            social change in the USA.
          </Typography>
        </Box>
        <Box
          sx={{
            ...techstyle,
            backgroundColor: "#FFFFFF",
            color: "primary.main",
            padding: "20px",
            borderRadius: "30px",
          }}
          onClick={handleBoxClickTwo}
        >
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Voting holds elected official accountable for their actions,
            ensuring they fulfill their promises to the public.
          </Typography>
        </Box>
        <Box
          sx={{
            ...techstyle,
            backgroundColor: "#FFFFFF",
            color: "primary.main",
            padding: "20px",
            borderRadius: "30px",
          }}
          onClick={handleBoxClickThree}
        >
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            By voting, you honor the struggles and sacrifices of those who
            fought for your right to vote.
          </Typography>
        </Box>
      </Box>

      <Typography
        variant="h4"
        sx={{
          marginTop: "30px",
          fontFamily: "Times New Roman",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Take a look at the historically reported voting rates:
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ marginRight: "80px" }}>
          <Typography
            variant="h5"
            sx={{
              marginTop: "30px",
              fontFamily: "Times New Roman",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            Voters by Sex
          </Typography>

          <Box width={600} height={500}>
            <LineChart width={600} height={500} data={dataBySex}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                padding={{ left: 30, right: 30 }}
                label={{
                  value: "Year",
                  position: "insideBottomLeft",
                  offset: -10,
                }}
              />
              <YAxis
                label={{ value: "Percent", angle: -90, position: "insideLeft" }}
              />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Female"
                stroke="#8884d8"
                activeDot={{ r: 10 }}
              />
              <Line type="monotone" dataKey="Male" stroke="#82ca9d" />
            </LineChart>
          </Box>
        </Box>

        <Box>
          <Typography
            variant="h5"
            sx={{
              marginTop: "30px",
              fontFamily: "Times New Roman",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            Voters by Race
          </Typography>

          <Box width={600} height={500}>
            <LineChart width={600} height={500} data={dataByRace}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                padding={{ left: 30, right: 30 }}
                label={{
                  value: "Year",
                  position: "insideBottomLeft",
                  offset: -10,
                }}
              />
              <YAxis
                label={{ value: "Percent", angle: -90, position: "insideLeft" }}
              />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="White"
                stroke="#8884d8"
                activeDot={{ r: 10 }}
              />
              <Line type="monotone" dataKey="Black" stroke="#d32f2f" />
              <Line type="monotone" dataKey="Asian" stroke="#ed6c02" />
              <Line type="monotone" dataKey="Hispanic" stroke="#2e7d32" />
            </LineChart>
          </Box>
        </Box>
      </Box>

      <Box sx={{ flex: 1 }}>
        <Box sx={{ backgroundColor: "background.default", padding: "20px" }}>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            Data above was obtained from the United States Census Bureau:
            https://www.census.gov/data/tables/time-series/demo/voting-and-registration/voting-historical-time-series.html
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
