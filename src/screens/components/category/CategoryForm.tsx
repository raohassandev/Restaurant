import { Box, Button, Input, Text } from "components";
import { useEffect, useState } from "react";

import React from "react";
import { RootState } from "types/store";
import { useSelector } from "react-redux";

interface Props {
  category?: Category;
  onSubmit: (category: Category) => void;
}
export const CategoryForm = ({ category, onSubmit }: Props) => {
  const { currentRestaurant }: RestaurantSlice = useSelector((state: RootState) => state.restaurant);

  const [cat, setCat] = useState<Category>({
    id: "",
    vendorId: "",
    restaurantId: currentRestaurant ? currentRestaurant.id : "",
    name: "",
    desc: "",
    imageUrl: "",
  });

  useEffect(() => {
    if (category) setCat(category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = () => {
    try {
      console.log(cat);
      onSubmit(cat);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box horizontal="center">
      <Text className="h1 text-primary">Add Category</Text>
      <Input
        type="text"
        value={cat.name}
        label="Category name"
        onChange={function (text: string): void {
          setCat({ ...cat, name: text });
        }}
      />
      <Input
        type="text"
        value={cat.desc}
        label="Category description"
        onChange={function (text: string): void {
          setCat({ ...cat, desc: text });
        }}
      />
      <Input
        type="file"
        value={cat.imageUrl}
        label="Select thumbnail image"
        onChange={function (text: string): void {
          setCat({ ...cat, imageUrl: text });
        }}
      />
      <Button label="Add Category" onClick={handleSubmit} />
    </Box>
  );
};
