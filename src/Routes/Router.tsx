import { Login, Register } from "screens/auth";
import { Navigate, Route, Routes } from "react-router-dom";

// import AllFoods from "../pages/AllFoods";
// import BuyerOrders from "../pages/buyer/Order/BuyerOrders";
// import BuyerProfile from "../pages/profile/BuyerProfile";
// import Cart from "../pages/buyer/Cart/Cart";
// import Checkout from "../pages/Checkout";
// import Contact from "../pages/Contact";
// import FoodCard from "../pages/buyer/FoodCard/FoodCard";
// import FoodDetails from "../pages/vendor/FoodDetails/FoodDetails";
// import Home from "../pages/vendor/RestaurantDetails/RestaurantDetails";
// import Login from "../pages/auth/Login";
// import Register from "../pages/auth/Register";
// import { Restaurant } from "../pages/vendor/Restaurant/Restaurant";
// import VendorHome from "../pages/vendor/VendorHome/VendorHome";
// import VendorOrders from "../pages/vendor/VendorOrder/VendorOrders";
// import { getRestaurantsByVenodrThunkAction } from "../store/thunk/restaurantThunkActions";

export const AppRouter = () => {
  //   const dispatch = useDispatch();
  //   const { user } = useSelector((state) => state.auth);

  //   useEffect(() => {
  //     (async () => {
  //       await dispatch(getRestaurantsByVenodrThunkAction(user.id));
  //     })();
  //     return () => {};
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};
