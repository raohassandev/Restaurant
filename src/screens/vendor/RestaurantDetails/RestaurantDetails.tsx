import { AppDispatch, RootState } from "types/store";
import { Box, ModelButton, Row, Text } from "components";
import { CategoryCard, CategoryForm, DishForm } from "screens/components";
import { addDishCategoryThunkAction, getDishCategoriesByRestaurantThunkAction } from "store";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

// import BootStrapModal from "bootstrap/js/dist/modal";

export const RestaurantDetails = () => {
  const dispatch: AppDispatch = useDispatch();
  const { restaurant, categories } = useSelector((s: RootState) => ({
    categories: s.dishCategory.dishCategories,
    restaurant: s.restaurant.currentRestaurant,
  }));

  const submitCategory = async (data: FormData) => {
    try {
      await dispatch(addDishCategoryThunkAction(data));
    } catch (error) {
      console.log(error);
    }
  };
  const submitDish = (category: Category) => {
    // console.log(category);
  };
  useEffect(() => {
    (async () => {
      if (restaurant) {
        await dispatch(getDishCategoriesByRestaurantThunkAction(restaurant.id));
      } else {
        alert("No restaurant selected");
      }
    })();
  }, [dispatch, restaurant]);

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

      {categories &&
        categories.map((cat) => (
          <CategoryCard
            key={cat.id}
            category={cat}
            onSelect={(c) => {
              console.log(c);
            }}
          />
        ))}
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
