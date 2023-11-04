import { AppDispatch, RootState } from "types/store";
import { Button, Text } from "components";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "store";

export const VendorProfile = () => {
  const dispatch: AppDispatch = useDispatch();
  const { user, token } = useSelector((s: RootState) => ({
    user: s.auth.user, 
    token: s.auth.token,
  }));
  return (
    <div>
      <Text className="h1">VendorProfile</Text>
      <Text className="h1">{user.fullname}</Text>
      <Text>{token}</Text>
      <Button
        variant="primary"
        onClick={async () => {
          try {
            await dispatch(logout());
          } catch (error) {
            console.log(error);
          }
        }}>
        Logout
      </Button>
    </div>
  );
};
