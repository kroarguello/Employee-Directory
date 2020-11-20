import React from "react"
import Table from "./components/Table";
import employees from "./employees.json";

function OrderBy(props){
    const {sortid, employees} = props;

    console.log(sortid);
    console.log(props);

}

export default OrderBy;