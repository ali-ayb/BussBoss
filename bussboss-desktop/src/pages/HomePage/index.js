import Adminheader from "../../components/admin_header";
import AdminSidebar from "../../components/admin_sidebar";
import UsersTable from "../../components/users_table";
import UseHttp from "../../hooks/http-hook";
import { useEffect, useState } from "react";

const HomePage = () => {
  return (
    <body>
      <AdminSidebar />

      <Adminheader />
      <div className="container2">
        <div className="content">
          <h1 className="content-title" id="content-title">
            Passengers
          </h1>
          <UsersTable />
        </div>
      </div>
    </body>
  );
};

export default HomePage;
