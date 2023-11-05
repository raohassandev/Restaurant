import { Box, Button, Input, Text } from "components";
import { useEffect, useState } from "react";

import { Modal } from "components";
import { ModalProps } from "react-bootstrap";
import React from "react";
import { RootState } from "types/store";
import { useSelector } from "react-redux";

interface Props extends ModalProps {
  isVisible: boolean;
  category?: Category;
  onSubmit: (data: FormData) => void;
}

interface CategoryState extends Category {
  image?: any;
}
export const CategoryForm = (props: Props) => {
  const {isVisible, category, onSubmit } = props;
  const { currentRestaurant }: RestaurantSlice = useSelector((state: RootState) => state.restaurant);

  const [cat, setCat] = useState<CategoryState>({
    id: "",
    vendorId: currentRestaurant.vendorId,
    restaurantId: currentRestaurant ? currentRestaurant.id : "",
    name: "",
    desc: "",
    imageUrl: "",
    image: {},
  });
  useEffect(() => {
    if (category) setCat(category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = () => {
    try {
      cat.vendorId = currentRestaurant.vendorId;
      cat.restaurantId = currentRestaurant.id;

      const formData = new FormData();
      formData.append("image", cat.image);
      formData.append("name", cat.name);
      formData.append("desc", cat.desc);
      formData.append("vendorId", cat.vendorId);
      formData.append("restaurantId", cat.restaurantId);

      onSubmit(formData);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClose = () => {};

  return (
    <Modal visible={isVisible} showButtonTitle="Add Category" onHide={handleClose}>
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
          onChange={function (file): void {
            setCat({ ...cat, image: file }); // assigning image instead of image url
          }}
        />
        <Button onClick={handleSubmit}>Add Category</Button>
      </Box>
    </Modal>
  );
};
