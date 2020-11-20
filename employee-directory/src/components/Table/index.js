import React, {useState}from "react";

//import "./style.css";

function Table() {

  const[sort, setSort]=useState("id");
  const sortBy = event => {
    setSort(event.target.id);
    console.log (sort);
  }


  return (
     
 <thead>
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



        
      