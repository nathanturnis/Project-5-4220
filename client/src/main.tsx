import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Layout.tsx";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import ForSaleTabs from "./components/for-sale/ForSaleTabs.tsx";
import HousingTabs from "./components/housing/HousingTabs.tsx";
import ServicesTabs from "./components/services/ServicesTabs.tsx";
import JobsTabs from "./components/jobs/JobsTabs.tsx";
import CommunityTabs from "./components/community/CommunityTabs.tsx";
import JobsForm from "./components/jobs/JobsForm.tsx";
import CarsForm from "./components/for-sale/CarsForm.tsx";
import MotorcyclesForm from "./components/for-sale/MotorcyclesForm.tsx";
import BoatsForm from "./components/for-sale/BoatsForm.tsx";
import BooksForm from "./components/for-sale/BooksForm.tsx";
import FurnitureForm from "./components/for-sale/FurnitureForm.tsx";
import ApartmentHouseForm from "./components/housing/ApartmentHouseForm.tsx";
import CommercialPropertyForm from "./components/housing/CommercialPropertyForm.tsx";
import ServiceForm from "./components/services/ServicesForm.tsx";
import CommunityForm from "./components/community/CommunityForm.tsx";
import LoginForm from "./components/Login.tsx";
import RegisterForm from "./components/Register.tsx";
import { AuthProvider } from "./components/AuthContext.tsx";

const theme = createTheme({
  defaultRadius: "md",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<ForSaleTabs />} />
              <Route path="/new-car" element={<CarsForm />} />
              <Route path="/new-motorcycle" element={<MotorcyclesForm />} />
              <Route path="/new-boat" element={<BoatsForm />} />
              <Route path="/new-book" element={<BooksForm />} />
              <Route path="/new-furniture" element={<FurnitureForm />} />

              <Route path="/housing" element={<HousingTabs />} />
              <Route
                path="/housing/new-apt-house"
                element={<ApartmentHouseForm />}
              />
              <Route
                path="/housing/new-commercial"
                element={<CommercialPropertyForm />}
              />

              <Route path="/services" element={<ServicesTabs />} />
              <Route path="/services/new" element={<ServiceForm />} />

              <Route path="/jobs" element={<JobsTabs />} />
              <Route path="/community" element={<CommunityTabs />} />
              <Route path="/community/new" element={<CommunityForm />} />

              <Route path="/jobs/new-job" element={<JobsForm />} />
            </Route>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </MantineProvider>
  </StrictMode>
);
