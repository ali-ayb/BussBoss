import Adminheader from "../../components/admin_header";
import AdminSidebar from "../../components/admin_sidebar";
import DriversTable from "../../components/DriversTable/DriversTable";

const Drivers = () => {
  return (
    <body>
      <AdminSidebar />

      <Adminheader />
      <div className="container2">
        <div className="content">
          <h1 className="content-title" id="content-title">
            Drivers
          </h1>
          <DriversTable />
        </div>
      </div>
    </body>
  );
};

export default Drivers;
