interface RestaurantSlice {
  loading: boolean;
  error: Error;
  venodr: User;
  restaurants: Restaurant[];
  currentRestaurant: Restaurant;
}
