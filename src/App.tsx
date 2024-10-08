import Home from "./Home";
import Login from "./Login/components/login";
import Items from "./Menu";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "./Login/components/signup";
import Cart from "./Menu/components/cart";
import OrderSummary from "./Order/components/orderSummary";

// Define your routes using `createBrowserRouter`
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404 Found</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/menu",
    element: <Items />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/order/:orderId",
    element: <OrderSummary />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
