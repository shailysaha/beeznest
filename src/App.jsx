import { Route, Routes } from "react-router-dom";
// Import the LanguageProvider (Make sure the path matches where your file is)
import { LanguageProvider } from "./context/LanguageContext"; 

import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import { Login, Signup } from "./pages/Auth";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    // Wrap the entire application structure with LanguageProvider
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/pricing" element={<Pricing />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Catch-all must be LAST */}
        <Route path="*" element={<Home />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;