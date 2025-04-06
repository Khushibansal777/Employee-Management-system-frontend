import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";
import { useState, useEffect } from "react";

const AdminDashboard = (props) => {
  // console.log("Taken from app", props.authData.employees);
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employees"))
  );

  useEffect(() => {
    const updateEmployees = () => {
      const storedEmployees = JSON.parse(localStorage.getItem("employees"));

      setEmployees(storedEmployees);
    };

    window.addEventListener("storage", updateEmployees);
    return () => window.removeEventListener("storage", updateEmployees);
  }, []);
  return (
    <div className="h-screen w-full p-7">
      <Header changeUser={props.changeUser} user={props.user} />
      <CreateTask setEmployees={setEmployees} employees={employees} />
      <AllTask authData={employees} />
    </div>
  );
};

export default AdminDashboard;
