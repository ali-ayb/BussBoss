import logo from "./logo.png";
const AdminSidebar = (props) => {
  return (
    <div class="side-panel">
      <img class="logo" src={logo} alt="logo"></img>
      <div class="passenger-btn" id="users-btn">
        Passengers
      </div>
      <div class="driver-btn" id="users-btn">
        Driver
      </div>
    </div>
  );
};

export default AdminSidebar;
