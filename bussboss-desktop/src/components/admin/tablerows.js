const Tr = (props) => {
  console.log(props);
  return (
    <tr>
      <td>{props.data.first_name}</td>
      <td>{props.data.last_name}</td>
      <td>{props.data.email}</td>
      <td>{props.data.total_trips}</td>
      <td>{props.data.total_earned}</td>
      <td>
        <div className="delete_btn">Delete</div>
      </td>
    </tr>
  );
};
export default Tr;
