import { AppDispatch } from "types/store";
import { Box } from "components";
import { LoginForm } from "screens/components";
import { loginThunkAction } from "store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleClick = async (data: LoginData) => {
    try {
      const res = await dispatch(loginThunkAction(data));
      console.log(res);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box horizontal="center" fullHeight>
      <LoginForm onSubmit={handleClick} />
    </Box>
  );
};
