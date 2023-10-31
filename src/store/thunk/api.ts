export const axiosConfig = (token?: string, formData?: boolean) => ({
  headers: token
    ? {
        "Content-Type": formData ? "multipart/form-data" : "application/json",
        Authorization: `Bearer ${token}`,
      }
    : {
        "Content-Type": "application/json",
      },
});
const baseUrl = "http://localhost:4000/api/";
export const endPoints = {
  ///Authentication
  login: baseUrl + "login",
  register: baseUrl + "register",
  ///Restaurants
  addRestaurant: baseUrl + "addRestaurant",
  updateRestaurant: baseUrl + "updateRestaurant",
  getRestaurants: baseUrl + "getRestaurants",
  getRestaurantByVendor: baseUrl + "getVendorRestaurants",
  getRestaurantById: baseUrl + "getRestaurantById",
  deleteRestaurant: baseUrl + "deleteRestaurant",
  ///Dish Category
  addDishCategory: baseUrl + "addDishCategory",
  updateDishCategory: baseUrl + "updateDishCategory",
  getDishCategories: baseUrl + "getDishCategories",
  getVendorDishCategories: baseUrl + "getVendorDishCategories",
  getRestaurantDishCategories: baseUrl + "getRestaurantDishCategories",
  getDishCategoryById: baseUrl + "getDishCategoryById",
  deleteDishCategory: baseUrl + "deleteDishCategory",
  ///Dish
  addDish: baseUrl + "addDish",
  updateDish: baseUrl + "updateDish",
  getAllDishes: baseUrl + "getDishes",
  getVendorDishes: baseUrl + "getVendorDishes",
  getRestaurantDishes: baseUrl + "getRestaurantDishes",
  getDishById: baseUrl + "getDishById",
  deleteDish: baseUrl + "deleteDish",
  ////Order
  addOrder: baseUrl + "addOrder",
  getOrders: baseUrl + "getOrders",
  getOrderById: baseUrl + "getOrderById",
  getOrderByRestaurant: baseUrl + "getOrdersByRestaurant",
  updateOrder: baseUrl + "updateOrder",

  //Buyer
  foodCard: baseUrl + "foodcard/",
  buyerOrders: baseUrl + "ordersByBuyer/",
};

export const END_POINTS = {
  AUTH: {
    LOGIN: baseUrl + "login",
    REGISTER: baseUrl + "register",
  },
  RESTAURANT: {
    ADD_RESTAURANT: baseUrl + "addRestaurant",
    UPDATE_RESTAURANT: baseUrl + "updateRestaurant",
    GET_RESTAURANTS: baseUrl + "getRestaurants",
    GET_RESTAURANT_BY_VENDOR: baseUrl + "getVendorRestaurants",
    GET_RESTAURANT_BY_ID: baseUrl + "getRestaurantById",
    DELETE_RESTAURANT: baseUrl + "deleteRestaurant",
  },
  CATEGORY: {
    ADD_DISH_CATEGORY: baseUrl + "addDishCategory",
    UPDATE_DISH_CATEGORY: baseUrl + "updateDishCategory",
    GET_DISH_CATEGORIES: baseUrl + "getDishCategories",
    GET_VENDOR_DISH_CATEGORIES: baseUrl + "getVendorDishCategories",
    GET_RESTAURANT_DISH_CATEGORIES: baseUrl + "getRestaurantDishCategories",
    GET_DISH_CATEGORY_BY_ID: baseUrl + "getDishCategoryById",
    DELETE_DISH_CATEGORY: baseUrl + "deleteDishCategory",
  },
  DISH: {
    ADD_DISH: baseUrl + "addDish",
    UPDATE_DISH: baseUrl + "updateDish",
    GET_ALL_DISHES: baseUrl + "getDishes",
    GET_VENDOR_DISHES: baseUrl + "getVendorDishes",
    GET_RESTAURANT_DISHES: baseUrl + "getRestaurantDishes",
    GET_DISH_BY_ID: baseUrl + "getDishById",
    DELETE_DISH: baseUrl + "deleteDish",
  },
  ORDER: {
    ADD_ORDER: baseUrl + "addOrder",
    GET_ORDERS: baseUrl + "getOrders",
    GET_ORDER_BY_ID: baseUrl + "getOrderById",
    GET_ORDER_BY_RESTAURANT: baseUrl + "getOrdersByRestaurant",
    UPDATE_ORDER: baseUrl + "updateOrder",
  },
  BUYER: {
    FOOD_CARD: baseUrl + "foodcard/",
    BUYER_ORDERS: baseUrl + "ordersByBuyer",
  },
};
