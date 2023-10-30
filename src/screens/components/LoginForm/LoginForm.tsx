import "./login_form.scss";

import { Box, Button, Input, Row, Text } from "components";

import { Link } from "react-router-dom";
import { useState } from "react";

interface Props {
  onSubmit: (data: LoginData) => void;
}
export const LoginForm = ({ onSubmit }: Props) => {
  const [state, setState] = useState<LoginData>({ email: "", password: "" });

  return (
    <Box horizontal="center" className="login_container">
      <Text variant="h1" className="title">
        Login
      </Text>
      <Input
        type={"email"}
        label="Email"
        value={state.email}
        onChange={(text: string): void => {
          setState({ ...state, email: text });
        }}
      />
      <Input
        type={"password"}
        label="Password"
        value={state.password}
        onChange={(text: string): void => {
          setState({ ...state, password: text });
        }}
      />
      <Row fullWidth horizontal="center" className="register_link">
        <Text>Not hava an account?&nbsp; </Text>
        <Link to="/register">
          <Text className="text-primary h6">Register</Text>
        </Link>
      </Row>
      <Button label="Login" onClick={() => onSubmit(state)} />
    </Box>
  );
};
