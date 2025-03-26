import React from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";
const EmployeeDashboard = (props) => {
  const authData = useContext(AuthContext);
  useEffect(() => {}, [authData.userData]);

  return (
    <div className="p-10  bg-[#1c1c1c] h-screen">
      <Header
        changeUser={props.changeUser}
        data={props.data}
        user={props.user}
      />
      {authData.userData.employees.map((e, id) => {
        if (e.firstname === props.data.firstname) {
          return <TaskListNumbers data={e} key={id} />;
        }
      })}

      <TaskList data={props.data} authData={props.authData} />
    </div>
  );
};

export default EmployeeDashboard;
