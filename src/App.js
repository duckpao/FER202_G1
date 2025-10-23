import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CustomerHeader from "./components/header/CustomerHeader";

function App() {
  return (
    <BrowserRouter>
      <CustomerHeader />
      <Routes>
        <Route path="" element={<Homepage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
