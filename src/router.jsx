import { createBrowserRouter } from "react-router-dom"
import { lazy, Suspense } from "react"
import AuthPage from "./pages/auth/AuthPage"
import DashboardLayout from "./components/layout/DashboardLayout"

// Lazy load all dashboard pages without delay
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"))
const MyTickets = lazy(() => import("./pages/dashboard/MyTickets"))
const AllTickets = lazy(() => import("./pages/dashboard/AllTickets"))
const MyTeam = lazy(() => import("./pages/dashboard/MyTeam"))
const Users = lazy(() => import("./pages/dashboard/Users"))
const Settings = lazy(() => import("./pages/dashboard/Settings"))

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