import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import providers
import { Providers } from "./lib/Providers.jsx";

createRoot(document.getElementById("root")).render(
  <Providers>
    <App />
  </Providers>
);
