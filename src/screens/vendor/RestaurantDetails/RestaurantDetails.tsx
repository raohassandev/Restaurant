import { Box, ModelButton, Row, Text } from "components";
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
          <ModelButton label="Add Dish" target="#dishModal">
            <DishForm onSubmit={submitDish} />
          </ModelButton>
        </Box>
        <Box>
          <ModelButton label="Add Category" target="#categoryModal">
            <CategoryForm onSubmit={submitCategory} />
          </ModelButton>
        </Box>
      </Row>
    </Box>
  );
};

/**
 imtaz 9129
 petrol 2000
 daraz 1299
 daraz 1799
 medicin 1954
 medicin  7029
 petrol  2000
 */
///Osama khan karachi
