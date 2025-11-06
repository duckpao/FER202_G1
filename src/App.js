import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import CustomerScreen from "./pages/CustomerScreen";
import PreOrderPage from "./pages/PreOrderInfor";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<CustomerScreen />} />
        <Route path="pre-order" element={<PreOrderPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
