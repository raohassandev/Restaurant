import { Dashboard, FoodCard, Login, Register, Restaurants, VendorOrders, VendorProfile } from "screens";
import { Navigate, Route, Routes } from "react-router-dom";

import { RootState } from "types/store";
import { useSelector } from "react-redux";

export const AppRouter = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  if (!user) {
    return (
      <div>
        <Routes>
          <Route path={rn.home} element={<Navigate to={rn.auth.login} />} />
          <Route path={rn.auth.login} element={<Login />} />
          <Route path={rn.auth.register} element={<Register />} />
        </Routes>
      </div>
    );
  }

  if (user && user.isVendor) {
    return (
      <div>
        <Routes>
          <Route path={rn.home} element={<Navigate to={rn.vendor.restaurant} />} />
          <Route path={rn.vendor.dashboard} element={<Dashboard />} />
          <Route path={rn.vendor.restaurant} element={<Restaurants />} />
          <Route path={rn.vendor.vendorOrder} element={<VendorOrders />} />
          <Route path={rn.vendor.vendorProfile} element={<VendorProfile />} />
        </Routes>
      </div>
    );
  }

  return (
    <div>
      <Routes>
        <Route path={rn.home} element={<Navigate to={rn.buyer.foodcard} />} />
        <Route path={rn.buyer.foodcard} element={<FoodCard />} />
      </Routes>
    </div>
  );
};

export const rn = {
  home: "/",
  auth: {
    login: "/login",
    register: "/register",
  },
  vendor: {
    dashboard: "/dashboard",
    restaurant: "/restaurant",
    vendorOrder: "/vendororder",
    vendorProfile: "/vendorprofile",
  },
  buyer: {
    foodcard: "/foodcard",
  },
};
