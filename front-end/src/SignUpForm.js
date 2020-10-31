import React from "react";
import TextField from "@material-ui/core/TextField";

const signupstyle = {
  color: "white"
}

const SignUpForm = (user) => {
  return(
    <div style={signupstyle}>
      <h1>Sign Up</h1>
      <form style={signupstyle}>
        <TextField>
          name="username"
          floatingLabelText= "user name"
          value={user.username}
        </TextField>
      </form>
    </div>
  );
}

export default SignUpForm;
