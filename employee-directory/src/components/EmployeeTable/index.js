import React from "react";
import "./style.css";

function EmployeeTable(props) {

  

  return (
  
   <tbody>
    <tr>
      <td>{props.name}</td>
      <td>{props.lastname}</td>
      <td>{props.department}</td>
      <td>{props.ocupation}</td>
      <td>{props.location}</td>
    </tr>   
    </tbody>
  );
}

export default EmployeeTable;
