import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

import authSlice from "./features/authSlice";
import buyerSlice from "./features/buyerSlice";
import cartSlice from "./features/cartSlice";
import cartUiSlice from "./features/cartUISlice";
import dishCategorySlice from "./features/dishCategoySlice";
import dishSlice from "./features/dishSlice";
import orderSlice from "./features/orderSlice";
import restaurantSlice from "./features/restaurantSlice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import vendorSlice from "./features/vendorSlice";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  cart: cartSlice.reducer,
  cartUI: cartUiSlice.reducer,
  vendor: vendorSlice.reducer,
  restaurant: restaurantSlice.reducer,
  dishCategory: dishCategorySlice.reducer,
  dish: dishSlice.reducer,
  buyer: buyerSlice.reducer,
  order: orderSlice.reducer,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
// export type AppDispatch = typeof store.dispatch;