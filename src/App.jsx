import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollTop from "./components/ScrrollTop";
import Home from "./pages/Home";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import Category from "./pages/Category";
import ContactPage from "./pages/ContactPage";
import About from "./pages/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/category",
          element: <Category />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}>
        <ScrollTop />
      </RouterProvider>
    </>
  );
}

export default App;
