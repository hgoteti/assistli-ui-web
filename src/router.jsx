import { createBrowserRouter } from "react-router-dom"
import AuthPage from "./pages/auth/AuthPage"
import DashboardLayout from "./components/layout/DashboardLayout"
import Dashboard from "./pages/dashboard/Dashboard"
import MyTickets from "./pages/dashboard/MyTickets"
import AllTickets from "./pages/dashboard/AllTickets"
import MyTeam from "./pages/dashboard/MyTeam"
import Users from "./pages/dashboard/Users"
import Settings from "./pages/dashboard/Settings"

export const router = createBrowserRouter([
  {
    path: "/auth/*",
    element: <AuthPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "my-tickets",
        element: <MyTickets />,
      },
      {
        path: "all-tickets",
        element: <AllTickets />,
      },
      {
        path: "my-team",
        element: <MyTeam />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]) 