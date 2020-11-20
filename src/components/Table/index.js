import React, {useState} from "react";

function Table() {

  const[sortid, setSortid]=useState("id");
  const sortBy = event => {
  setSortid(event.target.id);
  console.log (sortid);
  return sortid;
  //sorting employees 
 // const sortedList = [...employees].sort((a,b)=> (a.sortid > b.sortid ? 1 : a.sortid < b.sortid ? -1 : 0))
      
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



        
      