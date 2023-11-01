import { RootState } from "types/store";
import { useSelector } from "react-redux";

export const RestaurantDetails = () => {
  const { currentRestaurant }: RestaurantSlice = useSelector((state: RootState) => state.restaurant);
  console.log(currentRestaurant);
  return (
    <div>
      <img
        src={currentRestaurant.imageUrl}
        alt="kl"
        style={{
          width: 200,
          height: 200,
          borderColor: "blue",
          borderWidth: 2,
        }}
      />
      RestaurantDetails
    </div>
  );
};
