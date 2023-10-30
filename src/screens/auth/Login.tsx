import { Box } from "components";
import { LoginForm } from "screens/components";

export const Login = () => {
  const handleClick = (data: LoginData) => console.log(data);
  return (
    <Box horizontal="center" fullHeight>
      <LoginForm onSubmit={handleClick} />
    </Box>
  );
};
