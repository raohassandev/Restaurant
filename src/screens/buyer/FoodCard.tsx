import { AppDispatch } from "types/store";
import { Button } from "components";
import React from "react";
import { logout } from "store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const FoodCard = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  return (
    <div>
      <div>FoodCard</div>
      <Button
        label="Logout"
        onClick={async () => {
          await dispatch(logout());
          navigate("/");
        }}
      />
    </div>
  );
};
