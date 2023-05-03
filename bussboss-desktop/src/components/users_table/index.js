import Tr from "../admin/tablerows";
import UseHttp from "../../hooks/http-hook";
import { useEffect, useState } from "react";

const UsersTable = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState("");
  useEffect(() => {
    const sendRequest = async () => {
      const myData = await UseHttp("admin/list_users", "GET", "", {
        Authorization: "bearer" + token,
      });
      setData(myData.users);
      // navigate("/login")
    };
    sendRequest();
  }, []);

  return (
    <div className="table-container">
      <table>
        <thead id="thead">
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Phone Number</th>
            <th>Trips</th>
            <th>Paid</th>
          </tr>
        </thead>
        <tbody id="tbody">
          {!!data && data.map((item) => <Tr data={item} />)}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
