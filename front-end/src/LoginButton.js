import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const buttonStyle = {
  background: "#8DCAFF",
  color: "black",
  fontWeight: "bold",
  fontSize: "18px",
  textAlign: "center",
  padding: "10px 35px",
  borderRadius: "5px",
}

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
      <button style={buttonStyle} onClick={() => loginWithRedirect()}>Log In</button>;
    </div>
  )
};

export default LoginButton;
