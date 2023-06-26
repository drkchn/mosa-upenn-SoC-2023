import "./App.css";
import { Home } from "./Pages/Home/Home.tsx";
import { Navbar } from "./components/navBar/Navbar.tsx";
import { Route, Routes } from "react-router-dom";
import { Page2 } from "./Pages/Page2/Page2.tsx";
import { Example } from "./Pages/Example/Example.tsx";
import { WhyVote } from "./Pages/WhyVote/WhyVote.tsx";
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
            <Route path="/page2" element={<Page2 />} />
            <Route path="/example" element={<Example />} />
            <Route path="/whyvote" element={<WhyVote />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </GlobalContext>
  );
}

export default App;
