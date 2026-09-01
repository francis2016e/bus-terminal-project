import "./App.css";
import {
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";

import TerminalsPage from "./pages/TerminalsPage";
import WarningPage from "./pages/WarningPage";
import ServicePage from "./pages/ServicePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NoticesPage from "./pages/NoticesPage";
import ManagementPage from "./pages/ManagementPage";
import TerminalDetailPage from "./pages/TerminalDetailPage";
import CommercialOpportunitiesPage from "./pages/CommercialOpportunitiesPage";
import EmploymentOpportunitiesPage from "./pages/EmploymentOpportunitiesPage";
import BusinessOpportunitiesPage from "./pages/BusinessOpportunitiesPage";

function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/terminals" element={<TerminalsPage />} />
        <Route path="/terminals/:id" element={<TerminalDetailPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        <Route path="/management" element={<ManagementPage />} />
        <Route path="/commercial-opportunities" element={<CommercialOpportunitiesPage />} />
        <Route path="/employment-opportunities" element={<EmploymentOpportunitiesPage />} />
        <Route path="/business-opportunities" element={<BusinessOpportunitiesPage />} />
        <Route path="*" element={<WarningPage />} />
      </Route>,
    ),
  );
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
