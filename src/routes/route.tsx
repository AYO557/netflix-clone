import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../pages/(auth)/layout";
import SignupPage from "../pages/(auth)/signup";
import LoginPage from "../pages/(auth)/login";
import ProtectedRoute from "./protected-route";
import MainLayout from "../pages/(main)";
import HomePage from "../pages/(main)/home";
import useUser from "../hooks/useUser";
import Movie from "../pages/(main)/movie";
import Playlists from "../pages/(main)/playlist";
import PlaylistWrapper from "../contexts/playlist";

export default function Router() {
  const { getUser } = useUser();

  const user = getUser();

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
      element: <ProtectedRoute children={<MainLayout />} />,
      children: [
        {
          index: true,
          element: <ProtectedRoute children={<HomePage name={user?.name} />} />,
        },
        {
          path: "tv-shows",
          element: <ProtectedRoute children={<h1>TV Shows</h1>} />,
        },
        {
          path: "movies",
          element: <ProtectedRoute children={<h1>Movies</h1>} />,
        },
        {
          path: "new-and-popular",
          element: <ProtectedRoute children={<h1>New & Popular</h1>} />,
        },
        {
          path: "my-list",
          element: <ProtectedRoute children={<h1>My List</h1>} />,
        },
        {
          path: "playlist",
          element: <ProtectedRoute children={<Playlists />} />,
        },
        {
          path: "live",
          element: <ProtectedRoute children={<h1>Live</h1>} />,
        },
        {
          path: "bookmarks",
          element: <ProtectedRoute children={<h1>Bookmarks</h1>} />,
        },
        {
          path: "settings",
          element: <ProtectedRoute children={<h1>Settings</h1>} />,
        },
      ],
    },
    // dynamic routes
    {
      path: "/movie/:id",
      element: <ProtectedRoute children={<Movie name={user?.name} />} />,
    },
  ]);

  return <RouterProvider router={routes} />;
}
