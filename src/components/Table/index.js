import React, {useState}from "react";
//import employees from "./src/employees.json";

function Table(state) {

  const[sortid, setSortid]=useState("id");
  const[employees, setEmployees]=useState("employees");
  //const[employees, setEmployees]=useState(employees)
  const sortBy = event => {
  setSortid(event.target.id);
  setEmployees(event.target.id);
  console.log (sortid);
  console.log (employees);
  console.log(setEmployees);
  
  //sorting employees 
 // const sortedList = [...employees].sort((a,b)=> (a.sortid > b.sortid ? 1 : a.sortid < b.sortid ? -1 : 0))
  


    
  }


  return (
     
 <thead>
      <h2>Ordenado por {sortid}</h2>
      <tr>
      <th><span onClick={sortBy} id="name" >First Name</span></th>
      <th><span onClick={sortBy} id="lastname" >Last Name</span></th>
      <th><span onClick={sortBy} id="department">Department</span></th>
      <th><span onClick={sortBy} id="ocupation">Ocupation</span></th>
      <th><span onClick={sortBy} id="location">Location</span></th>  
    </tr>
    </thead>
  
    
  );
}

export default Table;



        
      