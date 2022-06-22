import {
  Avatar,
  Grid,
  Paper,
  Button,
  Typography,
 
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import { TextField } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { Link } from "react-router-dom";
import './Login.css'

const Login = () => {
  const FormStyle = {
    padding: 20,
    height: "70vh",
    width: 360,
    margin: "55px auto",
  };

  const avatarStyle = { backgroundColor: "#22b07a" };
  const AccountStyle = { margin: "20px  0" };
  return (
    <Grid>
      <Paper elevation={10} style={FormStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2> Sign In</h2>
        </Grid>
        <TextField
          label="username"
          placeholder="Enter user name"
          fullWidth
          required
        />
        <TextField
          label="password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />

        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Link to="/">
          <Button
            type="submit"
            color="primary"
            fullWidth
            variant="contained"
           
            className="btnStyle"
          >
            Sign In
          </Button>
        </Link>

        <Typography>Forgot Password ?</Typography>
        <Typography style={AccountStyle}>
          Do you have an account ?Sign Up
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
