import "./App.css";
import { Home } from "./Pages/Home.tsx";
import { Navbar } from "./components/navBar/Navbar.tsx";
import { Route, Routes } from "react-router-dom";
import { Page2 } from "./Pages/Page2.tsx";
import { Example } from "./Pages/Example.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/example" element={<Example />} />
        <Route path="/example2" element={<Example />} />
      </Routes>
    </>
  );
}

export default App;
