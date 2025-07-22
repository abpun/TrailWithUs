import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout.tsx";
import AuthLayout from "./layout/AuthLayout.tsx";
import Home from "./pages/Home/home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: "",
    children: [{ path: "/home", element: <Home/> }],
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