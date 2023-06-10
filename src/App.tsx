import "./App.css";
import { Home } from "./Pages/Home.tsx";
import { Navbar } from "./components/Navbar.tsx";
import { Route, Routes } from "react-router-dom";
import { Page2 } from "./Pages/Page2.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </>
  );
}

export default App;
