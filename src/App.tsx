import "./App.css";
import { Home } from "./Pages/Home/Home.tsx";
import { Navbar } from "./components/navBar/Navbar.tsx";
import { Route, Routes } from "react-router-dom";
import { Page2 } from "./Pages/Page2/Page2.tsx";
import { Example } from "./Pages/Example/Example.tsx";
import { Footer } from "./components/footer/Footer.tsx";
import { WhyVote } from "./Pages/WhyVote/WhyVote.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/example" element={<Example />} />
        <Route path="/whyvote" element={<WhyVote />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
