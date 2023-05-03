const Tr = (props)=>{
  return(
    <tr>
            <td>{props.data.id}</td>
            <td>{props.data.username}</td>
            <td>{props.data.first_name}</td>
            <td>{props.data.last_name}</td>
            <td>{props.data.is_deleted}</td>
    </tr>
  )
}
export default Tr