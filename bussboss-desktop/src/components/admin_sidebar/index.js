import logo from "./logo.png";
import { useNavigate } from "react-router-dom";

const AdminSidebar = (props) => {
  const navigate = useNavigate();

  const goDrivers = () => {
    navigate("/admin_panel/drivers");
  };

  const goPassengers = () => {
    navigate("/admin_panel");
  };

  return (
    <div class="side-panel">
      <img class="logo" src={logo} alt="logo"></img>
      <div class="passenger-btn" id="users-btn" onClick={goPassengers}>
        Passengers
      </div>
      <div class="driver-btn" id="users-btn" onClick={goDrivers}>
        Drivers
      </div>
    </div>
  );
};

export default AdminSidebar;
