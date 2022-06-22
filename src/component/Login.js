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
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

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
  const marginTop = { marginTop: 5 };
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
        <FormControl component="fieldset" style={marginTop}>
          <FormLabel component="legend">Role</FormLabel>
          <RadioGroup
            aria-label="role"
            name="gender"
            style={{ display: "initial" }}
            // value={gender}
            // onChange={e => setGender(e.target.value)}
          >
            <FormControlLabel value="Owner" control={<Radio />} label="Owner" />
            <FormControlLabel value="Staff" control={<Radio />} label="Staff" />

            {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
          </RadioGroup>
        </FormControl>

        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
          className="checkedB"
        />
        <Link to="/">
          <Button
            type="submit"
            color="primary"
            fullWidth
            variant="contained"
            className="btnStyle"
          >
            Auth In
          </Button>
        </Link>

        <Typography>Forgot Password ?</Typography>
        <Typography style={AccountStyle}>
          <Link to="/signup">Do you have an account ? Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
