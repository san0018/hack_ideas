import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { authContext } from "../../providers/AuthProvider";

function LoginPage() {
  const [empId, setEmpId] = useState("");
  const helperText = "Please enter atleast three characters";
  const [showError, setShowError] = useState(false);
  let navigate = useNavigate();

  const { setAuthData } = useContext(authContext);

  const handleChange = (event) => {
    const newEmpId = event.target.value;
    setEmpId(newEmpId);
    if (newEmpId.length < 3 && showError === false) {
      setShowError(true);
    } else if (newEmpId.length >= 3 && showError === true) {
      setShowError(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const authData = { isAuth: true, empId: empId };
    setAuthData(authData);
    sessionStorage.setItem("auth", JSON.stringify(authData));
    setEmpId("");
    navigate("/");
  };
  return (
    <div className="loginContainer">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>Hack Ideas</h2>
          <p>Please enter your Employee Id to Login !</p>
          <span className="textField">
            <TextField
              id="outlined-basic"
              label="Employee Id"
              variant="outlined"
              value={empId}
              onChange={handleChange}
              error={showError}
              helperText={showError ? helperText : null}
              inputProps={{
                type: "text",
                maxLength: "5",
              }}
            />
          </span>
          <span>
            <Button
              variant="contained"
              disabled={empId.length < 2 ? true : false}
              type="submit"
            >
              Log In
            </Button>
          </span>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
