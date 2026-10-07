import { Route, Routes } from "react-router-dom";
// Import the LanguageProvider
import { LanguageProvider } from "./context/LanguageContext"; 
// Import the new ScrollToTop component
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import { Login, Signup } from "./pages/Auth";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <LanguageProvider>
      {/* This ensures every new page starts at the top */}
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;