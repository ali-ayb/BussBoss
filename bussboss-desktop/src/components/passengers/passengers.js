import UseHttp from "../../hooks/http-hook";

const Tr = (props) => {
  const formData = new FormData();
  const deletePassenger = async (passeger_id) => {
    formData.append("id", passeger_id);
    const data = await UseHttp("delete_user", "POST", formData, {
      Authorization: "Bearer " + localStorage.getItem("token"),
    });
  };
  return (
    <tr>
      <td>{props.data.first_name}</td>
      <td>{props.data.last_name}</td>
      <td>{props.data.email}</td>
      <td>{props.data.total_trips}</td>
      <td>{props.data.total_paid}</td>
      <td>
        <div
          className="delete_btn"
          onClick={() => deletePassenger(props.data.passenger_id)}>
          Delete
        </div>
      </td>
    </tr>
  );
};
export default Tr;
