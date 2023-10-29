import { Box, Button, Icon, Input, Text } from "components";
import React from "react";
import { LoginForm } from "screens/components";

export const Login = () => {
  const handleClick = () => console.log("Button Clicked");
  return (
    <Box
      horizontalArrangement="center"
      fullHeight
      // verticalArrangement="space-between"
      // style={{ backgroundColor: "lightblue" }}
    >
      <Text variant="h1">Login</Text>

      <LoginForm />
    </Box>
  );
};
