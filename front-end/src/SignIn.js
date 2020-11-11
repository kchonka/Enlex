import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./signin.css"

const SignIn = (user) => {
  return(
    <div className="signInBox">
      <h1>Sign In</h1>
      <form>
        <TextField
          label="Email"
          type="email"
          value={user.email}
        />
        <br/>
        <TextField
          label="Password"
          type={"password"}
          value={user.password}
        />
        <br/>
        <br/>
        <Button
          variant="contained"
          className="signUpSubmit"
          primary={true}
          type="submit"
        >Sign In</Button>
      </form>
      <p>
        Don't have an account? <br />
        <a href="/signup">Sign Up here!</a>
      </p>
    </div>
  );
}

export default SignIn;
