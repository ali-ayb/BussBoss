import { useNavigate } from "react-router-dom";
import UseHttp from "../../hooks/http-hook";

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    const data = await UseHttp("logout", "POST", "", {
      Authorization: "Bearer " + localStorage.getItem("token"),
    });
    console.log(data);
    if (data.status === "success") {
      navigate("/");
    }
  };

  return (
    <div class="container">
      <div class="navbar">
        <div class="admin_name">Hello admin</div>
        <button class="logout" onClick={handleLogoutClick}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminHeader;
