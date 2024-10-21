import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Navbar from "./components/Navbar/Navbar";
import { useStateContext } from "./constants/ContextProvider";
import { Backdrop, CircularProgress } from "@mui/material";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const { authUser, loading } = useStateContext();
  const renderUnauthenticatedApp = () => (
    <div>
        <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
  if (loading) {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }
  const renderAuthenticatedApp = () => (
    <div>
      <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
  return (
    <div>
      <BrowserRouter>
        {authUser ? renderAuthenticatedApp() : renderUnauthenticatedApp()}
      </BrowserRouter>
    </div>
  );
}

export default App;
