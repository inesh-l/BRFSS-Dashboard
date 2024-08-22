import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { getOrUploadFile } from "./lib/llm/gemini-functions.js";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
