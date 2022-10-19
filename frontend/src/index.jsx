import React from "react";
import ReactDOM from "react-dom/client";

/* Import components and page. */
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Dashboard from "./pages/Dashboard/Dashboard";

// Import global CSS
import "./style/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Header />
        <Aside />
        <Dashboard />
    </React.StrictMode>
);
