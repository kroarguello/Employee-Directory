import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import Table from "./components/Table";
import SortTable from "./components/SortTable";
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };

  sortBy = id => {
console.log("ordenarpor");

    // Filter this.state.friends for friends with an id not equal to the id being removed
   // const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.friends equal to the new friends array
    //this.setState({ employees });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title> Employee Tracker</Title>
        <SortTable></SortTable>
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
