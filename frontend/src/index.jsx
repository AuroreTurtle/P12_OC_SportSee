import React from "react";
import ReactDOM from "react-dom/client";

/* Import components and page. */
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import UserHome from "./pages/UserHome/UserHome";

// Import global CSS
import "./style/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Header />
        <Aside />
        <UserHome />
    </React.StrictMode>
);
