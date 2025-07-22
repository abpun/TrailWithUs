import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import App from "./App";

const container = document.getElementById("root");
if (!container) throw new Error("Root container not found");

const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
