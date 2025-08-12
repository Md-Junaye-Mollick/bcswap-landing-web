import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/home-page";
import PrivacyPolicyPage from "./pages/privacy-policy-page";
import TermsServicesPage from "./pages/terms-services-page";
import Layout from "./components/layout";
import ScrollToTop from "./components/scroll-to-top";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms-services" element={<TermsServicesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
