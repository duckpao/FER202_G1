import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import CustomerScreen from "./pages/CustomerScreen";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<CustomerScreen />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
