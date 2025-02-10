import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// create root container for rendering react components,
// served in html file with id 'root'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
