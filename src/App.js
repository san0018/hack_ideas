import "./App.css";
import { useContext, useEffect } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { Routes, Route, Navigate } from "react-router-dom";
import { authContext } from "./providers/AuthProvider";
import { hackDataContext } from "./providers/HackDataProvider";

function App() {
  const { setAuthData, auth } = useContext(authContext);
  const { retrieveHackData } = useContext(hackDataContext);

  useEffect(() => {
    let sessionAuth = JSON.parse(sessionStorage.getItem("auth"));

    if (sessionAuth != null) {
      setAuthData(sessionAuth);
    }

    let hackDataList = JSON.parse(localStorage.getItem("hackData"));
    // console.log("hackData in app .js", hackDataList);
    if (hackDataList != null) {
      retrieveHackData(hackDataList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="appContainer">
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route
          path="/login"
          element={auth.isAuth ? <Navigate to="/" /> : <LoginPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
