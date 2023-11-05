import "./restaurant.scss";

import { AppDispatch, RootState } from "types/store";
import { Box, Icon, Row, Text } from "components";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { getRestaurantsByVenodrThunkAction } from "store";
import { routeNames } from "routes";
import { useNavigate } from "react-router-dom";

export const Restaurants = () => {
  const dispatch: AppDispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const { restaurants }: RestaurantSlice = useSelector((state: RootState) => state.restaurant);
  React.useEffect(() => {
    (async () => {
      await dispatch(getRestaurantsByVenodrThunkAction(user.id));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box horizontal="center">
      <Text className="h1">Restaurants </Text>
      {restaurants ? restaurants.map((rest) => <RestaurantCard restaurant={rest} />) : <Text>No restaurant</Text>}
    </Box>
  );
};

interface Props {
  restaurant: Restaurant;
}
const RestaurantCard = ({ restaurant }: Props) => {
  const navigate = useNavigate();
  return (
    <div style={{ position: "relative" }}>
      <Row
        horizontal="center"
        wrap
        className="restaurant_card"
        onClick={() => navigate(routeNames.vendor.restaurantDetails)}>
        <Box>
          <img src={restaurant.imageUrl} alt="imageUrl" className="restaurant_img" />
        </Box>
        <Box className="restaurant_detail_container">
          <Text className="h2 name">{restaurant.name}</Text>
          <Text className="">{restaurant.desc}</Text>
          <Text className="h3">Contact</Text>
          <Row horizontal="space-between" fullWidth wrap>
            <Text className="me-3">{restaurant.contact1}</Text>
            <Text className="me-3">{restaurant.contact2}</Text>
            <Text className="me-3">{restaurant.contact3}</Text>
          </Row>
        </Box>
      </Row>
      <Box className="cp">
        <Icon
          name="edit"
          size={30}
          onClick={() => {
            console.log("edit");
            alert("Edit button clicked");
          }}
          className="icon"
        />
        <Icon name="trash" size={30} onClick={() => alert("Delete button clicked")} />
      </Box>
    </div>
  );
};

// const rest = {
//   address: "This dummy restaurant address.",
//   closingTime: "4:00 AM",
//   contact1: "+923008414254",
//   contact2: "+923008414254",
//   contact3: "+923008414254",
//   createdAt: "2023-10-31T15:39:41.000Z",
//   desc: "This dummy description.",
//   email: "vendor@gmail.com",
//   id: "820c6ac8-b0ff-45c3-9bbd-3be707cca6da",
//   imageUrl: "http://localhost:4000/uploads/1698766781419bread.png",
//   name: "Abc hotel",
//   openingTime: "2:00 AM",
//   updatedAt: "2023-10-31T15:39:41.000Z",
//   vendorId: "5AwL5dBinkNqIBbBLYhthBHpqpC3",
// };
