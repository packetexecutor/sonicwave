import { createRoot } from "react-dom/client";
import App from "./App";
import { setupHashRouting } from "./lib/setupHashRouting";
import "./index.css";
setupHashRouting();
createRoot(document.getElementById("root")!).render(<App />);
