import React from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
const EmployeeDashboard = (props) => {
  return (
    <div className="p-10  bg-[#1c1c1c] h-screen">
      <Header
        changeUser={props.changeUser}
        data={props.data}
        user={props.user}
      />
      <TaskListNumbers data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
