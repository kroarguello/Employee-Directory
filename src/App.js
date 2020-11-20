import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import Table from "./components/Table";
//import SortBy from "./components/OrderBy";


class App extends Component {
  
  
  state = {
   employees
  };

  
 
  render() {
    
    
    return (
      <Wrapper>
        <Title> Employee Directory</Title>
        <h2>Sort By ..</h2>
     
        <table className="table">
        <Table></Table>
         



        {this.state.employees.map(employee => (
          <EmployeeTable
            removeEmployee={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            lastname={employee.lastname}
            department={employee.department}
            ocupation={employee.ocupation}
            location={employee.location}
          />
        ))}
   
        </table>
        
      </Wrapper>
    );
  }
}

export default App;
