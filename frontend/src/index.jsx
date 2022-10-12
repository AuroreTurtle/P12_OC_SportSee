import React from "react";
import ReactDOM from "react-dom/client";
import "./style/style.css";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Header />
        <Aside />
    </React.StrictMode>
);
