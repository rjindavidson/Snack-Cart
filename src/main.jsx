import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import ShopPage from "./routes/shop-page";
import Home from "./routes/home";
import Cart from "./routes/cart";
import SignUpPage from "./routes/sign-up-page";
import AuthProvider from "./context/AuthContextProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products",
        element: <ShopPage />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/sign-up",
        element: <SignUpPage />
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
