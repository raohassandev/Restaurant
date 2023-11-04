import { AppDispatch, RootState } from "types/store";
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
import { useDispatch, useSelector } from "react-redux";

import { routeNames } from "./routeNames";
import { syncCurrenrtRestaurantThunkAction } from "store";
import { useEffect } from "react";

export const AppRouterComponent = () => {
  const routes = routeNames;
  // const routes = {
  //   home: "/",
  //   auth: {
  //     login: "/login",
  //     register: "/register",
  //   },
  //   vendor: {
  //     dashboard: "/dashboard",
  //     restaurant: "/restaurant",
  //     restaurantDetails: "/restaurantdetail",
  //     vendorOrder: "/vendororder",
  //     vendorProfile: "/vendorprofile",
  //   },
  //   buyer: {
  //     foodcard: "/foodcard",
  //   },
  // };
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    const sync = async () => {
      dispatch(syncCurrenrtRestaurantThunkAction());
    };
    const interval = setInterval(sync, 30000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!user) {
    return (
      <div>
        <Routes>
          <Route path={routes.home} element={<Navigate to={routes.auth.login} />} />
          <Route path={routes.auth.login} element={<Login />} />
          <Route path={routes.auth.register} element={<Register />} />
        </Routes>
      </div>
    );
  }

  if (user && user.isVendor) {
    return (
      <div>
        <Routes>
          <Route path={routes.home} element={<Navigate to={routes.vendor.restaurant} />} />
          <Route path={routes.vendor.dashboard} element={<Dashboard />} />
          <Route path={routes.vendor.restaurant} element={<Restaurants />} />
          <Route path={routes.vendor.restaurantDetails} element={<RestaurantDetails />} />
          <Route path={routes.vendor.vendorOrder} element={<VendorOrders />} />
          <Route path={routes.vendor.vendorProfile} element={<VendorProfile />} />
        </Routes>
      </div>
    );
  }

  return (
    <div>
      <Routes>
        <Route path={routes.home} element={<Navigate to={routes.buyer.foodcard} />} />
        <Route path={routes.buyer.foodcard} element={<FoodCard />} />
      </Routes>
    </div>
  );
};
