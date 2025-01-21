import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Home from "./pages/Home";
import ProjectDetails from "./projectDetails/projectDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;
