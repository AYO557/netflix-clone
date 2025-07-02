import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../pages/(auth)/layout";
import SignupPage from "../pages/(auth)/signup";
import LoginPage from "../pages/(auth)/login";

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
      element: <h1>Home page</h1>,
    },
  ]);

  return <RouterProvider router={routes} />;
}
