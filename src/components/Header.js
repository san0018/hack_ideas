import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { authContext } from "../providers/AuthProvider";
import Avatar from "@mui/material/Avatar";

export default function Header() {
  const { auth, setAuthData } = useContext(authContext);

  const handleLogout = () => {
    const authData = { isAuth: false, empId: null };
    setAuthData(authData);
    sessionStorage.setItem("auth", null);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <AppBar position="static">
        <Toolbar>
          <div style={{ paddingRight: 10 }}>
            <Avatar sx={{ bgcolor: "#42a5f5" }}>
              {(auth.empId[0] + auth.empId[1]).toUpperCase()}
            </Avatar>
          </div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome,{auth.empId}
          </Typography>
          <Button color="inherit" onClick={() => handleLogout()}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
