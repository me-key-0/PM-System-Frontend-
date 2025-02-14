import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Home from "./pages/Home";
import ProjectDetails from "./projectDetails/projectDetails";
import IssueDetails from "./issueDetails/IssueDetails";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route
            path="/project/:projectId/issue/:issueId"
            element={<IssueDetails />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;
