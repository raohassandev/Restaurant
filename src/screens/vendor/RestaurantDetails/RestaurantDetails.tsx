import { Box, Button, ModelButton, Row, Text } from "components";
import { CategoryForm, DishForm } from "screens/components";

export const RestaurantDetails = () => {

  const submitCategory = (category: Category) => {
    // console.log(category);
  };
  const submitDish = (category: Category) => {
    // console.log(category);
  };
  return (
    <Box fullWidth horizontal="center">
      <Text className="h1 text-primary">Restaurant</Text>
      <Row>
        <Box>
          <ModelButton label="Add Dish">
            <DishForm onSubmit={submitDish} />
          </ModelButton>
        </Box>
        <Box>
          <ModelButton label="Add Category">
            <CategoryForm onSubmit={submitCategory} />
          </ModelButton>
        </Box>
      </Row>
      <Button label="test" onClick={() => console.log("button clicked")} />
    </Box>
  );
};
