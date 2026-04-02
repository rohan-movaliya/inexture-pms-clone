import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider
      theme={{
        primaryColor: "brand",
        colors: {
          brand: [
            "#fff6e0",
            "#ffeccc",
            "#fbd89d",
            "#f8c36a",
            "#f6b13f",
            "#f4a41f",
            "#f4a011",
            "#d98b01",
            "#c27b00",
            "#a86900",
          ],
        },
      }}
      defaultColorScheme="dark"
    >
      <App />
    </MantineProvider>
  </StrictMode>,
);
