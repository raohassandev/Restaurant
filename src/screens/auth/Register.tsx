import { AppDispatch } from "types/store";
import { Box } from "components";
import { RegistrationForm } from "screens/components";
import { registerThunkAction } from "store";
import { useDispatch } from "react-redux";

export const Register = () => {
  const dispatch: AppDispatch = useDispatch();
  const handleClick = async (data: RegisterData) => {
    try {
      const res = await dispatch(registerThunkAction(data));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box horizontal="center" fullHeight>
      <RegistrationForm onSubmit={handleClick} />
    </Box>
  );
};
