import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "@/pages/auth/LoginPage.tsx";
import MainLayout from "@/components/layout/MainLayout.tsx";
import Dashboard from "@/components/dashboard/Dashboard.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "daily-tasks",
        element: <div>Daily Tasks</div>,
      },
      {
        path: "projects",
        element: <div>Projects</div>,
      },
      {
        path: "leaves",
        element: <div>Leaves</div>,
      },
      {
        path: "leave-comp",
        element: <div>Leave Compensation</div>,
      },
      {
        path: "wfh",
        element: <div>Work From Home</div>,
      },
      {
        path: "time-entry",
        element: <div>Time Entry</div>,
      },
      {
        path: "venue-booking",
        element: <div>Venue Booking</div>,
      },
      {
        path: "holiday",
        element: <div>Holiday</div>,
      },
      {
        path: "policies",
        element: <div>Policies</div>,
      },
    ],
  },
]);

const RootApp: React.FC = () => <RouterProvider router={router} />;

export default RootApp;
