import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Home from "./pages/Home";
import ProjectDetails from "./projectDetails/projectDetails";
import IssueDetails from "./issueDetails/IssueDetails";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { ThemeProvider } from "./components/theme-provider";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./redux/auth/Action";
import Auth from "./auth/Auth";
import { fetchProjects } from "./redux/project/Action";

function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  console.log("auth-----", auth);

  useEffect(() => {
    dispatch(getUser());
    dispatch(fetchProjects({}));
  }, [auth.jwt]);
  console.log(auth);
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <>
        {auth.user ? (
          <div>
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
          </div>
        ) : (
          <Auth />
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
