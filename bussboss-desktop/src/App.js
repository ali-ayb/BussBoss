import { Routes, Route, Router } from "react-router-dom";
import HomePage from "./pages/HomePage/index";
import DriversTable from "./pages/Drivers/Drivers";
import Login from "./components/login/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin_panel" element={<HomePage />} />
      <Route path="/admin_panel/drivers" element={<DriversTable />} />
    </Routes>
  );
}

export default App;
