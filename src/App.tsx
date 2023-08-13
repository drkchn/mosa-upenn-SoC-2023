import "./App.css";
import { Home } from "./Pages/Home/Home.tsx";
import { Navbar } from "./components/navBar/Navbar.tsx";
import { Route, Routes } from "react-router-dom";
import { WhyVote } from "./Pages/WhyVote/WhyVote.tsx";
import { Example } from "./Pages/Example/Example.tsx";
import { About } from "./Pages/About/About.tsx";
import { Box } from "@mui/material";
import { GlobalContextWrapper } from "./context/GlobalContextWrapper.tsx";
import { Footer } from "./components/footer/Footer.tsx";
import { CivicInfo } from "./Pages/CivicInfo/CivicInfo.tsx";
import { CallHistoryDrawer } from "./components/callHistoryDrawer/CallHistoryDrawer.tsx";
import { useState } from "react";

function App() {
  const [callHistoryIsOpen, setCallHistoryIsOpen] = useState<boolean>(false);

  return (
    <GlobalContextWrapper>
      <Box
        sx={{
          backgroundColor: "background.default",
          padding: "0rem",
        }}
        data-testid={"HERE"}
      >
        <Navbar setCallHistoryOpen={setCallHistoryIsOpen} />
        <Box sx={{ padding: "20px", minHeight: "calc(100vh - 180px)" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whyvote" element={<WhyVote />} />
            <Route path="/example" element={<Example />} />
            <Route path="/about" element={<About />} />
            <Route path="/civicInformation" element={<CivicInfo />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Box>
      </Box>
      <Footer />

      <CallHistoryDrawer
        open={callHistoryIsOpen}
        setOpen={setCallHistoryIsOpen}
      />
    </GlobalContextWrapper>
  );
}

export default App;
