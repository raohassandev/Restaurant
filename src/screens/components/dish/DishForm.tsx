import { Box, Button, Dropdown, Input, Text } from "components";
import { useEffect, useState } from "react";

import React from "react";
import { RootState } from "types/store";
import { useSelector } from "react-redux";

interface Props {
  dish?: Dish;
  onSubmit: (category: Dish) => void;
}

export const DishForm = ({ dish, onSubmit }: Props) => {
  const { currentRestaurant }: RestaurantSlice = useSelector((state: RootState) => state.restaurant);

  const [newDish, setNewDish] = useState<Dish>({
    id: "",
    categoryId: "",
    vendorId: "",
    restaurantId: "",
    name: "",
    desc: "",
    price: 0,
    time: "",
    imageUrl: "",
  });

  useEffect(() => {
    if (dish) setNewDish(dish);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = () => {
    try {
      console.log(newDish);
      onSubmit(newDish);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box horizontal="center">
      <Text className="h1 text-primary">Add Dish</Text>
      <Input
        type="text"
        value={newDish.name}
        label="Dish name"
        onChange={function (text: string): void {
          setNewDish({ ...newDish, name: text });
        }}
      />
      <Input
        type="text"
        value={newDish.desc}
        label="Dish description"
        onChange={function (text: string): void {
          setNewDish({ ...newDish, desc: text });
        }}
      />
      <Input
        type="number"
        value={`${newDish.price}`}
        label="Dish Price"
        onChange={function (text: string): void {
          setNewDish({ ...newDish, desc: text });
        }}
      />
      <Input
        type="text"
        value={`${newDish.categoryId}`}
        label="Select Category"
        onChange={function (text: string): void {
          setNewDish({ ...newDish, desc: text });
        }}
      />
      <Dropdown />
      <Input
        type="file"
        value={newDish.imageUrl}
        label="Select thumbnail image"
        onChange={function (text: string): void {
          setNewDish({ ...newDish, imageUrl: text });
        }}
      />
      <Button label="Add Dish" onClick={handleSubmit} />
    </Box>
  );
};
