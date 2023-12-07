import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoinPage from "./pages/CoinPage";

import CurrencyContext from "./context/CurrencyContext";

const App = () => {
  return (
    <>
      <CurrencyContext>
        <div
          style={{
            backgroundColor: "#14161A",
            color: "white",
            minHeight: "100vh",
          }}>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </CurrencyContext>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/coins/:id",
        element: <CoinPage />,
      },
    ],
  },
]);

export default appRouter;
