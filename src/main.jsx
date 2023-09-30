import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1029525243995-qh4m024diaqn03muanutolp5mhjasqbp.apps.googleusercontent.com">
      <App />
      <ToastContainer />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
