import "./App.css";
import { Home } from "./Pages/Home/Home.tsx";
import { Navbar } from "./components/navBar/Navbar.tsx";
import { Route, Routes } from "react-router-dom";
import { WhyVote } from "./Pages/WhyVote/WhyVote.tsx";
import { Example } from "./Pages/Example/Example.tsx";
import { ContactUs } from "./Pages/ContactUs/ContactUs.tsx";
import { Box } from "@mui/material";
import { GlobalContextWrapper } from "./context/GlobalContextWrapper.tsx";
import { Footer } from "./components/footer/Footer.tsx";
import { CivicInfo } from "./Pages/CivicInfo/CivicInfo.tsx";

function App() {
  return (
    <GlobalContextWrapper>
      <Box
        sx={{
          backgroundColor: "background.default",
          padding: "0rem",
        }}
        data-testid={"HERE"}
      >
        <Navbar />
        <Box sx={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whyvote" element={<WhyVote />} />
            <Route path="/example" element={<Example />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/civicInformation" element={<CivicInfo />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </GlobalContextWrapper>
  );
}

export default App;
