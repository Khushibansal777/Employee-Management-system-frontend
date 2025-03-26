import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = ({ data, task_numbers, userName }) => {
  const [isAccepted, setIsAccepted] = useState(false);

  const authData = useContext(AuthContext);
  let employees = authData.userData.employees;
  let setUserData = authData.updateUserData;

  const updateLocalStorageAndContext = (updatedEmployees) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      employees: updatedEmployees,
    }));
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    console.log(updatedEmployees);
  };
  const handleAcceptClick = () => {
    setIsAccepted(true); // Disable button after click
    //task_numbers.active += 1;
    //task_numbers.newtask -= 1;
    // console.log(task_numbers);
    const updatedEmployees = employees.map((emp) => {
      if (emp.firstname === userName) {
        return {
          ...emp,
          tasks: emp.tasks.map((task) =>
            task.task_title === data.task_title
              ? { ...task, active: true, newtask: false }
              : task
          ),
          task_numbers: {
            ...emp.task_numbers,
            active: emp.task_numbers.active + 1,
            newtask: Math.max(emp.task_numbers.newtask - 1, 0),
            //newtask: emp.task_numbers.newtask - 1,
          },
        };
      }
      return emp;
    });

    updateLocalStorageAndContext(updatedEmployees);
    authData.userData.employees = JSON.parse(localStorage.getItem("employees"));
  };
  return (
    <div className="flex-shrink-0 bg-green-400 h-full w-[350px] rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm">
          {" "}
          {data.task_category}
        </h3>
        <h4 className="text-sm">{data.task_date}</h4>
      </div>
      <h2 className="text-2xl font-semibold mt-5"> {data.task_title}</h2>
      <p className="text-sm mt-2">{data.task_description}</p>
      <div className="mt-4">
        <button
          className={`px-2 py-1 text-sm ${
            isAccepted
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-700"
          }`}
          onClick={handleAcceptClick}
          disabled={isAccepted} // Disable button
        >
          {isAccepted ? "Accepted" : "Accept Task"}
        </button>
      </div>
    </div>
  );
};

export default NewTask;
