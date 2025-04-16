import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Layout.tsx";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import ForSaleTabs from "./components/for-sale/ForSaleTabs.tsx";
import HousingTabs from "./components/housing/HousingTabs.tsx";
import ServicesTabs from "./components/services/ServicesTabs.tsx";
import JobsTabs from "./components/jobs/JobsTabs.tsx";
import CommunityTabs from "./components/community/CommunityTabs.tsx";

const theme = createTheme({
  defaultRadius: "md",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ForSaleTabs />} />
            <Route path="/housing" element={<HousingTabs />} />
            <Route path="/services" element={<ServicesTabs />} />
            <Route path="/jobs" element={<JobsTabs />} />
            <Route path="/community" element={<CommunityTabs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);
