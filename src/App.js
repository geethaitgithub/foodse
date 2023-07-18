import "./App.css";
import Body from "./components/Body";
import About from "./components/About";
import { Provider } from "react-redux";
import store from "./utils/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import MainLayout from "./components/MainLayout";
import Cart from "./components/Cart";
import Contact from "./components/Contact";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/foodse",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/home",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: "/spiderman",
        element: <Contact />,
        errorElement: <Error />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
};

export default App;
