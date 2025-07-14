import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./routes/route.tsx";
import PlaylistWrapper from "./contexts/playlist.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PlaylistWrapper>
      <Router />
    </PlaylistWrapper>
  </StrictMode>
);
