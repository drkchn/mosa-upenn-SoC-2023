import { Box, Typography } from "@mui/material";

export function Page2() {
  return (
    <Box
      sx={{
       // display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "600px",
        backgroundColor: "lightblue",
      }}
    >
      <Typography variant="h2">The Importance of Voting</Typography>
      <Typography sx={{ marginBottom: "50px" }}></Typography>
      <Typography>Voting is importance and vital for a healthy democracy. It provides citizens the power to choose their representatives, express their opinions, and 
        shape the future of their country. By participating in voting, one not only becomes an active member of society, but one has the power to choose how they want to 
        live their life within the society. One vote can turly make the difference!</Typography>
      <Typography sx={{ marginBottom: "50px" }}></Typography>
      <Typography variant="h4" sx={{ fontFamily: "Times New Roman",  textAlign: "center", marginTop: "20px" }}>
        One Vote Can Truly Make a Difference!</Typography>
    </Box>
  );
}
