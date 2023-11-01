import {
  Dashboard,
  FoodCard,
  Login,
  Register,
  RestaurantDetails,
  Restaurants,
  VendorOrders,
  VendorProfile,
} from "screens";
import { Navigate, Route, Routes } from "react-router-dom";

import { RootState } from "types/store";
import { useSelector } from "react-redux";

export const routeNames = {
  home: "/",
  auth: {
    login: "/login",
    register: "/register",
  },
  vendor: {
    dashboard: "/dashboard",
    restaurant: "/restaurant",
    restaurantDetails: "/restaurantdetail",
    vendorOrder: "/vendororder",
    vendorProfile: "/vendorprofile",
  },
  buyer: {
    foodcard: "/foodcard",
  },
};

export const AppRouter = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  if (!user) {
    return (
      <div>
        <Routes>
          <Route path={routeNames.home} element={<Navigate to={routeNames.auth.login} />} />
          <Route path={routeNames.auth.login} element={<Login />} />
          <Route path={routeNames.auth.register} element={<Register />} />
        </Routes>
      </div>
    );
  }

  if (user && user.isVendor) {
    return (
      <div>
        <Routes>
          <Route path={routeNames.home} element={<Navigate to={routeNames.vendor.restaurant} />} />
          <Route path={routeNames.vendor.dashboard} element={<Dashboard />} />
          <Route path={routeNames.vendor.restaurant} element={<Restaurants />} />
          <Route path={routeNames.vendor.restaurantDetails} element={<RestaurantDetails />} />
          <Route path={routeNames.vendor.vendorOrder} element={<VendorOrders />} />
          <Route path={routeNames.vendor.vendorProfile} element={<VendorProfile />} />
        </Routes>
      </div>
    );
  }

  return (
    <div>
      <Routes>
        <Route path={routeNames.home} element={<Navigate to={routeNames.buyer.foodcard} />} />
        <Route path={routeNames.buyer.foodcard} element={<FoodCard />} />
      </Routes>
    </div>
  );
};
