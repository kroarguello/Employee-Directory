import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import Table from "./components/Table";


class App extends Component {
  
  
  state = {
   employees
  };

/* const employees = () => {
   const [list, setList] = useState ([employees])
 }
  useEffect(()=>{
   
    sortid = "name";

    const sortedList = [...employees].sort((a,b)=> (a.sortid > b.sortid ? 1 : a.sortid < b.sortid ? -1 : 0))
    setList(sortedList)

  },[])
*/
  
  render() {
    
    
    return (
      <Wrapper>
        <Title> Employee Directory</Title>
          
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
