import "./App.css";
import { useContext, useEffect } from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { Routes, Route, Navigate } from "react-router-dom";
import { authContext } from "./providers/AuthProvider";

function App() {
  const { setAuthData, auth } = useContext(authContext);
  console.log("auth in app.js", auth);
  useEffect(() => {
    let sessionAuth = JSON.parse(sessionStorage.getItem("auth"));
    //console.log("sessionauth", sessionAuth);
    if (sessionAuth != null) {
      setAuthData(sessionAuth);
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
