import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout.tsx";
import AuthLayout from "./layout/AuthLayout.tsx";
import About from "./pages/About/about.tsx";
import Home from "./pages/Home/home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: "", // Add a proper error element if needed
    children: [
      { index: true, element: <Navigate to="/home" replace /> }, // Redirect root to /home
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <></> },
      { path: "signup", element: <></> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
