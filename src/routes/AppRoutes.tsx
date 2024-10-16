import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Explore } from "../pages/Explore";
import { Feed } from "../pages/Feed";
import { Login } from "../pages/Login";
import { Profile } from "../pages/Profile";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/feed",
    element: <Feed />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);


export function AppRoutes() {
  return <RouterProvider router={router} />;
}
