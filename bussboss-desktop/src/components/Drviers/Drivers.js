import UseHttp from "../../hooks/http-hook";

const Tr = (props) => {
  console.log(props);
  const formData = new FormData();
  const deleteDriver = async (driver_id) => {
    formData.append("id", driver_id);
    const data = await UseHttp("delete_user", "POST", formData, {
      Authorization: "Bearer " + localStorage.getItem("token"),
    });
  };
  const approveDriver = async (driver_id) => {
    formData.append("id", driver_id);
    const data = await UseHttp("approve_driver", "POST", formData, {
      Authorization: "Bearer " + localStorage.getItem("token"),
    });
  };
  return (
    <tr>
      <td>{props.data.first_name}</td>
      <td>{props.data.last_name}</td>
      <td>{props.data.email}</td>
      <td>{props.data.total_trips}</td>
      <td>{props.data.total_earned}</td>
      <td className="btn_container">
        <div
          className="delete_btn"
          onClick={() => deleteDriver(props.data.driver_id)}>
          Delete
        </div>
        {props.data.is_approved === 0 ? (
          <div
            className="approve_btn"
            onClick={() => approveDriver(props.data.driver_id)}>
            Approve
          </div>
        ) : null}
      </td>
    </tr>
  );
};
export default Tr;
