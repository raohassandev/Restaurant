import "./registration_form.scss";

import { Box, Button, Input, Row, Text } from "components";

import { Link } from "react-router-dom";
import { useState } from "react";

interface Props {
  onSubmit: (data: RegisterData) => void;
}
export const RegistrationForm = ({ onSubmit }: Props) => {
  const [state, setState] = useState<RegisterData>({ name: "", email: "", password: "" });

  return (
    <Box horizontal="center" className="register_container">
      <Text variant="h1" className="title">
        Register
      </Text>
      <Input
        type={"text"}
        label="Full name"
        value={state.name}
        onChange={(text: string): void => {
          setState({ ...state, name: text });
        }}
      />
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
      <Row fullWidth horizontal="center" className="login_link">
        <Text>Already hava an account?&nbsp; </Text>
        <Link to="/login">
          <Text className="text-primary h6">Login</Text>
        </Link>
      </Row>
      <Button label="Register" onClick={() => onSubmit(state)} />
    </Box>
  );
};
