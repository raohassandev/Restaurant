import "./App.scss";

import { persistor, store } from "store";

import { AppRouter } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { VendorNavBar } from "components";

const Layout = () => (
  <BrowserRouter>
    <VendorNavBar />
    <AppRouter />
  </BrowserRouter>
);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout />
      </PersistGate>
    </Provider>
  );
};

export default App;
