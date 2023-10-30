import { Box } from "components";
import { RegistrationForm } from "screens/components";

export const Register = () => {
  const handleClick = (data: RegisterData) => console.log(data);

  return (
    <Box horizontal="center" fullHeight>
      <RegistrationForm onSubmit={handleClick} />
    </Box>
  );
};
