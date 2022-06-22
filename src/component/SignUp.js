import React, { useState } from 'react'


import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  // initial,
} from "@material-ui/core";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";



const SignUp = () => {
  const formStyle = { padding: '30px 20px', height: '70vh', width:350, margin: '20px auto' }
  const avatarStyle = { backgroundColor: "22b07a" };
  const headerStyle = { margin: 0 }
  const marginTop = { marginTop: 5 }
  const btnTop={marginTop: 32}

  const [name, setName]=useState("")
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [gender, setGender] = useState("");
  
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log('name', name);
    console.log('password', password);
    console.log('mail', mail)
    console.log('phonenumber', phonenumber);
    console.log("confirmpassword", confirmpassword);
    console.log('gender',gender)
  }
  let handleSignup = {
    
  }
  
  
  return (
    <Grid>
      <Paper elevation={20} style={formStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
        </Grid>
        <form action="" onSubmit={handleSubmit}>
          <TextField
            label="Name"
            placeholder="Enter your name"
            fullWidth
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            label="Email"
            value={mail}
            onChange={e => setEmail(e.target.value)}
            fullWidth
            required
          />
          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              style={{ display: "initial" }}
              value={gender}
              onChange={e=> setGender(e.target.value)}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>

          <TextField
            label="Phone Number"
            value={phonenumber}
            fullWidth
            onChange={e => setPhonenumber(e.target.value)}
          />
          <TextField
            label="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            fullWidth
          />
          <TextField
            label="confirm Password"
            value={confirmpassword}
            onChange={e => setConfirmpassword(e.target.value)}
            fullWidth
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the term and conditions"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={btnTop}
            onClick={handleSignup}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}

export default SignUp
