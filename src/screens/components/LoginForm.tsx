import { Input, Button, Box } from "components";
import React, { useState } from "react";

export const LoginForm = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const handleClick = () => {
    console.log(state);
  };
  return (
    <Box horizontalArrangement="center" className="bg bg-secondary p-5 mt-3" style={{ minWidth: 300, width: 400 }}>
      <Input
        type={"email"}
        value={state.email}
        onChange={(text: string): void => {
          setState({ ...state, email: text });
        }}
      />
      <Input
        type={"password"}
        value={state.password}
        onChange={(text: string): void => {
          setState({ ...state, password: text });
        }}
      />
      <Button label="Login" onClick={handleClick} />
    </Box>
  );
};
