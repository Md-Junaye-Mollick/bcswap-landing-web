import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/home-page";
import PrivacyPolicyPage from "./pages/privacy-policy-page";
import TermsServicesPage from "./pages/terms-services-page";
import Layout from "./components/layout";
import ScrollToTop from "./components/scroll-to-top";
import ContactUsPage from "./pages/contact-us-page";
import Login from "./pages/Login/Login";
import Kyc from "./pages/Kyc/Kyc";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms-services" element={<TermsServicesPage />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="Login" element={<Login />} />
          <Route path="Kyc" element={<Kyc />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;