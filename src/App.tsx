import "./App.css";
import { Home } from "./Pages/Home/Home.tsx";
import { Navbar } from "./components/navBar/Navbar.tsx";
import { Route, Routes } from "react-router-dom";
import { WhyVote } from "./Pages/WhyVote/WhyVote.tsx";
import { Example } from "./Pages/Example/Example.tsx";
import { ContactUs } from "./Pages/ContactUs/ContactUs.tsx";
import { Box } from "@mui/material";
import { GlobalContext } from "./context/GlobalContext.tsx";
import { Footer } from "./components/footer/Footer.tsx";

function App() {
  return (
    <GlobalContext>
      <Box
        sx={{
          backgroundColor: "background.default",
          padding: { xs: "0rem", sm: "2rem" },
        }}
      >
        <Navbar />
        <Box
          sx={{
            minHeight: "70vh",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whyvote" element={<WhyVote />} />
            <Route path="/example" element={<Example />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </GlobalContext>
  );
}

export default App;
