import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../pages/(auth)/layout";
import SignupPage from "../pages/(auth)/signup";
import LoginPage from "../pages/(auth)/login";
import HomePage from "../pages/(main)/home";
import ProtectedRoute from "./protected-route";

export default function Router() {
  const routes = createBrowserRouter([
    {
      path: "auth",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "signup",
          element: <SignupPage />,
        },
      ],
    },
    {
      path: "/",
      element: <ProtectedRoute children={<HomePage />} />,
    },
  ]);

  return <RouterProvider router={routes} />;
}
