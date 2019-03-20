import React from "react";
import ReactDOM from "react-dom";
// Images
import lena from "./assets/images/Lenna.png";
// Styles
import "./styles/app.scss";

ReactDOM.render(
    <>
        <div className="starter">
            <span>Webpack app</span>
            <i className="fab fa-react" />
        </div>
        <img src={lena} />
        <div className="apple" />
    </>,
    document.getElementById("root")
);
