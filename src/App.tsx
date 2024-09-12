import Home from "./Home";
import Login from "./Login";
import Items from "./Menu";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { createBrowserRouter } from "react-router-dom";

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
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
